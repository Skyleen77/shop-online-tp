"use server";

import * as z from "zod";
import { unstable_noStore as noStore } from "next/cache";
import bcrypt from "bcryptjs";

import { signIn } from "../../../../apps/auth/auth";
import { LoginSchema } from "../../schemas";
import { AuthError } from "next-auth";
import {
  getUserByEmail,
  getTwoFactorTokenByEmail,
  getTwoFactorConfirmationByUserId,
} from "@ui/queries";
import {
  sendVerificationEmail,
  sendTwoFactorEmail,
  generateVerificationToken,
  generateTwoFactorToken,
  secureClient,
  DEFAULT_LOGIN_REDIRECT,
} from "@ui/lib";

export const login = async (
  values: z.infer<typeof LoginSchema>,
  redirect = DEFAULT_LOGIN_REDIRECT,
) => {
  noStore();

  const validatedFields = LoginSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, code } = validatedFields.data;

  const existingUser = await getUserByEmail(email);

  if (!existingUser || !existingUser?.email || !existingUser?.password) {
    return { error: "Email does not exist!" };
  }

  if (!existingUser?.emailVerified) {
    const verificationToken = await generateVerificationToken(
      existingUser.email,
    );

    await sendVerificationEmail(
      verificationToken.identifier,
      verificationToken.token,
    );

    return { success: "Confirmation email sent!" };
  }

  const passwordMatch = await bcrypt.compare(password, existingUser.password);

  if (!passwordMatch) {
    return { error: "Invalid credentials!" };
  }

  if (existingUser?.isTwoFactorEnabled && existingUser?.email) {
    const twoFactorToken = await getTwoFactorTokenByEmail(existingUser.email);

    if (code) {
      if (!twoFactorToken) return { error: "Invalid code!" };

      if (twoFactorToken.token !== code) return { error: "Invalid code!" };

      const hasExpired = new Date(twoFactorToken.expires) < new Date();

      if (hasExpired) {
        await secureClient.delete(twoFactorToken._id);

        return { error: "Code has expired!" };
      }

      await secureClient.delete(twoFactorToken._id);

      const existingConfirmation = await getTwoFactorConfirmationByUserId(
        existingUser._id,
      );

      if (existingConfirmation) {
        await secureClient.delete(existingConfirmation._id);
      }

      await secureClient.create({
        _type: "two-factor-confirmation",
        user: {
          _type: "reference",
          _ref: existingUser._id,
        },
      });
    } else {
      if (twoFactorToken) {
        await secureClient.delete(twoFactorToken._id);
      }

      const newTwoFactorToken = await generateTwoFactorToken(
        existingUser.email,
      );

      await sendTwoFactorEmail(
        newTwoFactorToken.identifier,
        newTwoFactorToken.token,
      );

      return { twoFactor: true };
    }
  }

  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw error;
  }
};

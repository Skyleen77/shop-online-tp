"use client";

import { Form } from "@ui/components/form";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { useState, useTransition } from "react";
import { UserSchema } from "@/schemas";
import { Heading } from "@/components/heading";
import Link from "next/link";
import { FormInput } from "@/components/form-input";
import { FormSelect } from "@/components/form-select";
import { Button } from "@ui/components/ui/button";
import { createUser, updateUser } from "@/app/actions/users";
import { FormError } from "@ui/components/ui/form-error";
import { FormSuccess } from "@ui/components/ui/form-success";
import { useRouter } from "next/navigation";
import { logger } from "@/lib/logger";

export const FormUser = ({
  cities,
  user,
}: {
  cities: Record<string, any>[];
  user?: Record<string, any>;
}) => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const [isPending, startTransition] = useTransition();

  const defaultValues = user
    ? {
        name: user.userName,
        fname: user.userFname,
        lname: user.userLname,
        email: user.userEmail,
        phone: user.userPhone,
        password: user.userPassword,
        city: user.userCityId.toString(),
        address: user.userAdress,
        loginStatus: user.userLoginStatus.toString(),
      }
    : {
        name: "",
        fname: "",
        lname: "",
        email: "",
        phone: "",
        password: "",
        city: cities[0].id.toString(),
        address: "",
        loginStatus: "0",
      };

  const form = useForm<z.infer<typeof UserSchema>>({
    resolver: zodResolver(UserSchema),
    defaultValues,
  });

  const onSubmit = (values: z.infer<typeof UserSchema>) => {
    setError("");
    setSuccess("");

    startTransition(() => {
      if (user) {
        updateUser(user.id, values)
          .then((res) => {
            logger.info("User updated successfully, user id: " + user.id);

            setSuccess("User updared successfully");
          })
          .catch((err) => {
            logger.error("User updated failed, user id: " + user.id);
            setError(err.message);
          });
      } else {
        createUser(values)
          .then((res) => {
            logger.info("User created successfully");

            setSuccess("User created successfully");
            router.push("/users");
          })
          .catch((err) => {
            logger.error("User created failed");
            setError(err.message);
          });
      }
    });
  };

  return (
    <div className="max-w-2xl p-10 mx-auto">
      <Button className="mb-10" asChild>
        <Link href="/users">Back to users</Link>
      </Button>

      <Heading className="text-start">
        {user ? "Update" : "Create"} User
      </Heading>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <FormInput name="name" form={form} />
            <FormInput name="fname" form={form} />
            <FormInput name="lname" form={form} />
            <FormInput name="email" form={form} type="email" />
            <FormInput name="phone" form={form} type="tel" />
            <FormInput name="password" form={form} type="password" />
            <FormSelect
              name="city"
              form={form}
              options={cities.map((city) => ({
                value: city.id,
                label: city.name,
              }))}
            />
            <FormInput name="address" form={form} />
            <FormSelect
              name="loginStatus"
              form={form}
              options={[
                {
                  value: "0",
                  label: "Disconnected",
                },
                {
                  value: "1",
                  label: "Connected",
                },
              ]}
            />
          </div>

          {error ? (
            <FormError message={error} />
          ) : (
            success && <FormSuccess message={success} />
          )}

          <Button disabled={isPending} type="submit" className="w-full">
            {user ? "Update" : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

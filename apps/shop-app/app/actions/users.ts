"use server";

import { UserSchema } from "@/schemas";
import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import * as z from "zod";

export const getAllUsers = async () => {
  noStore();
  const { data: users } = await axios.get(
    process.env.BASE_API_URL + "/api/users",
  );

  return users;
};

export const getUserById = async (id: string) => {
  noStore();
  const { data: user } = await axios.get(
    process.env.BASE_API_URL + `/api/users/GET/${id}`,
  );

  return user;
};

export const createUser = async (values: z.infer<typeof UserSchema>) => {
  const formatedValues = {
    userName: values.name,
    userFname: values.fname,
    userLname: values.lname,
    userEmail: values.email,
    userPhone: values.phone,
    userPassword: values.password,
    userCityId: parseInt(values.city),
    userAdress: values.address,
    userLoginStatus: parseInt(values.loginStatus),
  };

  await axios.post(process.env.BASE_API_URL + "/api/users", formatedValues);

  revalidatePath("/users");

  return {
    success: true,
  };
};

export const deleteUser = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + `/api/users/delete/${id}`);

  revalidatePath("/users");

  return {
    success: true,
  };
};

export const updateUser = async (
  id: string,
  values: z.infer<typeof UserSchema>,
) => {
  const formatedValues = {
    id: parseInt(id),
    userName: values.name,
    userFname: values.fname,
    userLname: values.lname,
    userEmail: values.email,
    userPhone: values.phone,
    userPassword: values.password,
    userCityId: parseInt(values.city),
    userAdress: values.address,
    userLoginStatus: parseInt(values.loginStatus),
  };

  await axios.put(process.env.BASE_API_URL + `/api/users`, formatedValues);

  revalidatePath("/users");

  return {
    success: true,
  };
};

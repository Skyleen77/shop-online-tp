"use server";

import { CartSchema } from "@/schemas";
import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";
import * as z from "zod";

export const getAllCart = async () => {
  noStore();
  const { data: cart } = await axios.get(
    process.env.BASE_API_URL + "/api/cart",
  );

  return cart;
};

export const getCartById = async (id: string) => {
  noStore();
  const { data: cart } = await axios.get(
    process.env.BASE_API_URL + `/api/cart/GET/${id}`,
  );

  return cart;
};

export const deleteCart = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + `/api/cart/delete/${id}`);

  revalidatePath("/cart");

  return {
    success: true,
  };
};

export const createCart = async (values: z.infer<typeof CartSchema>) => {
  const formatedValues = {
    idUser: parseInt(values.user),
    idProduct: parseInt(values.product),
    quantity: parseInt(values.quantity),
    payed: parseInt(values.payed),
    confirmed: values.confirmed,
  };

  await axios.post(process.env.BASE_API_URL + "/api/cart", formatedValues);

  revalidatePath("/cart");

  return {
    success: true,
  };
};

export const updateCart = async (
  id: string,
  values: z.infer<typeof CartSchema>,
) => {
  const formatedValues = {
    idCart: parseInt(id),
    idUser: parseInt(values.user),
    idProduct: parseInt(values.product),
    quantity: parseInt(values.quantity),
    payed: parseInt(values.payed),
    confirmed: values.confirmed,
  };

  await axios.put(process.env.BASE_API_URL + `/api/cart`, formatedValues);

  revalidatePath("/cart");

  return {
    success: true,
  };
};

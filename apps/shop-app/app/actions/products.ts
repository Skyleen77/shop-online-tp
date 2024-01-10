"use server";

import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export const getAllProducts = async () => {
  noStore();
  const { data: products } = await axios.get(
    process.env.BASE_API_URL + "/api/products",
  );

  return products;
};

export const getProductById = async (id: string) => {
  noStore();
  const { data: products } = await axios.get(
    process.env.BASE_API_URL + `/api/products/GET/${id}`,
  );

  return products;
};

export const deleteProducts = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + `/api/products/delete/${id}`);

  revalidatePath("/products");

  return {
    success: true,
  };
};

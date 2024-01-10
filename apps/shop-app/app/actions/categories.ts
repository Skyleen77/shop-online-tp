"use server";

import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export const getAllCategories = async () => {
  noStore();
  const { data: categories } = await axios.get(
    process.env.BASE_API_URL + "/api/categories",
  );

  return categories;
};

export const getCategorieById = async (id: string) => {
  noStore();
  const { data: categories } = await axios.get(
    process.env.BASE_API_URL + `/api/categories/GET/${id}`,
  );

  return categories;
};

export const deleteCategories = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + `/api/categories/delete/${id}`);

  revalidatePath("/categories");

  return {
    success: true,
  };
};

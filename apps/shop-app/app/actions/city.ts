"use server";

import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export const getAllCity = async () => {
  noStore();
  const { data: city } = await axios.get(
    process.env.BASE_API_URL + "/api/city",
  );

  return city;
};

export const getCityById = async (id: string) => {
  noStore();
  const { data: city } = await axios.get(
    process.env.BASE_API_URL + "/api/city/GET/" + id,
  );

  return city;
};

export const deleteCity = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + "/api/city/delete/" + id);

  revalidatePath("/city");

  return {
    success: true,
  };
};

"use server";

import axios from "axios";
import { unstable_noStore as noStore, revalidatePath } from "next/cache";

export const getAllCountry = async () => {
  noStore();
  const { data: country } = await axios.get(
    process.env.BASE_API_URL + "/api/country",
  );

  return country;
};

export const getCountryById = async (id: string) => {
  noStore();
  const { data: country } = await axios.get(
    process.env.BASE_API_URL + "/api/country/GET/" + id,
  );

  return country;
};

export const deleteCountry = async (id: string) => {
  await axios.delete(process.env.BASE_API_URL + "/api/country/delete/" + id);

  revalidatePath("/country");

  return {
    success: true,
  };
};

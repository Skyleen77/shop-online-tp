import { getAllCity } from "@/app/actions/city";
import { FormUser } from "@/components/form-user";

export default async function Create() {
  const datas = await getAllCity();

  return <FormUser cities={datas} />;
}

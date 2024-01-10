import { getAllCity } from "@/app/actions/city";
import { getUserById } from "@/app/actions/users";
import { FormUser } from "@/components/form-user";

const UpdateUser = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const datas = await getAllCity();
  const user = await getUserById(id);

  return <FormUser cities={datas} user={user} />;
};

export default UpdateUser;

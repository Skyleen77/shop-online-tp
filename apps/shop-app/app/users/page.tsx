import { TableDB } from "@/components/table-db";
import { deleteUser, getAllUsers } from "../actions/users";
import { logger } from "@/lib/logger";

const Users = async () => {
  const datas = await getAllUsers();
  logger.info("Get all users");

  return (
    <TableDB
      title="Users"
      datas={datas}
      path="users"
      deleteAction={deleteUser}
    />
  );
};

export default Users;

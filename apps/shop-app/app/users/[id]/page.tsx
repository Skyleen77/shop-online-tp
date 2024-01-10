import { getUserById } from "@/app/actions/users";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";
import { useEffect } from "react";

const GetUser = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const user = await getUserById(id);
  logger.info("Get user " + JSON.stringify(user));

  return (
    <Get
      title="Get User"
      data={user}
      backTitle="Back to users"
      backHref="/users"
    />
  );
};

export default GetUser;

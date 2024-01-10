import { TableDB } from "@/components/table-db";
import { logger } from "@/lib/logger";
import { deleteCountry, getAllCountry } from "../actions/country";

const Country = async () => {
  const datas = await getAllCountry();
  logger.info("Get all country");

  return (
    <TableDB
      idKey="code"
      title="Country"
      datas={datas.slice(0, 100)}
      path="country"
      deleteAction={deleteCountry}
    />
  );
};

export default Country;

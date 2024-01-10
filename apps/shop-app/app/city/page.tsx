import { TableDB } from "@/components/table-db";
import { logger } from "@/lib/logger";
import { deleteCity, getAllCity } from "../actions/city";

const City = async () => {
  const datas = await getAllCity();
  logger.info("Get all city");

  return (
    <TableDB
      title="City"
      datas={datas.slice(0, 100)}
      path="city"
      deleteAction={deleteCity}
    />
  );
};

export default City;

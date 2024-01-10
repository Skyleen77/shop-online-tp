import { TableDB } from "@/components/table-db";
import { logger } from "@/lib/logger";
import { deleteCategories, getAllCategories } from "../actions/categories";

const Categories = async () => {
  const datas = await getAllCategories();
  logger.info("Get all categories");

  return (
    <TableDB
      title="Categories"
      datas={datas}
      path="categories"
      deleteAction={deleteCategories}
    />
  );
};

export default Categories;

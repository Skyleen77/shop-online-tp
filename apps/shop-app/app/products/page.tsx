import { TableDB } from "@/components/table-db";
import { logger } from "@/lib/logger";
import { deleteProducts, getAllProducts } from "../actions/products";

const Products = async () => {
  const datas = await getAllProducts();
  logger.info("Get all products");

  return (
    <TableDB
      idKey="productId"
      title="Products"
      datas={datas.slice(0, 100)}
      path="products"
      deleteAction={deleteProducts}
    />
  );
};

export default Products;

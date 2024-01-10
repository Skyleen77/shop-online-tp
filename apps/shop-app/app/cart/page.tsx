import { TableDB } from "@/components/table-db";
import { logger } from "@/lib/logger";
import { getAllCart, deleteCart } from "../actions/cart";

const Cart = async () => {
  const datas = await getAllCart();
  logger.info("Get all cart");

  return (
    <TableDB
      idKey="idCart"
      title="Cart"
      datas={datas}
      path="cart"
      deleteAction={deleteCart}
    />
  );
};

export default Cart;

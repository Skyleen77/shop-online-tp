import { getCartById } from "@/app/actions/cart";
import { getAllProducts } from "@/app/actions/products";
import { getAllUsers } from "@/app/actions/users";
import { FormCart } from "@/components/form-cart";

const UpdateUser = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const cart = await getCartById(id);
  const products = await getAllProducts();
  const users = await getAllUsers();

  return (
    <FormCart cart={cart} products={products.slice(0, 100)} users={users} />
  );
};

export default UpdateUser;

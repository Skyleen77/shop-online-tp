import { getAllProducts } from "@/app/actions/products";
import { getAllUsers } from "@/app/actions/users";
import { FormCart } from "@/components/form-cart";

export default async function Create() {
  const products = await getAllProducts();
  const users = await getAllUsers();

  return <FormCart products={products.slice(0, 100)} users={users} />;
}

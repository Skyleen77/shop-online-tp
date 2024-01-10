import { getCartById } from "@/app/actions/cart";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";

const GetUser = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const cart = await getCartById(id);
  logger.info("Get cart " + JSON.stringify(cart));

  return (
    <Get
      title="Get Cart"
      data={cart}
      backTitle="Back to cart"
      backHref="/cart"
    />
  );
};

export default GetUser;

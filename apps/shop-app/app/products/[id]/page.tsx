import { getProductById } from "@/app/actions/products";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";

const GetProduct = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const product = await getProductById(id);
  logger.info("Get product " + JSON.stringify(product));

  return (
    <Get
      title="Get Product"
      data={product}
      backTitle="Back to Product"
      backHref="/products"
    />
  );
};

export default GetProduct;

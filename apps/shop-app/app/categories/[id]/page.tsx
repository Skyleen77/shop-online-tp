import { getCategorieById } from "@/app/actions/categories";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";

const GetCategorie = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const categorie = await getCategorieById(id);
  logger.info("Get categorie " + JSON.stringify(categorie));

  return (
    <Get
      title="Get Categorie"
      data={categorie}
      backTitle="Back to Categories"
      backHref="/categories"
    />
  );
};

export default GetCategorie;

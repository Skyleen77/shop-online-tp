import { getCountryById } from "@/app/actions/country";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";

const GetCountry = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const country = await getCountryById(id);
  logger.info("Get country " + JSON.stringify(country));

  return (
    <Get
      title="Get Country"
      data={country}
      backTitle="Back to Country"
      backHref="/country"
    />
  );
};

export default GetCountry;

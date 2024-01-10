import { getCityById } from "@/app/actions/city";
import { Get } from "@/components/get";
import { logger } from "@/lib/logger";

const GetCity = async ({
  params: { id },
}: {
  params: {
    id: string;
  };
}) => {
  const city = await getCityById(id);
  logger.info("Get city " + JSON.stringify(city));

  return (
    <Get
      title="Get City"
      data={city}
      backTitle="Back to City"
      backHref="/city"
    />
  );
};

export default GetCity;

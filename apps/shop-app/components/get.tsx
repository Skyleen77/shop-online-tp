import { Button } from "@ui/components/ui/button";
import Link from "next/link";
import { Heading } from "./heading";

export const Get = ({
  data,
  title,
  backTitle,
  backHref,
}: {
  data: Record<string, any>;
  title: string;
  backTitle: string;
  backHref: string;
}) => {
  return (
    <div className="max-w-2xl p-10 mx-auto space-y-8">
      <Button className="mb-10" asChild>
        <Link href={backHref}>{backTitle}</Link>
      </Button>

      <Heading className="text-start">{title}</Heading>

      <div className="flex flex-col space-y-2">
        {Object.entries(data).map(([key, value]) => (
          <div key={key}>
            <span className="font-semibold">{key}: </span>
            <span>{value as string}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

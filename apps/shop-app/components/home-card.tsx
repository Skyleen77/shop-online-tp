import { Card, CardContent } from "@ui/components/ui/card";
import Link from "next/link";

export const HomeCard = ({
  icon: Icon,
  title,
  link,
}: {
  icon: React.ComponentType<any>;
  title: string;
  link: string;
}) => {
  return (
    <Link href={link}>
      <Card className="flex items-center justify-center aspect-square w-[150px] sm:w-[200px] hover:bg-gray-50 cursor-pointer">
        <CardContent className="flex flex-col items-center justify-center p-6 gap-y-6">
          <Icon className="w-10 h-10" />
          <p className="text-xl font-semibold text-center">{title}</p>
        </CardContent>
      </Card>
    </Link>
  );
};

import { cn } from "@ui/lib/utils";

export const Heading = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <h1 className={cn("mb-5 text-3xl font-bold text-center", className)}>
      {children}
    </h1>
  );
};

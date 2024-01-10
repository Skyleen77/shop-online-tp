"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@ui/components/ui/table";
import { Heading } from "./heading";
import { Button } from "@ui/components/ui/button";
import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@ui/components/ui/dropdown-menu";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { logger } from "@/lib/logger";

export interface TableDBProps {
  title: string;
  datas: Record<string, any>[];
  idKey?: string;
  path: string;
  deleteAction: (id: string) => Promise<any>;
}

export const TableDB = ({
  title,
  datas,
  idKey = "id",
  path,
  deleteAction,
}: TableDBProps) => {
  const pathname = usePathname();

  return (
    <div className="p-10 mx-auto space-y-4 max-w-7xl">
      <Button className="mb-10" asChild>
        <Link href="/">Back to home</Link>
      </Button>

      <div className="flex items-center justify-between">
        <Heading className="text-start">{title}</Heading>

        <Button variant="outline" asChild>
          <Link href={pathname + "/create"}>Create</Link>
        </Button>
      </div>

      <Table>
        <TableHeader>
          <TableRow>
            {Object.keys(datas[0])
              .slice(0, 8)
              .map((key) => (
                <TableHead className="w-[100px]" key={key}>
                  {key}
                </TableHead>
              ))}

            <TableHead className="w-auto text-end">Options</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {datas.map((data) => (
            <TableRow>
              {Object.values(data)
                .slice(0, 8)
                .map((value, i) => (
                  <TableCell className="font-medium" key={i}>
                    {value}
                  </TableCell>
                ))}

              <TableCell className="text-end">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <MoreHorizontal className="w-5 h-5" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>Options</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link href={`/${path}/${data[idKey]}`}>Get</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link href={`/${path}/update/${data[idKey]}`}>
                        Update
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                      onClick={async () => {
                        deleteAction(data[idKey])
                          .then(() => {
                            logger.info(title + " deleted successfully");
                          })
                          .catch(() => {
                            logger.error(title + " delete failed");
                          });
                      }}
                    >
                      Delete
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

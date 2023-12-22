"use client";

import { Button } from "@/components/button";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { getLinkInfo } from "./get-link-info";

export function ReaderNavigation() {
  const path = usePathname();

  const { backInfo, nextInfo } = getLinkInfo(path);

  return (
    <div className="flex justify-between pt-8 md:pt-12">
      <Link href={backInfo.href} tabIndex={-1}>
        <Button className="flex w-40 items-center justify-center py-3 pr-6 text-lg font-bold">
          <ChevronLeftIcon className="h-6 w-6" />
          <p>{backInfo.text}</p>
        </Button>
      </Link>

      <Link href={nextInfo.href} tabIndex={-1}>
        <Button className="flex w-40 items-center justify-center py-3 pl-6 text-lg font-bold">
          <p>{nextInfo.text}</p>
          <ChevronRightIcon className="h-6 w-6" />
        </Button>
      </Link>
    </div>
  );
}

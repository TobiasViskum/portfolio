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
        <Button className="flex w-36 items-center justify-center py-3 pr-6 text-lg font-bold sm:w-40 md:w-44">
          <ChevronLeftIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          <p className="whitespace-nowrap text-sm sm:text-base md:text-lg">
            {backInfo.text}
          </p>
        </Button>
      </Link>

      {nextInfo.href !== "" && nextInfo.text !== "" && (
        <Link href={nextInfo.href} tabIndex={-1}>
          <Button className="flex w-36  items-center justify-center py-3 pl-6 text-lg font-bold sm:w-40 md:w-44">
            <p className="whitespace-nowrap text-sm sm:text-base md:text-lg">
              {nextInfo.text}
            </p>
            <ChevronRightIcon className="h-5 w-5 sm:h-6 sm:w-6" />
          </Button>
        </Link>
      )}
    </div>
  );
}

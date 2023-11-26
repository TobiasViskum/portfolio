"use client";

import { cn } from "@/lib/utils";
import { ArrowRightIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";

export function SmartNavigation() {
  const path = usePathname();
  const splitPath = path.split("/");

  const pathArray: { title: string; href: string }[] = [
    { title: "Hjem", href: "/" },
  ];

  if (path === "/viskum-app") {
    pathArray.push({
      href: "/viskum-app",
      title: "Viskum app",
    });
  } else if (/\/viskum-app\/.*/) {
    const lastPath = splitPath[splitPath.length - 1];
    pathArray.push({
      href: "/viskum-app",
      title: "Viskum app",
    });
    pathArray.push({
      href: `/viskum-app/${lastPath}`,
      title: lastPath,
    });
  }

  return (
    <div className="text-link flex items-center gap-x-1">
      {pathArray.map((path, i) => {
        const addArrow = i !== pathArray.length - 1;

        return (
          <Fragment key={path.href}>
            <Link
              href={path.href}
              className={cn(
                "flex items-center gap-x-1 hover:underline",
                !addArrow
                  ? "pointer-events-none text-foreground"
                  : "cursor-pointer",
              )}
            >
              {path.title}
            </Link>
            {addArrow && <ChevronRightIcon className="text-foreground" />}
          </Fragment>
        );
      })}
    </div>
  );
}

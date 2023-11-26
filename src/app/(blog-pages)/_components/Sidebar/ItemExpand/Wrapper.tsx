"use client";

import { cn } from "@/lib/utils";
import { vEvent } from "@/lib/vEvent";
import Link from "next/link";
import { Fragment, ReactNode, useEffect, useState } from "react";

type Props = {
  children: ReactNode;
  options: { text: string; href: string }[];
};

export function Wrapper({ children, options }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const linkTw =
    "hover:text-first py-2 text-xl transition-[transform,color] hover:scale-110 origin-left w-full whitespace-nowrap outline-0 focus-visible:scale-110 focus-visible:text-first";

  const lineSize = 2.5;

  useEffect(() => {
    function onSidebarChange({
      detail,
    }: CustomEvent<{ newState: "open" | "closed" }>) {
      if (detail.newState === "closed") {
        setIsExpanded(false);
      }
    }

    vEvent.listen("sidebarChange", onSidebarChange);

    return () => vEvent.removeListener("sidebarChange", onSidebarChange);
  }, []);

  return (
    <div className="flex w-full flex-col">
      <button
        className="group/item outline-0"
        onClick={() => setIsExpanded((prev) => !prev)}
      >
        {children}
      </button>
      <div
        className={cn(
          "grid w-full overflow-y-hidden transition-[grid-template-rows]",
          isExpanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="relative flex flex-col overflow-y-hidden pl-10">
          <div
            className="absolute left-4 h-[calc(100%-22px)] bg-foreground"
            style={{ width: `${lineSize}px` }}
          />
          {options.map((option, i) => {
            let top = 0;
            if (i === 0) {
              top = 20;
            } else {
              top = i * (28 + 16) + 20;
            }

            return (
              <Fragment key={option.href + option.text}>
                <Link
                  tabIndex={isExpanded ? 0 : -1}
                  href={option.href}
                  className={linkTw}
                >
                  {option.text}
                </Link>
                <div
                  className="absolute left-4 w-4 bg-foreground"
                  style={{ top: `${top}px`, height: lineSize }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

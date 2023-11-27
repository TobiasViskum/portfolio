"use client";

import { cn } from "@/lib/utils";
import { vEvent } from "@/lib/vEvent";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Fragment,
  ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

type Props = {
  children: ReactNode;
  options: { text: string; href: string }[];
};

export function Wrapper({ children, options }: Props) {
  const [isExpanded, setIsExpanded] = useState(false);
  const path = usePathname();
  const expandDivRef = useRef<HTMLDivElement | null>(null);

  const linkTw =
    'hover:text-first py-2 text-xl transition-[transform,color] hover:scale-110 origin-left w-full whitespace-nowrap outline-0 focus-visible:scale-110 focus-visible:text-first [&[data-active="true"]:not(:hover)]:text-link font-normal';

  const lineSize = 2;
  const lineLeftOffset = 12;

  useEffect(() => {
    function onSidebarChange({
      detail,
    }: CustomEvent<{ newState: "open" | "closed" }>) {
      if (detail.newState === "closed") {
        setIsExpanded(false);
      } else if (detail.newState === "open") {
        const elem = expandDivRef.current;

        if (elem && elem.matches(':has([data-active="true"])')) {
          setIsExpanded(true);
        }
      }
    }

    vEvent.listen("sidebarChange", onSidebarChange);

    return () => vEvent.removeListener("sidebarChange", onSidebarChange);
  }, []);

  return (
    <div
      className="group/expand 3xl:min-w-[164px] flex min-w-[128px] flex-col "
      data-expanded={isExpanded}
      ref={expandDivRef}
    >
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
        <div
          className="relative flex flex-col overflow-y-hidden"
          style={{ paddingLeft: 24 + lineLeftOffset }}
        >
          <div
            className="absolute h-[calc(100%-22px)] rounded-full bg-foreground"
            style={{ width: `${lineSize}px`, left: lineLeftOffset }}
          />
          {options.map((option, i) => {
            let top = 0;
            if (i === 0) {
              top = 20;
            } else {
              top = i * (28 + 16) + 20;
            }
            top = top + 2 - lineSize;

            return (
              <Fragment key={option.href + option.text}>
                <Link
                  tabIndex={isExpanded ? 0 : -1}
                  href={option.href}
                  className={linkTw}
                  data-active={path.includes(option.href)}
                >
                  {option.text}
                </Link>
                <div
                  className="absolute w-4 rounded-full bg-foreground"
                  style={{
                    top: `${top}px`,
                    height: lineSize,
                    left: lineLeftOffset,
                  }}
                />
              </Fragment>
            );
          })}
        </div>
      </div>
    </div>
  );
}

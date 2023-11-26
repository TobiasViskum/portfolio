"use client";

import { vEvent } from "@/lib/vEvent";
import { ReactNode, useEffect, useRef } from "react";

export function Wrapper({ children }: { children: ReactNode }) {
  const sidebarRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    function onKeyUp() {
      const sidebar = sidebarRef.current;

      if (sidebar) {
        const noFocus = sidebar.matches(":not(:has(:focus))");
        const noHover = sidebar.matches(":not(:has(:hover))");
        if (noFocus && noHover) {
          vEvent.dispatch("sidebarChange", { newState: "closed" });
        }
      }
    }

    document.addEventListener("keyup", onKeyUp);

    return () => document.removeEventListener("keyup", onKeyUp);
  }, []);

  return (
    <div
      ref={sidebarRef}
      onMouseLeave={() =>
        vEvent.dispatch("sidebarChange", { newState: "closed" })
      }
      className="group/sidebar fixed left-0 hidden h-full w-60 flex-col items-start justify-start gap-y-8 pl-8 pt-[25svh] 2xl:flex"
    >
      {children}
    </div>
  );
}

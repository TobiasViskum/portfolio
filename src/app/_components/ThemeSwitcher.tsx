"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

export function ThemeSwitcher() {
  const { setTheme } = useTheme();

  const iconTw =
    "h-12 w-12 hover:bg-accent p-3 rounded-md focus-visible:bg-accent";

  return (
    <div className="fixed bottom-8 hidden w-full justify-center gap-x-8 2xl:flex">
      <div className="flex w-full max-w-[1500px] justify-end pr-8">
        <button className={iconTw} onClick={() => setTheme("light")}>
          <SunIcon className="h-full w-full" />
        </button>
        <button className={iconTw} onClick={() => setTheme("dark")}>
          <MoonIcon className="h-full w-full" />
        </button>
      </div>
    </div>
  );
}

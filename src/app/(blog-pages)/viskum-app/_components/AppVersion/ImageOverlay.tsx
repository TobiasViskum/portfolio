"use client";

import { Button } from "@/components/button";
import { ExternalLinkIcon } from "lucide-react";

type Props = {
  href: string;
  text: string | JSX.Element;
};

export function ImageOverlay({ href, text }: Props) {
  return (
    <button
      className="group absolute grid h-full w-full cursor-pointer place-items-center bg-zinc-700 bg-opacity-40 transition-colors hover:bg-opacity-60 focus:outline-0 focus-visible:bg-opacity-60"
      onClick={() => {
        window.open(href, "_blank");
      }}
    >
      <div
        className="grid aspect-square h-1/3 max-h-[64px] place-items-center rounded-full bg-first bg-opacity-90 p-0 transition-[transform,background-color] hover:bg-opacity-80 group-hover:scale-105 group-focus-visible:scale-105"
        id="hrefIcon"
      >
        <ExternalLinkIcon className="aspect-square h-1/2 w-1/2 text-background" />
      </div>
      <div className="absolute bottom-4 opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100">
        <p className="cursor-pointer rounded-md bg-first bg-opacity-90 px-4 py-0.5 text-xs font-bold text-background hover:underline group-focus-visible:underline group-[:has(#hrefIcon:hover)]:underline">
          {text}
        </p>
      </div>
    </button>
  );
}

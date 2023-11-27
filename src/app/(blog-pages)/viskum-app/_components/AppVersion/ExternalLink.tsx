"use client";

import { Button } from "@/components/button";

type Props = {
  href: string;
  text: string | JSX.Element;
};

export function ExternalLink({ href, text }: Props) {
  return (
    <Button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        window.open(href, "_blank");
      }}
      id="externalLink"
      className="group w-full sm:w-64"
    >
      Link: <b className="group-hover:underline">{text}</b>
    </Button>
  );
}

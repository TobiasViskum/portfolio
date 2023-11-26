"use client";

import { useRouter } from "next/navigation";

type Props = {
  href: string;
  text: string | JSX.Element;
};

export function ExternalLink({ href, text }: Props) {
  const router = useRouter();

  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();
        window.open(href, "_blank");
      }}
      id="externalLink"
      className="bg-first xs:text-sm group flex w-full items-center justify-center gap-x-1 rounded-md px-4 py-2 text-xs text-background transition-colors hover:bg-opacity-90"
    >
      Link: <b>{text}</b>
    </button>
  );
}

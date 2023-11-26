import { cn } from "@/lib/utils";
import { Home } from "lucide-react";
import Link from "next/link";

type Props = {
  text: string;
  href: string;
};

export function ItemNoExpand({ text, href }: Props) {
  const buttonTw = "group/item flex w-full items-start gap-x-2 py-4 ";
  const animateTw =
    "origin-left transition-transform hover:scale-150 focus-visible:scale-[1.35] outline-0 group-hover/sidebar:[&:not(:hover)]:scale-[1.35]";
  return (
    <Link href={href} className={cn(buttonTw, animateTw)}>
      <Home className="group-hover/item:text-first group-focus-visible/item:text-first transition-colors " />
      <p className="group-hover/item:text-first group-focus-visible/item:text-first text-lg font-medium text-foreground opacity-0 transition-[opacity,color] group-hover/sidebar:opacity-100 group-focus/item:opacity-100 group-[:has(:focus)]/sidebar:opacity-100">
        {text}
      </p>
    </Link>
  );
}

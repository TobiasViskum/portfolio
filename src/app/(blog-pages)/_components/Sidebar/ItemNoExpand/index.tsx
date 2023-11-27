import { cn } from "@/lib/utils";
import Link from "next/link";
import { cloneElement } from "react";
import { Wrapper } from "./Wrapper";

type Props = {
  text: string;
  href: string;
  Icon: JSX.Element;
};

export function ItemNoExpand({ text, href, Icon }: Props) {
  const buttonTw =
    'group/item min-w-[128px] flex items-start gap-x-2 py-4 3xl:min-w-[164px] group-data-[active="true"]/noExpand:text-link';

  const IconElem = cloneElement(Icon, {
    className: cn(
      Icon.props.className || "",
      "transition-colors group-hover/item:text-first group-focus-visible/item:text-first",
    ),
  });

  const animateTw =
    "origin-left transition-transform hover:scale-sidebar-hover focus-visible:scale-sidebar-initial outline-0 group-hover/sidebar:[&:not(:hover)]:scale-sidebar-initial";
  return (
    <Wrapper href={href}>
      <Link href={href} className={cn(buttonTw, animateTw)}>
        {IconElem}
        <p className="text-lg font-medium opacity-0 transition-[opacity,color] group-hover/item:text-first group-hover/sidebar:opacity-100 group-focus/item:opacity-100 group-focus-visible/item:text-first group-[:has(:focus-visible)]/sidebar:opacity-100">
          {text}
        </p>
      </Link>
    </Wrapper>
  );
}

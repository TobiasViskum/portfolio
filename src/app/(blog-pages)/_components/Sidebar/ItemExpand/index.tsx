import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
import { Wrapper } from "./Wrapper";
import { cloneElement } from "react";

type Props = {
  title: string;
  options: { text: string; href: string }[];
  Icon: JSX.Element;
};

export function ItemExpand({ title, options, Icon }: Props) {
  const buttonTw =
    'w-full py-4 flex gap-x-2 group-data-[sidebar-state="closed"]/sidebar:group-[:has([data-active="true"])]/expand:text-link';
  const animateTw =
    "origin-left transition-transform hover:scale-sidebar-hover group-hover/sidebar:[&:not(:hover)]:scale-sidebar-initial group-focus-visible/item:scale-sidebar-initial";

  const IconElem = cloneElement(Icon, {
    className: cn(
      Icon.props.className || "",
      "transition-colors group-hover/item:text-first group-focus-visible/item:text-first",
    ),
  });

  return (
    <Wrapper options={options}>
      <div className={cn(buttonTw, animateTw)}>
        {IconElem}
        <p className="text-lg font-medium text-foreground opacity-0 transition-[opacity,color] group-hover/item:text-first group-hover/sidebar:opacity-100 group-focus-visible/item:text-first group-focus-visible/item:opacity-100 group-[:has(:focus-visible)]/sidebar:opacity-100">
          {title}
        </p>
        <ChevronDown className='mb-1 mt-auto h-5 w-5 -rotate-90 text-foreground opacity-0 transition-[opacity,color,transform] group-hover/item:text-first group-hover/sidebar:opacity-100 group-focus-visible/item:text-first group-focus-visible/item:opacity-100 group-[:has(:focus-visible)]/sidebar:opacity-100 group-data-[expanded="true"]/expand:rotate-0' />
      </div>
    </Wrapper>
  );
}

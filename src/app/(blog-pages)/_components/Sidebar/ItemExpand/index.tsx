import { cn } from "@/lib/utils";
import { Boxes, ChevronDown } from "lucide-react";
import { Wrapper } from "./Wrapper";

type Props = {
  options: { text: string; href: string }[];
};

export function ItemExpand({ options }: Props) {
  const buttonTw = "w-full py-4 flex gap-x-2";
  const animateTw =
    "origin-left transition-transform hover:scale-150 group-hover/sidebar:[&:not(:hover)]:scale-[1.35] group-focus-visible/item:scale-[1.35] ";
  return (
    <Wrapper options={options}>
      <div className={cn(buttonTw, animateTw)}>
        <Boxes className="group-hover/item:text-first transition-colors" />
        <p className="group-hover/item:text-first group-focus-visible/item:text-first text-lg font-medium text-foreground opacity-0 transition-[opacity,color] group-hover/sidebar:opacity-100 group-focus-visible/item:opacity-100 group-[:has(:focus)]/sidebar:opacity-100">
          Projekter
        </p>
        <ChevronDown className="group-hover/item:text-first group-focus-visible/item:text-first mb-1 mt-auto h-5 w-5 text-foreground opacity-0 transition-[opacity,color] group-hover/sidebar:opacity-100 group-focus-visible/item:opacity-100 group-[:has(:focus)]/sidebar:opacity-100" />
      </div>
    </Wrapper>
  );
}

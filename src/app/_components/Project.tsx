import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Project({
  text,
  link,
}: {
  text: string;
  link: string;
}) {
  return (
    <Link
      href={link}
      className="text-second hover:text-first focus-visible:text-first focus:text-first hover:bg-hover focus:bg-hover focus-visible:bg-hover group flex items-center justify-between rounded-xl border bg-background px-8 py-6 font-medium underline-offset-2 transition-colors"
    >
      <p className="text-2xl transition-all">{text}</p>
      <ChevronRightIcon className="group-hover:scale-110group-focus-visible:translate-x-2 h-7 w-7 transition-all group-hover:translate-x-2 group-focus-visible:scale-110" />
    </Link>
  );
}

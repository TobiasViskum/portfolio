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
      className="group flex items-center justify-between rounded-xl border bg-background px-8 py-6 font-medium text-second underline-offset-2 transition-colors hover:bg-hover hover:text-first focus:bg-hover focus:text-first focus-visible:bg-hover focus-visible:text-first"
    >
      <p className="text-2xl transition-all">{text}</p>
      <ChevronRightIcon className="h-7 w-7 transition-all group-hover:translate-x-2 group-hover:scale-110 group-focus-visible:translate-x-2 group-focus-visible:scale-110" />
    </Link>
  );
}

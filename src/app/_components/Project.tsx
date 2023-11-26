import { ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function Project({ text }: { text: string }) {
  return (
    <Link
      href="/viskum-app"
      className="group flex items-center justify-between rounded-xl border border-black border-opacity-30 bg-white px-8 py-6 font-medium underline-offset-2 transition-colors hover:bg-slate-50 focus-visible:bg-slate-50"
    >
      <p className="text-2xl text-blue-800 transition-all group-hover:text-blue-700 group-focus-visible:text-blue-700">
        {text}
      </p>
      <ChevronRightIcon className="h-7 w-7 text-blue-800 transition-all group-hover:translate-x-2 group-hover:scale-110 group-hover:text-blue-700 group-focus-visible:translate-x-2 group-focus-visible:scale-110 group-focus-visible:text-blue-700" />
    </Link>
  );
}

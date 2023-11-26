import { P } from "@/components/p";
import Link from "next/link";
import { ExternalLink } from "./ExternalLink";

type Props = {
  versionName: string;
  href: string;
  externalText: string;
  externalHref: string;
};

export function AppVersion({
  versionName,
  href,
  externalText,
  externalHref,
}: Props) {
  return (
    <Link
      href={href}
      className="[&:hover:not(:has(#externalLink:hover))]:bg-hover flex flex-col items-center gap-y-2 rounded-md border p-4 transition-colors"
    >
      <P>{versionName}</P>
      <div className="grid h-52 w-96 place-items-center rounded-md bg-zinc-700">
        <P className="font-semibold tracking-wide text-background">Billede</P>
      </div>
      <ExternalLink text={externalText} href={externalHref} />
    </Link>
  );
}

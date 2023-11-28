import { P } from "@/components/p";
import Link from "next/link";
import { ExternalLink } from "./ExternalLink";
import { previewAppV1, previewAppV2, previewAppV3 } from "@/assets";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { H3 } from "@/components/h3";

type Props = {
  versionNumber: 1 | 2 | 3;
  externalText: string;
  externalHref: string;
};

export function AppVersion({
  versionNumber,
  externalText,
  externalHref,
}: Props) {
  let image = previewAppV3;
  if (versionNumber === 1) {
    image = previewAppV1;
  } else if (versionNumber === 2) {
    image = previewAppV2;
  } else if (versionNumber === 3) {
    image = previewAppV3;
  }
  let text = "";
  if (versionNumber === 1) {
    text = "Dette er den første version af appen.";
  } else if (versionNumber === 2) {
    text = "";
  } else if (versionNumber === 3) {
    text = "";
  }

  return (
    <>
      <div className="flex flex-col gap-x-4 gap-y-2 sm:flex-row">
        <H3 className="block sm:hidden">Version {versionNumber}</H3>
        <div className="relative grid aspect-[24/13] w-full max-w-[640px] place-items-center overflow-hidden rounded-md border bg-zinc-700 sm:max-w-[424px]">
          <Image
            src={image}
            alt="preview"
            width={640}
            priority
            className="transition-all group-[:hover:not(:has(#externalLink:hover))]:opacity-25"
          />
        </div>
        <div className="flex w-full flex-col justify-between gap-y-2">
          <div className="w-full min-w-[300px] space-y-2">
            <H3 className="hidden sm:block">Version {versionNumber}</H3>
            <P>{text}</P>
            <Link
              href={`/viskum-app/v${versionNumber}`}
              className="flex items-center text-link hover:underline"
            >
              Læs videre <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <ExternalLink text={externalText} href={externalHref} />
        </div>
      </div>
      {/* <Link
      href={`/viskum-app/v${versionNumber}`}
      className="group flex flex-col items-center gap-y-4 rounded-md border p-4 transition-colors [&:hover:not(:has(#externalLink:hover))]:bg-hover"
    >
      <div className="flex w-full justify-between">
        <P className="origin-left ">Version {versionNumber}</P>
        <ChevronRight className="h-4 w-4 origin-left text-foreground transition-transform group-[:hover:not(:has(#externalLink:hover))]:scale-125" />
      </div>
      <div className="relative grid aspect-[24/13] w-full max-w-[384px] place-items-center overflow-hidden rounded-md border  bg-zinc-700">
        <Image
          src={image}
          alt="preview"
          width={500}
          height={900}
          className="transition-all group-[:hover:not(:has(#externalLink:hover))]:opacity-25"
        />
        <P className="absolute flex origin-top-left -rotate-12 scale-0 items-center gap-x-1 rounded-md px-4 py-2 text-lg font-medium text-white transition-transform hover:underline group-[:hover:not(:has(#externalLink:hover))]:rotate-0 group-[:hover:not(:has(#externalLink:hover))]:scale-100 xs:text-xl">
          Læs mere
        </P>
      </div>
      <ExternalLink text={externalText} href={externalHref} />
    </Link> */}
    </>
  );
}

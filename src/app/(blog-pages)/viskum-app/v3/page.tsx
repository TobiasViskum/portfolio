import { V3Navigation, previewAppV3 } from "@/assets";
import { H1 } from "@/components/h1";
import { P } from "@/components/p";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_VISKUM_APP_V3 } from "@/lib/external-href";
import { EXTERNAL_TEXT_VISKUM_APP_V3 } from "@/lib/external-text";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { NextJSIcon } from "@/svg/NextJSIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { TypescriptIcon } from "@/svg/TypescriptIcon";
import Link from "next/link";

export default function ViskumAppProjectPage() {
  return (
    <PageWrapper>
      <PageHeader title="Viskum App V3">
        <TypescriptIcon />
        <TailwindIcon />
        <ReactIcon />
        <NextJSIcon />
        <MySQLIcon />
      </PageHeader>
      <PageContentWrapper>
        <div className="space-y-2 border-l py-1 pl-4 text-foreground ">
          <P className="opacity-80">Begyndelse: Start 2023</P>
          <P className="opacity-80">Slut: Midt 2023</P>
          <div className="flex gap-x-2">
            <P className="opacity-80">Link:</P>
            <Link
              target="_blank"
              href={EXTERNAL_HREF_VISKUM_APP_V3}
              className="link opacity-100"
            >
              {EXTERNAL_TEXT_VISKUM_APP_V3}
            </Link>
          </div>
        </div>
        <SectionWrapper>
          <SectionLayout1 title="Om denne version">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            dolores?
          </SectionLayout1>
          <SectionLayout1 title="Nyt framework">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            dolores?
          </SectionLayout1>
          <SectionLayout2 title="Log-ind system" image={previewAppV3}>
            sdfj
          </SectionLayout2>
          <SectionLayout2
            direction="reverse"
            title="Ny UI - igen"
            image={previewAppV3}
          >
            sdfj
          </SectionLayout2>
          <SectionLayout2 title="Forbedret navigation" image={V3Navigation}>
            sdfj
          </SectionLayout2>
          <SectionLayout2
            title="Kan installeres (PWA)"
            direction="reverse"
            image={V3Navigation}
          >
            sdfj
          </SectionLayout2>
          <SectionLayout1 title="Den sidste version (for nu)">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Non,
            dolores?
          </SectionLayout1>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

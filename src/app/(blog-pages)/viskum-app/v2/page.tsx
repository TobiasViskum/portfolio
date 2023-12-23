import { previewAppV2 } from "@/assets";
import { P } from "@/components/p";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_VISKUM_APP_V2 } from "@/lib/external-href";
import { EXTERNAL_TEXT_VISKUM_APP_V2 } from "@/lib/external-text";
import { ExpressIcon } from "@/svg/ExpressIcon";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { SassIcon } from "@/svg/SassIcon";
import { TypescriptIcon } from "@/svg/TypescriptIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import Link from "next/link";

export default function ViskumAppProjectPage() {
  return (
    <PageWrapper>
      <PageHeader title="Viskum App V2">
        <TypescriptIcon />
        <SassIcon />
        <ReactIcon />
        <ViteIcon />
        <ExpressIcon /> <MySQLIcon />
      </PageHeader>
      <PageContentWrapper>
        <div className="space-y-2 border-l py-1 pl-4 text-foreground ">
          <P className="opacity-80">Begyndelse: August 2022</P>
          <div className="flex gap-x-2">
            <P className="opacity-80">Link:</P>
            <Link
              target="_blank"
              href={EXTERNAL_HREF_VISKUM_APP_V2}
              className="link opacity-100"
            >
              {EXTERNAL_TEXT_VISKUM_APP_V2}
            </Link>
          </div>
        </div>

        <SectionWrapper>
          <SectionLayout1 title="Om denne version">
            Denne version af appen har ikke de samme features som den første, da
            formålet med denne version, var at lave en bedre UI. Men da jeg på
            samme tidspunkt opdagede Typescript, blev der også brugt mange
            kræfter i at få styr på det.
          </SectionLayout1>
          <SectionLayout2 title="Rewrite" image={previewAppV2}>
            d
          </SectionLayout2>
          <SectionLayout2
            title="Animations"
            image={previewAppV2}
            direction="reverse"
          >
            d
          </SectionLayout2>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

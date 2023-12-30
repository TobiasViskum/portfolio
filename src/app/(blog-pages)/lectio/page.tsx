import { previewAppV3 } from "@/assets";
import { H1 } from "@/components/h1";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageInfo } from "@/components/page-info";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_LECTIO } from "@/lib/external-href";
import { EXTERNAL_TEXT_LECTIO } from "@/lib/external-text";
import { GIT_HREF_LECTIO_VISKUM } from "@/lib/git-href";
import { NextJSIcon } from "@/svg/NextJSIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { RedisIcon } from "@/svg/RedisIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { TypescriptIcon } from "@/svg/TypescriptIcon";

export default function LectioPage() {
  return (
    <PageWrapper>
      <PageHeader title="Lectio">
        <TypescriptIcon />
        <TailwindIcon className="scale-75" />
        <ReactIcon />
        <RedisIcon className="ml-1" />
        <NextJSIcon />
      </PageHeader>
      <PageContentWrapper>
        <PageInfo
          startDate="Midt 2023"
          endDate="Slut-november 2023"
          externalHref={EXTERNAL_HREF_LECTIO}
          externalText={EXTERNAL_TEXT_LECTIO}
          gitHref={GIT_HREF_LECTIO_VISKUM}
        />
        <SectionWrapper>
          <SectionLayout1 title="Inspiration">
            Jeg blev inspireret til at lave et moderne lectio af to grunde.
            Først og fremmest fordi Lectio{"'"}s hjemmeside ikke er særlig pæn{" "}
            <span className="whitespace-nowrap">
              (
              <a
                href="https://www.lectio.dk/lectio/"
                target="_blank"
                className="link"
              >
                www.lectio.dk
              </a>
              )
            </span>
            , og for det andet findes der kun en Lectio-app til mobiles, hvor UI
            {"'"}en faktisk er pæn{" "}
            <span className="whitespace-nowrap">
              (
              <a href="https://lectio.plus/" target="_blank" className="link">
                lectio.plus
              </a>
              )
            </span>
            . Derfor valgte jeg at lave en hjemmeside, der skulle være gratis at
            tilgå og fungere som et alternativ i stedet for lectio, som man
            kunne bruge i daglidagen.
          </SectionLayout1>

          <SectionLayout1 title="Sådan virker det">dsf</SectionLayout1>
          <SectionLayout1 title="Features">
            Appen har nogle features, men slet ikke det samme som{" "}
            <a
              href="https://www.lectio.dk/lectio/"
              target="_blank"
              className="link"
            >
              www.lectio.dk
            </a>
            . I det følgende kan der ses de features den har.
          </SectionLayout1>
          <SectionLayout2 title="Log ind" image={previewAppV3}>
            sdf
          </SectionLayout2>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

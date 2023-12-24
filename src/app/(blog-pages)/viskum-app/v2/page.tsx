import { V2FitnessAdd, previewAppV2 } from "@/assets";
import { P } from "@/components/p";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageInfo } from "@/components/page-info";
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
import Script from "next/script";

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
        <PageInfo
          startDate="Midt 2022"
          endDate="Start 2023"
          externalHref={EXTERNAL_HREF_VISKUM_APP_V2}
          externalText={EXTERNAL_TEXT_VISKUM_APP_V2}
          gitHref=""
        />

        <SectionWrapper>
          <SectionLayout1 title="Om denne version">
            Denne version af appen har ikke de samme features som den første, da
            formålet med denne version, var at lave en bedre UI. Men da jeg på
            samme tidspunkt opdagede Typescript, blev der også brugt mange
            kræfter i at få styr på det.
          </SectionLayout1>
          <SectionLayout2 title="Ny UI" image={previewAppV2}>
            Som det kan ses i billedet til venstre, lavede jeg en fulstændig ny
            UI til fitness-siden. Der kom aldrig en ny UI til de andre sider,
            før jeg valgte at omskrive appen i et nyt framework, som er{" "}
            <Link href={"/viskum-app/v3"} className="link">
              version 3
            </Link>
            .
          </SectionLayout2>

          <SectionLayout2
            title="Animations"
            video="/v2-animation.mp4"
            direction="reverse"
          >
            I forbindelse med en ny UI, syntes jeg også, at det kunne være fedt
            med mange animations. Derfor, som det ses i vidoen til højre, er der
            animations når man scroller, vil lukke og åbne en gruppe som
            &quot;Upper Body&quot; eller når man vil slette en øvelse laver
            fitness-kortet et flip. I stedet for standard CSS blev der brugt en
            udvidelse af CSS, som hedder{" "}
            <a target="_blank" className="link" href="https://sass-lang.com/">
              Sass
            </a>
            .
          </SectionLayout2>
          <SectionLayout2 title="Forbedringer" image={V2FitnessAdd}>
            Med denne version af appen kom også en forbedring. Hvis man vil
            tilføje en ny fitness øvelse og man f.eks. skriver
            &quot;Squat&quot;, kigges databasen igennem efter andre øvelser, som
            har ordet &quot;Squat&quot;, og man bliver forslået alle disse
            øvelser. Man kan selvfølgelig stadig kalde den noget, andre ikke har
            kaldt den.
          </SectionLayout2>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

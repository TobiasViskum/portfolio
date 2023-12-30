import { TheoryPractice } from "@/assets";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageInfo } from "@/components/page-info";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_THEORY_PRACTICE } from "@/lib/external-href";
import { EXTERNAL_TEXT_THEORY_PRACTICE } from "@/lib/external-text";
import { GIT_HREF_TEORIPROEVE_PRACTICE } from "@/lib/git-href";
import { ExpressIcon } from "@/svg/ExpressIcon";
import { JavascriptIcon } from "@/svg/JavascriptIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { ViteIcon } from "@/svg/ViteIcon";

export default function TheoryTest() {
  return (
    <PageWrapper>
      <PageHeader title="Teoriprøve practice">
        <JavascriptIcon />
        <TailwindIcon />
        <ReactIcon />
        <ViteIcon />
        <ExpressIcon />
      </PageHeader>
      <PageContentWrapper>
        <PageInfo
          startDate="Slut-marts 2023"
          externalHref={EXTERNAL_HREF_THEORY_PRACTICE}
          externalText={EXTERNAL_TEXT_THEORY_PRACTICE}
          gitHref={GIT_HREF_TEORIPROEVE_PRACTICE}
        />
        <SectionWrapper>
          <SectionLayout1 title="Om projektet">
            Dette projekt er et mindre projekt, som blev lavet over et par dage
            op mod min teoriprøve. Det går ud på, at man får spørgsmål, som man
            kunne blive stillet til en teoriprøve eller køreprøve, og så skal
            man svare rigtigt.
            <br />
            <br />
            Projektet er dog med, fordi i slutningen af Marts 2023 kom iOS 16.4,
            der for første gang gjorde det muligt at implementere
            push-notifications i en web app (progressive web application /
            installeret hjemmeside), hvilket var noget, som jeg længe havde
            ventet på. Da jeg fik det til at virke, er projektet derfor ligeså
            meget endt ud i en demo for push-notifications i en web-app.
          </SectionLayout1>
          <SectionLayout2 title="Det kan den" image={TheoryPractice}>
            Selve appen går som sagt ud på, at man bliver stillet et spørgsmål,
            der kunne komme til en teori- eller køreprøve, som man skal svare
            rigtigt på. Derudover kan man også se, hvor mange rigtige i streg
            man har svaret.
          </SectionLayout2>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

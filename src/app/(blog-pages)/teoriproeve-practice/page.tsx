import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageInfo } from "@/components/page-info";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_THEORY_PRACTICE } from "@/lib/external-href";
import { EXTERNAL_TEXT_THEORY_PRACTICE } from "@/lib/external-text";
import { ReactIcon } from "@/svg/ReactIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { TypescriptIcon } from "@/svg/TypescriptIcon";
import { ViteIcon } from "@/svg/ViteIcon";

export default function TheoryTest() {
  return (
    <PageWrapper>
      <PageHeader title="Teoriprøve practice">
        <TypescriptIcon />
        <TailwindIcon />
        <ReactIcon />
        <ViteIcon />
      </PageHeader>
      <PageContentWrapper>
        <PageInfo
          startDate="Marts 2023"
          externalHref={EXTERNAL_HREF_THEORY_PRACTICE}
          externalText={EXTERNAL_TEXT_THEORY_PRACTICE}
        />
        <SectionWrapper>
          <SectionLayout1 title="Om projektet">dsfsf</SectionLayout1>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

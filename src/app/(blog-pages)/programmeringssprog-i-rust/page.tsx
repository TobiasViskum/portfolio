import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageInfo } from "@/components/page-info";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionWrapper } from "@/components/section-wrapper";
import { GIT_HREF_PROGRAMMING_LANGUAGE_VISKUM } from "@/lib/git-href";
import { RustIcon } from "@/svg/RustIcon";

export default function PorgrammingLanguageInRust() {
  return (
    <PageWrapper>
      <PageHeader title={'Programmeringssproget: "Viskum"'}>
        <RustIcon />
      </PageHeader>
      <PageContentWrapper>
        <PageInfo
          startDate="Start-december 2023"
          endDate="Arbejdes stadig på"
          gitHref={GIT_HREF_PROGRAMMING_LANGUAGE_VISKUM}
        />
        <SectionWrapper>
          <SectionLayout1 title={'Programmeringssproget "Viskum"'}>
            psdf
          </SectionLayout1>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

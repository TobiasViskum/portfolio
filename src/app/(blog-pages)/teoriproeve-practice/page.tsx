import { PageHeader } from "@/components/page-header";
import { PageWrapper } from "@/components/page-wrapper";
import { NextJSIcon } from "@/svg/NextJSIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { TypescriptIcon } from "@/svg/TypescriptIcon";

export default function TheoryTest() {
  return (
    <PageWrapper>
      <PageHeader title="Teoriprøve practice">
        <TypescriptIcon />
        <TailwindIcon />
        <ReactIcon />
        <NextJSIcon />
      </PageHeader>
    </PageWrapper>
  );
}

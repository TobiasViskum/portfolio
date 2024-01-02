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
          <SectionLayout1 title="Om projektet">
            Dette er mit første projekt i Rust. Rust er et programmeringssprog,
            hvor man, ligesom i C og C++, ikke har garbage collection. Men i
            modsætning til C og C++, så skal man ikke explicit allokere og
            deallokere hukommelse, men man skal følge Rust{"'"}s{" "}
            <a
              href="https://doc.rust-lang.org/book/ch04-01-what-is-ownership.html"
              target="_blank"
              className="link"
            >
              ownership
            </a>{" "}
            regler.
            <br />
            <br />
            Projektet går ud på, at jeg vil lave mit eget interpreted
            programmeringssprog. Derfor skal jeg programmere en interpreter, som
            jeg gør ved at følge bogen:{" "}
            <a
              href="https://craftinginterpreters.com/contents.html"
              target="_blank"
              className="link"
            >
              craftinginterpreters.com
            </a>
            , hvor man bliver guidet igennem processen. Bogen bruger Java som
            programmeringssprog, men da jeg programmerer i Rust, skal jeg selv
            omsætte koden. Derudover tilføjer jeg også nye features som bogen
            ikke gennemgår. Indtil videre er jeg nået til kapitel 10: Functions.
            <br />
            <br />
            Programmeringssproget har allerede features som variabler, ternary
            operator, logical operators, if-statements, while-loops og
            funktioner. Man kan følge med på{" "}
            <a
              href="https://github.com/TobiasViskum/viskum-language"
              target="_blank"
              className="link"
            >
              github.com
            </a>
            , hvor man kan se, hvad programmeringssproget kan indtil videre.
          </SectionLayout1>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

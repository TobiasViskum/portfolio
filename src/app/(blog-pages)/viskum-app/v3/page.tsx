import { V3Login, V3Navigation, V3PwaMobile, previewAppV3 } from "@/assets";
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
            Denne version
          </SectionLayout1>
          <SectionLayout1 title="Nyt framework">
            Det nye framework, som appen blev omskrevet i hedder{" "}
            <a target="_blank" href="https://nextjs.org/" className="link">
              Next.JS
            </a>
            , der fungerer på en helt anden måde. Men for at forstå hvorfor,
            skal det først forklares, hvordan de to første versioner virkede.
            <br />
            <br />I de tidligere to versioner har appen fungeret på den måde, at
            browseren modtager noget javascript og et html-dokument, hvor det
            eneste der er inde i
            <code className="mx-2">
              <span className="text-zinc-700 dark:text-zinc-500">{"<"}</span>
              <span className="text-blue-700 dark:text-blue-500">{"body"}</span>
              <span className="text-zinc-700 dark:text-zinc-500">{">"}</span>
            </code>
            er en div med et id af {'"root"'}:
            <code className="ml-2">
              <span className="text-zinc-700 dark:text-zinc-500">{"<"}</span>
              <span className="text-blue-700 dark:text-blue-500">{"div"}</span>
              <span className="text-blue-500 dark:text-blue-300">{" id"}</span>
              <span className="text-zinc-500 dark:text-zinc-200">{"="}</span>
              <span className="text-amber-500">{'"root"'}</span>
              <span className="text-zinc-700 dark:text-zinc-500">{">"}</span>
              <span className="text-zinc-700 dark:text-zinc-500">{"</"}</span>
              <span className="text-blue-700 dark:text-blue-500">{"div"}</span>
              <span className="text-zinc-700 dark:text-zinc-500">{">"}</span>
            </code>
            . Når så javascripten er downloaded kan resten af siden bygges op
            inde i {'"root"'}.
            <br />
            <br />
            Måden Next.JS virker på minder mere om måden traditionelle web-apps
            virkede på, da browseren nu modtager det færdige html-dokument. Dvs.
            alle queries til databasen er allerede blevet lavet fra serversiden.
            Det låste op for ny muligheder f.eks. et log-ind system:
          </SectionLayout1>
          <SectionLayout2 title="Log-ind system" image={V3Login}>
            I denne version implementerede jeg mit eget log-ind system. Det
            fungerer sådan, at man logger ind, og derefter bærer den ens unikke
            id med rundt i url{"'"}en. Senere gik det op for mig, at man kunne
            bruge cookies for at opnå samme effekt, men da det hele nu afhang af
            id
            {"'"}et i url{"'"}en, så forblev det sådan.
            <br />
            <br />
            <p>
              Email og password: <i>guest123</i>
            </p>
          </SectionLayout2>
          <SectionLayout2
            direction="reverse"
            title="Ny UI - igen"
            image={previewAppV3}
          >
            Med denne version medfuldte endnu en fuld omskrivning af UI{"'"}et
            og denne gang brugte jeg{" "}
            <a target="_blank" href="https://tailwindcss.com/" className="link">
              Tailwind
            </a>
            . Det er nu et mørkt tema
          </SectionLayout2>
          <SectionLayout2 title="Forbedret navigation" image={V3Navigation}>
            sdfj
          </SectionLayout2>
          <SectionLayout2
            title="Kan installeres (PWA)"
            direction="reverse"
            image={V3PwaMobile}
          >
            En anden ny feature ved denne version er muligheden for at
            installere appen. Hvis appen installeres på mobil (iPhone) fås der
            en helt ny unik oplevelse, da der er lavet en specifik UI til netop
            dette.
            <br />
            <br />
            (Installation: <i>Share → Add to Home Screen)</i>
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

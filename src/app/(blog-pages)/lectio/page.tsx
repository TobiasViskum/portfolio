import {
  LectioAllAssignments,
  LectioAssignment,
  LectioLogin,
  LectioMessage,
  LectioModule,
  LectioNewestMessages,
  LectioSchedule,
  previewAppV3,
} from "@/assets";
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
            tilgå og fungere som et alternativ i stedet for Lectio, som man
            kunne bruge i dagligdagen.
          </SectionLayout1>

          <SectionLayout1 title="Sådan virker det">
            Der findes ikke nogen offentlig API til Lectio, og derfor er det
            eksempelvis ikke muligt, at hente alle mulige oplysninger direkte om
            en elev. Derfor benyttes Web Scraping, som i virkeligheden går ud
            på, at jeg laver et request til Lectio med de rigtige cookies, og
            som respons får jeg HTML{"'"}en fra siden jeg requestede. HTML{"'"}
            en gennemgås og oplysningerne, der skal bruges bliver fordelt i
            hashmaps og arrays. Hver eneste gang jeg f.eks. skal bruge et
            billede af en elev bliver billedet konverteret til en base64 string,
            da denne kan direkte renders som et billede.
            <br />
            <br />
            På den måde har jeg altså lavet min egen API til Lectio, og jeg kan
            nu begyndte at lave mine egne Lectio-sider. Men for at hjemmesiden
            skal kunne fungere, skal man også benytte sig af caching, da Lectio
            begrænser antal requests man kan sende. Derfor bruger jeg{" "}
            <a href="https://redis.io" target="_blank" className="link">
              Redis
            </a>
            , som er en database, der lever i hukommelsen, så den er super
            hurtig at få data fra. Derfor vil man opleve, at især
            afleveringssiderne er hurtige, da jeg også pre-cacher nogle af
            afleveringerne.
          </SectionLayout1>
          <SectionLayout1 title="Features">
            Appen har nogle features, men ikke de samme som{" "}
            <a
              href="https://www.lectio.dk/lectio/"
              target="_blank"
              className="link"
            >
              www.lectio.dk
            </a>
            . I det følgende kan der ses de features den har.
          </SectionLayout1>
          <SectionLayout2 title="Log ind" image={LectioLogin}>
            Først og fremmest kan man selvfølgelig logge ind på den rigtige
            uddannelse med sit Lectio login. Sådan bliver de nødvendige
            authentication cookies generet og gemt.
          </SectionLayout2>
          <SectionLayout2
            title="Skema"
            image={LectioSchedule}
            direction="reverse"
          >
            Man kan også se sit skema, som er noget af det vigtigste som elev at
            kunne. Derudover har skemaet også en lækker UI. Man kan se ændrede
            moduler (grønne blokke) og hvis man har et modul aflyst (røde
            blokke).
          </SectionLayout2>
          <SectionLayout2 title="Modul" image={LectioModule}>
            Man kan selvfølgelig også gå ind på hver enkelt modul, for at se
            noter, lektier og øvrigt indhold for netop dette modul. I fremtiden
            skal der også implementeres, så man kan lægge indhold ind på
            elevfeedback (feedback på dagens modul).
          </SectionLayout2>
          <SectionLayout2
            title="Alle afleveringer"
            image={LectioAllAssignments}
            direction="reverse"
          >
            Hjemmesiden giver også overblik over alle afleveringer man har for.
            Jo tættere en aflevering kommer på deadlinen, jo rødere bliver
            markøren til venstre for afleveringsnavnet. Man kan filtrere
            afleveringerne efter: <i>alle, afleveret, venter og mangler.</i>
          </SectionLayout2>
          <SectionLayout2
            title="Bestemt aflevering"
            video="/lectio-add-group-member.mp4"
          >
            Derudover kan man også gå ind på hver enkelt aflevering, hvor man
            kan se alt information om afleveringen. Men man kan også tilføje
            medlemmer, hvis det er en gruppeaflevering, og man kan uploade sin
            besvarelse. Man kan derfor alt det samme
          </SectionLayout2>
          <SectionLayout2
            title="Nyeste beskeder"
            image={LectioNewestMessages}
            direction="reverse"
          >
            Man kan se moduler
          </SectionLayout2>
          <SectionLayout2 title="Læse en besked" image={LectioMessage}>
            Man kan se moduler
          </SectionLayout2>
          <SectionLayout1 title="Der kommer flere features">
            Der kommer flere features. Der er også planer om, at man skal kunne
            få overblik over alle sine lektier på én gang, man skal kunne se sit
            fravær, sine karakterer og lånte bøger. <br />
            Men for nu er jeg også gået i gang med et andet sjovt projekt.
            Nemlig mit eget programmeringssprog, hvor jeg skriver en interpreter
            i{" "}
            <a
              href="https://www.rust-lang.org/"
              target="_blank"
              className="link"
            >
              Rust
            </a>
            .
          </SectionLayout1>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

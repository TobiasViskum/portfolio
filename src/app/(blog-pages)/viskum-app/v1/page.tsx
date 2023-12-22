import { V1Cardio, V1Chat, V1Settings, previewAppV1 } from "@/assets";
import { P } from "@/components/p";
import { PageContentWrapper } from "@/components/page-content-wrapper";
import { PageHeader } from "@/components/page-header";
import { PageWrapper } from "@/components/page-wrapper";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { EXTERNAL_HREF_VISKUM_APP_V1 } from "@/lib/external-href";
import { EXTERNAL_TEXT_VISKUM_APP_V1 } from "@/lib/external-text";
import { CssIcon } from "@/svg/CssIcon";
import { ExpressIcon } from "@/svg/ExpressIcon";
import { JavascriptIcon } from "@/svg/JavascriptIcon";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import Link from "next/link";

export default function ViskumAppV1Page() {
  return (
    <PageWrapper>
      <PageHeader title="Viskum App V1">
        <JavascriptIcon />
        <CssIcon />
        <ReactIcon />
        <ViteIcon />
        <MySQLIcon />
        <ExpressIcon className="dark:fill-white" />
      </PageHeader>
      <PageContentWrapper>
        <div className="space-y-2 border-l py-1 pl-4 text-sm text-foreground ">
          <P className="opacity-80">Begyndelse: 05/09-2022</P>
          <div className="flex gap-x-2">
            <P className="opacity-80">Link:</P>
            <Link
              target="_blank"
              href={EXTERNAL_HREF_VISKUM_APP_V1}
              className="link opacity-100"
            >
              {EXTERNAL_TEXT_VISKUM_APP_V1}
            </Link>
          </div>
        </div>

        <SectionWrapper>
          <SectionLayout1 title="Om appen" id="about">
            Dette er en den første version af Viskum Appen, og projektet blev
            påbegyndt kort efter praktikken. Siden jeg under praktikken lærte
            React fortsatte jeg med det i frontenden. Da jeg også gerne vil
            kunne opbevare user data, så opsatte jeg også en backend, som
            primært består af API-endpoints, der laver queries til en database
            og retunerer data til frontenden.
            <br />
            Appen består af en række features som en fitness-side, en
            cardio-side, en side for at indstille personlige preferencer og en
            chat.
          </SectionLayout1>
          <SectionLayout2 title="Fitness" image={previewAppV1}>
            På fitness-siden kan man tilføje en øvelse og f.eks. kalde den
            &quot;Back Squat&quot; og man kan derefter indtaste hvor meget man
            har løftet. Hvis man har lavet fremskridt over en længere periode,
            kan man trykke på pilen over indstillingknappen, for at se sin
            udvikling.
            <br />
            <br />
            Hvis man trykker på indstillingsknappen har man mulighed for at
            ændre unit på øvelsen, øvelsens navn, tilføje en note eller slette
            øvelsen. Alt bliver gemt og opdateret i databasen!
            <br />
            <br />
            Derudover kan man også filtrere øvelserne mellem dem, som man har
            tilføjet under kategorien &quot;Max&quot; og kategoien
            &quot;Reps&quot;.
          </SectionLayout2>
          <SectionLayout2 title="Cardio" image={V1Cardio} direction="reverse">
            Inde på cardio-siden er princippet meget lignende det på
            fitness-siden. Man kan f.eks. indtaste en tiden det tog for en
            cykeltur og distancen man cyklede, og så vil der beregnes en
            gennemsnitshastighed og derefter gemmes tiden og distancen i
            databasen.
            <br />
            <br />
            På samme måde som på fitness-siden kan man se indstillinger for
            turen og slette den, hvis det er nødvendigt.
            <br />
            <br />
            På denne side er der dog endnu flere muligheder for filtrering! Man
            kan filtere mellem løb, cykel, svømning og for hver kan man også
            filtrere mellem distance og sprint.
          </SectionLayout2>
          <SectionLayout2 title="Chat" image={V1Chat}>
            Jeg lavede også en chat, så man kunne skrive sammen med alle der
            brugte appen. Men da der var et problem med at gemme emojis i
            MySQL-databasen, valgte jeg at konvertere det hele til binary, da
            der på denne måde kunne gemmes emojis. Det blev aldrig færdiggjort,
            og chatten virker derfor ikke mere.
            <br />
            <br />
            Dengang den virkede, kunne det lade sig gøre ved at bruge
            websockets, så der kunne holdes en connection åben mellem server og
            client. På den måde kunne man altid se de nyeste beskeder uden at
            opdatere siden.
          </SectionLayout2>
          <SectionLayout2
            title="Indstillinger"
            direction="reverse"
            image={V1Settings}
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium esse vero deleniti odio ullam porro facilis! Incidunt
            pariatur animi perspiciatis dicta nostrum magni nemo atque.
          </SectionLayout2>
        </SectionWrapper>
      </PageContentWrapper>
    </PageWrapper>
  );
}

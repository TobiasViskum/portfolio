import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { AppVersion } from "./_components/AppVersion";
import { SectionLayout1 } from "@/components/section-layout-1";
import {
  EXTERNAL_HREF_VISKUM_APP_V1,
  EXTERNAL_HREF_VISKUM_APP_V2,
  EXTERNAL_HREF_VISKUM_APP_V3,
} from "@/lib/external-href";
import {
  EXTERNAL_TEXT_VISKUM_APP_V1,
  EXTERNAL_TEXT_VISKUM_APP_V2,
  EXTERNAL_TEXT_VISKUM_APP_V3,
} from "@/lib/external-text";

export default function ViskumAppPage() {
  return (
    <div className="space-y-10">
      <H1>Viskum App</H1>
      {/* <div>
        <H1>Viskum App</H1>
        <div className="flex items-center gap-x-2">
          <TailwindIcon className="scale-75" />
          <ReactIcon />
          <RedisIcon className="ml-1" />
          <MySQLIcon className="mx-2" />
          <ViteIcon />
          <NextJSIcon className="scale-125" />
        </div>
      </div> */}
      <SectionLayout1 title="Om dette projekt">
        {`
        Projektet "Viskum App" er mit første projekt lavet i React. Først blev appen lavet med den idé, at man skulle kunne tracke sine fremskridt i fitness. Senere udviklede appen sig også til, at man kunne tracke sin cardio progress.
        `}
        <br />
        <br />
        {`
        Appen er gået igennem to store rewrites, og derfor er der en version 2 og 3. De to rewrites har handlet om UI, skift fra Javascript til Typescript, omskrivning i et andet framework, ændring af hvordan frontend og backend virker sammen og skift fra standard CSS til Tailwind. Under kan der læses videre om de tre forskellige versioner.
        `}
      </SectionLayout1>
      <H2>Appens versioner</H2>
      <div className="w-full space-y-12">
        <AppVersion
          versionNumber={1}
          externalText={EXTERNAL_TEXT_VISKUM_APP_V1}
          externalHref={EXTERNAL_HREF_VISKUM_APP_V1}
        />
        <AppVersion
          versionNumber={2}
          externalText={EXTERNAL_TEXT_VISKUM_APP_V2}
          externalHref={EXTERNAL_HREF_VISKUM_APP_V2}
        />
        <AppVersion
          versionNumber={3}
          externalText={EXTERNAL_TEXT_VISKUM_APP_V3}
          externalHref={EXTERNAL_HREF_VISKUM_APP_V3}
        />
      </div>
    </div>
  );
}

import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { RedisIcon } from "@/svg/RedisIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import { AppVersion } from "./_components/AppVersion";
import { SectionLayout1 } from "@/components/section-layout-1";
import { NextJSIcon } from "@/svg/NextJSIcon";

export default function ViskumAppPage() {
  return (
    <div className="space-y-10">
      <div>
        <H1 style={{ viewTransitionName: "viskum-app" }}>Viskum App</H1>
        <div className="flex items-center gap-x-2">
          <TailwindIcon className="scale-75" />
          <ReactIcon />
          <RedisIcon className="ml-1" />
          <MySQLIcon className="mx-2" />
          <ViteIcon />
          <div className="block dark:hidden">Next.JS</div>
          <NextJSIcon className="hidden scale-125 dark:block" />
        </div>
      </div>
      <SectionLayout1 title="Om dette projekt">
        Projektet &quot;Viskum App&quot; er mit første projekt lavet i React.
        Først blev appen lavet med idéen om, at man skulle kunne tracke sine
        fremskridt i fitness. Senere udviklede appen sig også til, at man kunne
        tracke sin cardio progress.
        <br />
        <br />
        Appen er gået igennem to store rewrites - derfor er der en version 2 og
        3. De to rewrites har handlet om UI, skift fra javascript til
        typescript, omskrivning i et andet framework, og ændring af hvordan
        frontend og backend virker sammen. Under kan der læses videre og de tre
        forskellige versioner.
      </SectionLayout1>
      <H2>Appens versioner</H2>
      <div className="w-full space-y-12">
        <AppVersion
          versionNumber={1}
          externalText="viskum-app.v1.muksiv.dk"
          externalHref="https://dev01.reactprojects.mywire.org/?profile=d5141240-33e2-4d7a-807e-e5df34b64d71"
        />
        <AppVersion
          versionNumber={2}
          externalText="viskum-app.v2.muksiv.dk"
          externalHref="https://dev02.reactprojects.mywire.org/?profile=d5141240-33e2-4d7a-807e-e5df34b64d71"
        />
        <AppVersion
          versionNumber={3}
          externalText="viskum-app.v3.muksiv.dk"
          externalHref="https://dev05.reactprojects.mywire.org"
        />
      </div>
    </div>
  );
}

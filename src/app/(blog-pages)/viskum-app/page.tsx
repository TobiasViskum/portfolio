import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { P } from "@/components/p";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { RedisIcon } from "@/svg/RedisIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import { AppVersion } from "./_components/AppVersion";

export default function ViskumAppPage() {
  return (
    <div className="space-y-10">
      <div>
        <H1>Viskum App</H1>
        <div className="flex items-center gap-x-2">
          <TailwindIcon className="scale-75" />
          <ReactIcon />
          <RedisIcon className="ml-1" />
          <MySQLIcon className="mx-2" />
          <ViteIcon />
          Next.JS
          {/* <NextJSIcon className="scale-125" /> */}
        </div>
      </div>
      <div className="space-y-2">
        <H2>Om dette projekt</H2>
        <P>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa iusto
          quaerat architecto non excepturi corrupti ratione illo sunt, voluptate
          magnam tempora atque minus placeat soluta odit iste quibusdam
          incidunt. A blanditiis rem, nihil illum perspiciatis incidunt! Dolorem
          et fugiat veritatis.
        </P>
      </div>
      <H2>Appens versioner</H2>
      <div className="justify-left flex w-full flex-wrap gap-4">
        <AppVersion
          versionName="Version 1"
          href="/viskum-app/v1"
          externalText="viskum-app.v1.muksiv.dk"
          externalHref="https://dev01.reactprojects.mywire.org/?profile=d5141240-33e2-4d7a-807e-e5df34b64d71"
        />
        <AppVersion
          versionName="Version 2"
          href="/viskum-app/v2"
          externalText="viskum-app.v2.muksiv.dk"
          externalHref="https://dev02.reactprojects.mywire.org/?profile=d5141240-33e2-4d7a-807e-e5df34b64d71"
        />
        <AppVersion
          versionName="Version 3"
          href="/viskum-app/v3"
          externalText="viskum-app.v3.muksiv.dk"
          externalHref="https://dev05.reactprojects.mywire.org"
        />
      </div>
    </div>
  );
}

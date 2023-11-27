import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { RedisIcon } from "@/svg/RedisIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import { AppVersion } from "./_components/AppVersion";
import { SectionLayout1 } from "@/components/section-layout-1";

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
      <SectionLayout1 title="Om dette projekt">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor
        soluta assumenda ullam laborum ut, excepturi explicabo ea dolore dolorum
        architecto, numquam, debitis aut porro voluptate. Id explicabo porro,
        cumque dolores, cupiditate saepe maiores totam sunt commodi magni
        repudiandae provident?
      </SectionLayout1>
      <H2>Appens versioner</H2>
      <div className="w-full space-y-8">
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

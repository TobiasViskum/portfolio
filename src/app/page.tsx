import { profile } from "@/assets";
import Image from "next/image";
import Project from "./_components/Project";
import { H1 } from "@/components/h1";
import { P } from "@/components/p";

export default function Home() {
  return (
    <main className="flex w-full flex-col items-center px-4">
      <div className="flex w-fit flex-col items-center pb-24 pt-[min(15svh,200px)] text-center ">
        <Image
          priority
          src={profile}
          alt="profile"
          className="profile-blur h-24 w-24 rounded-full"
        />
        <div className="space-y-2">
          <H1 className="text-gradient text-3xl xs:text-4xl md:text-4xl">
            Tobias Tranberg Viskum
          </H1>
          <P className="max-w-md font-medium tracking-tight  [text-wrap:balance]">
            Dette er en hjemmeside, hvor man kan se mine projekter
          </P>
        </div>
      </div>
      <div className="flex w-full flex-col items-center space-y-8">
        <div className="w-full space-y-4 sm:w-[500px]">
          <P>Projekter</P>
          <Project link="/viskum-app" text="Viskum App" />
          <Project
            link="/teoriproeve-practice"
            text="Mini projekt: Teoriprøve practice"
          />
          <Project link="/lectio" text="Lectio Web" />
          <Project
            link="/programmeringssprog-i-rust"
            text="Programmeringssprog i Rust"
          />
        </div>
      </div>
    </main>
  );
}

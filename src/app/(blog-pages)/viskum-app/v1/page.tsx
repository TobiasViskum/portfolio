import { fitnessHomePage } from "@/assets";
import { Button } from "@/components/button";
import { H1 } from "@/components/h1";
import { P } from "@/components/p";
import { SectionLayout1 } from "@/components/section-layout-1";
import { SectionLayout2 } from "@/components/section-layout-2";
import { SectionWrapper } from "@/components/section-wrapper";
import { CssIcon } from "@/svg/CssIcon";
import { JavascriptIcon } from "@/svg/JavascriptIcon";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

export default function ViskumAppV1Page() {
  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <H1>Viskum App V1</H1>

        <div className="flex items-center gap-x-2">
          <JavascriptIcon />
          <CssIcon />
          <ReactIcon />
          <ViteIcon />
          <MySQLIcon />
        </div>
      </div>
      <div className="space-y-4">
        <P className="text-foreground opacity-70">Begyndelse: 05/09-2022</P>
        <SectionWrapper>
          <SectionLayout1 title="Om appen">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            dolor soluta assumenda ullam laborum ut, excepturi explicabo ea
            dolore dolorum architecto, numquam, debitis aut porro voluptate. Id
            explicabo porro, cumque dolores, cupiditate saepe maiores totam sunt
            commodi magni repudiandae provident?
          </SectionLayout1>
          <SectionLayout2 title="Fitness" image={fitnessHomePage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium esse vero deleniti odio ullam porro facilis! Incidunt
            pariatur animi perspiciatis dicta nostrum magni nemo atque.
          </SectionLayout2>
          <SectionLayout2
            title="Fitness"
            image={fitnessHomePage}
            direction="reverse"
          >
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium esse vero deleniti odio ullam porro facilis! Incidunt
            pariatur animi perspiciatis dicta nostrum magni nemo atque. Lorem
            ipsum dolor, sit amet consectetur adipisicing elit. Praesentium esse
            vero deleniti odio ullam porro facilis! Incidunt pariatur animi
            perspiciatis dicta nostrum magni nemo atque. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Praesentium esse vero deleniti
            odio ullam porro facilis! Incidunt pariatur animi perspiciatis dicta
            nostrum magni nemo atque. Lorem ipsum dolor, sit amet consectetur
            adipisicing elit. Praesentium esse vero deleniti odio ullam porro
            facilis! Incidunt pariatur animi perspiciatis dicta nostrum magni
            nemo atque. Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Praesentium esse vero deleniti odio ullam porro facilis!
            Incidunt pariatur animi perspiciatis dicta nostrum magni nemo atque.
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium esse vero deleniti odio ullam porro facilis! Incidunt
            pariatur animi perspiciatis dicta nostrum magni nemo atque.
          </SectionLayout2>
          <SectionLayout2 title="Fitness" image={fitnessHomePage}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium esse vero deleniti odio ullam porro facilis! Incidunt
            pariatur animi perspiciatis dicta nostrum magni nemo atque.
          </SectionLayout2>

          <div className="flex justify-between">
            <Link href="/viskum-app" tabIndex={-1}>
              <Button className="flex w-40 items-center justify-center py-3 pr-6 text-lg font-bold">
                <ChevronLeftIcon className="h-6 w-6" />
                <p>Tilbage</p>
              </Button>
            </Link>

            <Link href="/viskum-app/v2" tabIndex={-1}>
              <Button className="flex w-40 items-center justify-center py-3 pl-6 text-lg font-bold">
                <p>Version 2</p>
                <ChevronRightIcon className="h-6 w-6" />
              </Button>
            </Link>
          </div>
        </SectionWrapper>
      </div>
    </div>
  );
}

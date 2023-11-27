import { fitnessHomePage } from "@/assets";
import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { H3 } from "@/components/h3";
import { P } from "@/components/p";
import { SectionLayout1 } from "@/components/section-layout-1";
import { cn } from "@/lib/utils";
import { MySQLIcon } from "@/svg/MySQLIcon";
import { ReactIcon } from "@/svg/ReactIcon";
import { ViteIcon } from "@/svg/ViteIcon";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ViskumAppV1Page() {
  const buttonTw =
    "flex items-center rounded-lg bg-first text-background py-3 md:py-4 w-fit font-bold text-lg md:text-xl hover:bg-foreground transition-colors";

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <H1>Viskum App V1</H1>
        <div className="flex items-center gap-x-2">
          <ReactIcon />
          <ViteIcon />
          <MySQLIcon />
        </div>
      </div>
      <div className="space-y-2">
        <P className="text-black">Begyndelse: 05/09-2022</P>
        <article className="space-y-20">
          <SectionLayout1 title="Om appen">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam
            dolor soluta assumenda ullam laborum ut, excepturi explicabo ea
            dolore dolorum architecto, numquam, debitis aut porro voluptate. Id
            explicabo porro, cumque dolores, cupiditate saepe maiores totam sunt
            commodi magni repudiandae provident?
          </SectionLayout1>
          <section className="flex flex-col gap-x-4 md:flex-row">
            <Image
              priority
              src={fitnessHomePage}
              width={450}
              height={900}
              alt="img"
              className="rounded-md"
            />
            <div>
              <H3>Fitness</H3>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta consequatur veritatis quod dignissimos, saepe vel delectus
                rem quibusdam neque iure adipisci facilis! Odio, eius.
              </P>
            </div>
          </section>
          <section className="flex flex-col gap-x-4 md:flex-row-reverse">
            <Image
              priority
              src={fitnessHomePage}
              width={450}
              height={900}
              alt="img"
              className="rounded-md"
            />
            <div>
              <H3>Fitness</H3>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta consequatur veritatis quod dignissimos, saepe vel delectus
                rem quibusdam neque iure adipisci facilis! Odio, eius.
              </P>
            </div>
          </section>
          <section className="flex flex-col gap-x-4 md:flex-row">
            <Image
              priority
              src={fitnessHomePage}
              width={450}
              height={900}
              alt="img"
              className="rounded-md"
            />
            <div>
              <H3>Fitness</H3>
              <P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum
                dicta consequatur veritatis quod dignissimos, saepe vel delectus
                rem quibusdam neque iure adipisci facilis! Odio, eius.
              </P>
            </div>
          </section>
          <div className="flex justify-between">
            <Link
              href="/viskum-app"
              className={cn(
                buttonTw,
                "justify-start pl-4 pr-6 md:pl-6 md:pr-8",
              )}
            >
              <ChevronLeftIcon className="h-6 w-6" />
              <p>Tilbage</p>
            </Link>
            <Link
              href="/viskum-app/v2"
              className={cn(buttonTw, "justify-end pl-6 pr-4 md:pl-8 md:pr-6")}
            >
              <p>Version 2</p>
              <ChevronRightIcon className="h-6 w-6" />
            </Link>
          </div>
        </article>
      </div>
    </div>
  );
}

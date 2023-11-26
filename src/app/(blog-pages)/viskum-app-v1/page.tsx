import { fitnessHomePage } from "@/assets/viskum-app-v1";
import { H1 } from "@/components/h1";
import { H2 } from "@/components/h2";
import { H3 } from "@/components/h3";
import { P } from "@/components/p";
import { cn } from "@/lib/utils";
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import Link from "next/link";

export default function ViskumAppProjectPage() {
  const buttonTw =
    "flex items-center rounded-lg bg-blue-600 py-3 md:py-4 w-fit text-white font-bold text-lg md:text-xl";

  return (
    <div className="space-y-2 pb-24">
      <div className="space-y-6">
        <H1>Viskum App</H1>
        <P className="text-black">Begyndelse: 05/09-2022</P>
      </div>
      <article className="space-y-12">
        <section className="space-y-4">
          <H2>Om appen</H2>
          <P className="xs:text-base text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid,
            libero! Minima, optio et voluptatem voluptate incidunt accusamus
            accusantium rerum! Dolores mollitia vero facilis tempora
            voluptatibus.
          </P>
        </section>
        <section className="flex flex-col gap-x-4 md:flex-row">
          <Image
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
            href="/"
            className={cn(buttonTw, "justify-start pl-4 pr-6 md:pl-6 md:pr-8")}
          >
            <ChevronLeftIcon className="h-6 w-6" />
            <p>Tilbage</p>
          </Link>
          <Link
            href="/viskum-app-v2"
            className={cn(buttonTw, "justify-end pl-6 pr-4 md:pl-8 md:pr-6")}
          >
            <p>Videre</p>
            <ChevronRightIcon className="h-6 w-6" />
          </Link>
        </div>
      </article>
    </div>
  );
}

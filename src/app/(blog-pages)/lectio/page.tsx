import { H1 } from "@/components/h1";
import { SectionLayout1 } from "@/components/section-layout-1";
import { ReactIcon } from "@/svg/ReactIcon";
import { RedisIcon } from "@/svg/RedisIcon";
import { TailwindIcon } from "@/svg/TailwindIcon";

export default function LectioPage() {
  return (
    <div className="space-y-8 md:space-y-12">
      <div className="space-y-1">
        <H1>Lectio</H1>
        <div className="flex items-center gap-x-2">
          <TailwindIcon className="scale-75" />
          <ReactIcon />
          <RedisIcon className="ml-1" />
          Next.JS
          {/* <NextJSIcon className="scale-125" /> */}
        </div>
      </div>
      <SectionLayout1 title="Inspiration">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor
        soluta assumenda ullam laborum ut, excepturi explicabo ea dolore dolorum
        architecto, numquam, debitis aut porro voluptate. Id explicabo porro,
        cumque dolores, cupiditate saepe maiores totam sunt commodi magni
        repudiandae provident?
      </SectionLayout1>

      <SectionLayout1 title="Om projektet">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor
        soluta assumenda ullam laborum ut, excepturi explicabo ea dolore dolorum
        architecto, numquam, debitis aut porro voluptate. Id explicabo porro,
        cumque dolores, cupiditate saepe maiores totam sunt commodi magni
        repudiandae provident?
      </SectionLayout1>
      <SectionLayout1 title="Sådan virker det">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor
        soluta assumenda ullam laborum ut, excepturi explicabo ea dolore dolorum
        architecto, numquam, debitis aut porro voluptate. Id explicabo porro,
        cumque dolores, cupiditate saepe maiores totam sunt commodi magni
        repudiandae provident?
      </SectionLayout1>
      <SectionLayout1 title="Features">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quisquam dolor
        soluta assumenda ullam laborum ut, excepturi explicabo ea dolore dolorum
        architecto, numquam, debitis aut porro voluptate. Id explicabo porro,
        cumque dolores, cupiditate saepe maiores totam sunt commodi magni
        repudiandae provident?
      </SectionLayout1>
    </div>
  );
}

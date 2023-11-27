import { Boxes, Home, AxeIcon } from "lucide-react";
import { ItemExpand } from "./ItemExpand";
import { ItemNoExpand } from "./ItemNoExpand";
import { Wrapper } from "./Wrapper";

export function Sidebar() {
  return (
    <Wrapper>
      <ItemNoExpand text="Hjem" href="/" Icon={<Home />} />
      <ItemExpand
        title="Projekter"
        options={[
          {
            text: "Viskum App",
            href: "/viskum-app",
          },
          {
            text: "Lectio",
            href: "/lectio",
          },
        ]}
        Icon={<Boxes />}
      />
    </Wrapper>
  );
}

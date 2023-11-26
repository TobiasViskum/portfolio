import { ItemExpand } from "./ItemExpand";
import { ItemNoExpand } from "./ItemNoExpand";
import { Wrapper } from "./Wrapper";

export function Sidebar() {
  return (
    <Wrapper>
      <ItemNoExpand text="Hjem" href="/" />
      <ItemExpand
        options={[
          {
            text: "Viskum App",
            href: "/viskum-app",
          },
          {
            text: "Projekt 2",
            href: "/",
          },
          {
            text: "Projekt 3",
            href: "/",
          },
          {
            text: "Projekt 4",
            href: "/",
          },
        ]}
      />
      <ItemNoExpand text="Hjem" href="/" />
    </Wrapper>
  );
}

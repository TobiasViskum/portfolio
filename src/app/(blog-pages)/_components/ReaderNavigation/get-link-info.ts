export function getLinkInfo(path: string) {
  let backInfo = {
    href: "",
    text: "",
  };
  let nextInfo = {
    href: "",
    text: "",
  };

  if (path == "/viskum-app") {
    nextInfo = {
      href: "/viskum-app/v1",
      text: "Version 1",
    };
    backInfo = {
      href: "/",
      text: "Hjem",
    };
  } else if (path == "/viskum-app/v1") {
    backInfo = {
      href: "/viskum-app",
      text: "Tilbage",
    };
    nextInfo = {
      href: "/viskum-app/v2",
      text: "Version 2",
    };
  } else if (path == "/viskum-app/v2") {
    backInfo = {
      href: "/viskum-app/v1",
      text: "Version 1",
    };
    nextInfo = {
      href: "/viskum-app/v3",
      text: "Version 3",
    };
  } else if (path == "/viskum-app/v3") {
    backInfo = {
      href: "/viskum-app/v2",
      text: "Version 2",
    };
    nextInfo = {
      href: "/lectio",
      text: "Lectio",
    };
  } else if (path == "/lectio") {
    backInfo = {
      href: "/viskum-app/v3",
      text: "Tilbage",
    };
    nextInfo = {
      href: "/lectio",
      text: "Lectio",
    };
  }

  return { backInfo, nextInfo };
}

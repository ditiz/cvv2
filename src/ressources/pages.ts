export interface Page {
  key: string;
  name: string;
  url: string;
  otherUrls?: string[];
}

const pages: Page[] = [
  {
    key: "01",
    name: "Skills",
    url: "/Skills",
    otherUrls: ["/"],
  },
  {
    key: "02",
    name: "Experiences",
    url: "/Experiences",
  },
  {
    key: "03",
    name: "Formations",
    url: "/Formations",
  },
  {
    key: "04",
    name: "Projets",
    url: "/Projets",
  },
];

export default pages;

import workPearson from "../assets/images/work-pearson-authoring-tool.jpg";
import workValimail from "../assets/images/work-valimail-enforce.jpg";
import workPlaystation from "../assets/images/work-playstation-home.jpg";
import experimentBronte from "../assets/images/experiment-bronte.jpg";
import experimentFantasyHockey from "../assets/images/experiment-fantasy-hockey.jpg";
import experimentPhotoGenerator from "../assets/images/experiment-photo-generator.png";

export type Metric = { value: string; label: string; org: string };
export type WorkItem = {
  org: string;
  title: string;
  description: string;
  image: string;
  href: string;
};
export type Experiment = {
  title: string;
  description: string;
  image: string;
  href: string;
};

export const metrics: Metric[] = [
  {
    value: "$300M+",
    label: "Annual digital revenue",
    org: "PEARSON",
  },
  {
    value: "$2M",
    label: "New revenue generated",
    org: "Valimail",
  },
  {
    value: "350%",
    label: "Revenue growth",
    org: "PlayStation",
  },
];

export const workItems: WorkItem[] = [
  {
    org: "Pearson",
    title: "Transforming Content Production",
    description:
      "End-to-end platform redesign powering $300M+ in annual digital revenue",
    image: workPearson,
    href: "/work/pearson",
  },
  {
    org: "Valimail",
    title: "Setting a Foundation for Growth",
    description:
      "Implementing a user-driven design process for safer online communication",
    image: workValimail,
    href: "/work/valimail",
  },
  {
    org: "Playstation",
    title: "Saving a Brand Under Crisis",
    description: "An all-new purchase and download experience on console",
    image: workPlaystation,
    href: "/work/playstation",
  },
];

export const experiments: Experiment[] = [
  {
    title: "Bronte Content Organization",
    description:
      "A prototype for organizing and managing content and an RBAC system to manage individuals’ access within workspaces, projects, and features.",
    image: experimentBronte,
    href: "https://bronte.trevorishere.com",
  },
  {
    title: "Fantasy Hockey Draft List Generator",
    description:
      "A personal research tool for my 2026 NHL playoffs fantasy draft—pick the winning teams in each round and your draft list is automatically created.",
    image: experimentFantasyHockey,
    href: "https://playoffs26.trevorishere.com",
  },
  {
    title: "Photo Generator",
    description:
      "I didn’t like having to subscribe or pay for these tools so I made my own.",
    image: experimentPhotoGenerator,
    href: "https://trevorishere.github.io/falphotoapp/",
  },
];

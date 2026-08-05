import projectDashboard from "../assets/images/case-studies/project-dashboard.jpg";
import dashboardSidebar from "../assets/images/case-studies/dashboard-sidebar.jpg";
import themes from "../assets/images/case-studies/themes.jpg";
import visualTemplates from "../assets/images/case-studies/visual-templates.jpg";
import valimailBefore from "../assets/images/case-studies/valimail-before.png";
import valimailDefendAfter from "../assets/images/case-studies/valimail-defend-after.png";
import valimailEnforceAfter from "../assets/images/case-studies/valimail-enforce-after.png";
import valimailWireframe from "../assets/images/case-studies/valimail-wireframe.png";
import psStoreHome from "../assets/images/case-studies/ps-store-home.jpg";
import psMosaicTiles from "../assets/images/case-studies/ps-mosaic-tiles.jpg";
import psBrandedCarousel from "../assets/images/case-studies/ps-branded-carousel.jpg";
import psContentGrid from "../assets/images/case-studies/ps-content-grid.jpg";
import psBrandedContentGrid from "../assets/images/case-studies/ps-branded-content-grid.jpg";
import psProductDetail from "../assets/images/case-studies/ps-product-detail.jpg";

export type Stat = { value: string; label: string };
export type OverviewItem = { caption: string; image: string };

export type CaseStudy = {
  slug: string;
  org: string;
  titleLines: string[];
  subtitle: string;
  description: string;
  stats: Stat[];
  overview: OverviewItem[];
  quote: { text: string; attribution: string };
};

export const caseStudies: CaseStudy[] = [
  {
    slug: "pearson",
    org: "Pearson",
    titleLines: ["Transforming", "Content Production"],
    subtitle: "End-to-end platform redesign powering $300M+ in annual digital revenue",
    description:
      "Pearson acquired a content authoring platform to digitize their higher ed textbook library—serving millions of students—to transition towards AI-assisted learning tools and production methods. The platform had potential but was without a design system, creating an unnecessary complicated user experience alongside fewer platform updates because of a spiraling library of components and interactions. This redesign initiative, spearheaded by my design team, earned executive support and funding through evidence-based research and transformed Design from a service function to trusted partner via rapid prototyping, and user testing to overturn what was previously thought of as 'out of scope'. Our user-centered approach effectively addressed the challenges of keeping a high volume production pipeline operational while refactoring its workflow for AI-powered tools.",
    stats: [
      { value: "30%", label: "Reduction in title production time" },
      { value: "100%", label: "Adoption by production teams" },
      { value: "42%", label: "Increase in student engagement" },
    ],
    overview: [
      { caption: "Canvas overview", image: projectDashboard },
      { caption: "Contextual menus for admin functions", image: dashboardSidebar },
      { caption: "'Themes': one-click bundled design features", image: themes },
      {
        caption: "e-Text templates: a complete out-of-the-box design solution",
        image: visualTemplates,
      },
    ],
    quote: {
      text: "It's so much easier to go between disciplines and create projects now.",
      attribution: "Sarah Peterson, Content Director",
    },
  },
  {
    slug: "valimail",
    org: "valimail",
    titleLines: ["Setting a Foundation", "For Growth"],
    subtitle:
      "Transforming a high-touch managed security service into a self-service SaaS platform",
    description:
      "At Valimail, I redesigned complex email authentication workflows into an intuitive self-service B2B platform while introducing the company's first design system. The redesign transformed highly technical configurations (DMARC, SPF, DKIM) into an accessible interface for non-technical users, while the design system established consistent patterns and components across the entire product suite. This foundation reduced design-to-development handoff time by 90%, enabled white-labeling that unlocked 6 enterprise deals, and set the stage for rapid scaling. The results were significant: the self-service platform generated $2M in new revenue and drove 120% growth in product sales within one quarter of launch.",
    stats: [
      { value: "$2M", label: "In new revenue" },
      { value: "6", label: "Enterprise deals unlocked via white-labeling" },
      { value: "80%", label: "Design > Dev handoff time reduction" },
    ],
    overview: [
      { caption: "Before design system implementation", image: valimailBefore },
      { caption: "Valimail Defend after system implementation", image: valimailDefendAfter },
      {
        caption: "Valimail Enforce after design system implemenation",
        image: valimailEnforceAfter,
      },
      { caption: "Wireframe for automated self-service application", image: valimailWireframe },
    ],
    quote: {
      text: "The platform offers a user-friendly interface that makes it easy to manage email domains and policies.",
      attribution: "Nick S., IT Manager",
    },
  },
  {
    slug: "playstation",
    org: "playstation store",
    titleLines: ["Saving a Brand", "Under Crisis"],
    subtitle: "Redesigned the PlayStation Store in 9 months to build a digital revenue channel",
    description:
      "When Sony Interactive Entertainment needed a digital revenue channel in nine months or risk losing the PlayStation brand entirely, I led the redesign of the PlayStation Store — managing seven designers across the US and Japan, hiring four of them in a single quarter, and aligning three global business units around a single modular system. The old store was rigid and impossible to merchandise without engineering support; the new one gave business teams a flexible framework of tiles, grids, and carousels that could promote any content, at any scale, without touching a line of code. In Year 1, digital game revenue grew 350% and PS Plus subscriptions grew 115%. The design framework outlasted the project — it informed the PS4 console UI, shaped PlayStation's visual identity for a generation, and remains in use across subsequent console generations.",
    stats: [
      { value: "350%", label: "Increase in digital game revenue, Year 1" },
      { value: "115%", label: "Growth in PS Plus subscriptions" },
      { value: "PS4, PS5", label: "Design framework currently active on consoles" },
    ],
    overview: [
      { caption: "Store home with slideout navigation", image: psStoreHome },
      { caption: "Over a hundred layouts were created with a 'mosaic' tile system", image: psMosaicTiles },
      { caption: "Branded carousel", image: psBrandedCarousel },
      { caption: "Content grid created on metadata values", image: psContentGrid },
      { caption: "Branded content grid", image: psBrandedContentGrid },
      { caption: "Product detail page", image: psProductDetail },
    ],
    quote: {
      text: "The PlayStation Store on PlayStation 4 is far and away the best iteration of the store yet.",
      attribution: "Engadget",
    },
  },
];

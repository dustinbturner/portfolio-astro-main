import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",

      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/",
        },
      ],
    },
    {
      title: "Documentation",

      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
        },
        {
          title: "Components",
          href: "/docs/documentation/components",
        },

        {
          title: "Search (Fuse.js)",
          href: "/docs/in-progress",
        },
      ],
    },
    {
      title: "Pages",
      items: [
        {
          title: "Landing",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Wait List",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Data Science",
      items: [
        {
          title: "Get Started",
          href: "/docs/data-science/in-progress",
        },
        {
          title: "Changelog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Wait List",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Examples",
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: "Blog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Docs & projects",
          href: "/docs/in-progress",
          disabled: true,
        },

        {
          title: "Ecommerce",
          href: "/docs/in-progress",
          disabled: true,
        },

        {
          title: "Authentification (Lucia)",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
  ],
};

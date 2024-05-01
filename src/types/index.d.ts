export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
};
export type MenuItem = NavItem & {
  image?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;

  forceReload?: boolean;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  id?: string;
  title: string;
  disabled?: boolean;
  external?: boolean;
} & (
  | {
      href?: never;
      items: MenuItem[];
    }
  | {
      href: string;
      items?: never;
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    twitter: string;
    github: string;
    kaggle: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type NavMenuConfig = {
  links: MenuItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
};

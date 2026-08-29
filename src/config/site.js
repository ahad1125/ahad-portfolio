import { USER } from "@/portfolio/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: import.meta.env.VITE_APP_URL || import.meta.env.APP_URL || "https://ahad-portfolio-xi.vercel.app",
  ogImage: USER.ogImage,
  description: USER.bio,
  keywords: USER.keywords,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const MAIN_NAV = [
  {
    title: "home",
    href: "/",
  },
  {
    title: "projects",
    href: "/projects",
  },
  {
    title: "contact",
    href: "/contact",
  },
];

export const GITHUB_USERNAME = "ahad1125";
export const SOURCE_CODE_GITHUB_REPO =
  "ahad1125/ahad-portfolio";
export const SOURCE_CODE_GITHUB_URL =
  "https://github.com/ahad1125/ahad-portfolio";

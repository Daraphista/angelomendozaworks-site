export type WebsitePortfolioItem = {
  slug: string;
  name: string;
  niche: string;
  url: string;
  video: { mp4: string; webm: string; poster: string };
};

// Previews are 9:16 muted loops: a tall desktop capture of each live site.
export const WEBSITE_PORTFOLIO: WebsitePortfolioItem[] = [
  {
    slug: "chloe-kristine",
    name: "Chloe Kristine",
    niche: "Real Estate · Kansas City",
    url: "https://chloekristine.angelomendozaworks.com",
    video: {
      mp4: "/portfolio/websites/chloe-kristine.mp4",
      webm: "/portfolio/websites/chloe-kristine.webm",
      poster: "/portfolio/websites/chloe-kristine.jpg",
    },
  },
];

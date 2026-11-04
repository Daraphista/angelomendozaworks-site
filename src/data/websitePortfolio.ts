export type WebsitePortfolioItem = {
  slug: string;
  name: string;
  niche: string;
  url: string;
  /** Still image, used as the video poster or on its own when there is no video. */
  poster: string;
  video?: { mp4: string; webm: string };
};

// Previews are 9:16 muted loops: a tall desktop capture of each live site.
export const WEBSITE_PORTFOLIO: WebsitePortfolioItem[] = [
  {
    slug: "chloe-kristine",
    name: "Chloe Kristine",
    niche: "Real Estate · Kansas City",
    url: "https://chloekristine.angelomendozaworks.com",
    poster: "/portfolio/websites/chloe-kristine.jpg",
    video: {
      mp4: "/portfolio/websites/chloe-kristine.mp4",
      webm: "/portfolio/websites/chloe-kristine.webm",
    },
  },
  {
    slug: "dejone-watts",
    name: "DeJone Watts",
    niche: "Real Estate · Fresno & Central Valley",
    url: "https://dejonewatts.angelomendozaworks.com",
    poster: "/portfolio/websites/dejone-watts.jpg",
    video: {
      mp4: "/portfolio/websites/dejone-watts.mp4",
      webm: "/portfolio/websites/dejone-watts.webm",
    },
  },
  {
    slug: "amanda-bracero-torres",
    name: "Amanda Bracero-Torres",
    niche: "Real Estate · Tampa Bay",
    url: "https://amandabracerotorres.angelomendozaworks.com",
    poster: "/portfolio/websites/amanda-bracero-torres.jpg",
    video: {
      mp4: "/portfolio/websites/amanda-bracero-torres.mp4",
      webm: "/portfolio/websites/amanda-bracero-torres.webm",
    },
  },
  {
    slug: "modify-medspa",
    name: "Modify Medspa",
    niche: "Medical Spa · New York",
    url: "https://modifymedspa.angelomendozaworks.com",
    poster: "/portfolio/websites/modify-medspa.jpg",
  },
];

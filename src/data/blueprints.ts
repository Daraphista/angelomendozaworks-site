export type BlueprintCard = {
  heading: string;
  niche: string;
  icon: string;
  cardTitle: string;
  sections: string[];
  previewHeadline: string;
};

export const WEBSITE_BLUEPRINTS: BlueprintCard[] = [
  {
    heading: "Law Website Blueprint!",
    niche: "Law",
    icon: "gavel",
    cardTitle: "Law Website Design Blueprint",
    sections: [
      "Navbar",
      "Hero / Header",
      "Reviews / Case Results",
      "Trust Badges",
      "Practice Areas",
      "About Us",
      "Call To Action",
      "Footer",
    ],
    previewHeadline: "STOP LOSING CASES TO WEBSITES THAT DON'T CONVERT",
  },
  {
    heading: "Roofing Website Blueprint!",
    niche: "Roofing",
    icon: "roofing",
    cardTitle: "Roofing Website Design Blueprint",
    sections: [
      "Navbar",
      "Hero / Header",
      "Reviews / Project Gallery",
      "Trust Badges",
      "Services",
      "About Us",
      "Call To Action",
      "Footer",
    ],
    previewHeadline: "FILL YOUR CALENDAR THIS STORM SEASON",
  },
  {
    heading: "Painting Website Blueprint!",
    niche: "Painting",
    icon: "format_paint",
    cardTitle: "Painting Website Design Blueprint",
    sections: [
      "Navbar",
      "Hero / Header",
      "Reviews / Before & After",
      "Trust Badges",
      "Services",
      "About Us",
      "Call To Action",
      "Footer",
    ],
    previewHeadline: "BOOK MORE PAINTING JOBS ON AUTOPILOT",
  },
];

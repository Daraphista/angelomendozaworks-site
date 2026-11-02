export type BlueprintCard = {
  heading: string;
  icon: string;
  cardTitle: string;
  sections: string[];
  previewHeadline: string;
};

export const WEBSITE_BLUEPRINTS: BlueprintCard[] = [
  {
    heading: "Law Website Blueprint!",
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
    previewHeadline: "INJURY LAWYERS WHO FIGHT FOR YOU",
  },
  {
    heading: "Roofing Website Blueprint!",
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
    previewHeadline: "ROOFING REPAIRS DONE RIGHT, GUARANTEED",
  },
  {
    heading: "Painting Website Blueprint!",
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
    previewHeadline: "PAINTING PROS TRUSTED BY YOUR NEIGHBORS",
  },
];

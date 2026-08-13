export type OlympicFeature = {
  title: string;
  description: string;
  image: string;
};

/** Feature cards on /olympic-games-paris-2024, shared with its .md version. */
export const featureList: OlympicFeature[] = [
  {
    title: "Real-time event schedules",
    description:
      "Always know when your favorite sports and athletes are competing",
    image:
      "https://framerusercontent.com/images/sWaWrH2jKr1uOxf5ehS2xQuy8.webp",
  },
  {
    title: "Video highlights",
    description:
      "Relive the most jaw-dropping moments and awe-inspiring performances",
    image:
      "https://framerusercontent.com/images/oESUr3aGwgxjWKXU0W9chd34I.webp",
  },
  {
    title: "Live medal tracking",
    description:
      "Stay on top of the medal count and see which countries are dominating the Games",
    image:
      "https://framerusercontent.com/images/PA7tvndEv7wdLEzxzVgIVlPDZJo.webp",
  },
  {
    title: "Global fan chat",
    description:
      "Connect with passionate fans worldwide to share your excitement, predictions, and reactions",
    image: "/olympic-games/chat-ss.png",
  },
];

import { useState } from "react";
import { Header } from "./components/header";
import { HeroSection } from "./components/hero-section";
import { TagList } from "./components/tag-list";

export default function App() {
  const [trendingTags] = useState<string[]>([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  const [personalizedTags] = useState<string[]>([
    "NFT",
    "Metaverse",
    "Sustainable",
    "Sonder",
    "FOMO",
    "Ghosting",
  ]);

  return (
    <main className="bg-[#121417] min-h-screen text-white flex flex-col items-center w-full">
      <Header />
      <div className="max-w-[960px]">
        <HeroSection />
        <TagList title="Trending" tags={trendingTags} />
        <TagList title="For you" tags={personalizedTags} />
      </div>
    </main>
  );
}

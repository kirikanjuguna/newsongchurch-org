import Hero from "@/components/Hero";
import HomeHighlights from "@/components/HomeHighlights";
import BibleVerse from "@/components/BibleVerse";
import LatestNews from "@/components/LatestNews";
import LatestWork from "@/components/LatestWork";

export default function Home() {
  return (
    <main>
      <Hero />
      <HomeHighlights />
      <BibleVerse />
      <LatestNews />
      <LatestWork />
    </main>
  );
}

import MobileLegends from "./components/homepage/mobile-legends";
import Basketball from "./components/homepage/basketball";
import Volleyball from "./components/homepage/volleyball";
import Hero from "./components/homepage/hero";

export default function Home() {
  return (
    <main className="flex flex-col w-full items-center">
      <Hero />
      <div className="flex flex-col gap-8 my-8">
        <MobileLegends />
        <Basketball />
        <Volleyball />
      </div>
    </main>
  );
}

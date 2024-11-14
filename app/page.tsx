import Hero from "./components/homepage/hero";
import Tile from "./components/homepage/tile";
import { promises as fs } from "fs";

export interface Content {
  title: string;
  description: string;
  image: string;
  link: string;
}

export default async function Home() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/content.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <main className="flex flex-col w-full items-center">
      <Hero />

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[250px] grid-flow-dense text-white w-full px-6 py-6">
        {data.content.map(function (single: Content, index: number) {
          return <Tile key={index} single={single} />;
        })}
      </div>
    </main>
  );
}

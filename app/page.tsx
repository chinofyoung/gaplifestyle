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
    <main className="flex flex-col w-full items-center pb-12">
      <Hero />
      {/* <div className="flex flex-col gap-8 my-8">
        <MobileLegends />
        <Basketball />
        <Volleyball />
      </div> */}

      <div className="grid gap-6 grid-cols-[repeat(auto-fit,minmax(250px,1fr))] auto-rows-[250px] grid-flow-dense text-white w-full px-6">
        {/* <div className="bg-red-500 row-span-2 rounded-3xl">asdkaa</div>
        <div className="bg-white col-span-2 rounded-3xl">asdkaa</div>
        <div className="bg-pink-500 row-span-2 col-span-2 rounded-3xl" rounded-3xl>
          asdkaa
        </div>
        <div className="bg-blue-500 col-span-3 row-span-2 rounded-3xl">asdkaa</div>
        <div className="bg-green-500 rounded-3xl">asdkaa</div>
        <div className="bg-blue-500 rounded-3xl">asdkaa</div>
        <div className="bg-lime-500 col-span-2 rounded-3xl">asdkaa</div>
        <div className="bg-yellow-500 col-span-2 rounded-3xl">asdkaa</div> */}

        {data.content.map(function (single: Content, index: number) {
          return <Tile key={index} single={single} />;
        })}
      </div>
    </main>
  );
}

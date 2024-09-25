import Image from "next/image";
import Hero from "./hero";
import Players from "./players";

export default function MobileLegends() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-8 bg-slate-800 text-white">
      <Hero />
      <div className="w-full max-w-7xl">
        <Players />
      </div>
    </section>
  );
}

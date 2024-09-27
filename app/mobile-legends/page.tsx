import Hero from "./hero";
import Players from "./players";
import Matches from "./matches";

export default function MobileLegends() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-8 bg-slate-100">
      <Hero />
      <div className="w-full flex flex-col gap-24 max-w-7xl">
        <Players />
        <Matches />
      </div>
    </section>
  );
}

import * as contentful from "contentful";
import Image from "next/image";
import Hero from "./hero";

const players = [
  {
    firstname: "Jenerey",
    lastname: "Añover",
    ign: "Javan",
    role: "",
    captain: true,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/jenerey-anover.webp",
  },
  {
    firstname: "Lyser",
    lastname: "Gagarin",
    ign: "+ris+an",
    role: "",
    captain: false,
    pic: "https://images2.goabroad.com/image/upload/images2/aboutUs/meetTheTeam/lyser-1529649990.webp",
  },
];

export default function MobileLegends() {
  return (
    <section className="w-full flex justify-center items-center flex-col gap-8">
      <Hero />
      <div className="w-full max-w-7xl">
        <div className="flex flex-col gap-4 mb-8">
          <h2 className="font-bold uppercase text-[80px]">Teams</h2>

          <div className="grid grid-cols-3">
            <div className="flex gap-4 flex-col">
              <h3 className="font-bold text-3xl uppercase">Team 1</h3>

              <div className="flex flex-col items-start gap-2 text-xl">
                {players.map(function (player, index) {
                  return (
                    <div className="flex bg-slate-900 text-white">
                      <Image
                        src={player.pic}
                        width={50}
                        height={50}
                        alt={player.firstname}
                      />
                      <span className="flex items-center px-4 font-bold">
                        {player.firstname +
                          ' "' +
                          player.ign +
                          '" ' +
                          player.lastname}
                      </span>
                      {player.captain && (
                        <span className="bg-roman-500 px-2 font-black flex items-center">
                          Capt.
                        </span>
                      )}
                    </div>
                  );
                })}
                <span>GL</span>
                <span>Kurt</span>
                <span>Rex</span>
                <span>Getty</span>
              </div>
            </div>

            <div>
              <h3>Team 2</h3>
              <span>Jezi</span>
              <span>JV</span>
              <span>Abi TG</span>
              <span>Carlo</span>
              <span>Chino</span>
              <span>Jason</span>
              <span>Mariam</span>
            </div>

            <div>
              <h3>Team 3</h3>
              <span>Ivan</span>
              <span>Ian</span>
              <span>John</span>
              <span>Rose</span>
              <span>EJ</span>
              <span>Fred</span>
              <span>Lorraine</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

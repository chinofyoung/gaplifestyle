import { promises as fs } from "fs";
import Image from "next/image";

export interface Player {
  pic: string;
  firstName: string;
  lastName: string;
  ign: string;
  role: string;
}

export default async function Players() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/ml-players.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <h2 className="font-bold uppercase text-[80px] leading-[70px]">
        Players
      </h2>

      <div className="flex flex-col gap-12">
        <div className="flex gap-4 flex-col">
          <div className="flex items-center bg-slate-200 gap-4 justify-start rounded-md overflow-hidden pr-4 w-[300px]">
            <Image
              src="/assets/2ez4jiniri.png"
              width={50}
              height={50}
              alt="Team logo"
              className=""
            />
            <span className="text-3xl font-bold text-neutral-800">JGGLRCK</span>
          </div>

          <div className="grid grid-cols-4 items-start gap-2 text-xl">
            {data.aplayers.map(function (player: Player, index: number) {
              return (
                <div className="flex bg-slate-700 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 text-base font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4 w-[180px]">
            <Image
              src="/assets/json.png"
              width={50}
              height={50}
              alt="Team logo"
              className=""
            />
            <span className="text-3xl font-bold text-neutral-800">j.son()</span>
          </div>
          <div className="grid grid-cols-4 items-start gap-2 text-xl">
            {data.bplayers.map(function (player: Player, index: number) {
              return (
                <div className="flex bg-amber-500 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 text-base font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4 w-[150px]">
            <Image
              src="/assets/sting.png"
              width={50}
              height={50}
              alt="Team logo"
              className=""
            />
            <span className="text-3xl font-bold text-neutral-800">Sting</span>
          </div>

          <div className="grid grid-cols-4 items-start gap-2 text-xl">
            {data.cplayers.map(function (player: Player, index: number) {
              return (
                <div className="flex bg-cyan-900 text-white" key={index}>
                  {player.pic && (
                    <Image
                      src={player.pic}
                      width={50}
                      height={50}
                      alt={player.firstName}
                      className="object-cover w-[50px] h-[50px]"
                    />
                  )}
                  {player.firstName && (
                    <span className="flex items-center px-4 text-base font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

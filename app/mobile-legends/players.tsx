import { promises as fs } from 'fs';
import Image from "next/image";

export default async function Players() {
  const file = await fs.readFile(process.cwd() + '/app/data/ml-players.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <h2 className="font-bold uppercase text-[80px] leading-[70px]">Teams</h2>

      <div className="grid grid-cols-3">
        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">2ez4jiniri</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {data.aplayers.map(function (player, index) {
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
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">j.son()</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {data.bplayers.map(function (player, index) {
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
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex gap-4 flex-col">
          <h3 className="font-bold text-3xl uppercase">Sting</h3>

          <div className="flex flex-col items-start gap-2 text-xl">
            {data.cplayers.map(function (player, index) {
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
                    <span className="flex items-center px-4 font-bold">
                      {player.firstName +
                        ' "' +
                        player.ign +
                        '" ' +
                        player.lastName}
                    </span>
                  )}
                  {player.captain && (
                    <span className="bg-roman-500 px-2 font-black flex items-center"></span>
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

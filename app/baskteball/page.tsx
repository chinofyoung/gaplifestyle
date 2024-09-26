import { promises as fs } from 'fs';
import Image from "next/image";

export default async function Page() {
  const file = await fs.readFile(process.cwd() + '/app/data/ml-players.json', 'utf8');
  const data = JSON.parse(file);

  return (
    <div>
        test
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
  );
}
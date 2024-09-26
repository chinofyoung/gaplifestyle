import { promises as fs } from "fs";
import Image from "next/image";

export default async function Matches() {
  const file = await fs.readFile(
    process.cwd() + "/app/data/ml-teams.json",
    "utf8"
  );
  const data = JSON.parse(file);

  return (
    <div className="flex flex-col gap-12 mb-8">
      <h2 className="font-bold uppercase text-[80px] leading-[70px]">
        Matches
      </h2>
      <div className="grid grid-cols-3 gap-24">
        {data.teams.map(function (team, index) {
          return (
            <div
              className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden"
              key={index}
            >
              <Image
                src={team.logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold">{team.name}</span>

              <div className="font-black text-3xl text-white flex">
                <span className="bg-green-500 h-[50px] flex justify-center items-center w-[50px]">
                  {team.wins}
                </span>
                <span className="bg-roman-500 h-[50px] flex justify-center items-center w-[50px]">
                  {team.loss}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-slate-900 text-white p-12 rounded-md flex flex-col gap-8">
        <h3 className="font-black uppercase text-4xl">September 26, 2024</h3>
        <div className="flex flex-col gap-4">
          <span className="font-bold text-3xl">Match 1</span>
          <div className="flex gap-8 items-center">
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[0].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[0].name}
              </span>
            </div>
            <span className="font-black text-4xl">VS</span>
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[1].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[1].name}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-3xl">Match 2</span>
          <div className="flex gap-8 items-center">
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[1].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[1].name}
              </span>
            </div>
            <span className="font-black text-4xl">VS</span>
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[2].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[2].name}
              </span>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-bold text-3xl">Match 3</span>
          <div className="flex gap-8 items-center">
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[2].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[2].name}
              </span>
            </div>
            <span className="font-black text-4xl">VS</span>
            <div className="flex items-center bg-slate-200 gap-4 justify-between rounded-md overflow-hidden pr-4">
              <Image
                src={data.teams[1].logo}
                width={50}
                height={50}
                alt="Team logo"
                className=""
              />
              <span className="text-3xl font-bold text-neutral-800">
                {data.teams[1].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

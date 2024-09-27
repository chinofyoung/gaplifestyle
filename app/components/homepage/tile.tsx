import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import clsx from "clsx";

const gMapper: Record<number, string> = {
  1: "from-black/50 to-roman-500/30",
  2: "from-black/50 to-pacific-500/30",
  3: "from-black/50 to-sun-500/30",
  4: "from-black/50 to-slate-500/30",
  5: "from-black/50 to-pink-500/30",
};

const cMapper: Record<number, string> = {
  1: "bg-roman-500",
  2: "bg-pacific-500",
  3: "bg-sun-500",
  4: "bg-slate-500",
  5: "bg-pink-500",
};
const xMapper: Record<number, string> = {
  1: "col-span-1",
  2: "col-span-2",
  3: "col-span-3",
};
const yMapper: Record<number, string> = {
  1: "row-span-1",
  2: "row-span-2",
};

export interface TileProp {
  single: {
    title: string;
    description: string;
    image: string;
    link: string;
  };
}

export default function Tile({ single }: TileProp) {
  const gRan = Math.ceil(Math.random() * 5) as number;
  const cRan = Math.ceil(Math.random() * 5) as number;
  const xRan = Math.ceil(Math.random() * 3) as number;
  const yRan = Math.ceil(Math.random() * 3) as number;
  const color = cMapper[cRan];
  const gradient = gMapper[gRan];
  const col = xMapper[xRan];
  const row = yMapper[yRan];

  return (
    <Link
      href={single.link}
      className={`${col} ${row} ${color} rounded-3xl relative flex p-6 overflow-hidden`}
    >
      <div className={`w-full h-full bg-gradient-to-b absolute z-10 inset-0 ${gradient}`}></div>
      <Image
        className="object-cover w-full h-full inset-0 absolute"
        src={single.image}
        width={1920}
        height={1080}
        alt="Tile Image"
      />
      <div className="flex relative z-10 flex-col gap-2">
        {single.title && (
          <h3
            className={clsx("uppercase font-black", {
              "text-5xl": xRan === 3,
              "text-4xl": xRan === 2,
            })}
          >
            {single.title}
          </h3>
        )}

        {single.description && (
          <p
            className={clsx("line-clamp-5", {
              "text-xl": xRan === 3,
              "text-sm": xRan === 1,
            })}
          >
            {single.description}
          </p>
        )}

        {xRan === 1 && <span>one</span>}
        {xRan === 2 && <span>two</span>}
      </div>

      {(xRan === 3) && (
        <button
          className={`${color} text-white z-10 rounded-3xl h-20 w-20 flex items-center justify-center absolute right-4 bottom-4 shadow-md`}
        >
          <HiArrowRight className="text-3xl" />
        </button>
      )}
    </Link>
  );
}

import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function MobileLegends() {
  return (
    <section className="flex flex-wrap justify-center w-full max-w-7xl px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-5 w-full md:h-[500px]">
        <div className="flex order-2 md:order-1 flex-row md:flex-col md:w-1/3 gap-5">
          <div className="bg-white shadow-md w-full md:h-[300px] rounded-custom flex-col flex justify-center gap-4 p-8">
            <h2 className="text-2xl font-black uppercase">Mobile Legends</h2>
            <p className="text-neutral-700 text-sm md:text-base">
              We believe a fulfilling career and vibrant lifestyle go hand in
              hand. Our collaborative environment empowers you to thrive both
              professionally and personally
            </p>
          </div>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="bg-sun-500 shdow-md w-full h-[125px] md:h-[200px] overflow-auto rounded-custom">
              <Image
                src="https://cdn.antaranews.com/cache/1200x800/2023/06/04/C212F76E-4FB5-4EF4-A825-6C1C3A0C6EE4.jpeg"
                width={150}
                height={150}
                alt="Ball"
                className="w-full h-full object-cover"
              />
            </div>
            <Link
              href="/mobile-legends"
              className="bg-slate-700 shadow-md
               hover:bg-sun-500 hover:cursor-pointer transition-all duration-300 shdow-md w-full h-[125px] md:h-[200px] rounded-custom flex items-center justify-center"
            >
              <FaArrowRightLong className="text-white text-6xl" />
            </Link>
          </div>
        </div>
        <div className="bg-slate-500 order-1 md:order-2 w-full shadow-md md:w-2/3 h-[400px] md:h-[500px] shrink-0 flex justify-center items-center p-8 rounded-custom overflow-hidden relative">
          <div className="bg-gradient-to-t from-slate-900/70 w-full h-full absolute z-10"></div>
          <Image
            src="https://edge.rivalrycdn.com/cdn-cgi/image/q=100/https://images.prismic.io/rivalryglhf/ZqN76x5LeNNTxhTp_MLBBSPSChallengeFinals.jpg?auto=format,compress"
            alt=""
            width={600}
            height={500}
            className="w-full h-full object-cover absolute"
          />
          <div className="relative z-20 w-full flex flex-col items-end text-white h-full justify-end">
            <h2 className="text-2xl font-black uppercase text-right">
              Battle for Glory: Mobile Legends Tournament!
            </h2>
            <p className="text-right">
              Prepare your heroes, gather your squad, and enter the arena for an
              epic Mobile Legends tournament! Whether you're a seasoned player
              or a rising star, this is your chance to showcase your skills,
              outsmart your opponents, and climb to victory in the Land of Dawn.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

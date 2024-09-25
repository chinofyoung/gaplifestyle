import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Basketball() {
  return (
    <section className="px-4 md:px-0 flex flex-wrap justify-center w-full max-w-7xl">
      <div className="flex gap-5 w-full md:h-[500px] flex-col md:flex-row">
        <div className="bg-slate-500 shadow-md w-full shrink-0  md:w-2/3 h-[300px] md:h-[500px] flex justify-center items-center p-8 rounded-custom overflow-hidden relative">
          <div className="bg-gradient-to-t from-slate-900/70 w-full h-full absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1519766304817-4f37bda74a26?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={600}
            height={500}
            className="w-full h-full object-cover absolute"
          />
          <div className="relative z-20 w-full flex flex-col items-end text-white h-full justify-end">
            <h2 className="text-2xl text-right font-black uppercase">
              Shoot for Glory: Basketball Tournament{" "}
            </h2>
            <p className="text-right text-sm md:text-base">
              Get ready to hit the court for our exciting Basketball Tournament!
              Whether you’re a seasoned baller or just love the game, this event
              is your chance to show off your skills, bond with your team, and
              compete for the championship trophy!
            </p>
          </div>
        </div>
        <div className="flex flex-col w-full md:w-1/3 gap-5">
          <div className="bg-white shadow-md w-full h-[200px] md:h-[300px] rounded-custom flex-col flex justify-center gap-4 p-8">
            <h2 className="text-2xl font-black uppercase">Basketball</h2>
            <p className="text-neutral-700">
              We believe a fulfilling career and vibrant lifestyle go hand in
              hand. Our collaborative environment empowers you to thrive both
              professionally and personally
            </p>
          </div>
          <div className="flex gap-5">
            <div className="bg-roman-500 shadow-md hover:bg-sun-500 hover:cursor-pointer transition-all duration-300 shdow-md w-full h-[200px] rounded-custom flex items-center justify-center">
              <FaArrowRightLong className="text-white text-6xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

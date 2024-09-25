import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Volleyball() {
  return (
    <section className="flex flex-wrap justify-center w-full max-w-7xl px-4 md:px-0">
      <div className="flex md:flex-row flex-col gap-5 w-full md:h-[500px]">
        <div className="flex flex-col w-full md:w-1/3 gap-5">
          <div className="bg-white shadow-md w-full h-[200px] md:h-300 rounded-custom flex-col flex justify-center gap-4 p-8">
            <h2 className="text-2xl font-black uppercase">Volleyball</h2>
            <p className="text-neutral-700">
              We believe a fulfilling career and vibrant lifestyle go hand in
              hand. Our collaborative environment empowers you to thrive both
              professionally and personally
            </p>
          </div>
          <div className="flex gap-5">
            <div className="bg-pacific-500 hover:bg-sun-500 hover:cursor-pointer transition-all duration-300 shdow-md w-full h-[200px] rounded-custom flex items-center justify-center">
              <FaArrowRightLong className="text-white text-6xl" />
            </div>
          </div>
        </div>
        <div className="bg-slate-500 shadow-md w-full md:w-2/3 h-[300px] md:h-[500px] flex justify-center items-center p-8 rounded-custom overflow-hidden relative">
          <div className="bg-gradient-to-t from-slate-900/70 w-full h-full absolute z-10"></div>
          <Image
            src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={600}
            height={500}
            className="w-full h-full object-cover absolute"
          />
          <div className="relative z-20 w-full flex flex-col items-end text-white h-full justify-end">
            <h2 className="text-2xl font-black uppercase">Lorem Ipsum Dolor</h2>
            <p className="text-right">
              Get ready to spike, set, and serve at our thrilling volleyball
              event! Whether you're an experienced player or just looking to
              have some fun, this event promises high-energy action, teamwork,
              and plenty of excitement on the court.
            </p>
          </div>
        </div>
        <div className="bg-slate-500 shadow-md w-full md:w-2/3 h-[300px] md:h-[500px] flex justify-center items-center p-8 rounded-custom overflow-hidden relative">
          <div className="bg-gradient-to-t from-slate-900/70 w-full h-full absolute z-10"></div>
          <Image
            src="https://plus.unsplash.com/premium_photo-1661933714708-c768cc47121b?q=80&w=2038&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
            width={600}
            height={500}
            className="w-full h-full object-cover absolute"
          />
          <div className="relative z-20 w-full flex flex-col items-end text-white h-full justify-end">
            <h2 className="text-2xl font-black uppercase">Lorem Ipsum Dolor</h2>
            <p className="text-right">
              Get ready to spike, set, and serve at our thrilling volleyball
              event! Whether you're an experienced player or just looking to
              have some fun, this event promises high-energy action, teamwork,
              and plenty of excitement on the court.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

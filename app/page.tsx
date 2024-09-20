import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function Home() {
  return (
    <main className="flex flex-col items-center">
      <nav className="flex w-full justify-between max-w-7xl items-center my-8">
        <Image
          src="https://res.cloudinary.com/gaplabs/image/upload/fl_progressive,w_200,h_200/v1571230719/gaplabs/logo.png"
          width={80}
          height={80}
          alt="Gaplabs Logo"
        />
        <div className="flex gap-4 uppercase text-lg font-black">
          <Link href="">Home</Link>
          <Link href="">Events</Link>
          <Link href="">About</Link>
        </div>
      </nav>
      <section className="flex flex-wrap justify-center w-full max-w-7xl">
        <div className="flex gap-5 w-full h-[500px]">
          <div className="flex flex-col w-1/3 gap-5">
            <div className="bg-white shadow-md w-full h-300 rounded-custom flex-col flex justify-center gap-4 p-8">
              <h1 className="text-2xl font-black uppercase">
                Lorem Ipsum Dolor
              </h1>
              <p className="text-neutral-700">
                We believe a fulfilling career and vibrant lifestyle go hand in
                hand. Our collaborative environment empowers you to thrive both
                professionally and personally
              </p>
            </div>
            <div className="flex gap-5">
              <div className="bg-sun-500 shdow-md w-full h-[200px] overflow-auto rounded-custom">
                <Image
                  src="https://images.unsplash.com/photo-1484482340112-e1e2682b4856?q=80&w=1776&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  width={150}
                  height={150}
                  alt="Ball"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-slate-700 hover:bg-sun-500 hover:cursor-pointer transition-all duration-300 shdow-md w-full h-[200px] rounded-custom flex items-center justify-center">
                <FaArrowRightLong className="text-white text-6xl" />
              </div>
            </div>
          </div>
          <div className="bg-slate-500 shadow-md w-2/3 h-[500px] flex justify-center items-center p-8 rounded-custom overflow-hidden relative">
            <div className="bg-gradient-to-t from-slate-900/70 w-full h-full absolute z-10"></div>
            <Image
              src="https://images.unsplash.com/photo-1519684093736-61f49e250672?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt=""
              width={600}
              height={500}
              className="w-full h-full object-cover absolute"
            />
            <div className="relative z-20 w-full flex flex-col items-end text-white h-full justify-end">
              <h1 className="text-2xl font-black uppercase">
                Lorem Ipsum Dolor
              </h1>
              <p className="text-right">
                We believe a fulfilling career and vibrant lifestyle go hand in
                hand. Our collaborative environment empowers you to thrive both
                professionally and personally
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

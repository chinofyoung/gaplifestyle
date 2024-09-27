import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[300px] px-4 md:px-0 md:h-[600px] relative flex flex-col justify-center items-center">
      <div className="w-full h-full absolute bg-gradient-to-r from-slate-900 z-10"></div>
      <Image
        className="w-full h-full object-cover absolute"
        src="https://wallpapers.com/images/featured/mobile-legends-v0u46grjbqc6h9ga.jpg"
        width={1920}
        height={500}
        alt="Hero image"
      />
      <div className="z-10 relative text-white flex w-full flex-col gap-4 max-w-7xl">
        <h1 className="text-[75px] leading-[53px] md:text-[200px] flex flex-col gap-0 md:leading-[141px] font-black uppercase">
          <span>Mobile</span>
          <span className="text-sun-500">Legends</span>
        </h1>
        <p className="max-w-[800px] md:ml-4 text-sm md:text-base">
          Prepare your heroes, gather your squad, and enter the arena for an
          epic Mobile Legends tournament! Whether you&apos;re a seasoned player or a
          rising star, this is your chance to showcase your skills, outsmart
          your opponents, and climb to victory in the Land of Dawn.
        </p>
      </div>
    </section>
  );
}

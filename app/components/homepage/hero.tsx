import Image from "next/image";

export default function Hero() {
  return (
    <section className="w-full h-[300px] px-4 md:px-0 md:h-[500px] relative flex flex-col justify-center items-center">
      <Image
        className="w-full h-full object-cover absolute"
        src="https://images.unsplash.com/photo-1499540633125-484965b60031?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        width={1920}
        height={500}
        alt="Hero image"
      />
      <div className="z-10 relative text-white flex w-full flex-col gap-4 max-w-7xl">
        <h1 className="text-[75px] leading-[53px] md:text-[200px] flex flex-col gap-0 md:leading-[141px] font-black uppercase">
          <span>Gap</span>
          <span className="text-sun-500">Lifestyle</span>
        </h1>
        <p className="max-w-[800px] md:ml-4 text-sm md:text-base">
          We believe a fulfilling career and vibrant lifestyle go hand in hand.
          Our collaborative environment empowers you to thrive both
          professionally and personally
        </p>
      </div>
    </section>
  );
}
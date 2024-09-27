import Image from "next/image";
import Link from "next/link";

export default function MainNav() {
  return (
    <nav className="flex absolute z-20 top-0 left-0 w-full justify-between px-12 items-center my-4">
      <Link href="/">
        <Image
          src="https://res.cloudinary.com/gaplabs/image/upload/fl_progressive,w_200,h_200/v1571230719/gaplabs/logo.png"
          width={60}
          height={60}
          alt="Gaplabs Logo"
        />
      </Link>
      <div className="flex gap-12 uppercase text-base text-white font-bold">
        <Link href="/">Home</Link>
        <Link href="/events">Events</Link>
        <Link href="/about">About</Link>
      </div>
    </nav>
  );
}

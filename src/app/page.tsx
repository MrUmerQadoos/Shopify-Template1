import MixandMatch from "@/components/assets/MatchAndMix";
import Categories from "@/components/category/category";
import Hero from "@/components/hero/Hero";
import Navbar from "@/components/navbar/Navbar";
import NavbarTop from "@/components/navbar/NavbarTop";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-slate-600">
      <NavbarTop />
      <Navbar />
      <Hero />
      <Categories />
      <MixandMatch />
    </main>
  );
}

import Navbar from "@/components/navbar/Navbar";
import NavbarTop from "@/components/navbar/NavbarTop";

import Image from "next/image";

export default function Home() {
  return (
    <main className=" bg-slate-600">
      <NavbarTop />
      <Navbar />
    </main>
  );
}

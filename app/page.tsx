import Image from "next/image";
import React from "react";
import Hero from "./_component/hero";
import CompanyMarquee from "./_component/companies";
import AboutPela from "./_component/aboutPela";

export default function Home() {
  return (
   <React.Fragment >
    <div className="w-full  flex flex-col overflow-hidden font-montserrat bg-white text-black">
      
    <Hero/>
    <CompanyMarquee/>
    <AboutPela/>
    <div className="h-[100vh] bg-white">

    </div>
    </div>
   </React.Fragment>
  );
}

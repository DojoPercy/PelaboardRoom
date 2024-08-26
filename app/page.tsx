import Image from "next/image";
import React from "react";
import Hero from "./_component/hero";
import CompanyMarquee from "./_component/companies";
import AboutPela from "./_component/aboutPela";
import GlancePela from "./_component/glance";
import WhyAttend from "./_component/whyattend";
import Banner from "./_component/banner";
import WhocanAttend from "./_component/whocanattend";
import Footer from "./_component/footer";

export default function Home() {
  return (
   <React.Fragment >
    <div className="w-full  flex flex-col overflow-hidden font-montserrat bg-white text-black">
      
    <Hero/>
    <CompanyMarquee/>
    <AboutPela/>
    <GlancePela/>
    <WhyAttend/>
    <Banner/>
    <WhocanAttend/>
    <Footer/>
    
    </div>
   </React.Fragment>
  );
}

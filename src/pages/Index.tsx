
import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import HowItWorks from "@/components/sections/HowItWorks";
import FaqSection from "@/components/sections/FaqSection";
import Footer from "@/components/layout/Footer";

const Index: React.FC = () => {
  return (
    <div className="bg-white flex flex-col overflow-hidden items-center pt-[57px]">
      <Navbar />
      <HeroSection />
      <HowItWorks />
      
      <img
        src="https://cdn.builder.io/api/v1/image/assets/effc1aad896443caa3ee340dbaee97a4/749112e9a4f80c80bf350e98ae05402d36839eb2?placeholderIfAbsent=true"
        alt="AutoCycle collaboration showcase"
        className="aspect-[1.43] object-contain w-full self-stretch mt-[115px] max-md:max-w-full max-md:mt-10"
      />
      
      <FaqSection />
      <Footer />
    </div>
  );
};

export default Index;

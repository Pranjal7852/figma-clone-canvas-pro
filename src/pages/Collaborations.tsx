
import React from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const Collaborations: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Navbar />
      
      <div className="max-w-[1280px] mx-auto flex flex-col items-center bg-white w-full pt-[9px]">
        <div className="w-[73px] h-[36px] relative mb-[97px]">
          <div className="font-['Poppins',sans-serif] text-[15.605px] text-black absolute left-[33px] top-[6px]">
            Form
          </div>
        </div>
        
        <div className="w-[932px] relative max-md:w-[90%]">
          <div className="font-['Mulish',sans-serif] text-[24px] font-[800] leading-[150%] text-[#39302D] uppercase mb-[62px] max-sm:text-[20px] max-sm:text-center">
            START BY TELLING US WHETHER YOU'RE CONTRIBUTING OR LOOKING FOR MATERIALS.
          </div>
          
          <div className="flex justify-between w-full max-md:flex-col max-md:items-center max-md:gap-[40px]">
            {/* First Option */}
            <div className="relative max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
              <div className="w-[350px] h-[350px] flex flex-col items-center pt-[25px] bg-[rgba(175,207,226,0.30)] max-md:w-[80%] max-sm:w-full">
                <div className="font-['Mulish',sans-serif] text-[20.817px] font-[700] text-[#39302D] text-center mb-[8px]">
                  FOR BRAND COLLABRATION
                </div>
                <div className="font-['Mulish',sans-serif] text-[24px] font-[800] text-[#39302D] text-center">
                  I HAVE MATERIAL
                </div>
              </div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/534feb666c36afeb7dd61813356706e052354702" 
                alt="Material pile" 
                className="max-w-full h-auto mt-[20px] w-[457px] max-md:w-[80%] max-sm:w-full"
              />
            </div>
            
            {/* Second Option */}
            <div className="relative max-md:w-full max-md:flex max-md:flex-col max-md:items-center">
              <div className="w-[350px] h-[350px] flex flex-col items-center pt-[25px] bg-[rgba(205,158,78,0.20)] max-md:w-[80%] max-sm:w-full">
                <div className="font-['Mulish',sans-serif] text-[20.817px] font-[700] text-[#39302D] text-center mb-[8px]">
                  FOR BRAND COLLABRATION
                </div>
                <div className="font-['Mulish',sans-serif] text-[24px] font-[800] text-[#39302D] text-center">
                  I NEED MATERIAL
                </div>
              </div>
              <img 
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/226e700ec5db67affc986400112944c55feda8db" 
                alt="Material sample" 
                className="max-w-full h-auto mt-[20px] w-[413px] max-md:w-[80%] max-sm:w-full"
              />
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Collaborations;

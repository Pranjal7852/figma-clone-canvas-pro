import React from "react";
import { Link } from "react-router-dom";

const HeroSection: React.FC = () => {
  return (
    <>
      <div className="self-center w-full max-w-[1096px] mt-[43px] max-md:max-w-full max-md:mt-10">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[54%] max-md:w-full max-md:ml-0">
            <div className="flex grow flex-col items-stretch font-bold mt-9 max-md:max-w-full">
              <h1 className="text-black text-[100px] leading-[100px] uppercase max-md:max-w-full max-md:text-[40px] max-md:leading-[44px]">
                Smart <br />
                RECYCLING
              </h1>
              <div className="bg-[rgba(175,207,226,0.3)] text-[31px] text-[rgba(26,28,30,1)] leading-10 ml-5 pt-[473px] pb-2.5 px-[13px] max-md:max-w-full max-md:pr-5 max-md:pt-[100px]">
                BMW xDECATHLON
              </div>
            </div>
          </div>
          <div className="w-[46%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col text-black font-bold text-right max-md:max-w-full">
              <div className="bg-[rgba(89,109,117,0.2)] z-10 w-[400px] text-[31px] text-[rgba(26,28,30,1)] leading-10 aspect-[1] pt-px pb-[223px] px-[70px] max-md:pl-5 max-md:pb-[110px]">
                BMWxSAMSONITE
              </div>
              <h2 className="text-[100px] leading-[100px] uppercase self-stretch mt-[-35px] max-md:max-w-full max-md:text-[40px] max-md:leading-[44px] max-md:mr-[3px]">
                <br />
                BRAND
                <br />
                STRONGER
              </h2>
              <Link to="/collaborations">
                <button className="bg-white text-2xl font-normal text-center leading-[45px] mt-[26px] px-[46px] py-[5px] border-black border-solid border-2 max-md:mr-0.5 max-md:px-5">
                  FIND YOUR COLLABORATION
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div>
          <p className="text-xl leading-relaxed">
            Show your commitment to sustainability by elevating your brand. 
            We transform your recycling efforts into a powerful brand asset that 
            customers trust and remember.
          </p>
          <p className="text-xl leading-relaxed mt-6">
            We match brands based on material technical requirements, 
            brand placement, and advertising value.
          </p>
        </div>
        
        <div className="bg-amber-100 p-4 relative">
          <img 
            src="/lovable-uploads/efd4556a-88fe-44f1-a617-94af10b8c7d4.png" 
            alt="BMW IKEA chair" 
            className="w-full h-auto"
          />
          <div className="absolute top-4 left-4 font-bold">
            BMW
            <br />
            x
            <br />
            IKEA
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

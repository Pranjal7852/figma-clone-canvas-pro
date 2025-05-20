import React from "react";

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
              <button className="bg-white text-2xl font-normal text-center leading-[45px] mt-[26px] px-[46px] py-[5px] border-black border-solid border-2 max-md:mr-0.5 max-md:px-5">
                FIND YOUR COLLABORATION
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="z-10 mt-[-65px] max-md:max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
          <div className="w-[56%] max-md:w-full max-md:ml-0">
            <div className="flex mr-[-252px] flex-col self-stretch text-black my-auto max-md:max-w-full max-md:mt-10">
              <p className="text-[28px] font-normal leading-[34px] w-[637px] max-md:max-w-full">
                Show your commitment to sustainability by elevating your
                brand. We transform your recycling efforts into a powerful
                brand asset that customers trust and remember.
                <br />
                <br />
                We match brands based on material technical requirements,
                brand placement, and advertising value.
              </p>
              <h2 className="text-[64px] font-bold text-center uppercase mt-[113px] max-md:max-w-full max-md:text-[40px] max-md:mt-10">
                how ıt works ?{" "}
              </h2>
            </div>
          </div>
          <div className="w-[44%] ml-5 max-md:w-full max-md:ml-0">
            <div className="flex flex-col relative min-h-[677px] grow text-[31px] text-[rgba(26,28,30,1)] font-bold leading-10 pt-[43px] pb-[514px] px-[70px] max-md:max-w-full max-md:pb-[100px] max-md:px-5">
              <img
                src="https://cdn.builder.io/api/v1/image/assets/effc1aad896443caa3ee340dbaee97a4/41a701fa3b4a246dbaa308c513ebd22a10f4bda1?placeholderIfAbsent=true"
                alt="BMW xIKEA collaboration"
                className="absolute h-full w-full object-cover inset-0"
              />
              BMW xIKEA
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;

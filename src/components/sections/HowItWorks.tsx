import React from "react";

const HowItWorks: React.FC = () => {
  return (
    <div className="self-center w-full max-w-[1097px] mt-4 max-md:max-w-full">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch">
        <div className="w-[33%] max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center text-2xl text-black text-center leading-none max-md:mt-10">
            <div className="font-[1000]">
              Step 1:{" "}
            </div>
            <div className="text-[rgba(57,48,45,1)] font-extrabold self-stretch mt-[29px]">
              Enter Company & Material Info
            </div>
            <div className="text-lg font-normal leading-[21px] mt-[23px]">
              Just type in your company name and the materials you work with
            </div>
          </div>
        </div>
        <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center text-2xl text-black text-center leading-none max-md:mt-10">
            <div className="font-[1000]">
              Step 2:{" "}
            </div>
            <div className="text-[rgba(57,48,45,1)] font-extrabold self-stretch mt-[31px]">
              Get unique product Ideas
            </div>
            <div className="text-lg font-normal leading-[21px] mt-5">
              Get tailored and innovative product ideas instantly.
            </div>
          </div>
        </div>
        <div className="w-[33%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex grow flex-col items-center text-2xl text-black text-center leading-none max-md:mt-10">
            <div className="font-[1000]">
              Step 3:{" "}
            </div>
            <div className="text-[rgba(57,48,45,1)] font-extrabold self-stretch mt-[29px]">
              Connect with collaborators
            </div>
            <div className="text-lg font-normal leading-[21px] mt-[23px]">
              Connect with potential collaborators who share your vision
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;

import React from "react";

const Navbar: React.FC = () => {
  return (
    <div className="self-stretch flex w-full flex-col items-stretch pl-20 max-md:max-w-full max-md:pl-5">
      <div className="flex w-[721px] max-w-full items-stretch gap-5 whitespace-nowrap flex-wrap justify-between">
        <div className="flex flex-col items-stretch text-2xl text-black font-bold uppercase tracking-[1px] justify-center p-2.5">
          <div className="text-2xl font-bold leading-[36px)]">
            AutoCycle
          </div>
        </div>
        <div className="flex items-stretch gap-[40px_68px] text-xl text-[#1A1C1E] font-medium text-center tracking-[0.14px] leading-none my-auto">
          <div className="text-[rgba(26,28,30,1)] font-bold">
            HOME
          </div>
          <div className="text-[#1A1C1E] capitalize">
            SOLUTION
          </div>
          <div className="text-[#1A1C1E] capitalize">
            FAQ
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

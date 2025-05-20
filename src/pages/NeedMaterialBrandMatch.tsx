
import React from "react";
import { Link } from "react-router-dom";

const NeedMaterialBrandMatch: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      {/* Top navigation */}
      <div className="px-[228px] pt-16 max-md:px-10 max-sm:px-5">
        <div className="flex items-center gap-6 font-['Poppins',sans-serif] text-[15.6px]">
          <div className="text-[#9F9F9F]">Form</div>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
            <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="black" />
          </svg>
          <div className="text-black">Brands</div>
        </div>
      </div>

      {/* Main heading */}
      <h1 className="font-['Mulish',sans-serif] text-[29.7px] font-[800] uppercase text-center text-black mx-[228px] my-[45px] max-md:px-10 max-sm:px-5 max-sm:text-[24px]">
        All set. Your results are ready to explore
      </h1>

      {/* Brand cards container */}
      <div className="flex flex-col gap-8 px-[87px] max-md:px-5">
        {/* IKEA Brand Card */}
        <div className="w-full max-w-[1029px] h-[542px] flex justify-center items-center relative max-md:h-auto">
          <div className="w-[824px] h-[480px] border-2 border-black bg-white relative max-md:w-full max-md:h-auto max-md:p-[40px_20px]">
            {/* Card content */}
            <div className="absolute left-[184px] top-[31px] w-[442px] max-md:static max-md:w-full max-md:max-w-[442px] max-md:mx-auto">
              {/* Product assumptions */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Product assumptions
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Material match */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Material match
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Statistics */}
              <div className="flex gap-8 mt-[196px] max-sm:flex-col max-sm:gap-5">
                {/* Match Value */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Match Value
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    120.000€
                  </div>
                </div>
                
                {/* Combined Reach */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Combined Reach
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    20 Million
                  </div>
                </div>
                
                {/* Annual Plastic Volume */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Annual Plastic Volume
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    75 Tons
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand name */}
            <div className="absolute left-0 bottom-0 w-[368px] h-[130px] bg-white max-md:static max-md:w-full max-md:h-auto max-md:p-5 max-md:text-center">
              <div className="font-['Figtree',sans-serif] text-[100px] font-[700] text-black uppercase leading-[63.9px] tracking-[1.775px] absolute left-[86px] top-[36px] max-md:static max-md:text-[60px] max-sm:text-[40px]">
                IKEA
              </div>
            </div>
            
            {/* Select button */}
            <Link to="/need-material/ikea-collaboration" className="absolute right-0 top-0 w-[174px] h-[62px] bg-black flex items-center px-[19px] max-md:static max-md:w-full max-md:mt-5">
              <div className="font-['Poppins',sans-serif] text-[31px] text-white">
                Select
              </div>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <mask id="mask0" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
                  <rect width="32.2973" height="32.2973" fill="white" />
                </mask>
                <g mask="url(#mask0)">
                  <path d="M8.61155 24.2232L6.72754 22.3392L19.6464 9.42032H8.07326V6.72888H24.2219V22.8775H21.5304V11.3043L8.61155 24.2232Z" fill="white" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* LEGO Brand Card */}
        <div className="w-full max-w-[1029px] h-[542px] flex justify-center items-center relative max-md:h-auto">
          <div className="w-[824px] h-[480px] border-2 border-black bg-white relative max-md:w-full max-md:h-auto max-md:p-[40px_20px]">
            {/* Card content */}
            <div className="absolute left-[184px] top-[31px] w-[442px] max-md:static max-md:w-full max-md:max-w-[442px] max-md:mx-auto">
              {/* Product assumptions */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Product assumptions
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Material match */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Material match
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Statistics */}
              <div className="flex gap-8 mt-[196px] max-sm:flex-col max-sm:gap-5">
                {/* Match Value */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Match Value
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    120.000€
                  </div>
                </div>
                
                {/* Combined Reach */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Combined Reach
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    20 Million
                  </div>
                </div>
                
                {/* Annual Plastic Volume */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Annual Plastic Volume
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    75 Tons
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand name */}
            <div className="absolute left-0 bottom-0 w-[368px] h-[130px] bg-white max-md:static max-md:w-full max-md:h-auto max-md:p-5 max-md:text-center">
              <div className="font-['Figtree',sans-serif] text-[100px] font-[700] text-black uppercase leading-[63.9px] tracking-[1.775px] absolute left-[86px] top-[36px] max-md:static max-md:text-[60px] max-sm:text-[40px]">
                LEGO
              </div>
            </div>
            
            {/* Select button */}
            <Link to="/need-material/lego-collaboration" className="absolute right-0 top-0 w-[174px] h-[62px] bg-black flex items-center px-[19px] max-md:static max-md:w-full max-md:mt-5">
              <div className="font-['Poppins',sans-serif] text-[31px] text-white">
                Select
              </div>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <mask id="mask1" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
                  <rect width="32.2973" height="32.2973" fill="white" />
                </mask>
                <g mask="url(#mask1)">
                  <path d="M8.61155 24.2232L6.72754 22.3392L19.6464 9.42032H8.07326V6.72888H24.2219V22.8775H21.5304V11.3043L8.61155 24.2232Z" fill="white" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
        
        {/* DECATHLON Brand Card */}
        <div className="w-full max-w-[1029px] h-[542px] flex justify-center items-center relative max-md:h-auto">
          <div className="w-[824px] h-[480px] border-2 border-black bg-white relative max-md:w-full max-md:h-auto max-md:p-[40px_20px]">
            {/* Card content */}
            <div className="absolute left-[184px] top-[31px] w-[442px] max-md:static max-md:w-full max-md:max-w-[442px] max-md:mx-auto">
              {/* Product assumptions */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Product assumptions
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Material match */}
              <div className="mb-10">
                <div className="font-['Mulish',sans-serif] text-[12px] font-[700] text-[#837A88] uppercase mb-1">
                  Material match
                </div>
                <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                  Containers, Chairs, Tables, Floor Protection
                </div>
              </div>
              
              {/* Statistics */}
              <div className="flex gap-8 mt-[196px] max-sm:flex-col max-sm:gap-5">
                {/* Match Value */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Match Value
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    120.000€
                  </div>
                </div>
                
                {/* Combined Reach */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Combined Reach
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    20 Million
                  </div>
                </div>
                
                {/* Annual Plastic Volume */}
                <div className="text-left">
                  <div className="font-['Mulish',sans-serif] text-[12px] font-[900] text-[#837A88] uppercase mb-[6px]">
                    Annual Plastic Volume
                  </div>
                  <div className="font-['Mulish',sans-serif] text-[17px] font-[600] text-black">
                    75 Tons
                  </div>
                </div>
              </div>
            </div>
            
            {/* Brand name */}
            <div className="absolute left-0 bottom-0 w-[368px] h-[130px] bg-white max-md:static max-md:w-full max-md:h-auto max-md:p-5 max-md:text-center">
              <div className="font-['Figtree',sans-serif] text-[100px] font-[700] text-black uppercase leading-[63.9px] tracking-[1.775px] absolute left-[86px] top-[36px] max-md:static max-md:text-[60px] max-sm:text-[40px]">
                DECATHLON
              </div>
            </div>
            
            {/* Select button */}
            <Link to="/need-material/decathlon-collaboration" className="absolute right-0 top-0 w-[174px] h-[62px] bg-black flex items-center px-[19px] max-md:static max-md:w-full max-md:mt-5">
              <div className="font-['Poppins',sans-serif] text-[31px] text-white">
                Select
              </div>
              <svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-auto">
                <mask id="mask2" style={{maskType: "alpha"}} maskUnits="userSpaceOnUse" x="0" y="0" width="33" height="33">
                  <rect width="32.2973" height="32.2973" fill="white" />
                </mask>
                <g mask="url(#mask2)">
                  <path d="M8.61155 24.2233L6.72754 22.3393L19.6464 9.42038H8.07326V6.72894H24.2219V22.8776H21.5304V11.3044L8.61155 24.2233Z" fill="white" />
                </g>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NeedMaterialBrandMatch;

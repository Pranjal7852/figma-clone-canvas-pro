
import React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const NeedMaterial: React.FC = () => {
  return (
    <div className="relative max-w-[1280px] mx-auto p-[40px_20px] bg-white">
      {/* Form header */}
      <div className="flex items-center gap-2 mb-10">
        <div className="w-9 h-0.5 bg-[#9F9F9F]"></div>
        <div className="font-poppins text-base text-black">Form</div>
      </div>
      
      {/* Main content */}
      <div className="relative z-[1]">
        <h1 className="font-mulish text-3xl font-extrabold text-black text-center uppercase mb-[60px] max-w-[1170px] mx-auto max-sm:text-2xl max-sm:px-5">
          Find the material that brings your product to life
        </h1>
        
        <div className="max-w-[905px] mx-auto max-sm:px-5">
          {/* Company name field */}
          <div className="mb-10">
            <label className="font-mulish text-xl font-extrabold text-[#2D2D2D] mb-6 block max-sm:text-lg">
              Your Company Name
            </label>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Company Name"
                className="w-full h-[68px] px-4 border-2 border-[#B8BBC2] font-['Inter',sans-serif] text-lg text-[#837A88] max-sm:h-14"
              />
            </div>
          </div>
          
          {/* Material Type and Factory Location */}
          <div className="flex gap-[60px] mb-10 max-md:flex-col max-md:gap-10">
            <div className="mb-0 flex-1">
              <label className="font-mulish text-xl font-extrabold text-[#2D2D2D] mb-6 block max-sm:text-lg">
                Material Type
              </label>
              <div className="h-[68px] border-2 border-[#B8BBC2] bg-white max-sm:h-14">
                <Select>
                  <SelectTrigger className="w-full h-full px-7 font-['Inter',sans-serif] text-lg text-[#837A88] border-0">
                    <SelectValue placeholder="Polypropylene (PP)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="pp">Polypropylene (PP)</SelectItem>
                    <SelectItem value="pet">Polyethylene Terephthalate (PET)</SelectItem>
                    <SelectItem value="hdpe">High-Density Polyethylene (HDPE)</SelectItem>
                    <SelectItem value="pvc">Polyvinyl Chloride (PVC)</SelectItem>
                    <SelectItem value="ldpe">Low-Density Polyethylene (LDPE)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mb-0 flex-1">
              <label className="font-mulish text-xl font-extrabold text-[#2D2D2D] mb-6 block max-sm:text-lg">
                Where is your factory located?
              </label>
              <div className="relative">
                <Input 
                  type="text" 
                  placeholder="City (e.g., München)"
                  className="w-full h-[68px] px-4 border-2 border-[#B8BBC2] font-['Inter',sans-serif] text-lg text-[#837A88] max-sm:h-14"
                />
              </div>
            </div>
          </div>
          
          {/* Collaboration company field */}
          <div className="mb-10">
            <label className="font-mulish text-xl font-extrabold text-[#2D2D2D] mb-6 block max-sm:text-lg">
              Is there a company you intend to collaborate with? (optional)
            </label>
            <div className="relative">
              <Input 
                type="text" 
                placeholder="Company Name"
                className="w-full h-[68px] px-4 border-2 border-[#B8BBC2] font-['Inter',sans-serif] text-lg text-[#837A88] max-sm:h-14"
              />
            </div>
            <p className="font-['Inter',sans-serif] text-sm text-black mt-3">
              If you don't have a brand in mind, the next step will offer you to choose between 5 Brands that would make a perfect collaboration.
            </p>
          </div>
        </div>
        
        {/* Submit button - Repositioned */}
        <div className="flex justify-end">
          <Button
            className="mt-10 py-[10.5px] px-[50px] bg-black border border-black text-white font-poppins text-2xl cursor-pointer max-md:w-full max-sm:text-xl max-sm:py-2 max-sm:px-8"
          >
            Get inspired
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NeedMaterial;

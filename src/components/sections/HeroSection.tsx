
import React from "react";

const HeroSection: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-wrap -mx-4">
        {/* Left Column */}
        <div className="w-full lg:w-1/2 px-4 mb-8 lg:mb-0">
          <h1 className="text-[100px] leading-[0.9] font-bold uppercase mb-4 max-md:text-6xl">
            <span className="relative inline-block">
              Smart
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"></div>
            </span>
            <br />
            <span className="relative inline-block">
              Recycling
              <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-400"></div>
            </span>
          </h1>
          
          <div className="bg-blue-100 p-6 mt-6 relative">
            <img 
              src="/lovable-uploads/9a75d58f-8a43-4afe-9295-361a6dd2c21f.png" 
              alt="BMW frisbee" 
              className="w-full h-auto"
            />
            <div className="absolute bottom-4 left-4 font-bold">
              BMW
              <br />
              x
              <br />
              DECATHLON
            </div>
          </div>
        </div>
        
        {/* Right Column */}
        <div className="w-full lg:w-1/2 px-4">
          <div className="bg-gray-200 p-4 relative mb-8">
            <img 
              src="/lovable-uploads/6b41f2ac-ef07-47c6-8c19-dc487e5a3be0.png" 
              alt="BMW Samsonite luggage" 
              className="w-full h-auto"
            />
            <div className="absolute top-4 right-4 font-bold text-right">
              BMW
              <br />
              x
              <br />
              SAMSONITE
            </div>
          </div>
          
          <h2 className="text-[80px] leading-[0.9] font-bold uppercase text-right mb-8 max-md:text-5xl">
            Brand
            <br />
            Stronger
          </h2>
          
          <div className="text-right">
            <button className="border-2 border-black px-8 py-3 inline-flex items-center font-medium">
              FIND YOUR COLLABORATION
              <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
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
    </div>
  );
};

export default HeroSection;


import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const ProductResults: React.FC = () => {
  const { brand } = useParams();
  const navigate = useNavigate();
  
  // Mock data based on selected brand
  const brandData = {
    company: "BMW",
    collaborator: brand?.toUpperCase() || "DECATHLON",
    material: "Plastic/PP",
    location: "Munich",
    description: "This piece of furniture is a striking collaboration between BMW and IKEA, embodying the essence of circular design and functional minimalism. The structure features a sleek, aerodynamic silhouette reminiscent of automotive form language—its gently rounded edges and precise panel alignment evoke the precision of a BMW dashboard, while its matte black drawer fronts contrast elegantly with the soft olive green frame, nodding to sustainable material palettes and calm interior moods. The unit comprises four integrated drawers with recessed pull handles, echoing the ergonomic intuitiveness of car interiors, and a spacious open shelf that brings in IKEA's signature functionality and accessibility. Ideal for both home offices and living rooms, this item offers a visual and emotional bridge between high-performance engineering and relaxed domestic living.",
    matchValue: "120.000€",
    combinedReach: "20 Million",
    annualPlasticVolume: "75 Tons"
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Breadcrumb navigation */}
      <div className="px-[228px] pt-16 max-md:px-10 max-sm:px-5">
        <div className="flex items-center gap-6 font-['Poppins',sans-serif] text-[15.6px]">
          <Link to="/" className="text-[#9F9F9F]">Form</Link>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
            <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="black" />
          </svg>
          <Link to={brand?.includes('have') ? "/hm_brandmatch" : "/nm_brandmatch"} className="text-[#9F9F9F]">Brands</Link>
          <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg" className="transform rotate-90">
            <path d="M6.31971 15.4084L11.1962 10.5319L6.31971 5.65543L7.295 3.70483L14.1221 10.5319L7.295 17.359L6.31971 15.4084Z" fill="black" />
          </svg>
          <span className="text-black">Suggestion</span>
        </div>
      </div>

      {/* Brand header */}
      <div className="px-[228px] max-md:px-10 max-sm:px-5 mt-12">
        <h1 className="font-['Figtree',sans-serif] text-[100px] font-[700] text-black uppercase leading-[1] max-md:text-[80px] max-sm:text-[60px]">
          BMW<br />X<br />{brandData.collaborator}
        </h1>
      </div>

      {/* Main content */}
      <div className="px-[228px] max-md:px-10 max-sm:px-5 flex flex-col lg:flex-row gap-8 mt-8">
        {/* Left side - Product image */}
        <div className="lg:w-1/2">
          <div className="bg-[#EFF3F6] p-8 rounded-sm flex items-center justify-center">
            <img 
              src="/lovable-uploads/65bd1d70-31e6-43c0-89a1-eb902a13b48d.png" 
              alt="BMW Collaboration Product" 
              className="w-full max-w-[400px]"
            />
          </div>
        </div>

        {/* Right side - Product details */}
        <div className="lg:w-1/2">
          {/* User input summary */}
          <div className="bg-[#F8F6F2] p-8 mb-8">
            <h3 className="text-lg font-bold mb-4">USER INPUT:</h3>
            <div className="grid grid-cols-2 gap-y-4">
              <div>Company Name</div>
              <div className="font-bold">{brandData.company}</div>
              
              <div>Collab. Company</div>
              <div className="font-bold">{brandData.collaborator}</div>
              
              <div>Material</div>
              <div className="font-bold">{brandData.material}</div>
              
              <div>Location</div>
              <div className="font-bold">{brandData.location}</div>
            </div>
            <Button className="bg-black text-white hover:bg-black/90 mt-4 float-right">
              Change
            </Button>
          </div>

          {/* Product description */}
          <p className="text-base mb-8">
            {brandData.description}
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-12">
            <div>
              <h4 className="uppercase text-sm font-bold text-gray-600">MATCH VALUE</h4>
              <p className="text-lg font-semibold">{brandData.matchValue}</p>
            </div>
            <div>
              <h4 className="uppercase text-sm font-bold text-gray-600">COMBINED REACH</h4>
              <p className="text-lg font-semibold">{brandData.combinedReach}</p>
            </div>
            <div>
              <h4 className="uppercase text-sm font-bold text-gray-600">ANNUAL PLASTIC VOLUME</h4>
              <p className="text-lg font-semibold">{brandData.annualPlasticVolume}</p>
            </div>
          </div>
        </div>
      </div>

      {/* More inspiration section */}
      <div className="px-[228px] max-md:px-10 max-sm:px-5 mt-12">
        <h3 className="text-lg font-semibold mb-6">Explore more inspiration &gt;</h3>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="flex flex-col">
              <div className="bg-[#EFF3F6] aspect-square mb-4 flex items-center justify-center">
                <img 
                  src={`/lovable-uploads/65bd1d70-31e6-43c0-89a1-eb902a13b48d.png`} 
                  alt={`BMW x VITRA Product ${i}`}
                  className="w-3/4 h-3/4 object-cover"
                />
              </div>
              <h4 className="font-semibold">Dynamic Comfort</h4>
              <p className="text-sm text-gray-600">Eco-friendly materials for furniture and home products</p>
            </div>
          ))}
        </div>

        {/* Product idea input */}
        <div className="mb-16">
          <label className="block mb-4">
            What kind of product do you imagine for this collaboration? (optional)
          </label>
          <Input 
            type="text" 
            placeholder="Backpack, Nightstand" 
            className="w-full h-[60px] border-black"
          />
        </div>

        {/* Get inspired button */}
        <div className="flex justify-center mb-16">
          <Button 
            className="bg-black text-white hover:bg-black/90 py-4 px-8 text-xl"
            onClick={() => navigate("/collaborations")}
          >
            Get inspired
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductResults;

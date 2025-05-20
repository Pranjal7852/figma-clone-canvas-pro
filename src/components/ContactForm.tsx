import React, { useState } from "react";

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    materials: "",
    email: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send this data to your backend
    console.log("Form submitted:", formData);
    // Reset form after submission
    setFormData({
      companyName: "",
      materials: "",
      email: "",
      message: ""
    });
    alert("Thank you for your interest! We'll be in touch soon.");
  };

  return (
    <div className="w-full max-w-[600px] mx-auto my-12 px-4">
      <h2 className="text-3xl font-bold text-[#39302D] mb-6">Start Your Collaboration</h2>
      <p className="text-lg mb-8">Fill out this form to begin your sustainable journey with AutoCycle.</p>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="space-y-2">
          <label htmlFor="companyName" className="block text-lg font-medium text-[#39302D]">
            Company Name
          </label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#81C784]"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="materials" className="block text-lg font-medium text-[#39302D]">
            Materials You Work With
          </label>
          <input
            type="text"
            id="materials"
            name="materials"
            value={formData.materials}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#81C784]"
            placeholder="e.g., plastic, metal, fabric"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="email" className="block text-lg font-medium text-[#39302D]">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#81C784]"
          />
        </div>
        
        <div className="space-y-2">
          <label htmlFor="message" className="block text-lg font-medium text-[#39302D]">
            Additional Information
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="w-full p-3 border-2 border-black focus:outline-none focus:ring-2 focus:ring-[#81C784]"
          />
        </div>
        
        <button
          type="submit"
          className="w-full bg-white text-2xl font-normal text-center leading-[45px] px-[46px] py-[5px] border-black border-solid border-2 hover:bg-[#81C784] hover:text-white transition-colors"
        >
          FIND YOUR COLLABORATION
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

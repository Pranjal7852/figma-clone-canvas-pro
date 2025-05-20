
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="container mx-auto px-4 py-6">
      <div className="flex justify-between items-center">
        <div className="text-2xl font-bold uppercase">
          AutoCycle
        </div>
        <div className="flex items-center space-x-12">
          <a href="#" className="font-bold uppercase">Home</a>
          <a href="#" className="uppercase">Solution</a>
          <a href="#" className="uppercase">FAQ</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

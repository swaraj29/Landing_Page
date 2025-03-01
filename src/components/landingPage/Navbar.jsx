import React from "react";
import docs from "../../assets/docs.svg";
import discord from "../../assets/discord.svg";

const Navbar = () => {
  const navItems = ["Features", "Why Choose Us", "Pricing", "FAQ"];

  return (
    <nav className="bg-white py-6 shadow-sm">

      <div className="container mx-auto px-4 md:px-6">

        <div className="flex justify-between items-center">
          <div className="flex items-center">
            {/* Logo */}
            <div className="flex items-center">
              <img src={docs} alt="DocuTech Logo" className="w-8 h-8 " />
              <span className="font-bold text-2xl text-[#254A76] ml-2">
                DocuTech
              </span>
            </div>
          </div>

          {/* Navigation Links - Center */}
          <div className="hidden md:flex space-x-8 ">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={`#${item.toLowerCase().replace(/\s+/g, "-")}`}
                className={`text-[#262626] hover:text-blue-600 font-poppins font-medium text-sm $ 
                `}
              >
                {item}
              </a>
            ))}
          </div>

          {/* Right side - Discord icon and Button */}
          <div className="flex items-center space-x-4">
            <a
              href="https://discord.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-blue-600"
            >
              <img src={discord} alt="Discord Icon" className="w-10 h-12" />
            </a>

            <button className="bg-[#254A76] text-white text-xs px-4 py-3 rounded-lg shadow-md hover:bg-[#1E3A5F] transition ">
              Get Started
            </button>
          </div>
        </div>

      </div>

    </nav>
  );
};

export default Navbar;
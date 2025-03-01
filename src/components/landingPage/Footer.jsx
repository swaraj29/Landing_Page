import React from "react";
import docsIcon from "../../assets/docs.svg";
import envelope from "../../assets/envelope.svg";
import linkedin from "../../assets/linkedin.svg";
import discord2 from "../../assets/discord2.svg";
import whatsapp from "../../assets/whatsapp.svg";
import facebook from "../../assets/facebook.svg";
import message from "../../assets/message.svg";

const Footer = () => {
  const navLinks = ["Features", "Why Choose Us", "Pricing", "FAQ", "Legal terms", "Privacy policy"];

  const socialIcons = [
    { id: 1, icon: whatsapp, label: "WhatsApp" },
    { id: 2, icon: facebook, label: "Facebook" },
    { id: 3, icon: linkedin, label: "LinkedIn" },
    { id: 4, icon: message, label: "Message" },
    { id: 5, icon: envelope, label: "Email" },
    { id: 6, icon: discord2, label: "Discord" },
  ];

  return (
    <footer className="bg-[#254A76] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        {/* Left: Logo and tagline */}
        <div className="flex flex-col items-center md:items-start mb-6 md:mb-0">
          <div className="flex items-center mb-2">
            <img src={docsIcon} alt="DocuTech Logo" className="w-8 h-8 mr-2 brightness-0 invert" />
            <span className="font-bold text-lg">DocuTech</span>
          </div>
          <span className="text-xs text-gray-300">Powered by Classy Endeavors</span>
        </div>

        {/* Right: Social Icons and Navigation Links */}
        <div className="flex flex-col items-center md:items-end w-full md:w-auto">
          {/* Social Icons */}
          <div className="flex space-x-4 mb-4">
            {socialIcons.map((social) => (
              <a key={social.id} href="#" aria-label={social.label}>
                <img src={social.icon} alt={social.label} className="w-5 h-5" />
              </a>
            ))}
          </div>

          {/* Separator Line */}
          <div className="w-full md:w-52 border-t border-white mb-4"></div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center md:justify-end space-x-2 sm:space-x-4 text-xs sm:text-sm text-center">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href="#" 
                className="text-white hover:text-gray-300 mb-2 last:mb-0"
              >
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
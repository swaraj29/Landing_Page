import React from "react";
import uploadIcon from "../../assets/uploadIcon.svg";
import aiIcon from "../../assets/aiIcon.svg";
import bluedrop from "../../assets/bluedrop.svg";
import ucsdLogo from "../../assets/ucsdlogo.svg";
import irmaLogo from "../../assets/irmaLogo.svg";
import howardLogo from "../../assets/howardLogo.svg";
import pharmLogo from "../../assets/pharmaLogo.svg";
import gbeaLogo from "../../assets/gbeaLogo.svg";
import rocketLogo from "../../assets/rocketLogo.svg";

const Hero = () => {
  return (
    <section className="py-12 bg-blue-50">
      <div className="container mx-auto px-4 text-center">
        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-7xl font-bold mb-2">
          AI-Powered Unified Platform;
        </h1>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80BBEB] to-[#254A76]">
            Create
          </span>{" "}
          Effortlessly
        </h2>

        {/* Subheading */}

        <p className="text-gray-700 mb-4 max-w-3xl mx-auto font-poppins font-normal">
          Fast, Smart & Secure - Works with Google Drive, Dropbox, Salesforce &
          Your Favorite Business Tools
        </p>

        {/* Certifications bar */}
        <div className="flex items-center justify-center gap-4 mb-8   py-2 px-4 max-w-2xl mx-auto ">
          <div className="flex items-center">
            <img src={bluedrop} alt="Blue dot" className="w-6 h-6 mr-1" />
            <span className="text-xs">ESIGN Compliant</span>
          </div>
          <div className="flex items-center">
            <img src={bluedrop} alt="Blue dot" className="w-6 h-6 mr-1" />
            <span className="text-xs">UETA Approved</span>
          </div>
          <div className="flex items-center">
            <img src={bluedrop} alt="Blue dot" className="w-6 h-6 mr-1" />
            <span className="text-xs">eiDAS Certified</span>
          </div>
        </div>

        {/* File upload section */}
        <div className="flex justify-center items-center mb-6 ">
          <div className="flex flex-wrap gap-2  items-center justify-center ">
            <div className="relative ">
              <input
                type="text"
                placeholder="Drop your file here"
                className="border border-black-300 rounded-full py-2 pl-4 pr-10 w-80 text-md"
                readOnly
              />

              <button className="absolute right-4 top-0 h-full bg-blue-600 text-white rounded-full px-3 flex items-center">
                <img src={uploadIcon} alt="Upload" className="w-5 h-5" />
                <span className="ml-1 text-xs rounded-full">Upload File</span>
              </button>
            </div>

            <span className="text-sm text-black-600">OR</span>

            <button className="bg-gray-700 text-white rounded-full py-2 px-4 text-sm flex items-center">
              <img src={aiIcon} alt="AI" className="w-4 h-4 mr-1" />
              Generate with AI
            </button>
          </div>
        </div>

        {/* Document preview box */}
        <div className="max-w-xl mx-auto mb-10 relative">
          <div className="bg-white border border-black-300 rounded-md h-140 flex items-center justify-center "></div>
        </div>

        {/* User count */}
        {/* User count */}
        <div className="text-3xl font-bold mb-8 text-center">
          <p className="mb-1">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80BBEB] to-[#254A76]">
              64.0k
            </span>{" "}
            businesses and individuals have
          </p>
          <p>
            signed with{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#80BBEB] to-[#254A76]">
              DocuTech
            </span>
          </p>
        </div>

        {/* Partner logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          <img src={ucsdLogo} alt="UC San Diego" className="h-8" />
          <img src={irmaLogo} alt="IRMA" className="h-8" />
          <img src={howardLogo} alt="Howard University" className="h-8" />
          <img src={pharmLogo} alt="PharmBills" className="h-8" />
          <img src={gbeaLogo} alt="GBEA" className="h-8" />
          <img src={rocketLogo} alt="B2B Rocket" className="h-8" />
        </div>
      </div>
    </section>
  );
};

export default Hero;

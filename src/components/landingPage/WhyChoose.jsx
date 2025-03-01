import React from "react";

const WhyChoose = () => {
  const features = [
    { id: 1, text: "Trusted by Thousands", highlighted: true },
    { id: 2, text: "SOC-2 Certified" },
    { id: 3, text: "GDPR & HIPAA Compliant" },
    { id: 4, text: "End-to-end encryption" },
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
          Why Choose Docutech
        </h2>

        <div className="flex flex-col md:flex-row gap-6 max-w-6xl mx-auto">
          {/* Left side - Feature list */}
          <div className="w-full md:w-1/3 space-y-4">
            {features.map((feature) => (
              <div
                key={feature.id}
                className={`rounded-full p-4 ${
                  feature.highlighted
                    ? "bg-white border-2 border-purple-400 shadow-md"
                    : "bg-white border border-gray-200"
                }`}
              >
                <p className="font-medium text-gray-800">{feature.text}</p>
              </div>
            ))}
          </div>

          {/* Right side - Content area */}
          <div className="w-full md:w-2/3 h-148 ">
            <div className="bg-white rounded-lg border border-black-200 h-full p-6">
              {/* Content can be added here - empty in the reference image */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
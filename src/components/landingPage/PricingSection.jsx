import React, { useState } from "react";

const Pricing = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly");

  const toggleBillingPeriod = () => {
    setBillingPeriod(billingPeriod === "monthly" ? "annually" : "monthly");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
          Pick your plan. We make this part easy too.
        </h2>

        {/* Billing toggle */}
        <div className="flex justify-center mb-12">
          <div className="flex p-0 bg-white rounded-full border border-black-200">
            <button
              className={`px-8 py-4 rounded-full text-sm font-medium  transition-colors ${
                billingPeriod === "monthly"
                  ? "bg-[#254A76] text-white"
                  : "bg-transparent text-gray-700"
              }`}
              onClick={() => setBillingPeriod("monthly")}
            >
              Monthly
            </button>
            <button
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                billingPeriod === "annually"
                  ? "bg-blue-800 text-white"
                  : "bg-transparent text-gray-700"
              }`}
              onClick={() => setBillingPeriod("annually")}
            >
              Annually
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Free plan */}
          <div className="relative bg-white rounded-lg shadow-sm overflow-hidden border-2 border-purple-400">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">FREE</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">USD</span>
                <span className="text-5xl font-bold">0</span>
                <span className="text-gray-600 ml-1">/Month</span>
              </div>
              <p className="text-xs text-gray-500 mb-6">No Credit Card required</p>

              <ul className="space-y-3 mb-8 font-semibold">
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>5 documents a month</span>
                </li>
                <li className="flex items-start">
                  <span className="text-black mr-2">•</span>
                  <span>Activity timeline</span>
                </li>
              </ul>
            </div>

            <div className="px-6 pb-6 mt-auto h-48">
              <button className="w-full py-2 px-4 bg-[#254A76] text-white rounded-full font-medium hover:bg-blue-900 transition-colors mt-18">
                Select Plan
              </button>
            </div>
          </div>

          {/* Premium plan */}
          <div className="bg-[#254A76] text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Premium</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">USD</span>
                <span className="text-5xl font-bold">10</span>
                <span className="text-gray-300 ml-1">/Month</span>
              </div>
              <div className="invisible text-xs mb-6">Placeholder</div>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unlimited documents</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Unlimited signees</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Activity timeline</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Certificate of completion</span>
                </li>
              </ul>
            </div>

            <div className="px-6 pb-6 mt-auto">
              <button className="w-full py-2 px-4 bg-white text-blue-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Select Plan
              </button>
            </div>
          </div>

          {/* Teams plan */}
          <div className="bg-[#254A76] text-white rounded-lg shadow-md overflow-hidden">
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">Teams</h3>
              <div className="flex items-end mb-4">
                <span className="text-3xl font-bold">USD</span>
                <span className="text-5xl font-bold">8</span>
                <span className="text-gray-300 ml-1">/Month per month</span>
              </div>
              <p className="text-xs text-gray-300 mb-6">Minimum total of USD 24/month</p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Everything from Premium</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Team management</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">•</span>
                  <span>Transferable contracts</span>
                </li>
              </ul>
            </div>

            <div className="px-6 pt-2 pb-6 mt-auto">
              <div className="flex justify-between text-sm mb-2">
                <span>Monthly total</span>
                <span>USD 24</span>
              </div>
              <button className="w-full py-2 px-4 bg-white text-blue-800 rounded-full font-medium hover:bg-gray-100 transition-colors">
                Select Plan
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
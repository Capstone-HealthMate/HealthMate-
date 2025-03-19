import React, { useState } from "react";
import TextHeader from "../atom/TextHeader";

import MineralCalcu from "./calculator/MineralCalcu";
import CaloriesCalcu from "./calculator/CaloriesCalcu";
import GreaseCalcu from "./calculator/GreaseCalcu";
import BMICalcu from "./calculator/BMICalcu";

export default function CardLayout({ onTabsActive }) {
  const dataTabs = [
    { id: 0, label: "Mineral Check", content: <MineralCalcu /> },
    { id: 1, label: "Calories Check", content: <CaloriesCalcu /> },
    { id: 2, label: "Grease Check", content: <GreaseCalcu /> },
    { id: 3, label: "BMI Check", content: <BMICalcu /> },
  ];

  const [tabsActive, setTabActive] = useState(0);

  const handleTabsActive = (id) => {
    setTabActive(id);
    if (onTabsActive) {
      onTabsActive(id);
    }
  };

  return (
    <div className="w-full flex flex-col items-center">
      {/* Header */}
      <TextHeader>Check Your Health</TextHeader>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mt-4 relative">
        {dataTabs.map((data) => (
          <button
            key={data.id}
            role="tab"
            className={`relative px-6 py-3 text-sm lg:text-lg font-medium transition-all duration-300 ease-in-out ${
              tabsActive === data.id
                ? "text-black after:content-[''] after:absolute after:bottom-0 after:left-0 after:right-0 after:h-1 after:bg-gradient-to-r after:from-blue-400 after:to-blue-600 after:rounded-full after:transition-all after:duration-500 after:ease-in-out"
                : "text-gray-500 hover:text-black"
            }`}
            onClick={() => handleTabsActive(data.id)}
          >
            {data.label}
            {tabsActive === data.id && (
              <span className="absolute -bottom-2 left-1/2 w-[120%] h-2 bg-gradient-to-r from-blue-400 to-blue-600 opacity-30 blur-md rounded-full transition-all duration-500 ease-in-out -translate-x-1/2"></span>
            )}
          </button>
        ))}
      </div>

      {/* Content Section */}
      <div className="w-full bg-gradient-to-br from-[#eff7ff8d]  to-[#f7fbff00]  rounded-lg transition-all duration-300">
        <div className="lg:px-6 px-4">{dataTabs[tabsActive].content}</div>
      </div>
    </div>
  );
}

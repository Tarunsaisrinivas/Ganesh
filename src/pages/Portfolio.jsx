import React, { useState } from "react";

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState(1);

  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  return (
    <div className="text-white h-screen" id="portfolio">
        <h1 className="text-4xl text-center mb-6 font-bold">Portfolio</h1>
      <div className="flex justify-center gap-x-20 font-bold">
        <button
          className={`tab-button ${activeTab === 1 ? "text-blue-500" : ""} `  }
          onClick={() => handleTabClick(1)}
        >
          Tab 1
        </button>
        <button
          className={`tab-button ${activeTab === 2 ? "text-blue-500" : ""}`}
          onClick={() => handleTabClick(2)}
        >
          Tab 2
        </button>
        <button
          className={`tab-button ${activeTab === 3 ? "text-indigo-500" : ""}`}
          onClick={() => handleTabClick(3)}
        >
          Tab 3
        </button>
      </div>

      <div className="tab-content">
        {activeTab === 1 && <p>Content for Tab 1</p>}
        {activeTab === 2 && <p>Content for Tab 2</p>}
        {activeTab === 3 && <p>Content for Tab 3</p>}
      </div>
    </div>
  );
};

export default Portfolio;

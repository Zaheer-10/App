import React from "react";
import Navigation from "./Navigation";
import AboutTab from "./tabs/AboutTab";
import ResumeTab from "./tabs/ResumeTab";
import PortfolioTab from "./tabs/PortfolioTab";
import BlogTab from "./tabs/BlogTab";

const MainContent = ({ activeTab, setActiveTab }) => {
  const renderTabContent = () => {
    switch (activeTab) {
      case "about":
        return <AboutTab />;
      case "resume":
        return <ResumeTab />;
      case "portfolio":
        return <PortfolioTab />;
      case "blog":
        return <BlogTab />;
      default:
        return <AboutTab />;
    }
  };

  return (
    <div className="main-content">
      <Navigation activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
};

export default MainContent;
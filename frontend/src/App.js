import { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import { Toaster } from "./components/ui/toaster";

function App() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="App">
      <div className="portfolio-container">
        <Sidebar />
        <MainContent
          activeTab={activeTab}
          setActiveTab={setActiveTab}
        />
      </div>
      <Toaster />
    </div>
  );
}

export default App;
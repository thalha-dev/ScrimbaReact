import Header from "./components/Header";
import Footer from "./components/Footer";
import MainContent from "./components/MainContent";

import "./factsApp.css";
import { useState } from "react";

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((currentTheme) => {
      if (currentTheme === "light") {
        return "dark";
      } else {
        return "light";
      }
    });
  };

  return (
    <div id={theme} className="cover">
      <div className="container">
        <Header value={toggleTheme} />
        <MainContent />
        <Footer />
      </div>
    </div>
  );
}

export default App;

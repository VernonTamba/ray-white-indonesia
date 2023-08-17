import { useEffect, useState } from "react";
import "./App.css";
import MainContent from "./components/MainContent";
import Nav from "./components/Nav";

function App() {
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    const currentWindowLocation =
      window.location.host + window.location.pathname;
    if (currentWindowLocation.includes("dashboard")) {
      setActiveLink("dashboard");
    } else if (currentWindowLocation.includes("user")) {
      setActiveLink("user");
    } else if (currentWindowLocation.includes("news")) {
      setActiveLink("news");
    } else {
      setActiveLink("home");
    }
  }, [activeLink]);

  return (
    <div className="app">
      {activeLink !== "home" && (
        <Nav activeLink={activeLink} setActiveLink={setActiveLink} />
      )}
      <MainContent activeLink={activeLink} setActiveLink={setActiveLink} />
    </div>
  );
}

export default App;

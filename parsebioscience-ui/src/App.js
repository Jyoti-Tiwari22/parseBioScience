import React from "react";
import "./styles/style.css"
import Navbar from "./components/Navbar/Navbar";
import MainContext from "./components/MainContent/MainContent";
function App() {
  return (
    <div className="relative">
      <Navbar />
      <MainContext />
    </div>
  );
}

export default App;

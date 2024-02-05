import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/style.css";
import Navbar from "./components/Navbar/Navbar";
import MainContent from "./components/MainContent/MainContent";
import ResearchSection from "./components/MainContent/ResearchSection";
import ContentSection from "./components/MainContent/ContentSection";
import ContentSectionMobile from "./components/MainContent/ContentSectionMobile";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import DatasetsCarousel from "./components/MainContent/DataSetCarousel";
import ProductsSection from "./components/MainContent/ProductSection";
import UnlockProduct from "./components/MainContent/UnlockProduct";
import TestimonialsSection from "./components/MainContent/TestimonialsSection";
import Insights from "./components/MainContent/Insights";
import PartnerSection from "./components/MainContent/PartnerSection"
import AdvanceSection from "./components/MainContent/AdvanceSection";
import PartnerSectionMob from "./components/MainContent/PartnerSectionMob";
import FooterSection from "./components/MainContent/FooterSection";

function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);
  return (
    <Router>
      <div className="relative font-mplus">
        <Navbar />
        <MainContent />
        <ResearchSection />
        {isMobile ? <ContentSectionMobile /> : <ContentSection />}
        <DatasetsCarousel />
        <ProductsSection />
        <UnlockProduct />
        <TestimonialsSection />
        <Insights />
        <PartnerSection />
        <AdvanceSection />
        <PartnerSectionMob />
        <FooterSection />
      </div>
    </Router>
  );
}

export default App;

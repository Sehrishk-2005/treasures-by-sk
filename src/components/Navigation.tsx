import { useState, useEffect } from "react";
import Header from "./Header";
import Hero from "./Hero";
import ProductCategories from "./ProductCategories";
import Collections from "./Collections";
import CustomBox from "./CustomBox";
import About from "./About";
import Gallery from "./Gallery";
import Contact from "./Contact";
import Footer from "./Footer";
import WhatsAppFloat from "./WhatsAppFloat";

const Navigation = () => {
  const [currentSection, setCurrentSection] = useState("home");

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home";
      setCurrentSection(hash);
    };

    // Listen for hash changes
    window.addEventListener("hashchange", handleHashChange);
    
    // Set initial section
    handleHashChange();

    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const renderSection = () => {
    switch (currentSection) {
      case "collections":
        return <Collections />;
      case "custom-box":
        return <CustomBox />;
      case "about":
        return <About />;
      case "gallery":
        return <Gallery />;
      case "contact":
        return <Contact />;
      case "home":
      default:
        return (
          <>
            <Hero />
            <ProductCategories />
            <About />
            <Gallery />
            <Contact />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {renderSection()}
      </main>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default Navigation;
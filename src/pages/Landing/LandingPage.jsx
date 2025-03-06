import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import HeroSection from "../HeroSection/HeroSection";
import Benefits from "../Benefits/Benefits";
import OurSpace from "../OurSpace/OurSpace";
import Download from "../Download/Download";
import Footer from "../Footer/Footer";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <Benefits />
      <OurSpace />
      <Download />
      <Footer />
    </>
  );
};

export default LandingPage;

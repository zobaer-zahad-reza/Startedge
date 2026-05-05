import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import SmsSection from "../Components/SmsSection";
import Stats from "../Components/Stats";
import About from "../Components/About";
import BloodGroups from "../Components/BloodGroups";
import SearchSection from "../Components/SearchSection";
import CTA from "../Components/CTA";
import Footer from "../Components/Footer";

function SocialImpact() {
  return (
    <div className="font-poppins">
      {/* <Navbar /> */}
      <Hero />
      <Features />
      <SmsSection />
      <Stats />
      <About />
      <BloodGroups />
      <SearchSection />
      <CTA />
      {/* <Footer /> */}
    </div>
  );
}

export default SocialImpact;

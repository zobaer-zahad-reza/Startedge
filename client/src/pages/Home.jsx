import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("web");
  const [modalData, setModalData] = useState(null); // For Portfolio Modal

  // Video Parallax Effect Logic
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const iframe = document.getElementById("video-bg");
      if (iframe && window.innerWidth > 768) {
        const opacity = 1 - scrollY / 600;
        const scale = 1 + scrollY / 3000;
        iframe.style.opacity = opacity > 0 ? opacity : 0;
        iframe.style.transform = `translate(-50%, -50%) scale(${scale})`;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Data for Pricing
  const pricingData = {
    web: [
      {
        title: "Basic",
        price: "20,000",
        features: { domain: false, hosting: false, page: true, consult: true },
        popular: false,
      },
      {
        title: "Premium",
        price: "30,000",
        features: { domain: true, hosting: true, page: true, consult: true },
        popular: true,
      },
      {
        title: "Super Premium",
        price: "50,000",
        features: {
          domain: true,
          hosting: true,
          ecommerce: true,
          consult: true,
        },
        popular: false,
      },
    ],
    graphic: [
      {
        title: "Basic",
        price: "12,000",
        features: { item: 1, revision: 1, source: false },
        popular: false,
      },
      {
        title: "Premium",
        price: "20,000",
        features: { item: 1, revision: 2, source: false },
        popular: true,
      },
      {
        title: "Super Premium",
        price: "35,000",
        features: { item: 1, revision: 3, source: true },
        popular: false,
      },
    ],
    marketing: [
      {
        title: "Basic",
        price: "15,000",
        features: { platforms: 3, posts: false },
        popular: false,
      },
      {
        title: "Premium",
        price: "30,000",
        features: { platforms: 4, posts: true },
        popular: true,
      },
    ],
    video: [
      {
        title: "Basic",
        price: "4,800",
        features: { duration: "5 min", grading: false },
        popular: false,
      },
      {
        title: "Premium",
        price: "12,700",
        features: { duration: "10 min", grading: true },
        popular: true,
      },
    ],
  };

  return (
    <div className="bg-dark-bg text-white font-rajdhani overflow-x-hidden"></div>
  );
};

export default Home;

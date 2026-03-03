import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Home = () => {
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

  return <div className="text-black">Home Page</div>;
};

export default Home;

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
    <div className="bg-dark-bg text-white font-rajdhani overflow-x-hidden">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full px-[5%] py-6 flex justify-between items-center z-50 backdrop-blur-md bg-dark-bg/70 border-b border-white/10">
        <a
          href="#"
          className="font-orbitron text-3xl font-bold text-neon-blue tracking-[3px]"
        >
          START<span className="text-neon-pink">EDGE</span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {["Home", "About", "Services", "Portfolio", "Plans", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:text-neon-blue transition font-medium relative group"
              >
                {item}
                <span className="absolute bottom-[-5px] left-0 w-0 h-[2px] bg-gradient-to-r from-neon-blue to-neon-pink transition-all duration-300 group-hover:w-full"></span>
              </a>
            ),
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <i
            className={
              isMobileMenuOpen ? "fa-solid fa-times" : "fa-solid fa-bars"
            }
          ></i>
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-dark-bg z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          {["Home", "About", "Services", "Portfolio", "Plans", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-2xl hover:text-neon-blue"
              >
                {item}
              </a>
            ),
          )}
        </div>
      )}

      {/* Hero Section */}
      <section
        id="home"
        className="h-screen flex flex-col justify-center items-center text-center relative overflow-hidden px-5"
      >
        <div className="absolute top-0 left-0 w-full h-full -z-10 pointer-events-none overflow-hidden">
          <iframe
            id="video-bg"
            className="absolute top-1/2 left-1/2 w-[300%] h-[120%] md:w-[120vw] md:h-[120vh] object-cover pointer-events-none -translate-x-1/2 -translate-y-1/2 opacity-60"
            src="https://www.youtube.com/embed/cXtdsNV2Ems?autoplay=1&mute=1&controls=0&loop=1&playlist=cXtdsNV2Ems&modestbranding=1&rel=0"
            title="Background Video"
            allow="autoplay; encrypted-media"
          ></iframe>
        </div>

        <div className="z-10">
          <h1 className="text-4xl md:text-7xl mb-6 font-orbitron font-bold bg-gradient-to-r from-neon-blue via-neon-pink to-neon-purple text-transparent bg-clip-text animate-glitch drop-shadow-[0_0_10px_rgba(0,255,255,0.5)]">
            WELCOME TO STARTEDGE
          </h1>
          <h2 className="text-xl md:text-2xl text-gray-300 mb-10 font-light">
            Ready to launch your brand to the next level?
          </h2>
          <a
            href="#plans"
            className="inline-block px-8 py-3 border-2 border-neon-blue text-neon-blue rounded-lg transition duration-300 hover:bg-neon-blue hover:text-dark-bg shadow-[0_0_15px_rgba(0,255,255,0.5)]"
          >
            GET STARTED
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-[5%]">
        <h2 className="text-center text-4xl mb-16 font-orbitron text-white border-b-2 border-neon-pink w-max mx-auto pb-2">
          ABOUT US
        </h2>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-6 text-gray-300 text-lg">
            <h3 className="text-3xl text-neon-blue font-orbitron">
              Pioneering the Digital Frontier
            </h3>
            <p>
              Founded in 2023, Startedge emerged from a shared vision to bridge
              the gap between emerging technologies and business applications.
            </p>
            <p>
              We believe technology should be accessible, intuitive, and
              transformative. Our mission is to empower organizations of all
              sizes.
            </p>
          </div>
          <div className="flex-1 relative rounded-xl overflow-hidden border-2 border-neon-blue shadow-[0_0_15px_rgba(0,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,0,255,0.5)] transition duration-500 glow-effect">
            <img
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=2069&q=80"
              alt="Team"
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 px-[5%] bg-light-bg">
        <h2 className="text-center text-4xl mb-16 font-orbitron border-b-2 border-neon-blue w-max mx-auto pb-2">
          OUR SERVICES
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              icon: "fa-magnifying-glass-chart",
              title: "Digital Marketing",
              desc: "Unlock exponential growth with advanced tools.",
            },
            {
              icon: "fa-code",
              title: "Web Development",
              desc: "Step into Web 3.0 with high-performance websites.",
            },
            {
              icon: "fa-pen-nib",
              title: "Graphics Design",
              desc: "Transform raw data into actionable visual insights.",
            },
            {
              icon: "fa-chart-simple",
              title: "Data Analytics",
              desc: "Reveal patterns, trends, and opportunities.",
            },
            {
              icon: "fa-robot",
              title: "Automation",
              desc: "Streamline operations and reduce costs.",
            },
            {
              icon: "fa-shield-halved",
              title: "Cyber Security",
              desc: "Protect your digital assets comprehensively.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className="bg-dark-bg p-8 rounded-xl border border-white/10 hover:-translate-y-2 hover:border-neon-blue hover:shadow-[0_10px_30px_rgba(0,255,255,0.2)] transition duration-300 group glow-effect relative overflow-hidden"
            >
              <div className="text-4xl text-neon-blue mb-4 group-hover:text-neon-pink transition">
                <i className={`fa-solid ${service.icon}`}></i>
              </div>
              <h3 className="text-xl mb-3 font-orbitron">{service.title}</h3>
              <p className="text-gray-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-24 px-[5%]">
        <h2 className="text-center text-4xl mb-16 font-orbitron border-b-2 border-neon-purple w-max mx-auto pb-2">
          PORTFOLIO
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {[
            {
              title: "Malaabis Thawb",
              img: "https://via.placeholder.com/400x250",
              desc: "Next-gen cybersecurity.",
              link: "#",
            },
            {
              title: "DeshLink",
              img: "https://via.placeholder.com/400x250",
              desc: "Interactive robot assistant.",
              link: "#",
            },
            {
              title: "Beigelo",
              img: "https://via.placeholder.com/400x250",
              desc: "Immutable decentralized ledger.",
              link: "https://beigelo.com",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] h-[220px] perspective-1000 group"
            >
              <div className="relative w-full h-full transition-transform duration-700 transform-style-3d group-hover:rotate-y-180">
                {/* Front */}
                <div className="absolute w-full h-full backface-hidden rounded-xl overflow-hidden border border-white/20">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Back */}
                <div className="absolute w-full h-full backface-hidden rotate-y-180 bg-gradient-to-br from-dark-bg to-light-bg flex flex-col justify-center items-center text-center p-4 rounded-xl border border-neon-blue">
                  <h3 className="text-neon-blue font-orbitron text-xl mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-4">{item.desc}</p>
                  <button
                    onClick={() => setModalData(item)}
                    className="text-neon-pink font-bold hover:text-neon-blue transition"
                  >
                    View Case Study
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Logic */}
      {modalData && (
        <div
          className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
          onClick={() => setModalData(null)}
        >
          <div
            className="bg-gradient-to-br from-[#0e0e2c] to-[#1a1a3d] p-8 rounded-xl border border-white/20 max-w-lg w-full relative shadow-[0_0_20px_rgba(0,255,255,0.3)]"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setModalData(null)}
              className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-white"
            >
              &times;
            </button>
            <h2 className="text-2xl font-orbitron text-neon-blue mb-4">
              {modalData.title}
            </h2>
            <p className="text-gray-300 mb-6">{modalData.desc}</p>
            <a
              href={modalData.link}
              target="_blank"
              className="inline-block px-6 py-2 bg-gradient-to-r from-neon-blue to-neon-pink rounded text-white font-bold hover:scale-105 transition"
            >
              Visit Project
            </a>
          </div>
        </div>
      )}

      {/* Pricing Plans */}
      <section
        id="plans"
        className="py-24 px-[5%] bg-gradient-to-br from-dark-bg to-[#1a1a3a]"
      >
        <h2 className="text-center text-4xl mb-12 font-orbitron border-b-2 border-neon-green w-max mx-auto pb-2">
          OUR PLANS
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(pricingData).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`px-6 py-2 rounded-full font-orbitron text-sm transition duration-300 capitalize ${activeTab === key ? "bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-[0_0_10px_rgba(0,255,255,0.5)]" : "bg-white/10 text-gray-400 hover:bg-white/20"}`}
            >
              {key}
            </button>
          ))}
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingData[activeTab]?.map((plan, idx) => (
            <div
              key={idx}
              className={`bg-light-bg p-8 rounded-xl border transition duration-300 hover:-translate-y-3 relative overflow-hidden ${plan.popular ? "border-neon-pink shadow-[0_0_20px_rgba(255,0,255,0.3)]" : "border-white/10 hover:border-neon-blue"}`}
            >
              {plan.popular && (
                <div className="absolute top-4 right-[-35px] rotate-45 bg-neon-pink text-white text-xs font-bold px-10 py-1">
                  POPULAR
                </div>
              )}
              <h3 className="text-2xl font-orbitron text-neon-blue mb-2">
                {plan.title}
              </h3>
              <div className="text-4xl font-bold mb-6">
                {plan.price}{" "}
                <span className="text-sm text-gray-400 font-normal">BDT</span>
              </div>

              <ul className="space-y-3 mb-8 text-gray-400 text-sm">
                {Object.entries(plan.features).map(([key, val], i) => (
                  <li key={i} className="flex items-center gap-2">
                    <i
                      className={`fa-solid ${val ? "fa-check text-neon-blue" : "fa-xmark text-gray-600"}`}
                    ></i>
                    <span className="capitalize">
                      {key.replace(/([A-Z])/g, " $1").trim()}
                    </span>
                  </li>
                ))}
              </ul>

              <Link
                to={`/pay?plan=${activeTab} - ${plan.title}`}
                className="block w-full text-center py-3 rounded bg-gradient-to-r from-neon-blue to-neon-purple text-white font-bold font-orbitron hover:scale-105 transition shadow-lg"
              >
                GET STARTED
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-[5%]">
        <h2 className="text-center text-4xl mb-16 font-orbitron border-b-2 border-neon-blue w-max mx-auto pb-2">
          GET IN TOUCH
        </h2>
        <div className="flex flex-col lg:flex-row gap-12 bg-light-bg p-8 lg:p-12 rounded-2xl border border-white/10">
          <div className="flex-1 space-y-8">
            <h3 className="text-2xl text-white font-orbitron">
              Let's Build the Future
            </h3>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-location-dot text-neon-pink text-xl w-8"></i>{" "}
                Tech City, Dhaka
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-phone text-neon-pink text-xl w-8"></i>{" "}
                +880 1234 567890
              </div>
              <div className="flex items-center gap-4">
                <i className="fa-solid fa-envelope text-neon-pink text-xl w-8"></i>{" "}
                startedge@gmail.com
              </div>
            </div>
            <div className="h-48 w-full rounded-lg overflow-hidden border border-neon-blue/50">
              <iframe
                className="w-full h-full grayscale hover:grayscale-0 transition duration-500"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233668.38703692693!2d90.27923991057244!3d23.780573258035957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e0!3m2!1sen!2sbd!4v1689234567890"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <form className="flex-1 space-y-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 bg-dark-bg border border-white/10 rounded focus:border-neon-blue focus:outline-none text-white glow-effect"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 bg-dark-bg border border-white/10 rounded focus:border-neon-blue focus:outline-none text-white glow-effect"
            />
            <textarea
              rows="5"
              placeholder="Message"
              className="w-full p-4 bg-dark-bg border border-white/10 rounded focus:border-neon-blue focus:outline-none text-white glow-effect"
            ></textarea>
            <button className="w-full py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full font-bold text-white tracking-widest hover:shadow-[0_0_20px_rgba(0,255,255,0.4)] transition transform hover:-translate-y-1">
              SEND MESSAGE
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-light-bg py-8 text-center border-t border-white/10">
        <p className="text-gray-500">
          © 2025 Startedge Technologies. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Home;

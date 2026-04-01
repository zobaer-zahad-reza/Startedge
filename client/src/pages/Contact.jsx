import React from "react";
import CountUp from "react-countup";

const infoCardsData = [
  {
    icon: (
      <svg
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
    title: "Direct Support",
    value: "+880 1625-239776",
    details: "Available Sun-Thu, 10am-7pm",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Email Inquiry",
    value: "startedge.official@gmail.com",
    details: "Average response: 2 hours",
  },
  {
    icon: (
      <svg
        className="h-8 w-8 text-blue-600"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
    title: "Main Office",
    value: "325-A, 3rd Floor, South Jatrabari, Kalam Mansion, Dhaka-1204",
    details: "Bangladesh Operations Hub",
  },
];

const Contact = () => {
  return (
    <div className="bg-slate-50 text-gray-800 font-sans">
      <main className="max-w-11/12 mx-auto px-6 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-blue-950 mb-6">
            Start Your <span className="text-blue-600">Startup Journey</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg text-gray-600 leading-relaxed">
            Connect with our venture builders today and let's discuss how we can
            elevate your startup from concept to growth. Let's make it happen.
          </p>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {infoCardsData.map((card) => (
            <div
              key={card.title}
              className="bg-white p-8 rounded-3xl shadow-md border border-gray-100 space-y-4 hover:shadow-xl hover:border-blue-100 transition-all duration-300 group"
            >
              <div className="p-3 inline-block bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition-colors">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900">{card.title}</h3>
              <p className="text-lg font-semibold text-blue-600 hover:text-blue-700 hover:underline cursor-pointer">
                {card.value}
              </p>
              <p className="text-sm text-gray-500">{card.details}</p>
            </div>
          ))}
        </div>

        {/* Map Section */}
        <div className="rounded-3xl shadow-lg border-4 border-white mb-24 overflow-hidden relative z-10">
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d913.2617240577612!2d90.43490824915885!3d23.71001928783085!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b9832a8e6de1%3A0xf56086bb57f00a2e!2z4Ka54KeL4Kau4Ka_4KaTIOCmuOCngeCmuOCnjeCmrOCmvuCmuOCnjeCmpeCnjeCmryDgpqrgprDgpr_gpprgprDgp43gpq_gpr4g4Kar4Ka-4Kaw4KeN4Kau4KeH4Ka44KeA!5e0!3m2!1sen!2sbd!4v1775026272315!5m2!1sen!2sbd"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Contact Form Section */}
        {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-24 items-center">
          <div className="space-y-6">
            <div className="inline-block px-4 py-1.5 bg-blue-50 rounded-full text-xs font-bold text-blue-600 shadow-sm border border-blue-100 tracking-wide uppercase">
              GET STARTED
            </div>
            <h2 className="text-4xl font-extrabold text-blue-950 leading-tight">
              Scale Your <span className="text-blue-600">Startup Venture</span>
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Partner with our specialized team to accelerate your business
              growth. We are ready to help you hit your next milestone.
            </p>
            <div className="space-y-4 pt-4 text-gray-700">
              {[
                "Customized Venture Building & Growth Strategy",
                "Dedicated Start-up Success Team",
              ].map((point) => (
                <div key={point} className="flex items-center gap-3">
                  <div className="p-1.5 bg-blue-100 rounded-full">
                    <svg
                      className="h-4 w-4 text-blue-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="font-medium text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-10 md:p-12 rounded-3xl shadow-xl border border-gray-100 relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-cyan-50 rounded-3xl blur-lg opacity-50 -z-10"></div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="e.g. John Doe"
                    className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-1.5"
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    placeholder="your@email.com"
                    className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="service"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Select Service
                </label>
                <select
                  id="service"
                  className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-gray-200 text-gray-600 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all appearance-none"
                >
                  <option>Growth Consulting</option>
                  <option>Concept to Market</option>
                  <option>Venture Building</option>
                  <option>Seed Funding Support</option>
                </select>
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-gray-700 mb-1.5"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  placeholder="Tell us about your venture..."
                  className="w-full px-5 py-3.5 bg-slate-50 rounded-xl border border-gray-200 focus:bg-white focus:ring-2 focus:ring-blue-400 focus:border-blue-400 outline-none transition-all"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-full font-bold shadow-lg shadow-blue-200 hover:bg-blue-700 hover:shadow-blue-300 transition-all active:scale-[0.98]"
              >
                SEND
                <svg
                  className="h-5 w-5 -rotate-45"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  />
                </svg>
              </button>
            </form>
          </div>
        </div> */}

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-24 text-center">
          {[
            { label: "Venture Satisfaction", value: 99, suffix: "%" },
            { label: "Avg. Response Time", value: 2, suffix: "h" },
            { label: "Dedicated Support", value: 24, suffix: "/7" },
            { label: "Startups Scaled", value: 500, suffix: "+" },
          ].map((stat) => (
            <div key={stat.label}>
              <p className="text-4xl font-extrabold text-blue-950 mb-1.5">
                <CountUp end={stat.value} suffix={stat.suffix} duration={4} />
              </p>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Contact;

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neon-blue": "#0ff0fc",
        "neon-pink": "#ff00ff",
        "neon-purple": "#9d00ff",
        "neon-green": "#00ff9d",
        "dark-bg": "#0a0a1a",
        "light-bg": "#1a1a2e",
      },
      fontFamily: {
        orbitron: ["Orbitron", "sans-serif"],
        rajdhani: ["Rajdhani", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 3s linear infinite",
        glitch: "glitch 2s infinite alternate",
      },
    },
  },
  plugins: [],
};

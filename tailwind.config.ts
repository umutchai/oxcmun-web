import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#050B18",
          900: "#0B1120",
          850: "#0F1938",
          800: "#142247",
          700: "#1B2A4A",
          600: "#253A66",
        },
        sky: {
          400: "#38BDF8",
          500: "#0EA5E9",
          600: "#0284C7",
          700: "#0369A1",
        },
        oxcPink: "#D9278E",
        oxcGold: "#D4AF37",
        oxcPurple: "#8B5CF6",
        oxcNavy: "#0B1120",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
        display: ["var(--font-montserrat)", "var(--font-outfit)", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 50% 0%, rgba(14, 165, 233, 0.15) 0%, rgba(10, 17, 40, 0.95) 70%), url('/hero-bg.svg')",
        "navy-radial":
          "radial-gradient(circle at 50% 20%, rgba(37, 58, 102, 0.4) 0%, rgba(10, 17, 40, 1) 100%)",
        "card-gradient":
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.01) 100%)",
        "sky-gradient": "linear-gradient(135deg, #38BDF8 0%, #0284C7 100%)",
        "pink-gradient": "linear-gradient(135deg, #EC4899 0%, #8B5CF6 100%)",
      },
      boxShadow: {
        "sky-glow": "0 0 25px -5px rgba(14, 165, 233, 0.4)",
        "sky-glow-lg": "0 0 40px -5px rgba(14, 165, 233, 0.6)",
        "luxury-card": "0 20px 50px -10px rgba(10, 17, 40, 0.08)",
        "dark-card": "0 20px 40px -15px rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        "float": "float 6s ease-in-out infinite",
        "shine": "shine 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        shine: {
          "100%": { left: "125%" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

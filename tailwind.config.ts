import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat:["var(--font-montserrat)"],
      },
      colors:{
        themeGreen: "#86BB46",
        LightGray: "#CFCFCF",
        themeBlue: "#071D52",
        speBut:"#E2FF2B"
      },
      animation: {
        slider: 'slide linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      boxShadow: {
        'custom-button': '0 4px 6px rgba(134, 187, 70, 0.3), 0 6px 20px rgba(134, 187, 70, 0.19)',
      },
      backgroundPosition: {
        'custom-position': 'center center',
      },
      backgroundImage: {
        'custom-heroBg': "url('/slider1.jpg')",
        "location-gradient": "linear-gradient(0deg, #FFFFFF 0%, #86BB46 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

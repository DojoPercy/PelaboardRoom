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
        speBut:"#E2FF2B",
        lighterGray:"#F3F3F3",
        dark: "#333333",
        gold: "#FFD700",


      },
      transitionTimingFunction: {
        'custom': 'cubic-bezier(.78,.03,.14,.55)',
      },
      animation: {
        slider: 'slide linear infinite',
        'scroll-left': 'scrollLeft 20s linear infinite',
        'scroll-right': 'scrollRight 20s linear infinite',
      },
      keyframes: {
        slide: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollLeft: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        scrollRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
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
        "date-gradient": "linear-gradient(90deg, #071D52 0%, #86BB46 100%)",
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;

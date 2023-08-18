const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffae00",
        secondary: "#00FFFF",
        logo: {
          gradients: {
            primary: {
              from: "#C471F5",
              to: "#FA70CD",
            },
            secondary: {
              from: "#FDB051",
              via: "#F2203E",
              to: "#5342D6",
            },
            tertiary: {
              DEFAULT: "#383C93",
            },
          },
          secondary: "#ffae00",
          tertiary: "#00FFFF",
        },
      },
      fontFamily: {
        sans: ["Work Sans", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};

export default config;

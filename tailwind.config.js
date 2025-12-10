/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: "Poppins, sans-serif",
      secondary: "Nunito, sans-serif",
    },
    extend: {
      colors: {
        primary: "#2F435A",
        secondary: "#AB6B51",
        tertiary: "#39918C",
        light: "#D0B49F",
      },
    },
  },
  plugins: [],
};

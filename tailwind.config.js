// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kelBlue: "#1e40af",
        brandRed: "#ff0000",
      },

      // ✅ Add ALL custom breakpoints here
      screens: {
        "custom-1400": "1400px",
        "custom-1600": "1600px",
        "custom-1800": "1800px",
        "custom-1920": "1920px",
        "3xl": "1920px", // optional alias
      },
    },
  },
  plugins: [],
};

// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        kelBlue: "#1e40af",
        brandRed: "#ff0000",
      },
      screens: {
        "custom-1800": "1800px",
      },
    },
  },
  plugins: [],
};

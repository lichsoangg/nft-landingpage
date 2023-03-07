/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        fontJura: ["Jura", "sans-serif"],
        fontInter: ["Inter", "sans-serif"],
        fontKitOne: ["Kite One", "sans-serif"],
      },
      colors: {
        bgColor: "#191E35",
        primaryColor: "#332FD0",
        secondaryColor: "#F52AF5",
        thirdColor: "#15BFFD",
        redColor: "#FF0000",
        greenColor: "#00FF57",
      },
      backgroundImage: {
        "primary-gradient":
          "linear-gradient(93.07deg, #F52AF5 4.14%, #DD37F5 31.35%, #219BF2 73.51%, #00ADF2 95.21%);",
        "secondary-gradient":
          "linear-gradient(152.14deg, rgba(21, 191, 253, 0.7) 9.96%, rgba(156, 55, 253, 0.7) 100%)",
        "footer-bg": "url('/public/footerbg.png')",
      },
    },
  },
  plugins: [],
};

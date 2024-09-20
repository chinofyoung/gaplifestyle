/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        1200: "1200px",
        900: "900px",
        600: "620px",
        300: "320px",
        150: "150px",
      },
      height: {
        1200: "1200px",
        600: "620px",
        300: "300px",
        150: "150px",
      },
      borderRadius: {
        custom: "44px",
      },
      colors: {
        pacific: {
          200: "#98DCEB",
          300: "#69CCE2",
          500: "#1FB3D4",
          600: "#1CA3C1",
          700: "#167F97",
        },
        roman: {
          200: "#EFB7B3",
          300: "#E89690",
          500: "#DC625A",
          600: "#C85952",
          700: "#9C4640",
        },
        sun: {
          200: "#FDD79D",
          300: "#FCC570",
          500: "#FAA929",
          600: "#E49A25",
          700: "#B2781D",
        },
        fern: {
          200: "#b9dabf",
          300: "#9AC9A2",
          500: "#68AF74",
          600: "#5F9F6A",
          700: "#4A7C52",
        },
        error: {
          500: "#BD002A",
        },
      },
    },
  },
  plugins: [],
};

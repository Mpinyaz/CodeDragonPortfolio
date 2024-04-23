/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "link-shadow": "rgb(28 32 93 / 24%) 0px 2px 8px 0px",
      },
      fontFamily: {
        spaceGrotesk: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

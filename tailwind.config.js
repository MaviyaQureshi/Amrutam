/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        bubbles: "url(/src/images/bg1.png)",
      },
    },
  },
  plugins: [],
};

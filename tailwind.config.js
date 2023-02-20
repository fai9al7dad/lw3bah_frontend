/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./lib/**/*.{js,ts,jsx,tsx}"],
  safelist: [
    "-translate-x-[0px]",
    "-translate-x-[90px]",
    "-translate-x-[180px]",
  ],
  theme: {
    extend: {
      boxShadow: {
        "primary-button": "0 4px 0px #eab308",
        "secondary-button": "0 4px 0px #a3a3a3",
        "navigation-button": "0 3px 0px #e5e5e5",
        "orange-button": "0 4px 0px #C2410C",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "off-white": "hsl(36, 100%, 99%)",
        "soft-orange": "hsl(35, 77%, 62%)",
        "soft-red": "hsl(5, 85%, 63%)",
        "grayish-blue": "hsl(233, 8%, 79%)",
        "dark-grayish": "hsl(236, 13%, 42%)",
        "very-dark-blue": "hsl(240, 100%, 5%)",
      },
      margin: {
        "10vw": "10vw",
      },
    },
    plugins: [],
  },
};

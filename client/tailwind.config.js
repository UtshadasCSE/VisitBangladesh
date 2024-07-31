import daisyui from "./node_modules/daisyui";
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: '"Poppins", sans-serif',
        playwrite: '"Playwrite AT", cursive',
      },
      backgroundImage: {
        heroBg: 'url("./src/assets/images/heroBg.jpeg")',
      },
    },
  },
  plugins: [daisyui],
};

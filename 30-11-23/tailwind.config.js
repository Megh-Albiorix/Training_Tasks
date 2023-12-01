/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        pizza: "#123456",
      },
      height: {
        screen: "100dvh",
      },
    },
    fontFamily: {
      pizza: "Roboto Mono, monospace",
    },
  },
  plugins: [],
};

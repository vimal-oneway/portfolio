/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1a0f17",
        secondary: "#fff",
        accent: "#44283c",
      },
      fontFamily: {
        app: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

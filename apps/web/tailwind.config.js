// tailwind.config.js
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // if using the app directory
    "./pages/**/*.{js,ts,jsx,tsx}", // if using the pages directory
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#AB7AEE",
        dark: "#3F3F3F",
        secondary: "FF5B30",
      },
      fontFamily: {
        header: ["var(--font-stapel)"],
        body: ["Helvetica", "sans-serif"],
      },
    },
  },
  plugins: [],
};

module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: "Orbitron",
      secondary: "Rajdhani",
      tertiary: "Aldrich",
    },
    container: {
      padding: {
        DEFAULT: "15px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        cd1_red: "#FA5A7D",
        cd1_orange: "#FF947A",
        cd1_green: "#3CD856",
        cd1_purple: "#BF83FF",
      },
      boxShadow: {
        bottomS: "0 8px 6px -6px black",
      },
      backgroundImage: {
        "five-bg": "url('./assets/five_removed.png')",
        // 'bg-image':"url()"
      },
    },
  },
  plugins: [],
  // darkMode: 'class',
};

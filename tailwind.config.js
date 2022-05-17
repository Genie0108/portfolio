module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        sidebar: "var(--c-sidebar)",
        icon: "var(--c-icon)",
        textColor: "var(----c-textColor)",
      },
      fontFamily: {
        helvetica: ["Helvetica Neue"],
        laBelle: ["La Belle Aurore"],
        coolvetica: ["Coolvetica"],
      },
    },
  },
  plugins: [],
};

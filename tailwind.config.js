module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        primary: "var(--c-primary)",
        secondary: "var(--c-secondary)",
        secondaryLight: "var(--c-secondaryLight)",
        sidebar: "var(--c-sidebar)",
        icon: "var(--c-icon)",
        textColor: "var(--c-textColor)",
        textColorDark: "var(--c-textColorDark)",
        lightGrey: "var(--c-lightGrey)",
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

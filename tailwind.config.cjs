/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      Inter: ["Inter", "sans-serif"],
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      screens: {
        lg: "1040px",
        lgmd: "1152px",
        "3xl": "1792px",
      },
      colors: {
        Drivly: "#060611",
        DrivlyGreen: "#00CAB9",
        DG_BRIGHT: "#00FDE8",
        DG_DARK: "#0C7D74",
        DG_DARK_CONTAST: "#F7f7f7",
        DG_CONTRAST: "#313131",
        "black-2": "#16162A",
        "black-3": "#1D172B",
        DrivlyDark: "#070707",
        "dark-1": "#333333",
        "drivly-gray": "#425466",
        "medium-gray": "#737373",
        "light-gray-3": "#E5E5E5",
        "light-gray-2": "#E6E6E6",
        "light-gray-1": "#F9F9F9",
        "white-1": "#E9E9E9",
        Titanium: "#D8D8D8",
        BG_WHITE: "#F5F5F5",
        MARKER__LIGHT: "#D9D9D9",
        DETAIL__WHITE: "#EFF2F5",
        DETAIL__BLACK: "#16162A",
        BUTTON__DARK: "#222531",
        off_white: "#F8FAFD",
        STEEL__BLUE: "#58667E",
        BADGE__GRAY: "#eff2f5c1",
        BADGE_BORDER: "#E4E6E9",
        MD__GRAY: "#8C8C8C",
        DARK__STEELE: "#73737F",
        BORDER__LIGHT: "#F4F4F4",
        beige: "#7e5935",
        tan: "#D1C29B",
        cognac: "#62524B",
        frost_green: "#768052",
        brown: "#776E64",
        gold: "#BEAC8B",
        sepia: "#BEAC8B",
        ceramic: "#d6d1d1",
        ebony: "#282C34",
        silver: "#CBCBCB",
        orange: "#FFC032",
        charcoal: "#36454F",
        "black/graphite": "#27292b",
      },
      keyframes: ({ theme }) => ({
        highlight: {
          "0%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
          "40%": {
            background: theme("colors.vercel.pink"),
            color: theme("colors.white"),
          },
        },
        shimmer: {
          "100%": {
            transform: "translateX(100%)",
          },
        },
        translateXReset: {
          "100%": {
            transform: "translateX(0)",
          },
        },
        fadeToTransparent: {
          "0%": {
            opacity: 1,
          },
          "40%": {
            opacity: 1,
          },
          "100%": {
            opacity: 0,
          },
        },
      }),
    },
  },
  plugins: [],
}

module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      encode: ['Encode Sans'],
      kaushan: ["Kaushan Script"],
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
    },

    extend: {
      colors: {
        zinc: {
          DEFAULT: "#27272a",
        },
        black: {
          DEFAULT: "#171717",
        },
        neutral: {
          DEFAULT: "#27272a",
        },
        zinc1: {
          DEFAULT: "#18181b",
        },
        mid: {
          DEFAULT: "#525252",
        },
        stone1: {
          DEFAULT: "#404040",
        },
        stone3: {
          DEFAULT: "#57534e",
        },
        stone2: {
          DEFAULT: "#d4d4d8",
        },
        black1 : {
          DEFAULT: "#1c1917",
        },
        white1 : {
          DEFAULT: "#f5f5f5",
        },
        dark: {
          DEFAULT: "#010101",
          100: "#0a0b0e",
          200: "#16181d",
          300: "#16181d",
          500: "#0f1115",
          700: "#202125",
        },
      },
    },
  },
  variants: {
    extend: {
      boxShadow: ["dark"],
    },
  },
  plugins: [],
};
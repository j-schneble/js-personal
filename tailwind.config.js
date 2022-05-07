module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class",
  theme: {
    fontFamily: {
      encode: ['Encode Sans'],
      kaushan: ["Kaushan Script"],
      SFMono: ['SFMonoRegular.woff'],
      SFMono2: ['SFMonoLight.woff']
    },
    boxShadow: {
      "custom-light": " 0 0 10px #313131",
      "custom-dark": "5px 5px 10px #0a0c0e , -5px -5px 10px #14161c",
      '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
    },
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)'
      ]
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
        stonestone: {
          DEFAULT: "#737373",
        },
        stone2: {
          DEFAULT: "#d4d4d8",
        },
        new: {
          DEFAULT: "#f9fafb",
        },
        black1 : {
          DEFAULT: "#1c1917",
        },
        white1 : {
          DEFAULT: "#f5f5f5",
        },
        green : {
          DEFAULT: "#64ffda",
        },
        navy:{
          DEFAULT: "#0a192f",
        },
        lightnavy:{
          DEFAULT: "#112240",
        },
        lightestnavy:{
          DEFAULT: "#233554",
        },
        slate:{
          DEFAULT: "#8892b0",
        },
        lightslate:{
          DEFAULT: "#8892b0",
        },
        lightestslate:{
          DEFAULT: "#ccd6f6",
        },
        whiter:{
          DEFAULT: "#e6f1ff",
        },
        
        zincdark: {
          DEFAULT: "#18181b",
        },
        zincc: {
          DEFAULT: "#27272a",
        },
        zinclight: {
          DEFAULT: "#3f3f46",
        },
        zinclightest: {
          DEFAULT: "#52525b",
        },
        zinclightester: {
          DEFAULT: "#71717a",
        },
        zincmost: {
          DEFAULT: "#a1a1aa",
        },
        textwhite: {
          DEFAULT: "#e5e7eb",
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
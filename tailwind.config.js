/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        "intro": "30% 70% 61% 39% / 29% 34% 66% 71% "
      },
      transitionProperty: {
        "allLinear": "0.3s linear",
        "opacity": "0.3s ease-in",
        "opacity1": "0.3s ease-in",
        "opacityDetail": "0.3s ease-in",
        "height": "0.3s linear",
        "navbar": "0.3s ease"
      },
      backgroundImage: {

        "learn-more": "url('../public/images/learn-more.webp')",
        "footer": "url('../public/images/footer-bg.webp')",
        "navbar-title": "url(../public/images/navbar-title.webp)"
      },
      // screens: {
      //   ip: "320px",

      //   sm: "767px",

      //   md: "1374px",

      //   lg: "1600px",
      // },

      animation: {
        "appear-slow": "beat ease-in-out 0.3s",
        "height": "height ease-in-out 0.3s",
        "effect": "effect 3s ease-in-out infinite alternate",
        "effectHover": "effect 3s ease-in-out infinite alternate"
      },

      keyframes: {
        effect: {
          "0%": {
            borderRadius: "43% 57% 30% 70% / 52% 30% 70% 48%"
          },
          "50%": {
            borderRadius: "70% 30% 54% 46% / 67% 51% 49% 33%"

          },
          "100%": {
            borderRadius: "44% 56% 33% 67% / 53% 40% 60% 47%"
          }
        },

        effectHover: {
          "0%": {
            borderRadius: "50% 60% 32% 80% / 40% 50% 80% 40%"
          },
          "50%": {
            borderRadius: "75% 31% 50% 43% / 60% 58% 47% 44%"

          },
          "100%": {
            borderRadius: "46% 57% 34% 63% / 59% 40% 64% 49%"
          }
        },
        height: {
          "0%": { height: "0" },
          "100%": { height: "100%" },
        },
        height1: {
          "0%": { height: "124px" },
          "100%": { height: "0" },
        },
        width: {
          "0%": { width: "0" },
          "100%": { width: "100%" },
        },
        beat: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        flash: {
          "0%": { opacity: "1" },
          "100%": { opacity: "0" },
        },
        beat1: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(6.5)" },
        },
        beat2: {
          "0%": { opacity: "0", transform: "scale(0)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },

      boxShadow: {
        icon: "1px 4px 20px rgb(26, 26, 26, 0.09)",
        cart: "0 0 15px #0000002e",
        navBar: "1px 1px 0 0 rgb(228, 228, 228, 20%);",
        form: "1px 6px 10px 3px rgb(26, 26, 26, 7%)",
        yourCart: "0 0 3px 0 rgb(0, 0, 0, 25%)"
      },

      cursor: {
        point: "url(../public/pointing.svg), pointer",
      },

      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        black: {
          300: "#1a1a1a"
        },
        hex: {
          100: "#9e9999"
        },
        pink: {
          500: "#ef6d9f"
        },
        primary: {
          100: "#CCEBF2",
          500: "#009dbe",
        },

        green: {
          100: "#F7FEF8",
          200: "#DCFADE",
          300: "#A9F5AB",
          400: "#4f8a10",
          500: "#02BD3A",
        },
        red: {
          100: "#FFF7F5",
          200: "#FFE7E1",
          300: "#ffac9f",
          400: "#EF6851",
          500: "#DD0F05",
        },
        blue: {
          100: "#F2F9FF",
          200: "#E1EFFF",
          300: "#A2CBFF",
          400: "#509AFF",
          500: "#0065FF",
        },
        orange: {
          100: "#FFF9F5",
          200: "#FFF2E2",
          300: "#FFD0A5",
          400: "#FF9A54",
          500: "#FF6006",
        },
        white: {
          200: "#efefef",
          300: "#f4f4f4",
          500: "#ffffff",
        },
        ink: {
          100: "#9e9999",
          300: "#1a1a1ae3"
        },
      },
    },
  },
  plugins: [],
};
const colors = require("tailwindcss/colors");

const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],

  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        primary: colors.sky,
      },
      fontFamily: {
        mono: [
          "var(--font-geist-mono)",
          "Geist Mono Variable",
          "Geist Mono",
          ...defaultTheme.fontFamily.mono,
        ],
        sans: ["Figtree Variable", "Figtree", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
      typography: (/** @type {{ theme: Function }} */ { theme }) => ({
        primary: {
          css: {
            "--tw-prose-links": theme("colors.amber[600]"),
            "--tw-prose-invert-links": theme("colors.amber[500]"),
          },
        },
      }),
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

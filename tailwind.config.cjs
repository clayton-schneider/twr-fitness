/** @type {import('tailwindcss').Config} */

const FONT_FAMILY_BASE = [
  "system-ui",
  "-apple-system",
  "BlinkMacSystemFont",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Open Sans",
  "Helvetica Neue",
  "sans-serif",
];

module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        oswald: ["Oswald", ...FONT_FAMILY_BASE],
        sans: ["Open Sans", ...FONT_FAMILY_BASE],
      },
      colors: {
        "primary-darker": "#1D323F",
        primary: "#271BF7",
        "primary-lighter": "#078FE0",
        accent: "#F6AE2D",
        bg: "#EBECF3",
        "text-light": "#FFFFFF",
        "text-dark": "#2D2D2D",
      },
      padding: {
        edge: "2.5%",
      },
    },
  },
  plugins: [],
};

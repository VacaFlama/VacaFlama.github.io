/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        flame: "#f20b1c",
        ember: "#8f1515",
        ink: "#080504",
        hide: "#6f4a36",
        blush: "#f59aa0",
        horn: "#f2d86b",
        nitro: "#10c7e9",
        asphalt: "#15110f",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -34px rgb(8 5 4 / 0.7)",
        brand: "0 22px 65px -30px rgb(242 11 28 / 0.75)",
      },
    },
  },
  plugins: [],
};

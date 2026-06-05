/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        flame: "#e51f29",
        ember: "#9f141c",
        ink: "#030304",
        hide: "#815a43",
        blush: "#f4a2a3",
        nitro: "#6bb3f2",
        asphalt: "#0b0808",
        panel: "#151010",
        smoke: "#241b1b",
        bone: "#f7f3f2",
        frost: "#e8f3fe",
        rosewash: "#fde8e9",
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Montserrat", "Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 24px 70px -34px rgb(3 3 4 / 0.72)",
        brand: "0 22px 65px -30px rgb(229 31 41 / 0.74)",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "noise-texture": "url('/noiseandtexture.webp')",
        "noise-texture-dark": "url('/noiseandtexturedark.webp')",
      },
      colors: {
        whiteaccent: "rgba(251, 251, 251, 1)",
        black: "rgba(9, 9, 9, 1)",
      },
    },
  },
  plugins: [],
}

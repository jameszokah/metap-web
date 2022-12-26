// tailwind-workspace-preset.js

module.exports = {
  theme: {
    extend: {
      colors: {
        'dark-primary': '#1A222E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("flowbite/plugin")
],
content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./pages/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
};
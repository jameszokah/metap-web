/** @type {import('tailwindcss').Config} */
const { join } = require('path');

// available since Nx v 12.5
const { createGlobPatternsForDependencies } = require('@nrwl/next/tailwind');

module.exports = {
  presets: [require('../../tailwind-workspace-preset.js')],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: "#14E8D8",
        "dark-primary": "#1A222E",
        "semi-dark": "#1F2937",
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"),
    require("@shrutibalasa/tailwind-grid-auto-fit"),
    require("tailwind-scrollbar-hide"),
    require('tw-elements/dist/plugin'),
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./src/**/*.{ts,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
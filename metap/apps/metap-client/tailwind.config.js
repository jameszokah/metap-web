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
        'dark-primary': '#1A222E'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin")
  ],
  content: [
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
    "./public/**/*.html",
    "./src/**/*.{ts,tsx}",
    ...createGlobPatternsForDependencies(__dirname),
  ],
};
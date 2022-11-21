const path = require("path");

module.exports = {
  plugins: {
    tailwindcss: {
      config: path.join(__dirname, 'tailwind.config.js'),
    },
    autoprefixer: {},
  },
}


// const { join } = require('path');

// module.exports = {
//   plugins: {
//     tailwindcss: {
//       config: join(__dirname, 'tailwind.config.js'),
//     },
//     autoprefixer: {},
//   },
// };
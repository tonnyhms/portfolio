/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      colors:{
        current: 'currentColor',
        'body-bg-color': '#22212c',
        'text-color': '#837e9f',
        'bg-cards': '#302f3d',
        'ht-techs': '#cb92b1',
      }
    },
  },
  plugins: [],
  // corePlugins: {
  //   preflight: false,
  // },
}

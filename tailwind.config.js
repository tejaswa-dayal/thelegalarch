/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './src/**/**/*.jsx',
    './index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        primary:{
          lighter:"#30C7B5",
          neutral:"#00AC97",
          dark:'#00AC97'
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './src/**/**/*.jsx',
    './index.html',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    fontFamily:{
        Karla: ["Karla", "sans-serif"],
    },
    extend: {
      colors:{
        primary:{
          lighter:"#30C7B5",
          neutral:"#039c89",
          dark:'#008272'
        }
      },
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}


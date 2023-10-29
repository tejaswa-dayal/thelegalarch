/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.jsx',
    './src/**/**/*.jsx',
    './index.html',
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
        },
        secondary:{
          lighter:'#FA7B55',
          neutral:'#DE6B48',
          dark:'#CD5A38',
        }
      },
    },
  },
  plugins: [],
}


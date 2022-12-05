/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./app/**/*.{js,ts,jsx,tsx}",
      "./pages/**/*.{js,ts,jsx,tsx}",
      "./components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        colors:{
          primary:'#fab528',
         color: '#666666',
          title: '#2a4356',
          orange:"#FF7200"
        }
      },
    },
    plugins: [],
  }
  
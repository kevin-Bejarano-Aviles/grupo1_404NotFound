/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastelyellow: '#fdcb6e',
        pastelpink: '#f4e3e3',
        pastelgray: '#f4f4f4',
        pastelblue: '#2f3542',
        pastelred: '#ff6b81',
        pastelblack: '#0f1419',
        hoverpastelyellow: '#fcc358',
        hoverpastelblue: '#262b38',
        hoverpastelred: '#fc566f',
      },
    },
  },
  plugins: [],
}

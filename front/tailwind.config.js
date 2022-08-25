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
        pastelred: '#ff6b81'
      },
    },
  },
  plugins: [],
}

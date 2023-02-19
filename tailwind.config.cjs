/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        theme: {
          bg: "#161a2b",
          to: "#3010ff",
          from: '#6473ff',
        },
        card: {
          bg: {
            one: "#1b1b1b",
            two: "#222",
            three: "#1b1b1b",
          }
        }
        ,
        options: {
          one: {
            to: "#149fff",
            from: "#117aff"
          },
          two: {
            to: "#ff7614",
            from: "#ff5411"
          },
          there: {
            to: "#5d0cff",
            from: "#9b00fa"
          },
          four: {
            to: "#ff0cf1",
            from: "#fa0087"
          }
        }
      },
      animation: {
        'spin-slow': 'spin 2s linear infinite',

      }
    },
  },
  plugins: [],
}
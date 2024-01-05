/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.html"],
  theme: {
    extend: {
      screens : {
            "small" :"51px"
      },
    },
  },
  plugins: [],
}


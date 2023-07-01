/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        box: "0px 0px 30px #f2f2f2",
        search_input_focus: "0px 0px 30px #ff88004d",
      },
      borderWidth: {
        division: "1px solid #e8e8e8",
      },
    },
  },
  plugins: [],
};

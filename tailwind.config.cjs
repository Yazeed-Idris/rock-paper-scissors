/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
            "Dark": "hsl(229, 25%, 31%)",
            "Score": "hsl(229, 64%, 46%)",
            "Score-Number": "#565468",
            "Header-Outline": "hsl(217, 16%, 45%)",
            "Scissors-Gradient-from": "hsl(39, 89%, 49%)",
            "Scissors-Gradient-to": "hsl(40, 84%, 53%)",
            "Paper-Gradient-from": "hsl(230, 89%, 62%)",
            "Paper-Gradient-to": "hsl(230, 89%, 65%)",
            "Rock-Gradient-from": "hsl(349, 71%, 52%)",
            "Rock-Gradient-to": "hsl(349, 70%, 56%)",
            // "Lizard Gradient": "hsl(261, 73%, 60%) to hsl(261, 72%, 63%)",
            "Cyan": "hsl(189, 59%, 53%) to hsl(189, 58%, 57%)",
        },
        fontFamily: {
            "Barlow-Semi-Condensed": ['"Barlow Semi Condensed"', 'sans-serif']
        }
    },
  },
  plugins: [],
}

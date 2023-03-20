/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                "White-Shadow": "#bbc0d5",
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
                "Lizard-Gradient-from": "hsl(261, 73%, 60%)",
                "Lizard-Gradient-to": "hsl(261, 72%, 63%)",
                "Spock-Gradient-from": "hsl(189, 59%, 53%)",
                "Spock-Gradient-to": "hsl(189, 58%, 57%)",
            },
            fontFamily: {
                "Barlow-Semi-Condensed": ['"Barlow Semi Condensed"', 'sans-serif']
            },
            spacing: {
                '34': '8.5rem',
                '26': '6.5rem',
                '18': '4.5rem',
                '22': '5.5rem',
            }
        },
    },
    plugins: [],
}

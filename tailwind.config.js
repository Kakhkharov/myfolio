/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: {
                    light: "#F8FAFC",
                    dark: "#020617", // Deeper dark for Finex
                },
                surface: {
                    light: "rgba(255, 255, 255, 0.7)",
                    dark: "rgba(15, 23, 42, 0.6)",
                },
                primary: {
                    DEFAULT: "#00FF9C", // Finex Mint Green
                    light: "#33FFAF",
                    dark: "#00D180",
                },
                accent: "#00FF9C",
                border: {
                    light: "rgba(0, 0, 0, 0.05)",
                    dark: "rgba(255, 255, 255, 0.05)",
                }
            },
            animation: {
                'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'blob': 'blob 7s infinite',
            },
            keyframes: {
                blob: {
                    '0%': { transform: 'translate(0px, 0px) scale(1)' },
                    '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
                    '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
                    '100%': { transform: 'translate(0px, 0px) scale(1)' },
                },
            },
        },
    },
    plugins: [],
}

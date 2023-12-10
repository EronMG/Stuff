/** @type {import('tailwindcss').Config} */
export const content = ["./index.html", "./src/**/*.{js,jsx}"];
export const mode = "jit";
export const theme = {
    extend: {
        colors: {
            primary: "#fff",
            secondary: "#00f6ff",
            dimWhite: "rgba(255, 255, 255, 0.7)",
            dimBlue: "rgba(9, 151, 124, 0.1)",
            black: 'rgba(255, 255, 255, 0.70)',
            black1: 'rgba(255, 255, 255, 0.14)',
        },
        fontFamily: {
            roboto: ['Roboto', 'sans-serif'],
        },
    },
    screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
    },
};
export const plugins = [];
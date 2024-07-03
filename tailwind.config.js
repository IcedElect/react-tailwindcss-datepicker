/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
    darkMode: "class",
    theme: {
        colors: {
            white: "#FFFFFF",
            primary: {
                100: "#F4F8FB",
                200: "#D9E6F1",
                300: "#6A6AA5",
                400: "#687FFF",
                500: "#232C4F",
                600: "#6F7594",
                700: "#212A44",
                800: "#1D233C",
                900: "#0C111F"
            },
            secondary: {
                100: "#FFE1BD",

                200: "#FFD3A4", // Copilot
                300: "#FFC68B", // Copilot

                400: "#F58B22",
                500: "#F7931E",
                600: "#E5523D",

                700: "#D72154", // Copilot

                800: "#D72154",
                900: "#D4145A"
            },
            accent: {
                900: "#4057D9"
            },
            // 'secondary': '#F68C22',
            black: "#000021"
        }
    },
    variants: {},
    plugins: [require("@tailwindcss/forms")]
};

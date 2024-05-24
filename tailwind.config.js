/** @type {import('tailwindcss').Config} */
export default {
    safelist: [
        {
            pattern: /^(.*?)/,
        },
    ],
    content: ['./src/**/*.{js, jsx, ts, tsx}'],
    theme: {
        extend: {},
    },
    plugins: [],
};

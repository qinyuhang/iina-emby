const colors = require('tailwindcss/colors')
module.exports = {
    // prefix: 'emby-',
    content: [
        './src/standalone/*.{html,ts,tsx}',
        './src/standalone/**/*.{html,ts,tsx}',
        './src/pref/*.{html,ts,tsx}',
        './src/pref/**/*.{html,ts,tsx}'
    ],
    dark: 'media',
    theme: {
        colors: {
            ...colors,
            gray: colors.trueGray,
        },
        extend: {

        },
    },
    plugins: [],
}
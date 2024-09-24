/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
    content: ['./app/index.pug', './app/includes/*.pug', './app/public/assets/js/main.js'],
    theme: {
        colors: {
            background: '#0e141b',
            'background-offset': '#15222b',
            primary: '#ff5277',
            secondary: '#43a9a3',
            'primary-offset': '#ff2957',
            'primary-text': '#FFFFFF',
            'offset-text': '#818a91',
            white: '#FFFFFF',
        },
        extend: {
            fontFamily: {
                sans: ['Inter var', ...defaultTheme.fontFamily.sans],
                code: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace', 'Inter var'],
            },
            transitionProperty: {
                color: 'color',
                top: 'top',
                background: 'background',
                'bg-text-color': 'background,text-color',
                'menu-icon-row': 'transform,background,opacity',
            },
            margin: {
                center: '0 auto',
            },
        },
    },
    plugins: [],
};

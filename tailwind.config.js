import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
                lato: ['Lato', 'sans-serif'],
            },
            boxShadow: {
                'bottom-only': '0 10px 10px rgba(0, 0, 0, 0.1)',
              },
              screens: {
                'xxl':'1600px',
                'xx':'540px',
                'xs': '480px',
                'smx':'350px',
                'xxs': '225px', // Custom breakpoint for extra small screens
                'custom-lg': { 'min': '1600px', 'max': '1645px' },
              },
              colors: {
                lightGray: '#F5F5F5', // You can give it any name like 'lightGray'
              },
              padding: {
                '20': '30px',
              },
        },
    },

    plugins: [forms],
};

/** @type {import('tailwindcss').Config} */
import { blue, lime, slate } from 'tailwindcss/colors'

// contrast values ensure proper text contrast if used with the same key on bg.
// EX: <div className='bg-primary-800 text-primary-contrast-800'></div>
const primary = {
    ...blue,
    DEFAULT: blue[800],
    contrast: {
        50: slate[800],
        100: slate[800],
        200: slate[800],
        300: slate[800],
        400: slate[800],
        500: '#FFFFFF',
        600: '#FFFFFF',
        700: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        900: '#FFFFFF',
        950: '#FFFFFF',
    },
}

const secondary = {
    ...lime,
    DEFAULT: lime[500],
    contrast: {
        50: slate[800],
        100: slate[800],
        200: slate[800],
        300: slate[800],
        400: slate[800],
        DEFAULT: slate[800],
        600: slate[800],
        700: '#FFFFFF',
        800: '#FFFFFF',
        900: '#FFFFFF',
        950: '#FFFFFF',
    },
}

const smoke = {
    100: 'rgba(0,0,0,0.1)',
    200: 'rgba(0,0,0,0.2)',
    300: 'rgba(0,0,0,0.3)',
    400: 'rgba(0,0,0,0.4)',
    500: 'rgba(0,0,0,0.5)',
    600: 'rgba(0,0,0,0.6)',
    700: 'rgba(0,0,0,0.7)',
    800: 'rgba(0,0,0,0.8)',
    900: 'rgba(0,0,0,0.9)',
}

export default {
    content: ['./index.html', './src/**/*.vue'],
    theme: {
        fontSize: {
            'heading-4': '1.125rem', // 18px
            'heading-3': '1.5rem', // 24px
            'heading-2': '1.75rem', // 28px
            'heading-1': '2rem', // 32px,
            'body-xs': '0.75rem', // 12px
            'body-sm': '0.875rem', // 14px
            'body-md': '1rem', // 16px
            'body-lg': '1.125px', // 18px
        },
        extend: {
            backdropBlur: {
                xs: '2px',
            },
            colors: {
                primary: primary,
                secondary: secondary,
                smoke: smoke,
            },
            gridTemplateRows: {
                minutes: '3rem repeat(1440, minmax(0, 1fr))',
            },
            // Extend the use of row-span-* from 12 to 1440 (min/day)
            gridRow: Object.fromEntries(
                Array(1428)
                    .fill(null)
                    .map((_, i) => {
                        const span = i + 12 // 12 is currently the max that tailwind supports on row-span-*
                        return [`span-${span}`, `span  ${span} / span ${span}`]
                    }),
            ),
            gridRowStart: Object.fromEntries(
                Array(1428)
                    .fill(null)
                    .map((_, i) => {
                        const row = i + 12 // 12 is currently the max that tailwind supports on row-span-*
                        return [row.toString(), row.toString()]
                    }),
            ),
            spacing: {
                DEFAULT: '1.25rem' /* *-5, 20px */,
                12.5: '3.125rem',
                13: '3.25rem',
            },
        },
    },
    safelist: [
        { pattern: /grid-cols-./ },
        { pattern: /grid-rows-./ },
        { pattern: /col-start-./ },
        { pattern: /row-start-./ },
        { pattern: /^row-start-(1[0-6]|[2-9])$/ },
        { pattern: /row-end-./ },
        { pattern: /row-span-./ },
        { pattern: /^row-span-(1[0-6]|[2-9])$/ },
        { pattern: /border-./ },
        { pattern: /max-w-./ },
        { pattern: /bg-./ },
        { pattern: /text-./ },
    ],
    plugins: [],
}

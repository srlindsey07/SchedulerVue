/** @type {import('tailwindcss').Config} */
import * as colors from 'tailwindcss/colors'

// contrast values ensure proper text contrast if used with the same key on bg.
// EX: <div className='bg-primary-800 text-primary-contrast-800'></div>
const primary = {
    ...colors.blue,
    DEFAULT: colors.blue[800],
    contrast: {
        50: colors.slate[800],
        100: colors.slate[800],
        200: colors.slate[800],
        300: colors.slate[800],
        400: colors.slate[800],
        500: '#FFFFFF',
        600: '#FFFFFF',
        700: '#FFFFFF',
        DEFAULT: '#FFFFFF',
        900: '#FFFFFF',
        950: '#FFFFFF',
    },
}

const secondary = {
    ...colors.lime,
    DEFAULT: colors.lime[500],
    contrast: {
        50: colors.slate[800],
        100: colors.slate[800],
        200: colors.slate[800],
        300: colors.slate[800],
        400: colors.slate[800],
        DEFAULT: colors.slate[800],
        600: colors.slate[800],
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
        extend: {
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
        { pattern: /bg-./ },
        { pattern: /text-./ },
    ],
    plugins: [],
}

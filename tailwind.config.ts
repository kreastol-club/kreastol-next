import type {Config} from 'tailwindcss'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
            },
        },
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],

    daisyui: {
        themes: [
            {
                light: {
                    ...require("daisyui/src/theming/themes")["[data-theme=light]"],
                    "primary" : "#3943b7",
                    // "primary-focus" : "",
                    // "primary-content" : "",
                    // "secondary" : "",
                    // "secondary-focus" : "",
                    // "secondary-content" : "",
                    // "accent" : "",
                    // "accent-focus" : "",
                    // "accent-content" : "",
                    // "neutral" : "",
                    // "neutral-focus" : "",
                    // "neutral-content" : "",
                    // "base-100" : "",
                    // "base-200" : "",
                    // "base-300" : "",
                    // "base-content" : "",
                }
            },
            {
                dark: {
                    ...require("daisyui/src/theming/themes")["[data-theme=dark]"],
                    "primary" : "#3943b7",
                    // "primary-focus" : "",
                    // "primary-content" : "",
                    // "secondary" : "",
                    // "secondary-focus" : "",
                    // "secondary-content" : "",
                    // "accent" : "",
                    // "accent-focus" : "",
                    // "accent-content" : "",
                    "neutral" : "#102e4a",
                    "neutral-focus" : "#102e4a",
                    "neutral-content" : "#102e4a",
                    "base-300" : "#041b15",
                    "base-200" : "#0B2033",
                    "base-100" : "#133657",
                    // "base-content" : ""
                }
            },
        ]
    },
}
export default config;
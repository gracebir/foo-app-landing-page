/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        "header-bg":"var(--header-bg)",
        "head-text": "--head-text",
        "clr-gray":"var(--sub-text)",
        "orange-color": "var(--orange-color)"
      }
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#0866ff",
          "secondary": "#42b72a",
          "accent": "#37cdbe",
          "neutral": "#3d4451",
          "base-100": "#ffffff"
        }
      }
    ]
  }
}
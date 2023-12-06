import type { Config } from 'tailwindcss'

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
      colors: {
        'greenPrimary': '#4BBD93',
        'greenSecondary': '#164038',
        'grayPrimary': '#4A5568',
        'bgPrimary': '#F1F2FF',
        'textPrimary': '#2D3748',
        'textSecondary': '#4A5568',
        'bgSecondary': '#F1F2FF'
      }
    },
  },
  plugins: [],
}
export default config

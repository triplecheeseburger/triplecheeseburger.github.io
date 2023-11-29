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
        'polar-night-1': '#2E3440',
        'polar-night-2': '#3B4252',
        'polar-night-3': '#434C5E',
        'polar-night-4': '#4C566A',
        'snow-storm-1': '#D8DEE9',
        'snow-storm-2': '#E5E9F0',
        'snow-storm-3': '#ECEFF4',
        'frost-1': '#8FBCBB',
        'frost-2': '#88C0D0',
        'frost-3': '#81A1C1',
        'frost-4': '#5E81AC',
        'aurora-1': '#BF616A',
        'aurora-2': '#D08770',
        'aurora-3': '#EBCB8B',
        'aurora-4': '#A3BE8C',
        'aurora-5': '#B48EAD',
      },
    },
  },
  plugins: [],
}
export default config

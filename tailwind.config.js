/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: '#0f766e',
        'primary-light': '#14b8a6',
        secondary: '#f59e0b',
        success: '#10b981',
        danger: '#ef4444',
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
        },
      },
      boxShadow: {
        soft: '0 4px 12px rgba(0,0,0,0.08)',
        card: '0 10px 30px rgba(0,0,0,0.12)',
      },
      borderRadius: {
        xl: '14px',
      },
    },
  },
  plugins: [],
};

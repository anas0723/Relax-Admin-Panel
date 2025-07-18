module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: {
          DEFAULT: '#F5F7FA',
          alt: '#ECEFF4',
          soft: '#F0FCFC',
        },
        sidebar: {
          solid: '#113F45',
          navy: '#2D3A4A',
        },
        accent: {
          DEFAULT: '#00CFFF',
          teal: '#1AC2B7',
          hover: '#00CFFF',
          purple: '#5A1F68',
          purpleDark: '#4C1973',
        },
        text: {
          primary: '#1E1E2F',
          secondary: '#6C757D',
          header: '#4C1973',
          white: '#F5F5F5',
        },
      },
      backgroundImage: {
        'sidebar-gradient': 'linear-gradient(180deg, #1AC2B7 0%, #00CFFF 100%)',
      },
      borderRadius: {
        xl: '1.25rem',
      },
      boxShadow: {
        card: '0 2px 16px 0 rgba(44, 62, 80, 0.08)',
      },
    },
  },
  plugins: [],
}; 
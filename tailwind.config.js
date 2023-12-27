module.exports = {
  important: true,
  content: ['./components/**/*.{js,ts,jsx,tsx}', './pages/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ais: {
          black: '#1F1E1E',
          'blue-gray': '#E1E8ED',
          'light-blue': '#11BBFD',
          'dark-blue': '#4565B8',
          'light-gray': '#f5f5f5',
          'dark-gray': '#444444',
          indigo: '#24314D',
          'hover-indigo': '#374b75',
          'background-blue': '#3E69B9',
          white: '#fafafa',
          navy: '#202042',
          gray: '#B8B8B8'
        },
        hai: {
          orange:'#FE6B52',
          'dark-blue':'#3E69B9',
          'light-blue':'#458EEC',
          navy:'#293039',
          gray:'#4F4F4F',
          beige:'#FFF9F5',
          cloud:'#DCE7ED',
          white: '#fafafa',
        }
      },
      backgroundSize: {
        fill: '100% 100%',
        'extra-fill': '150% 150%',
      },
      screens: {
        xs:'430px',
        med: '832px',
      },
    },
    css: {
      container: {
        display: 'flex',
      }
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      cairo: ['Cairo', 'sans-serif'],
      hind: ['Hind Siliguri'],
      lucidity: ['var(--lucidity)'],
      placard: ['var(--placard)'],
      roboto: ['var(--roboto)']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

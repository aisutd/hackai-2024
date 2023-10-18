module.exports = {
  important: true,
  content: ["./components/**/*.{js,ts,jsx,tsx}", './pages/**/*.{js,ts,jsx,tsx}'],
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
          'indigo': '#24314D',
          'hover-indigo': '#374b75',
          white: '#fafafa',
          navy: '#202042',
          gray: '#B8B8B8',
        },
        hai: {
          orange:'#FE6B52',
          'dark-blue':'#3E69B9',
          'light-blue':'#458EEC',
          navy:'#293039',
          gray:'#4F4F4F',
          beige:'#FFF9F5'
        }
      },
      backgroundSize: {
        fill:'100% 100%',
        'extra-fill':'150% 150%'
      },
      screens: {
        'med':'832px'
      }
    },
    css: {
      container: {
        'display': 'flex',
      },
      card: {
        'position': 'relative',
        'width': '282px',
        'height': '426.08px',
        'margin': '10px',
        'perspective': '1000px',
        front: {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'backface-visibility': 'hidden',
        },
        back: {
          'position': 'absolute',
          'width': '100%',
          'height': '100%',
          'backface-visibility': 'hidden',
        },
        front: {
          //'transform': 'rotateX(0deg)',
        },
        back: {
          //'transform': 'rotateX(0deg)',
          //'filter': 'invert(100%)',
        },
        flip: {
          //'transform': 'rotateX(0deg)',
        }
      },
    },
    fontFamily: {
      sans: ['IBM Plex Sans', 'sans-serif'],
      cairo: ['Cairo', 'sans-serif'],
      hind: ['Hind Siliguri'],
      lucidity: ['var(--lucidity)'],
      placard: ['var(--placard)']
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

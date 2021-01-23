module.exports = {
  purge: [
    'src/**/*.js',
    'src/**/*.jsx',
    'src/**/*.ts',
    'src/**/*.tsx',
    'public/**/*.html',
  ],
  target: 'relaxed',
  prefix: '',
  important: false,
  separator: ':',
  theme: {
    extend: {
      screens: {
        sm: { max: '639px' },
        md: { max: '1024px' },
        lg: { min: '1025px' },
      },
      colors: {
        primary: '#01178B',
        blue: '#140CA3',
        white: '#ffffff',
        black: '#000000',
      },
      fontSize: {
        22: '22px',
        26: '26px',
        28: '28px',
        64: '64px',
        90: '90px',
        92: '92px',
      },
      letterSpacing: {
        tighter: '-0.03em',
        tight: '-0.01em',
        normal: '0',
        wide: '0.01em',
        wider: '0.03em',
        widest: '0.06em',
      },
      lineHeight: {
        tiny: '1.1',
        sm: '1.2',
        snug: '1.3', // Caption
        normal: '1.4', // Body, Action
      },
      boxShadow: {
        xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        base: '0px 1px 2px rgba(0, 0, 0, 0.06), 0px 1px 3px rgba(0, 0, 0, 0.1)',
        md: '0px 2px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0px 10px 15px rgba(0, 0, 0, 0.1), 0px 4px 6px rgba(0, 0, 0, 0.05)',
        xl:
          '0px 20px 25px rgba(0, 0, 0, 0.1), 0px 10px 10px rgba(0, 0, 0, 0.04)',
        '2xl': '0px 25px 50px rgba(0, 0, 0, 0.25)',
        inner: 'inset 0px 2px 4px rgba(0, 0, 0, 0.06)',
        outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
        none: 'none',
      },
      inset: {
        '1/2': '0.5rem',
        '3/2': '1.5rem',
        2: '2rem',
      },
    },
    fill: (theme) => ({
      white: theme('colors.white'),
      purple: theme('colors.purple'),
      secondary: theme('colors.secondary'),
      tertiary: theme('colors.tertiary'),
      red: theme('colors.red'),
      disabled: theme('colors.disabled'),
    }),
  },
  corePlugins: {
    inset: true,
    fill: true,
  },
  variants: {
    inset: ['responsive', 'hover', 'focus'],
    fill: ['responsive', 'hover', 'focus'],
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(to right, #4299E1, #48BB78)',
      },
      colors: {
        'primary': '#007BFF',
        'background': '#f5f5f5',
        'text-header': '#333',
      },
      fontSize: {
        'xl': '24px',
        'lg': '18px',
      },
      fontWeight: {
        'bold': 'bold',
      },
      borderRadius: {
        'md': '5px',
      },
      padding: {
        '2': '10px',
        '4': '20px',
      },
      spacing: {
        '2': '8px',
        '4': '16px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(0, 0, 0, 0.05)',
      },
      
      fontFamily: {
        rblack: ["Roboto-Black", "sans-serif"],
        me: ["Roboto-Thin", "sans-serif"],
        yu: ["Roboto-Light", "sans-serif"],
      },
      letterSpacing: {
        tighter: '-0.05em',
        tight: '-0.025em',
        normal: '0em',
        wide: '0.025em',
        wider: '0.05em',
        widest: '0.1em',
      },
    },
  },
  plugins: [function ({ addUtilities }) {
    const newUtilities = {
      '.text-shadow-default': {
        textShadow: '2px 2px 3px #0A4F37',
      },
    };
    addUtilities(newUtilities);
    

  }
  
],
}

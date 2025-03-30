/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        '2xlmax': {'max': '1535px'},
        'xlmax': {'max': '1279px'},
        'external': {'max': '1250px'},
        'lgmax': {'max': '1050px'},
        'mdmax': {'max': '800px'},
        'smmax': {'max': '650px'},
        'xsmax': {'max': '450px'},
        'xsmmax' : {"max" : "340px"},
        '2xlmin': {'min': '1535px'},
        'xlmin': {'min': '1279px'},
        'lgmin': {'min': '1023px'},
        'mdmin': {'min': '800px'},
        'smmin': {'min': '639px'},
      },
    },
  },
  plugins: [],
};

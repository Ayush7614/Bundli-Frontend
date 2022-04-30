module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    
    extend: {
      colors: {
        
        dark: {
          // text
          100: 'hsl(209, 23%, 22%)',
          Background: 'hsl(207, 26%, 17%)',
          text : 'hsl(0, 0%, 100%)'
        },
        light: {
          // text
          100: 'hsl(0, 0%, 52%)',
          Background: 'hsl(0, 0%, 98%)'
        },
        input: {
          light: 'hsl(0, 0%, 52%)'
        }
      },
      fontFamily:{
        'body' : ['Nunito Sans']
      },
      boxShadow:{
        'buttonShadow' :'0px 3px 8px rgba(0, 0, 0, 0.24) ;'
      }
    },
  },
  plugins: [],
}

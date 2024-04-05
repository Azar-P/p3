/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  daisyui: {
    themes: ["light", "black"],
  },
  theme: {
    fontWeight: {
      semibold: '600',
      bold: '700',
      extrabold: '800',
    }
    
  },
  
  extend: {
    fontFamily:{
      "azarfont":"Noto"
    }
  },

  plugins: [require("daisyui")],
}


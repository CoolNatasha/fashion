/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primaryColor:'#FAE3B6',
        bordercolor:'#FDBB57',
        SellerColor:'#CFA485',
        starColor:'#FFAF37'
      },
      maxWidth:{
        headerContainer:"1320px",
        bannerContainer:"1270px",
      },
      fontFamily:{
        pop:["Poppins"],
        frank:["Frank Ruhl Libre"],
      
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/model2.png)",
        'footer-texture': "url('/img/footer-texture.png')",
      }
    },
  },
  plugins: [],
}


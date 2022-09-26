/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          main: '#009398',
          recommend: '#139D4B',
          transparent: 'rgba(0, 147, 152, 0.09)',
          brand: "rgb(0, 150, 150)",
        },
        yellow: {
          btn: '#FFE600',
        },
        gray: {
          bg: '#f0f0f0',
        },
      },
      boxShadow: {
        cardShadow: '0px 5px 10px rgba(0, 0, 0, 0.25)',
        labelShadow: '0px 1px 6px rgba(0, 0, 0, 0.25)',
        dropShadow: '0px 4px 10px rgba(0, 0, 0, 0.25);',
      },
      dropShadow: {
        textShadow: '0 4px 10px rgb(0 0 0 / 25%)',
      },
      width: {
        cardWidth: '340px',
        resCardWidth: '310px',
        modalWidth: '441px',
        resModalWidth: '329px',
        itemModalWidth: '1130px',
        itemCardWidth: '633px',
      },
      height: {
        cardHeight: '284px',
        resCardHeight: '250px',
        modalHeight: '584px',
        resModalHeight: '510px',
        itemModalHeight: '584px',
        itemCardHeight: '505px',
      },
      borderRadius: {
        cardRadius: '0px 35px 35px 35px',
        btnRadius: '0px 10px;',
        modalRadius: '35px',
      },
    },
    screens:{
      "min_sm": "320px",
      "min_md": "380px",
      "min_lg": "480px",
      "sm":	"640px",
      "md":	"768px",
      "lg":	"1024px",
      "xl":	"1280px",
    },
    plugins: [],
  }
}

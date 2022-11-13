/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./stories/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily:{
        'black': ['Pretendard-Black'],
        'bold':['Pretendard-Bold'],
        'extra-bold':['Pretendard-ExtraBold'],
        'extra-light':['Pretendard-ExtraLight'],
        'light':['Pretendard-Light'],
        'medium':['Pretendard-Medium'],
        'regular':['Pretendard-Regular'],
        'semi-bold':['Pretendard-Semibold'],
        'thin':['Pretendard-Thin'],
      },
      colors:{
          'black':'#000',
          'white':'#fff',
          'blue1':'#36f',
          'warn':'#fe415c',
      }
    },
  },
  plugins: [],
}
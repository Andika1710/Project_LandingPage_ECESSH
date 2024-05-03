/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        globalBlue : "#4338CA",
        border : "#F1F5F9",
        borderMobile : "#E5E7EB",
        payButton : "#9CA3AF",
        bgSpeak : "#166752CC",
        input : "#94A3B8",
        ungu : "#4338CA"
      },
      backgroundImage: {
        'hero-pattern': "url('/src/assets/bgEcessh.png')",
        'speaker' : "url('/src/assets/pic2.png')",
        'bgMap' : "url('/src/assets/pic3.png')"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'jakarta': ["Plus Jakarta Sans", "sans-serif"],
        'tes' : ["Jersey 25", "sans-serif"]
      }
    },
  },
  plugins: [],
}
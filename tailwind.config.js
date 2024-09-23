/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        bluelight: "#0796D3",
        bluedark: "#53C0F0",
        customBlue: "#0796D3",
        lightBlue: "#A0DCF6",
        cancel: "#E7EEFB",
        delete: "#D30707",
        deleteTwo:"#F05353",
      },
    },
  },
  plugins: [],
};

import type { Config } from "tailwindcss";

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        
      },
    },
  },
<<<<<<< HEAD
  plugins: [
    require('flowbite/plugin')
  ],
=======
  plugins: [require('daisyui'),],
>>>>>>> 737bad9cd4c713c34de5f680b350c7bfbc470415
} satisfies Config;



import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        desplazarArriba: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-5%)' },
        },
        volverAbajo: {
          '0%': { transform: 'translateY(-5%)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        desplazarArriba: 'desplazarArriba 0.2s ease-in-out forwards',
        volverAbajo: 'volverAbajo 0.2s ease-in-out forwards',
      },
    },
  },
  plugins: [],
};
export default config;

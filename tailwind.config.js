/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
 // tailwind.config.js
theme: {
  extend: {
    backgroundImage: {
      grid: "linear-gradient(rgba(255,255,255,0.035) 1px,transparent 1px),\
             linear-gradient(90deg,rgba(255,255,255,0.035) 1px,transparent 1px)",
      heroGlow:
        "radial-gradient(at 70% 40%, rgba(16,185,129,0.28), transparent 60%)", // emerald‑400
    },
    colors: {
      accent: { DEFAULT: "#10B981", dark: "#059669" }, // emerald
    },
    fontFamily: {
      mono: ['"JetBrains Mono"', "monospace"],
    },
  },
},

  plugins: [],
};

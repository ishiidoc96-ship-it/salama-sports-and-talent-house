/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: "#0A1628",
          "navy-light": "#162038",
          blue: "#1E6FEB",
          "blue-light": "#3B82F6",
          "blue-pale": "#DBEAFE",
          teal: "#0891B2",
          "teal-light": "#22D3EE",
          orange: "#F97316",
          "orange-light": "#FB923C",
          green: "#10B981",
          "green-light": "#34D399",
          coral: "#FF6B6B",
          cream: "#FAFBFC",
          "cream-dark": "#F1F5F9",
          slate: {
            50: "#F8FAFC",
            100: "#F1F5F9",
            200: "#E2E8F0",
            300: "#CBD5E1",
            400: "#94A3B8",
            500: "#64748B",
            600: "#475569",
            700: "#334155",
            800: "#1E293B",
            900: "#0F172A",
          },
        },
      },
      fontFamily: {
        heading: ["Poppins", "system-ui", "sans-serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "hero-gradient":
          "linear-gradient(135deg, rgba(10,22,40,0.85) 0%, rgba(30,111,235,0.6) 100%)",
        "sports-gradient":
          "linear-gradient(135deg, #10B981 0%, #059669 100%)",
        "swim-gradient":
          "linear-gradient(135deg, #0891B2 0%, #0E7490 100%)",
        "bag-gradient":
          "linear-gradient(135deg, #EC4899 0%, #DB2777 100%)",
        "kids-gradient":
          "linear-gradient(135deg, #F59E0B 0%, #D97706 100%)",
        "navy-gradient":
          "linear-gradient(180deg, #0A1628 0%, #162038 100%)",
      },
      boxShadow: {
        card: "0 1px 3px rgba(0,0,0,0.06), 0 4px 16px rgba(0,0,0,0.04)",
        "card-hover":
          "0 4px 12px rgba(0,0,0,0.08), 0 16px 32px rgba(0,0,0,0.06)",
        nav: "0 1px 8px rgba(0,0,0,0.06)",
        float: "0 8px 32px rgba(0,0,0,0.12)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "fade-up": "fadeUp 0.6s ease-out forwards",
        "slide-in-left": "slideInLeft 0.5s ease-out forwards",
        "slide-in-right": "slideInRight 0.5s ease-out forwards",
        "scale-in": "scaleIn 0.3s ease-out forwards",
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 3s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

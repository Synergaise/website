import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        heading: ['Satoshi', 'sans-serif'],
        body: ['Satoshi', 'sans-serif'],
        accent: ['Space Grotesk', 'sans-serif'],
      },
      fontSize: {
        'h1': ['96px', { lineHeight: '1.05', letterSpacing: '-0.03em', fontWeight: '900' }],
        'h2': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em', fontWeight: '900' }],
        'h3': ['28px', { lineHeight: '1.3', letterSpacing: '-0.01em', fontWeight: '900' }],
        'body': ['18px', { lineHeight: '1.6', letterSpacing: '0em', fontWeight: '400' }],
        'button': ['16px', { lineHeight: '1', letterSpacing: '0.04em', fontWeight: '700' }],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        black: "hsl(var(--black))",
        graphite: "hsl(var(--graphite))",
        "cool-gray": "hsl(var(--cool-gray))",
        "off-white": "hsl(var(--off-white))",
        "electric-blue": "hsl(var(--electric-blue))",
        silver: "hsl(var(--silver))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        'gradient-orbital': 'var(--gradient-orbital)',
        'gradient-card': 'var(--gradient-card)',
      },
      boxShadow: {
        'glow-orbital': 'var(--glow-orbital)',
        'glow-card': 'var(--glow-card)',
      },
      keyframes: {
        "orbital-glow": {
          "0%, 100%": {
            transform: "translate(0, 0) scale(1)",
            opacity: "0.3",
          },
          "50%": {
            transform: "translate(10px, -10px) scale(1.05)",
            opacity: "0.5",
          },
        },
        "float": {
          "0%, 100%": {
            transform: "translateY(0px)",
          },
          "50%": {
            transform: "translateY(-20px)",
          },
        },
        "fade-in-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(20px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
        "scroll": {
          "0%": {
            transform: "translateX(0)",
          },
          "100%": {
            transform: "translateX(-50%)",
          },
        },
      },
      animation: {
        "orbital-glow": "orbital-glow 8s ease-in-out infinite",
        "float": "float 6s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out",
        "scroll": "scroll 25s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

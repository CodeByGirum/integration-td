import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
    "*.{js,ts,jsx,tsx,mdx}",
  ],
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
      colors: {
        // Black & White Minimalist Theme
        "bw-black": "#000000",
        "bw-dark": "#0a0a0a",
        "bw-darker": "#1a1a1a",
        "bw-gray-dark": "#2a2a2a",
        "bw-gray": "#404040",
        "bw-gray-light": "#808080",
        "bw-light": "#e0e0e0",
        "bw-lighter": "#f5f5f5",
        "bw-white": "#ffffff",

        // Existing colors for compatibility
        "page-base": "#121212",
        "radial-dot": "#222222",
        "panel-bg": "#1a1a1a",
        "panel-border": "#2a2a2a",
        "card-bg": "#1c1c1c",
        "card-border": "#2f2f2f",
        "card-border-hover": "#484848",
        "input-bg": "#252525",
        "input-border": "#383838",
        "input-focus-border": "#6b7280",
        "icon-wrapper-bg": "#282828",
        "icon-wrapper-hover-bg": "#303030",
        "tag-bg": "#2a2a2a",
        "tag-hover-bg": "#333333",
        "text-header": "#ffffff",
        "text-primary": "#f3f4f6",
        "text-secondary": "#d1d5db",
        "text-tertiary": "#9ca3af",
        "text-placeholder": "#6b7280",
        "text-input": "#e5e7eb",
        "text-tag": "#6b7280",
        "text-tag-hover": "#9ca3af",
        "status-green": "#34d399",
        "status-red": "#f87171",
        "status-yellow": "#facc15",
        "footer-card-bg": "rgba(34, 34, 34, 0.5)",
        "footer-card-hover-bg": "rgba(40, 40, 40, 0.8)",
        "gradient-card-icon-from": "#333333",
        "gradient-card-icon-to": "#222222",
        "gradient-card-icon-hover-from": "#444444",
        "gradient-card-icon-hover-to": "#333333",

        // Shadcn UI preset colors
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
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "calc(var(--radius) + 4px)",
        "bw-modal": "16px",
        "bw-card": "12px",
        "bw-input": "8px",
        "bw-button": "6px",
      },
      boxShadow: {
        "bw-subtle": "0 4px 12px rgba(0, 0, 0, 0.15)",
        "bw-depth": "0 8px 24px rgba(0, 0, 0, 0.25)",
        "bw-focus": "0 0 0 2px rgba(255, 255, 255, 0.5)",
      },
      spacing: {
        "bw-section": "32px",
        "bw-element": "24px",
        "bw-tight": "16px",
        "bw-loose": "40px",
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        fadeIn: "fadeIn 0.3s ease-out",
      },
      backgroundImage: {
        "radial-gradient-dots": "radial-gradient(#222222_1px,transparent_1px)",
      },
      backgroundSize: {
        "24": "24px 24px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/forms")],
} satisfies Config

export default config

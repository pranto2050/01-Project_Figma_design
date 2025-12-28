module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "app/**/*.{ts,tsx}",
    "components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "aliasborder-overlay": "var(--aliasborder-overlay)",
        "badgebackground-default": "var(--badgebackground-default)",
        "badgeborder-default": "var(--badgeborder-default)",
        "badgetext-default": "var(--badgetext-default)",
        "dividerthin-background-default":
          "var(--dividerthin-background-default)",
        "globalorange-60": "var(--globalorange-60)",
        inputcursor: "var(--inputcursor)",
        "navigation-barreversetext-default":
          "var(--navigation-barreversetext-default)",
        "navigation-bartransparentaction-background-default":
          "var(--navigation-bartransparentaction-background-default)",
        "navigation-bartransparentaction-border-default":
          "var(--navigation-bartransparentaction-border-default)",
        "navigation-bartransparenticon-default":
          "var(--navigation-bartransparenticon-default)",
        "slate-900": "var(--slate-900)",
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
      fontFamily: {
        "large-18px-bold": "var(--large-18px-bold-font-family)",
        "medium-16px-regular": "var(--medium-16px-regular-font-family)",
        "x-small-10px-bold-ALL-CAPS":
          "var(--x-small-10px-bold-ALL-CAPS-font-family)",
        sans: [
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
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
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
    container: { center: true, padding: "2rem", screens: { "2xl": "1400px" } },
  },
  plugins: [],
  darkMode: ["class"],
};

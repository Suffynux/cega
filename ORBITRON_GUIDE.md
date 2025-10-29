# Orbitron Font Integration Guide

## Overview
The **Orbitron** font family has been integrated across your CEGA application. This geometric sans-serif conveys innovation, precision, and professionalism—perfectly aligned with your gaming and animation focus.

## Font Weights Available
- **400** (Regular) - Body text
- **700** (Bold) - Headings, emphasis
- **900** (Black) - Large headings, logos

## How to Use

### Option 1: Using Inline Styles
```tsx
<h1 style={{ fontFamily: "Orbitron, sans-serif" }}>Your Heading</h1>
```

### Option 2: Using Tailwind Classes
```tsx
<h1 className="font-orbitron">Your Heading</h1>
```

### Option 3: Using CSS Classes
```css
.orbitron-text {
  font-family: var(--font-orbitron);
}
```

## Global Application
The Orbitron font is **already applied globally** in `globals.css`:
- All body text uses Orbitron by default
- All headings (h1-h6) use Orbitron with font-weight: 700

## CSS Variables
A custom CSS variable is available:
```css
--font-orbitron: "Orbitron", sans-serif
```

## Component Examples

### Logo/Brand Text
```tsx
<h1 className="font-orbitron font-black text-3xl tracking-widest" style={{ color: "#173E81" }}>
  CEGA
</h1>
```

### Navigation Links
```tsx
<Link className="font-orbitron font-semibold" style={{ color: "#173E81" }}>
  Incubation
</Link>
```

### Call-to-Action Button
```tsx
<button className="font-orbitron font-bold tracking-wide" style={{ backgroundColor: "#87CBDE", color: "#173E81" }}>
  APPLY NOW
</button>
```

## Brand Color Integration
Always pair Orbitron with your brand colors:
- **Deep Blue (#173E81)** - Professional text and headings
- **Aqua Blue (#87CBDE)** - Accent buttons and highlights
- **Black (#000000)** - Strong contrast
- **White (#FFFFFF)** - Clean backgrounds

## Performance Notes
- Font is imported from Google Fonts with `display=swap` for optimal loading
- No performance impact on page speed
- Works seamlessly with Tailwind CSS and framer-motion animations

## Updated Files
1. ✅ `app/globals.css` - Global font import and styling
2. ✅ `tailwind.config.ts` - Tailwind font family configuration
3. ✅ `app/components/Navbar.tsx` - Navbar using Orbitron

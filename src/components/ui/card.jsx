import * as React from "react"

// Simple utility function
const cn = (...classes) => classes.filter(Boolean).join(' ');

const Card = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-neutral-200/10 bg-gradient-to-b from-neutral-900 to-neutral-950 text-neutral-50 shadow-lg", 
      "hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] transition-all duration-300",
      "backdrop-blur-sm",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6", className)} {...props} />
))
CardContent.displayName = "CardContent"

export { Card, CardContent }

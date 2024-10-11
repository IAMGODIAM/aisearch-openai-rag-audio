import * as React from "react";

import { cn } from "@/lib/utils";

// Updated Card component to reflect the new brand color palette
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div
        ref={ref}
        className={cn(
            "rounded-lg border border-gray bg-beige text-darkGreen shadow-sm", // Updated to use gray for border, beige for background, and dark green for text
            className
        )}
        {...props}
    />
));
Card.displayName = "Card";

// CardHeader remains unchanged but can inherit styles from the parent card component
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
));
CardHeader.displayName = "CardHeader";

// Updated CardTitle to ensure consistent text color with the new palette
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight text-darkGreen", className)} {...props} /> // Added text-darkGreen for the title
));
CardTitle.displayName = "CardTitle";

// Updated CardDescription to align with the muted text style using gray
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-gray", className)} {...props} /> // Updated to use gray for muted description text
));
CardDescription.displayName = "CardDescription";

// CardContent remains unchanged, but inherits background from parent
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
));
CardContent.displayName = "CardContent";

// CardFooter remains unchanged, but inherits background and text styles from parent
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
));
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };

/**
 * Global Design System Constants
 * Used across all pages for consistent sizing, spacing, and animation.
 */

// --- Typography ---
// H1 (page titles): text-4xl md:text-5xl lg:text-6xl font-black tracking-tight
// H2 (section subtitles): text-lg md:text-xl font-medium text-muted-foreground/90
// H3 (card titles): text-xl font-semibold tracking-tight
// Body: text-sm md:text-base text-muted-foreground/80 leading-relaxed

// --- Spacing ---
// Page padding: py-20
// Container: max-w-6xl mx-auto px-4 sm:px-6 lg:px-8
// Section header bottom margin: mb-14
// Section title bottom margin: mb-4
// Card grid gap: gap-6

// --- Cards ---
// Class: glass-card rounded-2xl
// Padding: p-6
// Hover transition: hover:border-primary/40 hover:shadow-elegant transition-all duration-300

// --- Animations (Framer Motion) ---
export const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.15 }
  }
};

export const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 }
  }
};

export const scaleInVariants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { type: "spring", stiffness: 260, damping: 22 }
  }
};

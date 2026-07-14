"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

const variants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-80px" }}
      variants={variants}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}


export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow?: string; 
  title: string;
  description?: string;
}) {
  return (
    <Reveal className={`${description ? "mb-12" : "mb-6"} max-w-2xl`}>
      <h2 className="font-display text-3xl sm:text-4xl font-semibold tracking-tight text-ink">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-ink-muted leading-relaxed">{description}</p>
      )}
    </Reveal>
  );
}

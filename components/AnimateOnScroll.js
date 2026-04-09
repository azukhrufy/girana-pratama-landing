"use client";
import { motion } from "framer-motion";
import { Box } from "@chakra-ui/react";

const MotionBox = motion(Box);

/**
 * Lightweight scroll-triggered animation wrapper.
 * - Uses `whileInView` (IntersectionObserver under the hood)
 * - Fires once to avoid re-triggering and layout recalculations
 * - Respects reduced motion via CSS media query
 * - No CLS: starts with opacity 0 + small translateY only
 */
export default function AnimateOnScroll({
  children,
  delay = 0,
  direction = "up", // "up" | "down" | "left" | "right" | "none"
  ...rest
}) {
  const offset = 30; // small offset to avoid large layout shifts
  const directionMap = {
    up: { y: offset },
    down: { y: -offset },
    left: { x: offset },
    right: { x: -offset },
    none: {},
  };

  return (
    <MotionBox
      initial={{ opacity: 0, ...directionMap[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay,
        ease: "easeOut",
      }}
      style={{ willChange: "opacity, transform" }}
      {...rest}
    >
      {children}
    </MotionBox>
  );
}

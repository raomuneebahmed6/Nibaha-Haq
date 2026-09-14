"use client";

import { useEffect, useRef } from "react";
import { animate, useInView, useMotionValue, useReducedMotion, useTransform } from "framer-motion";

export function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const shouldReduceMotion = useReducedMotion();
  const motionValue = useMotionValue(shouldReduceMotion ? value : 0);
  const rounded = useTransform(motionValue, (latest) => Math.round(latest));

  useEffect(() => {
    if (!isInView || shouldReduceMotion) return;
    const controls = animate(motionValue, value, {
      duration: 1.4,
      ease: "easeOut",
    });
    return controls.stop;
  }, [isInView, motionValue, shouldReduceMotion, value]);

  useEffect(() => {
    const unsubscribe = rounded.on("change", (latest) => {
      if (ref.current) ref.current.textContent = `${latest}${suffix}`;
    });
    return unsubscribe;
  }, [rounded, suffix]);

  return (
    <span ref={ref}>
      {shouldReduceMotion ? `${value}${suffix}` : `0${suffix}`}
    </span>
  );
}

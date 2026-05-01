"use client";

import dynamic from "next/dynamic";
import { ReactNode } from "react";
import { useReducedMotion } from "framer-motion";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false },
);
const MotionSection = dynamic(
  () => import("framer-motion").then((m) => m.motion.section),
  { ssr: false },
);

export function FadeInUp({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <MotionSection
      className={className}
      initial={reduced ? false : { opacity: 0, y: 24 }}
      whileInView={reduced ? {} : { opacity: 1, y: 0 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </MotionSection>
  );
}

export function StaggerGroup({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <MotionDiv
      className={className}
      initial={reduced ? false : "hidden"}
      whileInView={reduced ? "visible" : "show"}
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: {},
        show: { transition: { staggerChildren: reduced ? 0 : 0.08 } },
      }}
    >
      {children}
    </MotionDiv>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduced = useReducedMotion();
  return (
    <MotionDiv
      className={className}
      variants={{ hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0 } }}
      transition={reduced ? { duration: 0 } : { duration: 0.35 }}
    >
      {children}
    </MotionDiv>
  );
}

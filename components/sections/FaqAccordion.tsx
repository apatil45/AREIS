"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const MotionDiv = dynamic(
  () => import("framer-motion").then((m) => m.motion.div),
  { ssr: false },
);
const AnimatePresence = dynamic(
  () => import("framer-motion").then((m) => m.AnimatePresence),
  { ssr: false },
);

export default function FaqAccordion({ items }: { items: string[] }) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((q, idx) => (
        <div key={q} className="card-base">
          <button className="w-full text-left font-semibold" onClick={() => setOpen(open === idx ? null : idx)}>
            {q}
          </button>
          <AnimatePresence>
            {open === idx && (
              <MotionDiv
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="mt-3 text-sm text-text-dim">
                  You get a clear recommendation based on current operations, team capacity, and ROI potential. I focus on practical outcomes and avoid over-promising.
                </p>
              </MotionDiv>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

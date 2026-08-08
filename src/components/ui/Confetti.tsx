"use client";

import { motion } from "framer-motion";
import { useState } from "react";

const COLORS = ["#19B5A5", "#087F73", "#B76E00", "#D94F4F", "#1A9C6B"];

export function Confetti() {
  const [pieces] = useState(() =>
    Array.from({ length: 36 }, (_, i) => ({
      id: i,
      x: (Math.random() - 0.5) * 280,
      rotate: Math.random() * 360,
      color: COLORS[i % COLORS.length],
      delay: Math.random() * 0.15,
      size: 6 + Math.random() * 6,
    }))
  );

  return (
    <div className="pointer-events-none absolute inset-0 flex items-start justify-center overflow-hidden">
      {pieces.map((p) => (
        <motion.span
          key={p.id}
          initial={{ y: -10, x: 0, opacity: 1, rotate: 0 }}
          animate={{ y: 220, x: p.x, opacity: 0, rotate: p.rotate }}
          transition={{ duration: 1.1, delay: p.delay, ease: "easeOut" }}
          style={{
            position: "absolute",
            top: "20%",
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            borderRadius: 2,
          }}
        />
      ))}
    </div>
  );
}

"use client";
import { useEffect, useRef, useState } from "react";
import { stats } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          let start = 0;
          const step = Math.ceil(target / 50);
          const id = setInterval(() => {
            start += step;
            if (start >= target) { setVal(target); clearInterval(id); }
            else setVal(start);
          }, 30);
        }
      },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ fontFamily: "var(--font-ibm)" }}>
      {val}{suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section
      className="py-16"
      style={{ background: "#071A2D" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="text-center p-5 rounded-xl border"
              style={{
                background: "rgba(255,255,255,0.03)",
                borderColor: "rgba(14,124,123,0.2)",
              }}
            >
              <p
                className="text-3xl font-bold mb-1"
                style={{ color: "#0E7C7B" }}
              >
                <Counter target={s.value} suffix={s.suffix} />
              </p>
              <p
                className="text-xs font-medium uppercase tracking-wider"
                style={{ color: "rgba(255,255,255,0.5)", fontFamily: "var(--font-space)" }}
              >
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

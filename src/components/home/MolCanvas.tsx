"use client";
import { useEffect, useRef } from "react";

interface Node {
  x: number; y: number; vx: number; vy: number;
  sym: string; color: string; ring: string; radius: number;
}

const ELEMENTS = [
  { sym: "Ru",  color: "#60d4ff", ring: "rgba(96,212,255,0.30)" },
  { sym: "N",   color: "#6699ff", ring: "rgba(102,153,255,0.22)" },
  { sym: "O",   color: "#ff6666", ring: "rgba(255,102,102,0.22)" },
  { sym: "Cl",  color: "#33ee77", ring: "rgba(51,238,119,0.22)" },
  { sym: "C",   color: "#cccccc", ring: "rgba(204,204,204,0.18)" },
  { sym: "H",   color: "#eeeeee", ring: "rgba(238,238,238,0.14)" },
  { sym: "S",   color: "#ffee33", ring: "rgba(255,238,51,0.22)" },
  { sym: "P",   color: "#ff9944", ring: "rgba(255,153,68,0.22)" },
  { sym: "Fe",  color: "#dd8855", ring: "rgba(221,136,85,0.22)" },
  { sym: "Pd",  color: "#88cccc", ring: "rgba(136,204,204,0.22)" },
  { sym: "Pt",  color: "#c0d0d0", ring: "rgba(192,208,208,0.18)" },
  { sym: "Zn",  color: "#88bbaa", ring: "rgba(136,187,170,0.18)" },
  { sym: "H₂O", color: "#99ddff", ring: "rgba(153,221,255,0.18)" },
  { sym: "O₂",  color: "#ff8888", ring: "rgba(255,136,136,0.18)" },
  { sym: "N₂",  color: "#8899ff", ring: "rgba(136,153,255,0.18)" },
  { sym: "CO₂", color: "#aaaaaa", ring: "rgba(170,170,170,0.15)" },
  { sym: "NH₃", color: "#aabbff", ring: "rgba(170,187,255,0.18)" },
  { sym: "Ru³⁺",color: "#40bbee", ring: "rgba(64,187,238,0.25)" },
];

function radiusFor(sym: string) {
  if (sym.length <= 1) return 7;
  if (sym.length <= 2) return 9;
  if (sym.length <= 3) return 11;
  return 13;
}

export default function MolCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let raf = 0;
    const nodes: Node[] = [];
    const COUNT = 48;
    const CONNECT_DIST = 170;

    function resize() {
      canvas!.width  = canvas!.offsetWidth;
      canvas!.height = canvas!.offsetHeight;
    }
    resize();
    window.addEventListener("resize", resize);

    for (let i = 0; i < COUNT; i++) {
      const el = ELEMENTS[Math.floor(Math.random() * ELEMENTS.length)];
      const r  = radiusFor(el.sym);
      nodes.push({
        x:  r + Math.random() * (canvas.width  - r * 2),
        y:  r + Math.random() * (canvas.height - r * 2),
        vx: (Math.random() - 0.5) * 0.45,
        vy: (Math.random() - 0.5) * 0.45,
        sym:    el.sym,
        color:  el.color,
        ring:   el.ring,
        radius: r,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, canvas!.width, canvas!.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x - n.radius < 0 || n.x + n.radius > canvas!.width)  n.vx *= -1;
        if (n.y - n.radius < 0 || n.y + n.radius > canvas!.height) n.vy *= -1;
      }

      // bonds
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const d  = Math.hypot(dx, dy);
          if (d < CONNECT_DIST) {
            const alpha = (1 - d / CONNECT_DIST) * 0.5;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(14,124,123,${alpha})`;
            ctx.lineWidth   = 1.4;
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.stroke();
          }
        }
      }

      // atoms
      for (const n of nodes) {
        // outer glow halo
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius * 1.5, 0, Math.PI * 2);
        ctx.fillStyle = n.ring;
        ctx.fill();

        // filled circle body
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(7,26,45,0.82)";
        ctx.fill();

        // coloured border ring
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.strokeStyle = n.color;
        ctx.lineWidth   = 1.2;
        ctx.stroke();

        // element label
        const fontSize = n.sym.length >= 3 ? 5.5 : n.sym.length === 2 ? 7 : 8;
        ctx.font      = `600 ${fontSize}px "Space Grotesk", system-ui, sans-serif`;
        ctx.fillStyle = n.color;
        ctx.textAlign    = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(n.sym, n.x, n.y);
      }

      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden="true"
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.90 }}
    />
  );
}

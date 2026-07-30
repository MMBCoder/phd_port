import Link from "next/link";

/* ══════════════════════════════════════════════════════════
   SVG Icon library — all context-driven, zero emoji
   ══════════════════════════════════════════════════════════ */

/* Researcher at workstation */
function IconResearcher() {
  return (
    <svg viewBox="0 0 56 56" width="40" height="40" fill="none" aria-hidden="true">
      <circle cx="28" cy="14" r="8" stroke="#0E7C7B" strokeWidth="2"/>
      <path d="M10 48c0-9.941 8.059-18 18-18s18 8.059 18 18" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round"/>
      <rect x="14" y="34" width="28" height="18" rx="3" stroke="#4DD9D8" strokeWidth="1.5" opacity="0.5"/>
      <line x1="18" y1="39" x2="30" y2="39" stroke="#4DD9D8" strokeWidth="1.2" opacity="0.6"/>
      <line x1="18" y1="43" x2="26" y2="43" stroke="#4DD9D8" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
}

/* Orchestrator — hub and spoke */
function IconOrchestrator() {
  return (
    <svg viewBox="0 0 56 56" width="40" height="40" fill="none" aria-hidden="true">
      <circle cx="28" cy="28" r="8" fill="rgba(14,124,123,0.2)" stroke="#fff" strokeWidth="2"/>
      <circle cx="28" cy="28" r="3" fill="#fff"/>
      {/* Spokes to 4 agents */}
      <line x1="28" y1="20" x2="28" y2="8"  stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.7"/>
      <line x1="36" y1="28" x2="48" y2="28" stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.7"/>
      <line x1="28" y1="36" x2="28" y2="48" stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.7"/>
      <line x1="20" y1="28" x2="8"  y2="28" stroke="#fff" strokeWidth="1.5" strokeDasharray="2,2" opacity="0.7"/>
      {/* Agent endpoint nodes */}
      <circle cx="28" cy="7"  r="4" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <circle cx="49" cy="28" r="4" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <circle cx="28" cy="49" r="4" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <circle cx="7"  cy="28" r="4" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
    </svg>
  );
}

/* Design Agent — molecular graph */
function IconDesignAgent({ color = "#6366F1" }: { color?: string }) {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <circle cx="22" cy="10" r="5" stroke={color} strokeWidth="1.8" fill={`${color}20`}/>
      <circle cx="10" cy="30" r="5" stroke={color} strokeWidth="1.8" fill={`${color}20`}/>
      <circle cx="34" cy="30" r="5" stroke={color} strokeWidth="1.8" fill={`${color}20`}/>
      <line x1="18" y1="14" x2="13" y2="26" stroke={color} strokeWidth="1.5"/>
      <line x1="26" y1="14" x2="31" y2="26" stroke={color} strokeWidth="1.5"/>
      <line x1="15" y1="30" x2="29" y2="30" stroke={color} strokeWidth="1.5"/>
      <circle cx="22" cy="10" r="2" fill={color}/>
    </svg>
  );
}

/* DFT Agent — atomic orbitals */
function IconDFTAgent({ color = "#F59E0B" }: { color?: string }) {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <ellipse cx="22" cy="22" rx="18" ry="6" stroke={color} strokeWidth="1.5" opacity="0.8"/>
      <ellipse cx="22" cy="22" rx="18" ry="6" stroke={color} strokeWidth="1.5" opacity="0.6" transform="rotate(60 22 22)"/>
      <ellipse cx="22" cy="22" rx="18" ry="6" stroke={color} strokeWidth="1.5" opacity="0.6" transform="rotate(120 22 22)"/>
      <circle cx="22" cy="22" r="4" fill={`${color}25`} stroke={color} strokeWidth="1.5"/>
      <circle cx="22" cy="22" r="2" fill={color}/>
      <circle cx="40" cy="22" r="2.5" fill={color} opacity="0.7"/>
    </svg>
  );
}

/* Docking Agent — lock and key */
function IconDockingAgent({ color = "#EF4444" }: { color?: string }) {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {/* Protein pocket */}
      <path d="M4 8 h16 v8 h-4 v6 h4 v8 h-16 Z" stroke={color} strokeWidth="1.5" fill={`${color}15`} strokeLinejoin="round"/>
      {/* Ligand */}
      <rect x="22" y="18" width="18" height="8" rx="3" stroke={color} strokeWidth="1.5" fill={`${color}20`}/>
      <circle cx="26" cy="22" r="2" fill={color} opacity="0.8"/>
      <circle cx="32" cy="22" r="2" fill={color} opacity="0.8"/>
      <circle cx="36" cy="22" r="2" fill={color} opacity="0.8"/>
      {/* Binding arrow */}
      <path d="M21 22 L20 22" stroke={color} strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  );
}

/* SAR Agent — scatter + trend */
function IconSARAgent({ color = "#22C55E" }: { color?: string }) {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <line x1="5" y1="39" x2="5"  y2="5"  stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <line x1="5" y1="39" x2="41" y2="39" stroke={color} strokeWidth="1.5" opacity="0.5"/>
      <circle cx="10" cy="34" r="2.2" fill={color} opacity="0.6"/>
      <circle cx="16" cy="28" r="2.2" fill={color} opacity="0.7"/>
      <circle cx="22" cy="22" r="2.2" fill={color} opacity="0.8"/>
      <circle cx="29" cy="16" r="2.2" fill={color} opacity="0.85"/>
      <circle cx="36" cy="10" r="2.2" fill={color}/>
      <line x1="8" y1="36" x2="38" y2="8" stroke={color} strokeWidth="1.5" strokeDasharray="3,2" opacity="0.7"/>
    </svg>
  );
}

/* Output — hexagonal crystal */
function IconOutput() {
  return (
    <svg viewBox="0 0 56 56" width="40" height="40" fill="none" aria-hidden="true">
      <polygon points="28,6 44,16 44,36 28,46 12,36 12,16" stroke="#22C55E" strokeWidth="2" fill="rgba(34,197,94,0.08)"/>
      <polygon points="28,14 38,20 38,32 28,38 18,32 18,20" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.12)" opacity="0.8"/>
      <circle cx="28" cy="26" r="4" fill="#22C55E" opacity="0.9"/>
      <line x1="28" y1="6"  x2="28" y2="14" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
      <line x1="44" y1="16" x2="38" y2="20" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
      <line x1="44" y1="36" x2="38" y2="32" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
      <line x1="28" y1="46" x2="28" y2="38" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
      <line x1="12" y1="36" x2="18" y2="32" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
      <line x1="12" y1="16" x2="18" y2="20" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
    </svg>
  );
}

/* Funnel stage icons */
function FunnelIcon({ type, color }: { type: string; color: string }) {
  switch (type) {
    case "library":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <rect x="2" y="3" width="16" height="3" rx="1" stroke={color} strokeWidth="1.4"/>
          <rect x="2" y="8.5" width="16" height="3" rx="1" stroke={color} strokeWidth="1.4"/>
          <rect x="2" y="14" width="16" height="3" rx="1" stroke={color} strokeWidth="1.4"/>
        </svg>
      );
    case "filter":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M2 4h16l-6 7v6l-4-2V11Z" stroke={color} strokeWidth="1.4" strokeLinejoin="round"/>
        </svg>
      );
    case "ai":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="3" cy="6" r="2" stroke={color} strokeWidth="1.3"/>
          <circle cx="3" cy="14" r="2" stroke={color} strokeWidth="1.3"/>
          <circle cx="10" cy="10" r="2" stroke={color} strokeWidth="1.3"/>
          <circle cx="17" cy="7" r="2" stroke={color} strokeWidth="1.3"/>
          <circle cx="17" cy="13" r="2" stroke={color} strokeWidth="1.3"/>
          <line x1="5" y1="6.5" x2="8" y2="9" stroke={color} strokeWidth="1.2"/>
          <line x1="5" y1="13.5" x2="8" y2="11" stroke={color} strokeWidth="1.2"/>
          <line x1="12" y1="9" x2="15" y2="7.5" stroke={color} strokeWidth="1.2"/>
          <line x1="12" y1="11" x2="15" y2="12.5" stroke={color} strokeWidth="1.2"/>
        </svg>
      );
    case "docking":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <circle cx="10" cy="10" r="7" stroke={color} strokeWidth="1.4"/>
          <circle cx="10" cy="10" r="3" stroke={color} strokeWidth="1.4" fill={`${color}30`}/>
          <line x1="10" y1="3" x2="10" y2="7" stroke={color} strokeWidth="1.2"/>
          <line x1="17" y1="10" x2="13" y2="10" stroke={color} strokeWidth="1.2"/>
        </svg>
      );
    case "dft":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <ellipse cx="10" cy="10" rx="8" ry="3" stroke={color} strokeWidth="1.3"/>
          <ellipse cx="10" cy="10" rx="8" ry="3" stroke={color} strokeWidth="1.3" transform="rotate(60 10 10)"/>
          <ellipse cx="10" cy="10" rx="8" ry="3" stroke={color} strokeWidth="1.3" transform="rotate(120 10 10)"/>
          <circle cx="10" cy="10" r="2" fill={color} opacity="0.8"/>
        </svg>
      );
    case "synthesis":
      return (
        <svg viewBox="0 0 20 20" width="18" height="18" fill="none" aria-hidden="true">
          <path d="M7 3h6M7 3v5L3.5 16.5A1.5 1.5 0 0 0 5 18h10a1.5 1.5 0 0 0 1.5-1.5L13 8V3" stroke={color} strokeWidth="1.4" strokeLinecap="round"/>
          <line x1="4.5" y1="13" x2="15.5" y2="13" stroke={color} strokeWidth="1.2" opacity="0.7"/>
        </svg>
      );
    default:
      return null;
  }
}

/* Benefit icons */
function IconSpeed() {
  return (
    <svg viewBox="0 0 36 36" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M18 4 L22 14 L32 10 L24 20 L28 32 L18 24 L8 32 L12 20 L4 10 L14 14 Z"
        stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.1)" strokeLinejoin="round"/>
    </svg>
  );
}
function IconAutomate() {
  return (
    <svg viewBox="0 0 36 36" width="26" height="26" fill="none" aria-hidden="true">
      <circle cx="18" cy="18" r="5" stroke="#0E7C7B" strokeWidth="1.5"/>
      <path d="M18 4 A14 14 0 0 1 32 18" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M32 18 A14 14 0 0 1 18 32" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M18 32 A14 14 0 0 1 4 18" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round"/>
      <path d="M4 18 A14 14 0 0 1 18 4" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round"/>
      <polygon points="18,4 22,9 14,9" fill="#0E7C7B"/>
    </svg>
  );
}
function IconRank() {
  return (
    <svg viewBox="0 0 36 36" width="26" height="26" fill="none" aria-hidden="true">
      <rect x="4"  y="20" width="8" height="12" rx="1.5" stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.1)"/>
      <rect x="14" y="12" width="8" height="20" rx="1.5" stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.15)"/>
      <rect x="24" y="6"  width="8" height="26" rx="1.5" stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.2)"/>
      <line x1="4" y1="34" x2="32" y2="34" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
    </svg>
  );
}
function IconLoop() {
  return (
    <svg viewBox="0 0 36 36" width="26" height="26" fill="none" aria-hidden="true">
      <path d="M28 10 A12 12 0 1 1 10 26" stroke="#0E7C7B" strokeWidth="1.8" strokeLinecap="round"/>
      <path d="M8 20 L10 26 L16 24" stroke="#0E7C7B" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <circle cx="18" cy="18" r="3" fill="rgba(14,124,123,0.2)" stroke="#0E7C7B" strokeWidth="1.4"/>
    </svg>
  );
}

/* RDKit card background graphic */
function RDKitGraphic() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" fill="none" aria-hidden="true" className="absolute bottom-0 right-0 opacity-10">
      {/* Hexagonal ring */}
      <polygon points="100,20 126,35 126,65 100,80 74,65 74,35" stroke="#0E7C7B" strokeWidth="2"/>
      {/* Substituents */}
      <line x1="100" y1="20" x2="100" y2="4"  stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="126" y1="35" x2="142" y2="26" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="126" y1="65" x2="142" y2="74" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="100" y1="80" x2="100" y2="96" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="74"  y1="65" x2="58"  y2="74" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="74"  y1="35" x2="58"  y2="26" stroke="#0E7C7B" strokeWidth="1.5"/>
      {/* Inner double bond lines */}
      <line x1="103" y1="22" x2="124" y2="37" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="124" y1="63" x2="103" y2="78" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="77"  y1="37" x2="77"  y2="63" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      {/* Fingerprint bit vector */}
      {([0,1,1,0,1,0,0,1,1,0,1,1,0,1,0,0] as number[]).map((bit, i) => (
        <rect key={i} x={10 + i * 11} y={100} width="9" height="14" rx="1.5"
          fill="#0E7C7B" opacity={bit ? 0.7 : 0.15}/>
      ))}
    </svg>
  );
}

/* DeepChem card background graphic */
function DeepChemGraphic() {
  return (
    <svg viewBox="0 0 200 120" width="200" height="120" fill="none" aria-hidden="true" className="absolute bottom-0 right-0 opacity-10">
      {/* Molecular graph nodes */}
      <circle cx="40"  cy="60" r="8"  stroke="#22C55E" strokeWidth="2" fill="rgba(34,197,94,0.1)"/>
      <circle cx="80"  cy="30" r="8"  stroke="#22C55E" strokeWidth="2" fill="rgba(34,197,94,0.1)"/>
      <circle cx="80"  cy="90" r="8"  stroke="#22C55E" strokeWidth="2" fill="rgba(34,197,94,0.1)"/>
      <circle cx="120" cy="60" r="8"  stroke="#22C55E" strokeWidth="2" fill="rgba(34,197,94,0.1)"/>
      <line x1="48" y1="56" x2="72" y2="35" stroke="#22C55E" strokeWidth="1.5"/>
      <line x1="48" y1="64" x2="72" y2="85" stroke="#22C55E" strokeWidth="1.5"/>
      <line x1="88" y1="35" x2="112" y2="55" stroke="#22C55E" strokeWidth="1.5"/>
      <line x1="88" y1="85" x2="112" y2="65" stroke="#22C55E" strokeWidth="1.5"/>
      {/* Neural network layers */}
      <circle cx="150" cy="30"  r="5" stroke="#22C55E" strokeWidth="1.5"/>
      <circle cx="150" cy="60"  r="5" stroke="#22C55E" strokeWidth="1.5"/>
      <circle cx="150" cy="90"  r="5" stroke="#22C55E" strokeWidth="1.5"/>
      <circle cx="180" cy="45"  r="5" stroke="#22C55E" strokeWidth="1.5"/>
      <circle cx="180" cy="75"  r="5" stroke="#22C55E" strokeWidth="1.5"/>
      <line x1="128" y1="58"  x2="145" y2="30" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="128" y1="60"  x2="145" y2="60" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="128" y1="62"  x2="145" y2="90" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="155" y1="30"  x2="175" y2="45" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="155" y1="60"  x2="175" y2="45" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="155" y1="60"  x2="175" y2="75" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
      <line x1="155" y1="90"  x2="175" y2="75" stroke="#22C55E" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════════ */
export default function AIDiscoveryPage() {

  const funnelStages = [
    { type: "library",  label: "Compound Library",      count: "10,000+", note: "All candidate Ru–Schiff-base structures",      color: "#94A3B8", pct: 100 },
    { type: "filter",   label: "Drug-Likeness Filter",   count: "~3,000",  note: "Pass molecular weight & lipophilicity rules",   color: "#6366F1", pct: 82  },
    { type: "ai",       label: "AI Similarity Ranking",  count: "Top 200", note: "Most similar to known active Ru complexes",     color: "#F59E0B", pct: 62  },
    { type: "docking",  label: "Molecular Docking",      count: "Top 20",  note: "Strongest predicted protein binding (ΔG)",      color: "#EF4444", pct: 40  },
    { type: "dft",      label: "DFT Validation",         count: "5 leads", note: "HOMO–LUMO & electronic structure verified",     color: "#0E7C7B", pct: 22  },
    { type: "synthesis",label: "Ready for Synthesis",    count: "Best 2–3",note: "Shortlisted for the wet lab",                   color: "#22C55E", pct: 10  },
  ] as const;

  const agents = [
    { Icon: IconDesignAgent,  step: "Agent 1", title: "Design Agent",
      tool: "RDKit · DeepChem",            color: "#6366F1",
      desc: "Enumerates new Ru–Schiff-base candidates and scores predicted biological activity using ML models.",
      output: "Candidate library" },
    { Icon: IconDFTAgent,     step: "Agent 2", title: "DFT Agent",
      tool: "GAUSSIAN",                    color: "#F59E0B",
      desc: "Runs B3LYP/LANL2DZ calculations automatically, extracts HOMO–LUMO gap and MEP surface data.",
      output: "Electronic descriptors" },
    { Icon: IconDockingAgent, step: "Agent 3", title: "Docking Agent",
      tool: "AutoDock · Discovery Studio", color: "#EF4444",
      desc: "Docks each candidate into the target protein binding pocket and returns predicted binding affinity (ΔG).",
      output: "Binding affinity scores" },
    { Icon: IconSARAgent,     step: "Agent 4", title: "SAR Agent",
      tool: "Statistical Analysis",        color: "#22C55E",
      desc: "Correlates electronic structure with binding affinity across the full series and ranks the best leads.",
      output: "Ranked lead compounds" },
  ];

  const benefits = [
    { Icon: IconSpeed,    title: "10–100× Faster Iteration",
      desc: "Parallel DFT jobs and automated docking replace sequential manual steps, compressing weeks into hours." },
    { Icon: IconAutomate, title: "Automated SAR Analysis",
      desc: "The SAR Agent correlates electronic descriptors with binding affinity across the full series automatically." },
    { Icon: IconRank,     title: "Intelligent Lead Prioritisation",
      desc: "Agents rank candidates by HOMO–LUMO gap, docking ΔG, and ADME filters before a single milligram is synthesised." },
    { Icon: IconLoop,     title: "Closed-Loop Design",
      desc: "Experimental results from the bench feed back into the Design Agent, continuously refining the next generation." },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Future Research Vision
          </span>
          <h1 className="font-bold mb-5"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            AI-Driven Discovery
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.75)" }}>
            Extending doctoral research into <strong style={{ color: "#4DD9D8" }}>Python-based cheminformatics</strong>,{" "}
            <strong style={{ color: "#4DD9D8" }}>AI-assisted virtual screening</strong>, and{" "}
            <strong style={{ color: "#4DD9D8" }}>multi-agent automation</strong> — building the next layer of computational methodology
            for accelerated materials discovery.
          </p>
          <div className="flex flex-wrap gap-3">
            {["RDKit · Cheminformatics", "DeepChem · Graph ML", "AI Virtual Screening", "Multi-Agent Orchestration"].map((tag) => (
              <span key={tag} className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.12)",
                         background: "rgba(255,255,255,0.05)", fontFamily: "var(--font-space)" }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── Computational Toolkit ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Computational Toolkit
            </span>
            <h2 className="font-bold mb-3"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Machine Learning &amp; Python Libraries
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
              Python-based open-source ecosystem for computational chemistry, cheminformatics,
              and machine learning — applied to metallodrug research and advanced materials discovery.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {/* RDKit */}
            <div className="relative rounded-2xl border overflow-hidden flex flex-col gap-5 p-7 hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ background: "#fff", borderColor: "#E2E8F0", borderTop: "3px solid #0E7C7B" }}>
              <RDKitGraphic />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.15)" }}>
                    {/* Hexagon SVG icon */}
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                      <polygon points="12,2 20,7 20,17 12,22 4,17 4,7" stroke="#0E7C7B" strokeWidth="1.8"/>
                      <line x1="12" y1="2"  x2="12" y2="5"  stroke="#0E7C7B" strokeWidth="1.3"/>
                      <line x1="20" y1="7"  x2="17" y2="8.5" stroke="#0E7C7B" strokeWidth="1.3"/>
                      <line x1="20" y1="17" x2="17" y2="15.5" stroke="#0E7C7B" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>RDKit</h3>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold"
                      style={{ background: "rgba(14,124,123,0.1)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      Cheminformatics
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                  Industry-standard Python library for cheminformatics. Used for molecule parsing (SMILES/SDF),
                  fingerprint generation (Morgan, MACCS), substructure search, and property prediction
                  in virtual screening pipelines.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["SMILES parsing", "Morgan fingerprints", "Property filters", "SAR analysis"].map((u) => (
                    <span key={u} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "var(--font-ibm)" }}>
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* DeepChem */}
            <div className="relative rounded-2xl border overflow-hidden flex flex-col gap-5 p-7 hover:shadow-lg transition-all hover:-translate-y-1"
              style={{ background: "#fff", borderColor: "#E2E8F0", borderTop: "3px solid #22C55E" }}>
              <DeepChemGraphic />
              <div className="relative z-10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}>
                    {/* Graph neural network icon */}
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                      <circle cx="4"  cy="12" r="2.5" stroke="#22C55E" strokeWidth="1.6"/>
                      <circle cx="12" cy="5"  r="2.5" stroke="#22C55E" strokeWidth="1.6"/>
                      <circle cx="12" cy="19" r="2.5" stroke="#22C55E" strokeWidth="1.6"/>
                      <circle cx="20" cy="12" r="2.5" stroke="#22C55E" strokeWidth="1.6" fill="rgba(34,197,94,0.2)"/>
                      <line x1="6"  y1="11" x2="10" y2="7"  stroke="#22C55E" strokeWidth="1.3"/>
                      <line x1="6"  y1="13" x2="10" y2="17" stroke="#22C55E" strokeWidth="1.3"/>
                      <line x1="14" y1="7"  x2="18" y2="11" stroke="#22C55E" strokeWidth="1.3"/>
                      <line x1="14" y1="17" x2="18" y2="13" stroke="#22C55E" strokeWidth="1.3"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>DeepChem</h3>
                    <span className="px-2.5 py-0.5 rounded text-xs font-semibold"
                      style={{ background: "rgba(34,197,94,0.1)", color: "#22C55E", fontFamily: "var(--font-space)" }}>
                      ML / Drug Discovery
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                  Deep learning library for drug discovery and quantum chemistry. Applied for graph neural
                  networks on molecular graphs, activity prediction, and ADMET modelling of
                  ruthenium complex candidates.
                </p>
                <div className="flex flex-wrap gap-2">
                  {["Graph conv models", "ADMET prediction", "Multitask learning", "Scaffold splits"].map((u) => (
                    <span key={u} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "var(--font-ibm)" }}>
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── AI-Driven Virtual Screening ── */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Future Research Vision
              </span>
              <h2 className="font-bold mb-4"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", color: "#fff" }}>
                AI-Driven Virtual Screening
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                A <strong style={{ color: "#fff" }}>five-step AI pipeline</strong> that takes a large compound
                library and intelligently narrows it down to the most promising metal-complex
                candidates — ready for bench synthesis.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { n: "01", title: "Library Preparation",
                    desc: "Parse all candidate structures with RDKit; generate 3-D shapes; convert file formats for downstream analysis." },
                  { n: "02", title: "Drug-Likeness Filter",
                    desc: "Apply Lipinski rules — checking molecular weight, water-solubility, and drug absorption potential — to keep only viable candidates." },
                  { n: "03", title: "AI Similarity Ranking",
                    desc: "Use machine learning to score each molecule by how similar it is to known active Ru complexes from the literature." },
                  { n: "04", title: "Molecular Docking",
                    desc: "Virtually place the top candidates inside the target protein using AutoDock and score how tightly each one binds (binding energy ΔG)." },
                  { n: "05", title: "DFT Validation",
                    desc: "Run quantum chemistry calculations on the shortlisted hits to verify their electronic structure and HOMO–LUMO gap. Best candidates go to the lab." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
                      {step.n}
                    </span>
                    <div>
                      <h4 className="font-bold text-base mb-1" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                        {step.title}
                      </h4>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual funnel — no emoji */}
            <div className="flex flex-col gap-3">
              <p className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                How AI Narrows Thousands to a Handful
              </p>

              {funnelStages.map((stage, idx, arr) => (
                <div key={stage.label} className="flex flex-col items-center w-full">
                  <div style={{ width: `${stage.pct}%`, minWidth: "72%" }}>
                    <div className="rounded-xl px-4 py-3 flex items-center gap-3"
                      style={{ background: `${stage.color}22`, border: `1px solid ${stage.color}50` }}>
                      <span className="flex-shrink-0 flex items-center justify-center w-7 h-7 rounded-lg"
                        style={{ background: `${stage.color}30` }}>
                        <FunnelIcon type={stage.type} color={stage.color} />
                      </span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold leading-tight"
                          style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                          {stage.label}
                        </p>
                        <p className="text-xs mt-0.5 leading-tight"
                          style={{ color: "rgba(255,255,255,0.5)" }}>
                          {stage.note}
                        </p>
                      </div>
                      <span className="text-sm font-bold flex-shrink-0 ml-2"
                        style={{ color: stage.color, fontFamily: "var(--font-ibm)" }}>
                        {stage.count}
                      </span>
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex flex-col items-center" style={{ height: "20px" }}>
                      <div className="w-px flex-1" style={{ background: "rgba(255,255,255,0.12)" }} />
                      <svg width="10" height="6" viewBox="0 0 10 6" fill="none" aria-hidden="true">
                        <path d="M1 1L5 5L9 1" stroke="rgba(255,255,255,0.25)" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  )}
                </div>
              ))}

              <p className="text-xs text-center pt-2" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space)" }}>
                Each stage filters smarter — only the most promising candidates reach the bench
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Agent AI ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Future Research Vision
            </span>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Multi-Agent AI for Computational Drug Design
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
              During my PhD, designing a Ru complex, running{" "}
              <strong style={{ color: "#0E7C7B" }}>DFT in GAUSSIAN</strong>, docking in{" "}
              <strong style={{ color: "#0E7C7B" }}>AutoDock</strong>, and extracting{" "}
              <strong style={{ color: "#0E7C7B" }}>SAR insights</strong> was done manually — one
              compound at a time. Here is how specialised AI agents could automate that exact same workflow.
            </p>
          </div>

          {/* Flow diagram */}
          <div className="flex flex-col items-center mb-14">

            {/* INPUT — Researcher */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 border-2 border-dashed flex gap-5 items-center"
                style={{ borderColor: "#0E7C7B", background: "rgba(14,124,123,0.03)" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(14,124,123,0.08)" }}>
                  <IconResearcher />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Chemistry Researcher
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                    Sets the goal: Ru scaffold · substituent library · target protein (e.g. PARP-1 / HSA)
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#0E7C7B" }} />
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
                <path d="M1 1L6 6L11 1" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* ORCHESTRATOR */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 flex gap-5 items-center" style={{ background: "#0E7C7B" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(255,255,255,0.12)" }}>
                  <IconOrchestrator />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>
                    Orchestrator
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                    Receives the research goal, breaks it into tasks, and assigns each to a specialised agent in sequence
                  </p>
                </div>
              </div>
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#0E7C7B" }} />
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
                <path d="M1 1L6 6L11 1" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* 4 AGENT CARDS */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {agents.map(({ Icon, step, title, tool, color, desc, output }) => (
                <div key={title} className="rounded-2xl border flex flex-col overflow-hidden"
                  style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                  {/* Step header */}
                  <div className="px-4 py-2 text-center text-sm font-bold"
                    style={{ background: color, color: "#fff", fontFamily: "var(--font-ibm)", letterSpacing: "0.05em" }}>
                    {step}
                  </div>
                  {/* Icon + title */}
                  <div className="px-5 pt-5 pb-2 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                      style={{ background: `${color}15`, border: `1px solid ${color}30` }}>
                      <Icon color={color} />
                    </div>
                    <div>
                      <p className="font-bold text-base leading-tight" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                        {title}
                      </p>
                      <span className="text-xs font-medium px-2 py-0.5 rounded-md mt-1 inline-block"
                        style={{ background: `${color}15`, color, fontFamily: "var(--font-ibm)" }}>
                        {tool}
                      </span>
                    </div>
                  </div>
                  {/* Description */}
                  <p className="text-sm leading-relaxed px-5 pb-4 flex-1" style={{ color: "#475569" }}>
                    {desc}
                  </p>
                  {/* Output pill */}
                  <div className="mx-4 mb-4 rounded-lg px-3 py-2 text-center"
                    style={{ background: `${color}10`, border: `1px solid ${color}30` }}>
                    <p className="text-xs font-semibold" style={{ color, fontFamily: "var(--font-space)" }}>
                      ↓ {output}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Arrow */}
            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#22C55E" }} />
              <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden="true">
                <path d="M1 1L6 6L11 1" stroke="#22C55E" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </div>

            {/* OUTPUT */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 border-2 flex gap-5 items-center"
                style={{ borderColor: "#22C55E", background: "rgba(34,197,94,0.04)" }}>
                <div className="flex-shrink-0 w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.08)" }}>
                  <IconOutput />
                </div>
                <div>
                  <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Shortlisted Lead Compounds
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                    Top-ranked Ru complexes — filtered by <strong>HOMO–LUMO gap</strong>, binding <strong>ΔG</strong>, and <strong>ADME</strong> —
                    passed directly to bench synthesis, saving weeks of manual iteration
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {benefits.map(({ Icon, title, desc }) => (
              <div key={title} className="flex gap-4 p-5 rounded-xl border"
                style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ background: "rgba(14,124,123,0.07)" }}>
                  <Icon />
                </div>
                <div>
                  <h4 className="font-bold text-base mb-1"
                    style={{ color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    {title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16" style={{ background: "#071A2D" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h2 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
            Interested in Collaboration?
          </h2>
          <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.6)" }}>
            Open to collaborative research in AI-assisted materials discovery, cheminformatics,
            and computational–experimental workflows for advanced functional materials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Get in Touch →
            </Link>
            <Link href="/research"
              className="px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
              style={{ background: "transparent", color: "#fff", borderColor: "rgba(255,255,255,0.25)", fontFamily: "var(--font-space)" }}>
              ← Doctoral Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

import Image from "next/image";
import Link from "next/link";
import MolCanvas from "@/components/home/MolCanvas";
import StatsSection from "@/components/home/StatsCounter";
import { profile, researchAreas, workflowSteps, publications } from "@/lib/data";

/* ══════════════════════════════════════════════════════
   Research Approach step SVGs — 20 × 20 viewport
   ══════════════════════════════════════════════════════ */

function IconSynth() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" strokeLinecap="round" aria-hidden="true">
      <path d="M7 2h6M7 2v5L3 14a2 2 0 0 0 1.7 3h10.6A2 2 0 0 0 17 14l-4-7V2"
        stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="4" y1="12" x2="16" y2="12" stroke="#0E7C7B" strokeWidth="1" opacity="0.4" strokeDasharray="2,1.5"/>
      <circle cx="8"  cy="14.5" r="0.9" fill="#0E7C7B" opacity="0.55"/>
      <circle cx="12" cy="15.5" r="0.7" fill="#0E7C7B" opacity="0.45"/>
    </svg>
  );
}

function IconNMR() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      {/* Baseline */}
      <line x1="2" y1="13" x2="18" y2="13" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.35"/>
      {/* NMR peaks */}
      <polyline points="2,13 4,13 5,7 6,13 7,11 8,5 9,11 10,13 12,13 13,9 14,13 16,13 18,13"
        stroke="#0E7C7B" strokeWidth="1.4" fill="none"/>
      {/* Crystal lattice hint below */}
      <circle cx="5"  cy="17" r="1.2" stroke="#0E7C7B" strokeWidth="1" fill="rgba(14,124,123,0.1)"/>
      <circle cx="10" cy="17" r="1.2" stroke="#0E7C7B" strokeWidth="1" fill="rgba(14,124,123,0.1)"/>
      <circle cx="15" cy="17" r="1.2" stroke="#0E7C7B" strokeWidth="1" fill="rgba(14,124,123,0.1)"/>
      <line x1="6.2" y1="17" x2="8.8" y2="17" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="11.2" y1="17" x2="13.8" y2="17" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
    </svg>
  );
}

function IconDFTCalc() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      <line x1="3" y1="2" x2="3" y2="18" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      <line x1="5"  y1="14" x2="17" y2="14" stroke="#0E7C7B" strokeWidth="1.6"/>
      <line x1="5"  y1="8"  x2="17" y2="8"  stroke="#4DD9D8" strokeWidth="1.5" opacity="0.8"/>
      <line x1="18.5" y1="8" x2="18.5" y2="14" stroke="#0E7C7B" strokeWidth="0.9" strokeDasharray="1.5,1" opacity="0.5"/>
      <circle cx="9"  cy="14" r="1.6" fill="#0E7C7B" opacity="0.85"/>
      <circle cx="13" cy="14" r="1.6" fill="#0E7C7B" opacity="0.85"/>
    </svg>
  );
}

function IconDocking() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      {/* Protein pocket */}
      <path d="M3 5 Q3 2 6 2 Q10 2 10 5 Q10 9 6 10 Q3 11 3 14 Q3 18 7 18 L17 18"
        stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)"/>
      {/* Ligand molecule */}
      <circle cx="15" cy="10" r="3.5" stroke="#4DD9D8" strokeWidth="1.4" fill="rgba(77,217,216,0.1)"/>
      <circle cx="15" cy="10" r="1.3" fill="#4DD9D8" opacity="0.7"/>
      {/* Binding arrows */}
      <line x1="11.5" y1="9"  x2="13.5" y2="9.5"  stroke="#4DD9D8" strokeWidth="0.9" strokeDasharray="1.5,1" opacity="0.6"/>
      <line x1="11.5" y1="11" x2="13.5" y2="10.5" stroke="#4DD9D8" strokeWidth="0.9" strokeDasharray="1.5,1" opacity="0.6"/>
    </svg>
  );
}

function IconSAR() {
  return (
    <svg viewBox="0 0 20 20" width="20" height="20" fill="none" aria-hidden="true">
      <line x1="2" y1="18" x2="2"  y2="2"  stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      <line x1="2" y1="18" x2="18" y2="18" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      <circle cx="5"  cy="15" r="1.4" fill="#0E7C7B" opacity="0.5"/>
      <circle cx="8"  cy="12" r="1.4" fill="#0E7C7B" opacity="0.65"/>
      <circle cx="11" cy="9"  r="1.4" fill="#0E7C7B" opacity="0.8"/>
      <circle cx="14" cy="6"  r="1.4" fill="#0E7C7B" opacity="0.9"/>
      <circle cx="17" cy="4"  r="1.4" fill="#4DD9D8"/>
      <line x1="3" y1="17" x2="18" y2="3" stroke="#0E7C7B" strokeWidth="1.3" strokeDasharray="2.5,2" opacity="0.6"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   Research Domain card SVGs — 28 × 28 viewport
   ══════════════════════════════════════════════════════ */

function IconRuComplex() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <circle cx="22" cy="22" r="5"  fill="rgba(14,124,123,0.2)"  stroke="#0E7C7B" strokeWidth="1.8"/>
      <circle cx="22" cy="22" r="2"  fill="#0E7C7B"/>
      <line x1="22" y1="17" x2="22" y2="6"  stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="22" y1="27" x2="22" y2="38" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="17" y1="22" x2="6"  y2="22" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="27" y1="22" x2="38" y2="22" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="18" y1="18" x2="10" y2="10" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.7"/>
      <line x1="26" y1="26" x2="34" y2="34" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.7"/>
      <circle cx="22" cy="5"  r="3.5" stroke="#4DD9D8" strokeWidth="1.4" fill="rgba(77,217,216,0.12)"/>
      <circle cx="22" cy="39" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="5"  cy="22" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="39" cy="22" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="9"  cy="9"  r="2.5" stroke="#4DD9D8" strokeWidth="1.3" fill="rgba(77,217,216,0.1)"/>
    </svg>
  );
}

function IconMEP() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <ellipse cx="22" cy="22" rx="18" ry="12" stroke="#0E7C7B" strokeWidth="1.4" opacity="0.3"/>
      <ellipse cx="22" cy="22" rx="13" ry="8"  stroke="#0E7C7B" strokeWidth="1.5" opacity="0.55"/>
      <ellipse cx="22" cy="22" rx="8"  ry="5"  stroke="#4DD9D8" strokeWidth="1.6" opacity="0.75"/>
      <ellipse cx="22" cy="22" rx="4"  ry="2.5" stroke="#4DD9D8" strokeWidth="1.8" opacity="0.9"/>
      <circle cx="22" cy="22" r="2.5" fill="#0E7C7B"/>
    </svg>
  );
}

function IconSubstituent() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {([8, 19, 30] as number[]).map((cx, i) => (
        <g key={cx}>
          <polygon points={`${cx},5 ${cx+5},8 ${cx+5},14 ${cx},17 ${cx-5},14 ${cx-5},8`}
            stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)" opacity={0.5 + i * 0.2}/>
          <line x1={cx} y1="17" x2={cx} y2="22" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.6"/>
          <circle cx={cx} cy="24" r="2" fill="#0E7C7B" opacity={0.4 + i * 0.2}/>
        </g>
      ))}
      <rect x="5"  y="30" width="6" height="8"  rx="1" fill="#0E7C7B" opacity="0.4"/>
      <rect x="16" y="27" width="6" height="11" rx="1" fill="#0E7C7B" opacity="0.6"/>
      <rect x="27" y="24" width="6" height="14" rx="1" fill="#0E7C7B" opacity="0.85"/>
      <line x1="5" y1="43" x2="36" y2="43" stroke="#0E7C7B" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

function IconProteinBinding() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      <path d="M8 8 Q14 6 14 12 Q14 18 8 16 Q2 14 2 20 Q2 26 8 24 Q14 22 14 28 Q14 34 8 32"
        stroke="#0E7C7B" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path d="M24 16 Q38 12 40 22 Q42 32 28 34 Q20 36 18 28 Q16 20 24 16Z"
        stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.08)"/>
      <circle cx="30" cy="25" r="4" stroke="#4DD9D8" strokeWidth="1.6" fill="rgba(77,217,216,0.15)"/>
      <circle cx="30" cy="25" r="1.5" fill="#4DD9D8" opacity="0.8"/>
      <line x1="26" y1="22" x2="29" y2="23" stroke="#4DD9D8" strokeWidth="1" strokeDasharray="1.5,1" opacity="0.7"/>
      <line x1="26" y1="28" x2="29" y2="27" stroke="#4DD9D8" strokeWidth="1" strokeDasharray="1.5,1" opacity="0.7"/>
    </svg>
  );
}

function HomeResearchIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes("ruthenium"))     return <IconRuComplex />;
  if (title.toLowerCase().includes("computational")) return <IconMEP />;
  if (title.toLowerCase().includes("structure"))     return <IconSubstituent />;
  if (title.toLowerCase().includes("biological"))    return <IconProteinBinding />;
  return <IconRuComplex />;
}

/* ══════════════════════════════════════════════════════
   Sub-components
   ══════════════════════════════════════════════════════ */

function Tag({ label, color = "teal" }: { label: string; color?: string }) {
  const bg   = color === "teal" ? "rgba(14,124,123,0.18)" : "rgba(34,197,94,0.13)";
  const text = color === "teal" ? "#0E7C7B"              : "#22C55E";
  return (
    <span className="px-3 py-1 rounded-full text-xs font-semibold"
      style={{ background: bg, color: text, fontFamily: "var(--font-space)" }}>
      {label}
    </span>
  );
}

function ResearchCard({ title, desc, techniques }: {
  title: string; desc: string; techniques: string[];
}) {
  return (
    <div className="rounded-2xl p-7 border flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#fff", borderColor: "#E2E8F0" }}>
      <div className="w-14 h-14 rounded-xl flex items-center justify-center"
        style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.12)" }}>
        <HomeResearchIcon title={title} />
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
          {title}
        </h3>
        {desc && <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>}
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techniques.map((t) => (
          <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium"
            style={{ background: "rgba(14,124,123,0.08)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function WorkflowStep({ step, label, desc }: { step: string; label: string; desc: string }) {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold mb-3"
        style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
        {step}
      </div>
      <p className="font-bold text-base mb-1" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>{label}</p>
      <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{desc}</p>
    </div>
  );
}

function FeaturedPub({ title, journal, year, doi }: {
  title: string; journal: string; year: number; doi: string;
}) {
  return (
    <a href={doi} target="_blank" rel="noopener noreferrer"
      className="flex flex-col gap-2 p-5 rounded-xl border hover:shadow-md transition-all duration-200 hover:-translate-y-0.5 group"
      style={{ background: "#fff", borderColor: "#E2E8F0" }}>
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
          {year}
        </span>
        <span className="text-xs opacity-40">↗</span>
      </div>
      <p className="text-sm font-semibold leading-snug group-hover:text-teal-700 transition-colors line-clamp-3"
        style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
        {title}
      </p>
      <p className="text-xs" style={{ color: "#64748B" }}>{journal}</p>
    </a>
  );
}

/* ══════════════════════════════════════════════════════
   Research Approach step data
   ══════════════════════════════════════════════════════ */
const approachSteps = [
  { Icon: IconSynth,   text: "Synthesise Ru(III) & half-sandwich Ru(II)–arene Schiff-base complexes" },
  { Icon: IconNMR,     text: "Confirm structures by NMR, X-ray diffraction, FT-IR & UV-Vis" },
  { Icon: IconDFTCalc, text: "Model electronic properties via DFT (GAUSSIAN)" },
  { Icon: IconDocking, text: "Predict binding via molecular docking (AutoDock / Discovery Studio)" },
  { Icon: IconSAR,     text: "Establish SAR from combined computational & biological data" },
];

/* ══════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════ */
export default function HomePage() {
  const featured = publications.filter((p) => p.featured).slice(0, 3);

  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center overflow-hidden"
        style={{ background: "linear-gradient(135deg, #071A2D 0%, #0a2640 60%, #071A2D 100%)" }}>
        <MolCanvas />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 70% 60% at 50% 40%, rgba(14,124,123,0.12) 0%, transparent 70%)" }} />

        <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-16 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            {/* Left */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-wrap gap-2">
                <Tag label="Advanced Material" />
                <Tag label="Ruthenium Chemistry" color="emerald" />
              </div>
              <div>
                <h1 className="font-bold leading-tight mb-4"
                  style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3.2rem)", color: "#fff" }}>
                  {profile.name}
                </h1>
                <p className="text-lg font-medium mb-3" style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                  {profile.title}
                </p>
                <p className="text-base leading-relaxed max-w-lg" style={{ color: "rgba(255,255,255,0.65)" }}>
                  {profile.tagline}
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {["Computational Chemistry","AI Assisted Materials","DFT Modelling","Molecular Docking"].map((t) => (
                  <span key={t} className="px-3 py-1.5 rounded-lg text-xs font-medium border"
                    style={{ color: "rgba(255,255,255,0.7)", borderColor: "rgba(255,255,255,0.12)",
                             background: "rgba(255,255,255,0.05)", fontFamily: "var(--font-space)" }}>
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link href="/research" className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
                  Explore Research
                </Link>
                <Link href="/publications" className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(255,255,255,0.08)", color: "#fff",
                           border: "1px solid rgba(255,255,255,0.15)", fontFamily: "var(--font-space)" }}>
                  View Publications
                </Link>
                <a href="/Farha_Arshi_CV_New.pdf" download className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "rgba(34,197,94,0.12)", color: "#22C55E",
                           border: "1px solid rgba(34,197,94,0.25)", fontFamily: "var(--font-space)" }}>
                  Download CV
                </a>
              </div>
            </div>

            {/* Right — photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute -inset-4 rounded-full opacity-15"
                  style={{ background: "conic-gradient(from 0deg, transparent 0%, #0E7C7B 40%, transparent 70%)",
                           filter: "blur(8px)", animation: "spin 20s linear infinite" }} />
                <div className="relative rounded-3xl overflow-hidden shadow-2xl"
                  style={{ border: "1px solid rgba(14,124,123,0.35)", background: "rgba(14,124,123,0.06)" }}>
                  <Image
                    src="/images/new-farha.png"
                    alt="Dr. Farha Arshi — Synthetic & Computational Chemist"
                    width={400} height={480} priority
                    style={{ objectFit: "cover", maxHeight: "480px", width: "100%" }}
                  />
                  <Link href="/research"
                    className="absolute top-0 left-0 w-1/2 h-full z-10 group"
                    aria-label="View Research" style={{ cursor: "pointer" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ background: "rgba(14,124,123,0.35)", backdropFilter: "blur(2px)" }}>
                      <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-white"
                        style={{ background: "rgba(14,124,123,0.85)", fontFamily: "var(--font-space)" }}>
                        Research →
                      </span>
                    </div>
                  </Link>
                  <Link href="/about"
                    className="absolute top-0 right-0 w-1/2 h-full z-10 group"
                    aria-label="View About" style={{ cursor: "pointer" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ background: "rgba(7,26,45,0.35)", backdropFilter: "blur(2px)" }}>
                      <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-white"
                        style={{ background: "rgba(7,26,45,0.85)", fontFamily: "var(--font-space)" }}>
                        About →
                      </span>
                    </div>
                  </Link>
                  <div className="absolute bottom-4 left-4 right-4 px-4 py-3 rounded-xl z-20 pointer-events-none"
                    style={{ background: "rgba(7,26,45,0.85)", backdropFilter: "blur(12px)",
                             border: "1px solid rgba(14,124,123,0.3)" }}>
                    <p className="text-xs font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      University of Lucknow, India
                    </p>
                    <p className="text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.55)" }}>
                      PhD, Chemistry · NAAC A++
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
          <span className="text-xs text-white" style={{ fontFamily: "var(--font-space)" }}>Scroll</span>
          <div className="w-px h-10 bg-white/40" />
        </div>
      </section>

      {/* ── STATS ── */}
      <StatsSection />

      {/* ── ABOUT ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                About the Doctoral Research
              </span>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
                From Bench to Bits —{" "}
                <span style={{ color: "#0E7C7B" }}>A Two-Pronged Approach</span>
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#475569" }}>
                Imagine designing a molecular key that fits a cancer-related protein target,
                then using computational chemistry to understand why it behaves the way it does.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#475569" }}>
                During my PhD, I synthesised <strong>ten novel ruthenium complexes</strong> and
                investigated their electronic structure, reactivity, and protein-binding behaviour
                using <strong>Density Functional Theory (DFT)</strong> and <strong>molecular docking</strong>. By integrating
                experimental synthesis with computational analysis, I correlated structural features
                with chemical and biological properties, providing mechanistic insights that guided
                the interpretation of experimental results.
              </p>
              <Link href="/research" className="text-sm font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Read the full research story →
              </Link>
            </div>

            {/* Research Approach — SVG step list */}
            <div className="rounded-2xl p-8 border" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-6"
                style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                Research Approach
              </h3>
              <ul className="space-y-5">
                {approachSteps.map(({ Icon, text }, i) => (
                  <li key={text} className="flex items-start gap-4">
                    {/* Step number + SVG badge */}
                    <div className="flex-shrink-0 flex flex-col items-center gap-1.5">
                      <div className="w-9 h-9 rounded-xl flex items-center justify-center"
                        style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.12)" }}>
                        <Icon />
                      </div>
                      {i < approachSteps.length - 1 && (
                        <div className="w-px h-4" style={{ background: "rgba(14,124,123,0.2)" }} />
                      )}
                    </div>
                    <div className="pt-1.5">
                      <span className="text-xs font-semibold mr-2"
                        style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-base leading-relaxed" style={{ color: "#475569" }}>{text}</span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── RESEARCH AREAS ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Focus Areas
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Doctoral Research Domains
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((r) => (
              <ResearchCard key={r.title} title={r.title} desc={r.desc ?? ""} techniques={r.techniques} />
            ))}
          </div>
        </div>
      </section>

      {/* ── WORKFLOW ── */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Scientific Process
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              Doctoral Research Workflow
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {workflowSteps.map((s) => <WorkflowStep key={s.step} {...s} />)}
          </div>
        </div>
      </section>

      {/* ── AI WORKFLOW ── */}
      <section className="py-20" style={{ background: "#0a2640" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              From Prediction to Discovery
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              AI-Assisted Materials Discovery Workflow
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {([
              { step: "01", label: "Computational Library Design",  desc: "Generate virtual libraries of metal–ligand systems and functional nanomaterials using cheminformatics and Python-based computational workflows." },
              { step: "02", label: "Quantum Chemical Modelling",     desc: "Perform DFT calculations to obtain electronic descriptors including HOMO–LUMO energies, electrostatic potential surfaces, and global reactivity descriptors." },
              { step: "03", label: "AI-Assisted Materials Screening",desc: "Apply machine learning models to predict structure–property relationships, rank candidates, and identify the most promising systems." },
              { step: "04", label: "Experimental Validation",        desc: "Synthesize and characterize the highest-ranked candidates to verify computational predictions using spectroscopic and structural techniques." },
              { step: "05", label: "Structure–Property Analysis",    desc: "Correlate computational descriptors with experimental performance to understand the relationship between electronic structure and material functionality." },
              { step: "06", label: "Iterative Materials Discovery",  desc: "Incorporate experimental results into computational models to continuously improve prediction accuracy and guide the next generation of functional materials." },
            ] as { step: string; label: string; desc: string }[]).map((s) => (
              <WorkflowStep key={s.step} {...s} />
            ))}
          </div>
        </div>
      </section>

      {/* ── QUOTE CALLOUT ── */}
      <section className="py-16" style={{ background: "#071A2D" }}>
        <div className="max-w-3xl mx-auto px-6 text-center">
          <svg viewBox="0 0 40 28" width="40" height="28" fill="none" aria-hidden="true" className="mx-auto mb-6 opacity-30">
            <path d="M0 28V16C0 9.6 3.2 4.8 9.6 1.6L12 6.4C8.8 8 6.8 10.4 6.4 14H12V28H0ZM22 28V16C22 9.6 25.2 4.8 31.6 1.6L34 6.4C30.8 8 28.8 10.4 28.4 14H34V28H22Z" fill="white"/>
          </svg>
          <p className="text-xl font-medium leading-relaxed mb-6"
            style={{ color: "rgba(255,255,255,0.85)", fontFamily: "var(--font-space)" }}>
            Designing next-generation functional materials through chemistry, computation, and artificial intelligence.
          </p>
          <p className="text-sm font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Dr. Farha Arshi
          </p>
          <p className="text-xs mt-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space)" }}>
            Synthetic &amp; Computational Chemist
          </p>
        </div>
      </section>

      {/* ── FEATURED PUBLICATIONS ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Latest Work
              </span>
              <h2 className="font-bold"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2rem)", color: "#0F172A" }}>
                Featured Publications
              </h2>
            </div>
            <Link href="/publications" className="text-sm font-semibold whitespace-nowrap"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              All publications →
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featured.map((p) => (
              <FeaturedPub key={p.id} title={p.title} journal={p.journal} year={p.year} doi={p.doi} />
            ))}
          </div>
          <div className="mt-10 text-center">
            <p className="text-base mb-4" style={{ color: "#64748B", fontFamily: "var(--font-ibm)" }}>
              5 peer-reviewed papers · 1 preprint · 26 citations · h-index 4
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold transition-all hover:scale-105"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Open to Collaboration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

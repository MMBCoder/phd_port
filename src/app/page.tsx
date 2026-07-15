import Image from "next/image";
import Link from "next/link";
import MolCanvas from "@/components/home/MolCanvas";
import StatsSection from "@/components/home/StatsCounter";
import { profile, researchAreas, workflowSteps, publications } from "@/lib/data";

function Tag({ label, color = "teal" }: { label: string; color?: string }) {
  const bg   = color === "teal" ? "rgba(14,124,123,0.18)"  : "rgba(34,197,94,0.13)";
  const text = color === "teal" ? "#0E7C7B"                : "#22C55E";
  return (
    <span className="px-3 py-1 rounded-full text-xs font-semibold"
      style={{ background: bg, color: text, fontFamily: "var(--font-space)" }}>
      {label}
    </span>
  );
}

function ResearchCard({ icon, title, desc, techniques }: {
  icon: string; title: string; desc: string; techniques: string[];
}) {
  return (
    <div className="rounded-2xl p-7 border flex flex-col gap-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
      style={{ background: "#fff", borderColor: "#E2E8F0" }}>
      <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
        style={{ background: "rgba(14,124,123,0.08)" }}>
        {icon}
      </div>
      <div>
        <h3 className="font-bold text-lg mb-2" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
      </div>
      <div className="flex flex-wrap gap-2 mt-auto">
        {techniques.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded-md text-xs font-medium"
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
      <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold mb-3"
        style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
        {step}
      </div>
      <p className="font-semibold text-sm mb-1" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>{label}</p>
      <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>{desc}</p>
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
                <Tag label="Structure-Based Drug Design" />
                <Tag label="Ruthenium Metallodrugs" color="emerald" />
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
                {["Computational Chemistry","Medicinal Chemistry","DFT Modelling","Molecular Docking"].map((t) => (
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
                  ↓ Download CV
                </a>
              </div>
            </div>

            {/* Right — photo with split-click zones */}
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

                  {/* Left half → Research page */}
                  <Link href="/research"
                    className="absolute top-0 left-0 w-1/2 h-full z-10 group"
                    aria-label="View Research"
                    style={{ cursor: "pointer" }}>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center"
                      style={{ background: "rgba(14,124,123,0.35)", backdropFilter: "blur(2px)" }}>
                      <span className="px-3 py-1.5 rounded-xl text-xs font-bold text-white"
                        style={{ background: "rgba(14,124,123,0.85)", fontFamily: "var(--font-space)" }}>
                        Research →
                      </span>
                    </div>
                  </Link>

                  {/* Right half → About page */}
                  <Link href="/about"
                    className="absolute top-0 right-0 w-1/2 h-full z-10 group"
                    aria-label="View About"
                    style={{ cursor: "pointer" }}>
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
                About the Research
              </span>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
                From Bench to Bits —{" "}
                <span style={{ color: "#0E7C7B" }}>A Two-Pronged Approach</span>
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                Imagine designing a molecular key that fits a cancer-related protein target,
                then using computational chemistry to understand why it behaves the way it does.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                During my PhD, I synthesised <strong>ten novel ruthenium complexes</strong> and
                investigated their electronic structure, reactivity, and protein-binding behaviour
                using Density Functional Theory (DFT) and molecular docking. By integrating
                experimental synthesis with computational analysis, I correlated structural features
                with chemical and biological properties, providing mechanistic insights that guided
                the interpretation of experimental results.
              </p>
              <Link href="/research" className="text-sm font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Read the full research story →
              </Link>
            </div>
            <div className="rounded-2xl p-8 border" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <h3 className="font-bold text-xs uppercase tracking-widest mb-5"
                style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                Research Approach
              </h3>
              <ul className="space-y-4">
                {[
                  ["⚗️","Synthesise Ru(III) & half-sandwich Ru(II)–arene Schiff-base complexes"],
                  ["🔬","Confirm structures by NMR, X-ray diffraction (where applicable), FT-IR & UV-Vis"],
                  ["💻","Model electronic properties via DFT (GAUSSIAN)"],
                  ["🎯","Predict binding via molecular docking (AutoDock / Discovery Studio)"],
                  ["📊","Establish SAR from combined computational & biological data"],
                ].map(([icon, text]) => (
                  <li key={text as string} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{icon}</span>
                    <span className="text-sm leading-relaxed" style={{ color: "#475569" }}>{text}</span>
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
              Research Domains
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((r) => <ResearchCard key={r.title} {...r} />)}
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
              Research Workflow
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {workflowSteps.map((s) => <WorkflowStep key={s.step} {...s} />)}
          </div>
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
            <p className="text-sm mb-4" style={{ color: "#64748B", fontFamily: "var(--font-ibm)" }}>
              5 peer-reviewed papers · 1 preprint · 25 citations · h-index 4
            </p>
            <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Open to Collaboration →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

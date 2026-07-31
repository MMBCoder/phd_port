import Image from "next/image";
import Link from "next/link";
import { profile, education, stats } from "@/lib/data";

/* ── Inline SVG icons ─────────────────────────────────────────── */
function IconDegree() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
      <path d="M6 12v5c3 1.5 9 1.5 12 0v-5"/>
    </svg>
  );
}
function IconFlask() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 3h6M9 3v8L4.5 19.5A2 2 0 0 0 6.24 22h11.52a2 2 0 0 0 1.74-2.5L15 11V3"/>
      <line x1="6.5" y1="15.5" x2="17.5" y2="15.5"/>
    </svg>
  );
}
function IconNeural() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round">
      <circle cx="4" cy="7" r="1.5"/><circle cx="4" cy="17" r="1.5"/>
      <circle cx="20" cy="7" r="1.5"/><circle cx="20" cy="17" r="1.5"/>
      <circle cx="12" cy="12" r="2"/>
      <line x1="5.5" y1="7.5" x2="10" y2="11"/><line x1="5.5" y1="16.5" x2="10" y2="13"/>
      <line x1="14" y1="11" x2="18.5" y2="7.5"/><line x1="14" y1="13" x2="18.5" y2="16.5"/>
    </svg>
  );
}
function IconCode() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
    </svg>
  );
}
function IconMail() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
      <polyline points="22,6 12,13 2,6"/>
    </svg>
  );
}

/* Academic profile brand SVGs */
function IconOrcid() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" aria-hidden="true">
      <circle cx="12" cy="12" r="12" fill="#A6CE39"/>
      <path fill="#fff" d="M7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.9-1.564 3.9-3.722 0-2.013-1.425-3.722-3.862-3.722h-2.335z"/>
    </svg>
  );
}
function IconScholar() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#4285F4" aria-hidden="true">
      <path d="M12 3 1 9l4 2.18V17c0 1.1 3.13 3 7 3s7-1.9 7-3v-5.82L23 9 12 3zm6 13.5c0 .5-2.13 1.5-6 1.5s-6-1-6-1.5v-4.14l6 3.28 6-3.28v4.14z"/>
      <path d="M12 5.96 6.43 8.81 12 11.67l5.57-2.86L12 5.96z"/>
    </svg>
  );
}
function IconResearchGate() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#00CCBB" aria-hidden="true">
      <path d="M19.586 0c-.818 0-1.296.424-1.296 1.34v15.628c0 .879.478 1.33 1.296 1.33h.437c.817 0 1.295-.451 1.295-1.33V1.34C21.318.424 20.840 0 20.023 0zM5.725.072C2.471.072 0 2.624 0 5.89c0 3.265 2.47 5.818 5.725 5.818 3.254 0 5.719-2.553 5.719-5.818C11.444 2.624 8.979.072 5.725.072zm0 2.392c1.85 0 3.329 1.534 3.329 3.426 0 1.891-1.48 3.424-3.33 3.424-1.85 0-3.334-1.533-3.334-3.424 0-1.892 1.483-3.426 3.335-3.426zm9.376 1.962v2.392h2.383v2.393h-2.383v2.392h-2.384V9.211h-2.384V6.818h2.384V4.426z"/>
    </svg>
  );
}
function IconLinkedIn() {
  return (
    <svg viewBox="0 0 24 24" width="15" height="15" fill="#0A66C2" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

/* Research philosophy card SVG icons */
function IconPredictive() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
      {/* Neural nodes → molecule target */}
      <circle cx="8" cy="16" r="3" stroke="#0E7C7B" strokeWidth="1.8" fill="rgba(14,124,123,0.15)"/>
      <circle cx="8" cy="32" r="3" stroke="#0E7C7B" strokeWidth="1.8" fill="rgba(14,124,123,0.15)"/>
      <circle cx="22" cy="10" r="3" stroke="#4DD9D8" strokeWidth="1.8" fill="rgba(77,217,216,0.1)"/>
      <circle cx="22" cy="24" r="3" stroke="#4DD9D8" strokeWidth="1.8" fill="rgba(77,217,216,0.1)"/>
      <circle cx="22" cy="38" r="3" stroke="#4DD9D8" strokeWidth="1.8" fill="rgba(77,217,216,0.1)"/>
      <circle cx="38" cy="24" r="5" stroke="#0E7C7B" strokeWidth="2" fill="rgba(14,124,123,0.2)"/>
      <circle cx="38" cy="24" r="2" fill="#0E7C7B"/>
      <line x1="11" y1="16" x2="19" y2="11" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="11" y1="16" x2="19" y2="24" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="11" y1="32" x2="19" y2="24" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="11" y1="32" x2="19" y2="38" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="25" y1="10" x2="33" y2="21" stroke="#4DD9D8" strokeWidth="1" opacity="0.5" strokeDasharray="2,2"/>
      <line x1="25" y1="24" x2="33" y2="24" stroke="#4DD9D8" strokeWidth="1" opacity="0.5" strokeDasharray="2,2"/>
      <line x1="25" y1="38" x2="33" y2="27" stroke="#4DD9D8" strokeWidth="1" opacity="0.5" strokeDasharray="2,2"/>
    </svg>
  );
}
function IconSynthesis() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
      {/* Atomic orbital rings + nucleus */}
      <ellipse cx="24" cy="24" rx="20" ry="7" stroke="#6366F1" strokeWidth="1.8" opacity="0.7"/>
      <ellipse cx="24" cy="24" rx="20" ry="7" stroke="#6366F1" strokeWidth="1.8" opacity="0.5" transform="rotate(60 24 24)"/>
      <ellipse cx="24" cy="24" rx="20" ry="7" stroke="#818CF8" strokeWidth="1.8" opacity="0.5" transform="rotate(120 24 24)"/>
      <circle cx="24" cy="24" r="4" fill="rgba(99,102,241,0.25)" stroke="#6366F1" strokeWidth="1.8"/>
      <circle cx="24" cy="24" r="1.8" fill="#6366F1"/>
      {/* Electron dots */}
      <circle cx="44" cy="24" r="2" fill="#818CF8" opacity="0.8"/>
      <circle cx="34" cy="10.4" r="2" fill="#6366F1" opacity="0.8"/>
      <circle cx="14" cy="37.6" r="2" fill="#6366F1" opacity="0.8"/>
    </svg>
  );
}
function IconStructure() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
      {/* Scatter plot + trend line */}
      <line x1="6" y1="42" x2="6" y2="6" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4"/>
      <line x1="6" y1="42" x2="44" y2="42" stroke="#F59E0B" strokeWidth="1.5" opacity="0.4"/>
      {/* Scatter dots */}
      <circle cx="12" cy="36" r="2.2" fill="#F59E0B" opacity="0.6"/>
      <circle cx="18" cy="30" r="2.2" fill="#F59E0B" opacity="0.7"/>
      <circle cx="22" cy="26" r="2.2" fill="#F59E0B" opacity="0.7"/>
      <circle cx="28" cy="20" r="2.2" fill="#F59E0B" opacity="0.8"/>
      <circle cx="33" cy="16" r="2.2" fill="#F59E0B" opacity="0.85"/>
      <circle cx="40" cy="11" r="2.2" fill="#FBBF24" opacity="0.9"/>
      {/* Trend line */}
      <line x1="10" y1="38" x2="42" y2="9" stroke="#F59E0B" strokeWidth="1.8" strokeDasharray="3,2" opacity="0.8"/>
      {/* Correlation label ticks */}
      <line x1="16" y1="42" x2="16" y2="40" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
      <line x1="28" y1="42" x2="28" y2="40" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
      <line x1="40" y1="42" x2="40" y2="40" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
    </svg>
  );
}
function IconSustainable() {
  return (
    <svg viewBox="0 0 48 48" width="28" height="28" fill="none" aria-hidden="true">
      {/* Hexagonal crystal lattice */}
      <polygon points="24,6 34,12 34,24 24,30 14,24 14,12" stroke="#22C55E" strokeWidth="1.8" fill="rgba(34,197,94,0.08)" opacity="0.9"/>
      <polygon points="24,18 30,21 30,27 24,30 18,27 18,21" stroke="#22C55E" strokeWidth="1.5" fill="rgba(34,197,94,0.15)" opacity="0.8"/>
      {/* Outer growth arcs */}
      <path d="M24 6 Q38 6 42 18" stroke="#22C55E" strokeWidth="1.2" fill="none" opacity="0.35" strokeDasharray="3,2"/>
      <path d="M14 12 Q4 18 6 32" stroke="#22C55E" strokeWidth="1.2" fill="none" opacity="0.35" strokeDasharray="3,2"/>
      <path d="M34 24 Q40 36 30 42" stroke="#22C55E" strokeWidth="1.2" fill="none" opacity="0.35" strokeDasharray="3,2"/>
      {/* Center node */}
      <circle cx="24" cy="24" r="3" fill="#22C55E" opacity="0.9"/>
      {/* Vertex nodes */}
      <circle cx="24" cy="6" r="2" fill="#22C55E" opacity="0.6"/>
      <circle cx="34" cy="12" r="2" fill="#22C55E" opacity="0.6"/>
      <circle cx="34" cy="24" r="2" fill="#22C55E" opacity="0.6"/>
      <circle cx="14" cy="12" r="2" fill="#22C55E" opacity="0.6"/>
      <circle cx="14" cy="24" r="2" fill="#22C55E" opacity="0.6"/>
      <circle cx="24" cy="30" r="2" fill="#22C55E" opacity="0.6"/>
    </svg>
  );
}

export default function AboutPage() {
  const quickFacts = [
    { Icon: IconDegree,  label: "Ph.D. in Chemistry — University of Lucknow" },
    { Icon: IconFlask,   label: "Synthetic & Computational Chemistry" },
    { Icon: IconNeural,  label: "DFT • Computational Materials Design • AI for Molecular Discovery" },
    { Icon: IconCode,    label: "Python • RDKit • Molecular Modelling" },
    { Icon: IconMail,    label: profile.email },
  ];

  const academicProfiles = [
    { label: "ORCID",          href: profile.links.orcid,        Icon: IconOrcid },
    { label: "Scopus",         href: profile.links.scopus,       Icon: null },
    { label: "Google Scholar", href: profile.links.scholar,      Icon: IconScholar },
    { label: "ResearchGate",   href: profile.links.researchgate, Icon: IconResearchGate },
    { label: "LinkedIn",       href: profile.links.linkedin,     Icon: IconLinkedIn },
  ];

  const philosophy = [
    {
      Icon: IconPredictive,
      accent: "#0E7C7B",
      accentBg: "rgba(14,124,123,0.12)",
      title: "Predictive Materials Discovery",
      desc: "Integrating DFT, cheminformatics, and artificial intelligence to identify high-potential functional materials before laboratory synthesis.",
      tags: ["DFT", "Cheminformatics", "AI Screening"],
      visual: (
        <svg viewBox="0 0 80 40" width="80" height="40" aria-hidden="true">
          <circle cx="10" cy="20" r="6" fill="none" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.6"/>
          <circle cx="40" cy="20" r="9" fill="none" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.8"/>
          <circle cx="70" cy="20" r="6" fill="none" stroke="#4DD9D8" strokeWidth="1.5" opacity="0.6"/>
          <line x1="16" y1="20" x2="31" y2="20" stroke="#0E7C7B" strokeWidth="1" opacity="0.5" strokeDasharray="3,2"/>
          <line x1="49" y1="20" x2="64" y2="20" stroke="#4DD9D8" strokeWidth="1" opacity="0.5" strokeDasharray="3,2"/>
          <circle cx="40" cy="20" r="3" fill="#0E7C7B" opacity="0.9"/>
        </svg>
      ),
    },
    {
      Icon: IconSynthesis,
      accent: "#6366F1",
      accentBg: "rgba(99,102,241,0.1)",
      title: "Computation-Informed Synthesis",
      desc: "Using computational insights to guide synthesis, characterisation, and iterative optimisation of advanced materials.",
      tags: ["Molecular Modelling", "GAUSSIAN", "Iterative Design"],
      visual: (
        <svg viewBox="0 0 80 40" width="80" height="40" aria-hidden="true">
          <ellipse cx="40" cy="20" rx="30" ry="10" fill="none" stroke="#6366F1" strokeWidth="1.2" opacity="0.5"/>
          <ellipse cx="40" cy="20" rx="30" ry="10" fill="none" stroke="#6366F1" strokeWidth="1.2" opacity="0.5" transform="rotate(60 40 20)"/>
          <ellipse cx="40" cy="20" rx="30" ry="10" fill="none" stroke="#818CF8" strokeWidth="1.2" opacity="0.5" transform="rotate(120 40 20)"/>
          <circle cx="40" cy="20" r="4" fill="#6366F1" opacity="0.9"/>
        </svg>
      ),
    },
    {
      Icon: IconStructure,
      accent: "#F59E0B",
      accentBg: "rgba(245,158,11,0.1)",
      title: "Structure–Property Intelligence",
      desc: "Connecting electronic structure, molecular descriptors, and experimental data to build predictive models for materials performance.",
      tags: ["SAR Analysis", "HOMO–LUMO", "Descriptors"],
      visual: (
        <svg viewBox="0 0 80 40" width="80" height="40" aria-hidden="true">
          {([10,20,32,46,58,70] as number[]).map((x, i) => (
            <rect key={x} x={x} y={40 - ([12,22,16,30,20,26] as number[])[i]} width="8" height={([12,22,16,30,20,26] as number[])[i]}
              fill="#F59E0B" opacity={0.3 + i * 0.1} rx="2"/>
          ))}
          <polyline points="14,28 24,18 36,24 50,10 62,20 74,14"
            fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.9"/>
        </svg>
      ),
    },
    {
      Icon: IconSustainable,
      accent: "#22C55E",
      accentBg: "rgba(34,197,94,0.1)",
      title: "Sustainable Materials Innovation",
      desc: "Developing computational strategies that accelerate the discovery of functional materials for energy, environmental sustainability, and critical resource recovery.",
      tags: ["Green Chemistry", "Energy Materials", "Sustainability"],
      visual: (
        <svg viewBox="0 0 80 40" width="80" height="40" aria-hidden="true">
          <circle cx="40" cy="20" r="16" fill="none" stroke="#22C55E" strokeWidth="1.2" opacity="0.4"/>
          <path d="M40 4 Q55 12 55 20 Q55 28 40 36 Q25 28 25 20 Q25 12 40 4Z"
            fill="none" stroke="#22C55E" strokeWidth="1.2" opacity="0.6"/>
          <path d="M24 20 Q40 10 56 20" fill="none" stroke="#22C55E" strokeWidth="1" opacity="0.5" strokeDasharray="3,2"/>
          <circle cx="40" cy="20" r="3.5" fill="#22C55E" opacity="0.9"/>
        </svg>
      ),
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            About
          </span>
          <h1 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Dr. Farha Arshi
          </h1>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Synthetic, Computational &amp; AI-Driven Chemist
          </p>
        </div>
      </section>

      {/* Profile section */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Photo */}
            <div className="flex flex-col items-center lg:items-start gap-6">
              <div className="relative w-64 h-64 rounded-3xl overflow-hidden shadow-2xl border-4"
                style={{ borderColor: "rgba(14,124,123,0.2)" }}>
                <Image
                  src="/images/farha-about.png"
                  alt="Dr. Farha Arshi"
                  fill
                  className="object-cover object-top"
                  priority
                />
              </div>

              {/* Quick facts */}
              <div className="rounded-2xl border p-6 w-full max-w-xs"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-xs uppercase tracking-widest mb-4"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                  Quick Facts
                </h3>
                {quickFacts.map(({ Icon, label }) => (
                  <div key={label} className="flex items-start gap-3 mb-3 last:mb-0">
                    <span className="flex-shrink-0 mt-0.5 w-[22px] h-[22px] flex items-center justify-center rounded"
                      style={{ background: "rgba(14,124,123,0.07)" }}>
                      <Icon />
                    </span>
                    <span className="text-sm leading-relaxed" style={{ color: "#475569", fontFamily: "var(--font-space)" }}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA buttons */}
              <div className="flex flex-col gap-3 w-full max-w-xs">
                <a href={profile.cv} download
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
                  style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
                  ↓ Download CV (PDF)
                </a>
                <Link href="/contact"
                  className="flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
                  style={{ background: "#fff", color: "#0E7C7B", borderColor: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                  Get in Touch →
                </Link>
              </div>
            </div>

            {/* Bio */}
            <div>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
                Who I Am
              </h2>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#475569" }}>
                I am an inorganic and medicinal chemist at the University of Lucknow, specialising in the design, synthesis, and biological evaluation of <strong>ruthenium-based anticancer and antimycobacterial agents</strong>. My research sits at the intersection of wet-lab organometallic chemistry and computational drug discovery.
              </p>
              <p className="text-lg leading-relaxed mb-4" style={{ color: "#475569" }}>
                Every complex I synthesise undergoes a parallel computational study: <strong>DFT</strong> geometry optimisation and <strong>HOMO–LUMO analysis</strong> reveal the electronic landscape, <strong>MEP maps</strong> highlight reactive sites, and <strong>molecular docking</strong> estimates binding affinity inside target proteins. Lab results then validate — or challenge — the predictions.
              </p>
              <p className="text-lg leading-relaxed mb-6" style={{ color: "#475569" }}>
                Beyond the bench, I am developing expertise in <strong>Python-based computational chemistry</strong>, including RDKit and AI-driven molecular design, with the long-term goal of combining machine learning and <strong>density functional theory</strong> to accelerate the discovery of advanced materials for sustainable technologies.
              </p>

              {/* Stats strip */}
              <div className="grid grid-cols-3 gap-4 mb-8">
                {stats.slice(0, 6).map((s) => (
                  <div key={s.label} className="rounded-xl p-4 text-center border"
                    style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                    <p className="font-bold text-2xl mb-0.5"
                      style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      {s.value}{s.suffix}
                    </p>
                    <p className="text-xs" style={{ color: "#64748B", fontFamily: "var(--font-space)" }}>
                      {s.label}
                    </p>
                  </div>
                ))}
              </div>

              {/* Academic profiles */}
              <h3 className="font-bold text-sm uppercase tracking-widest mb-4"
                style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                Academic Profiles
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {academicProfiles.map(({ label, href, Icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ background: "#F8FAFC", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    {label === "Scopus" ? (
                      <span className="w-[18px] h-[18px] rounded flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: "#E9711C", color: "#fff", fontSize: "11px" }}>S</span>
                    ) : Icon ? (
                      <span className="flex-shrink-0 flex items-center justify-center"><Icon /></span>
                    ) : null}
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Philosophy */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Research Philosophy
            </span>
            <h2 className="font-bold mb-3"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              How I Aim to Advance Discovery
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Four principles that guide the integration of computation, AI, and experiment in my research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {philosophy.map(({ Icon, accent, accentBg, title, desc, tags, visual }) => (
              <div key={title} className="relative rounded-2xl overflow-hidden border"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: `${accent}30` }}>
                {/* Accent top bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${accent}, transparent)` }} />
                <div className="p-7">
                  {/* Icon badge + mini visual */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                      style={{ background: accentBg, border: `1px solid ${accent}30` }}>
                      <Icon />
                    </div>
                    <div className="opacity-70">{visual}</div>
                  </div>
                  <h3 className="font-bold text-base mb-3"
                    style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                    {title}
                  </h3>
                  <p className="text-base leading-relaxed mb-5"
                    style={{ color: "rgba(255,255,255,0.6)" }}>
                    {desc}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-semibold"
                        style={{ background: accentBg, color: accent, fontFamily: "var(--font-space)" }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education timeline */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Academic Background
          </span>
          <h2 className="font-bold mb-12"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
            Education
          </h2>
          <div className="relative border-l-2 pl-8 flex flex-col gap-10" style={{ borderColor: "#0E7C7B" }}>
            {education.map((e) => (
              <div key={e.degree} className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2"
                  style={{ background: "#F8FAFC", borderColor: "#0E7C7B" }} />
                <span className="text-xs font-semibold block mb-1"
                  style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                  {e.period}
                </span>
                <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  {e.degree}
                </h3>
                <p className="text-sm font-medium mt-0.5" style={{ color: "#475569" }}>{e.institution}</p>
                {e.detail && (
                  <p className="text-sm mt-2 leading-relaxed max-w-2xl" style={{ color: "#94A3B8" }}>{e.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postdoc CTA */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Open To Opportunities
          </span>
          <h2 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
            Seeking a Postdoctoral Position
          </h2>
          <p className="text-lg leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#475569" }}>
            Seeking a postdoctoral position in computational chemistry and advanced materials, where I aim to integrate synthetic chemistry, density functional theory, cheminformatics, and artificial intelligence to develop predictive computational–experimental workflows for the accelerated discovery of next-generation functional materials.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact"
              className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Get in Touch →
            </Link>
            <Link href="/research"
              className="px-6 py-3 rounded-xl text-sm font-semibold border transition-all hover:scale-105"
              style={{ background: "#fff", color: "#0E7C7B", borderColor: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              View Research
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

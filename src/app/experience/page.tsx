import { education, experience, conferences, skills } from "@/lib/data";

/* ══════════════════════════════════════════════════════
   Research interest SVGs — 24 × 24 viewport
   ══════════════════════════════════════════════════════ */
function IconAIMaterials() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Neural nodes */}
      <circle cx="4"  cy="12" r="2"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="12" cy="6"  r="2"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="12" cy="18" r="2"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="20" cy="12" r="2.5" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <line x1="6"  y1="11" x2="10" y2="7.5"  stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="6"  y1="13" x2="10" y2="16.5" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="14" y1="7"  x2="17.5" y2="11" stroke="#4DD9D8" strokeWidth="1" opacity="0.6"/>
      <line x1="14" y1="17" x2="17.5" y2="13" stroke="#4DD9D8" strokeWidth="1" opacity="0.6"/>
      {/* Crystal hint */}
      <path d="M9 12 l3-3 l3 3 l-3 3 Z" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.3" fill="none"/>
    </svg>
  );
}
function IconComputationalModelling() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Electron density contours */}
      <ellipse cx="12" cy="12" rx="9"  ry="6"  stroke="#0E7C7B" strokeWidth="1.3" opacity="0.3"/>
      <ellipse cx="12" cy="12" rx="6"  ry="4"  stroke="#0E7C7B" strokeWidth="1.4" opacity="0.55"/>
      <ellipse cx="12" cy="12" rx="3"  ry="2"  stroke="#4DD9D8" strokeWidth="1.5" opacity="0.8"/>
      <circle  cx="12" cy="12" r="1.5" fill="#0E7C7B"/>
    </svg>
  );
}
function IconDFT() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Energy axis */}
      <line x1="4" y1="3" x2="4" y2="21" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      {/* Energy levels */}
      <line x1="6" y1="18" x2="20" y2="18" stroke="#0E7C7B" strokeWidth="1.6"/>
      <line x1="6" y1="12" x2="20" y2="12" stroke="#0E7C7B" strokeWidth="1.4" opacity="0.7"/>
      <line x1="6" y1="7"  x2="20" y2="7"  stroke="#4DD9D8" strokeWidth="1.4" opacity="0.8"/>
      {/* Electrons */}
      <circle cx="10" cy="18" r="1.6" fill="#0E7C7B" opacity="0.85"/>
      <circle cx="15" cy="18" r="1.6" fill="#0E7C7B" opacity="0.85"/>
      <circle cx="10" cy="12" r="1.6" fill="#0E7C7B" opacity="0.65"/>
      {/* Gap brace */}
      <line x1="21" y1="7"  x2="21" y2="12" stroke="#4DD9D8" strokeWidth="0.9" strokeDasharray="1.5,1" opacity="0.6"/>
    </svg>
  );
}
function IconML() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Axes */}
      <line x1="3"  y1="21" x2="3"  y2="3"  stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      <line x1="3"  y1="21" x2="21" y2="21" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      {/* Data scatter */}
      <circle cx="6"  cy="18" r="1.4" fill="#0E7C7B" opacity="0.5"/>
      <circle cx="9"  cy="14" r="1.4" fill="#0E7C7B" opacity="0.6"/>
      <circle cx="13" cy="10" r="1.4" fill="#0E7C7B" opacity="0.75"/>
      <circle cx="17" cy="7"  r="1.4" fill="#0E7C7B" opacity="0.9"/>
      {/* Decision curve */}
      <path d="M4 20 Q10 14 21 5" stroke="#4DD9D8" strokeWidth="1.5" fill="none" strokeDasharray="2.5,1.5"/>
    </svg>
  );
}
function IconNanomaterials() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Graphene hexagonal lattice — 3 hexagons */}
      <polygon points="12,3 15.5,5 15.5,9 12,11 8.5,9 8.5,5" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.07)"/>
      <polygon points="15.5,9 19,11 19,15 15.5,17 12,15 12,11" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.05)"/>
      <polygon points="8.5,9 12,11 12,15 8.5,17 5,15 5,11" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.05)"/>
      {/* Nanotube end hint */}
      <ellipse cx="12" cy="20" rx="4" ry="1.5" stroke="#4DD9D8" strokeWidth="1.2" opacity="0.6"/>
    </svg>
  );
}
function IconVirtualScreening() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Funnel */}
      <path d="M3 4 h18 l-7 8 v7 l-4 1 v-8 Z" stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.08)"/>
      {/* Candidates entering */}
      <circle cx="7"  cy="2.5" r="1.2" fill="#0E7C7B" opacity="0.4"/>
      <circle cx="12" cy="2.5" r="1.2" fill="#0E7C7B" opacity="0.5"/>
      <circle cx="17" cy="2.5" r="1.2" fill="#0E7C7B" opacity="0.4"/>
      {/* Hit exiting */}
      <circle cx="12" cy="21" r="1.8" stroke="#4DD9D8" strokeWidth="1.4" fill="rgba(77,217,216,0.15)"/>
    </svg>
  );
}
function IconGNN() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Molecular graph */}
      <circle cx="5"  cy="12" r="2.5" stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="12" cy="5"  r="2.5" stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="19" cy="12" r="2.5" stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="12" cy="19" r="2"   stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <line x1="7.5"  y1="10.5" x2="9.5"  y2="7"   stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="14.5" y1="7"    x2="16.5" y2="10.5" stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="7.5"  y1="13.5" x2="10"   y2="17"   stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="14"   y1="17"   x2="16.5" y2="13.5" stroke="#0E7C7B" strokeWidth="1.2"/>
      {/* Message passing arrow hint */}
      <circle cx="5"  cy="12" r="0.8" fill="#0E7C7B"/>
      <circle cx="12" cy="5"  r="0.8" fill="#0E7C7B"/>
      <circle cx="19" cy="12" r="0.8" fill="#0E7C7B"/>
    </svg>
  );
}
function IconHPC() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Server rack */}
      <rect x="3" y="4"  width="18" height="5" rx="1" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.07)"/>
      <rect x="3" y="11" width="18" height="5" rx="1" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.07)"/>
      {/* Status LEDs */}
      <circle cx="6"  cy="6.5"  r="1" fill="#0E7C7B" opacity="0.7"/>
      <circle cx="9"  cy="6.5"  r="1" fill="#4DD9D8" opacity="0.7"/>
      <circle cx="6"  cy="13.5" r="1" fill="#0E7C7B" opacity="0.7"/>
      <circle cx="9"  cy="13.5" r="1" fill="#0E7C7B" opacity="0.5"/>
      {/* Drive slots */}
      <line x1="13" y1="5.5"  x2="19" y2="5.5"  stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="13" y1="7.5"  x2="19" y2="7.5"  stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="13" y1="12.5" x2="19" y2="12.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="13" y1="14.5" x2="19" y2="14.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      {/* Output line */}
      <path d="M12 19 Q12 21 16 21" stroke="#4DD9D8" strokeWidth="1.3" fill="none" opacity="0.6" strokeLinecap="round"/>
    </svg>
  );
}
function IconDataOptimisation() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Convergence curve */}
      <line x1="3" y1="21" x2="3"  y2="3"  stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      <line x1="3" y1="21" x2="21" y2="21" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.4"/>
      {/* Loss curve converging */}
      <path d="M4 18 Q7 14 10 10 Q13 7 21 5" stroke="#0E7C7B" strokeWidth="1.8" fill="none" strokeLinecap="round"/>
      {/* Optimal point */}
      <circle cx="21" cy="5" r="2.2" stroke="#4DD9D8" strokeWidth="1.5" fill="rgba(77,217,216,0.15)"/>
      <circle cx="21" cy="5" r="0.9" fill="#4DD9D8"/>
    </svg>
  );
}
function IconDigitalDiscovery() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Crystal structure */}
      <circle cx="12" cy="12" r="3" stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.1)"/>
      <circle cx="5"  cy="7"  r="2" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.07)"/>
      <circle cx="19" cy="7"  r="2" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.07)"/>
      <circle cx="5"  cy="17" r="2" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.07)"/>
      <circle cx="19" cy="17" r="2" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.07)"/>
      {/* Bonds */}
      <line x1="7"  y1="8"  x2="10" y2="10" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="17" y1="8"  x2="14" y2="10" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="7"  y1="16" x2="10" y2="14" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="17" y1="16" x2="14" y2="14" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      {/* Digital bit dots */}
      <circle cx="12" cy="2"  r="0.9" fill="#4DD9D8" opacity="0.6"/>
      <circle cx="12" cy="22" r="0.9" fill="#4DD9D8" opacity="0.6"/>
      <circle cx="2"  cy="12" r="0.9" fill="#4DD9D8" opacity="0.6"/>
      <circle cx="22" cy="12" r="0.9" fill="#4DD9D8" opacity="0.6"/>
    </svg>
  );
}

const researchInterests = [
  { Icon: IconAIMaterials,          label: "AI-Driven Materials Discovery",                  accent: "#0E7C7B" },
  { Icon: IconComputationalModelling, label: "Computational Modelling and Artificial Intelligence", accent: "#0E7C7B" },
  { Icon: IconDFT,                  label: "Density Functional Theory (DFT)",                accent: "#6366F1" },
  { Icon: IconML,                   label: "Machine Learning for Materials Science",          accent: "#6366F1" },
  { Icon: IconNanomaterials,        label: "Carbon Nanomaterials and Functional Nanocomposites", accent: "#0E7C7B" },
  { Icon: IconVirtualScreening,     label: "Virtual Screening for Advanced Materials",        accent: "#0E7C7B" },
  { Icon: IconGNN,                  label: "Graph Neural Networks for Materials Design",      accent: "#6366F1" },
  { Icon: IconHPC,                  label: "High-Performance Scientific Computing",           accent: "#0E7C7B" },
  { Icon: IconDataOptimisation,     label: "Data-Driven Materials Optimisation",              accent: "#6366F1" },
  { Icon: IconDigitalDiscovery,     label: "Digital Materials Discovery",                     accent: "#0E7C7B" },
];

export default function ExperiencePage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Career
          </span>
          <h1 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Experience & Education
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Five-plus years of doctoral research in inorganic synthesis and computational chemistry, underpinned by formal training in CADD at India&apos;s premier computational chemistry research institute.
          </p>
        </div>
      </section>

      {/* Experience */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Positions
          </span>
          <h2 className="font-bold mb-10"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
            Work Experience
          </h2>
          <div className="flex flex-col gap-6">
            {experience.map((e) => (
              <div key={e.role} className="rounded-2xl border p-7"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                      {e.role}
                    </h3>
                    <p className="text-sm font-medium mt-0.5" style={{ color: "#0E7C7B" }}>{e.org}</p>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-lg flex-shrink-0"
                    style={{ background: "rgba(14,124,123,0.08)", color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                    {e.period}
                  </span>
                </div>
                <ul className="space-y-2">
                  {e.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-2 text-base" style={{ color: "#475569" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0E7C7B" }} />
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Education */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Academics
          </span>
          <h2 className="font-bold mb-10"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
            Education
          </h2>
          <div className="relative border-l-2 pl-8 flex flex-col gap-8" style={{ borderColor: "#0E7C7B" }}>
            {education.map((e) => (
              <div key={e.degree} className="relative">
                <div className="absolute -left-10 top-1 w-4 h-4 rounded-full border-2"
                  style={{ background: "#fff", borderColor: "#0E7C7B" }} />
                <span className="text-xs font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                  {e.period}
                </span>
                <h3 className="font-bold text-base mt-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  {e.degree}
                </h3>
                <p className="text-sm font-medium" style={{ color: "#475569" }}>{e.institution}</p>
                {e.detail && <p className="text-sm mt-1 leading-relaxed" style={{ color: "#94A3B8" }}>{e.detail}</p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Expertise
          </span>
          <h2 className="font-bold mb-10"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
            Skills & Tools
          </h2>
          <div className="flex flex-wrap gap-3">
            {skills.map((s) => (
              <span key={s} className="px-4 py-2 rounded-xl text-sm font-medium border hover:shadow-sm transition-all hover:-translate-y-0.5"
                style={{ background: "#fff", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Conferences */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Dissemination
          </span>
          <h2 className="font-bold mb-10"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
            Conferences & Presentations
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {conferences.map((c) => (
              <div key={c.title} className="rounded-2xl border p-6"
                style={{ background: "rgba(255,255,255,0.04)", borderColor: "rgba(14,124,123,0.2)" }}>
                <div className="flex items-center gap-2 mb-3">
                  <span className="px-2.5 py-1 rounded-md text-xs font-semibold"
                    style={{ background: "rgba(14,124,123,0.15)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                    {c.type}
                  </span>
                  <span className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ibm)" }}>
                    {c.year}
                  </span>
                </div>
                <h3 className="font-semibold text-base leading-snug mb-2" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                  {c.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>{c.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postdoctoral Interests */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Looking Ahead
          </span>
          <h2 className="font-bold mb-8"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
            Postdoctoral Interests
          </h2>

          {/* Seeking statement — full-width callout */}
          <div className="rounded-2xl p-8 mb-12 relative overflow-hidden"
            style={{ background: "#071A2D", borderLeft: "4px solid #0E7C7B" }}>
            {/* Background graphic */}
            <svg className="absolute right-6 top-1/2 -translate-y-1/2 opacity-10" viewBox="0 0 160 100"
              width="160" height="100" fill="none" aria-hidden="true">
              {/* DFT orbital contours */}
              <ellipse cx="80" cy="50" rx="70" ry="42" stroke="#4DD9D8" strokeWidth="1.5"/>
              <ellipse cx="80" cy="50" rx="50" ry="30" stroke="#4DD9D8" strokeWidth="1.5"/>
              <ellipse cx="80" cy="50" rx="30" ry="18" stroke="#4DD9D8" strokeWidth="1.5"/>
              <ellipse cx="80" cy="50" rx="12" ry="7"  stroke="#4DD9D8" strokeWidth="1.5"/>
              <circle  cx="80" cy="50" r="3" fill="#4DD9D8"/>
              {/* Crystal lattice overlay */}
              {[50,70,90,110].map((x) =>
                [30,50,70].map((y) => (
                  <circle key={`${x}-${y}`} cx={x} cy={y} r="2.5"
                    fill="#4DD9D8" opacity="0.4"/>
                ))
              )}
              {[50,70,90,110].map((x) =>
                [30,50,70].map((y) => (
                  <line key={`h-${x}-${y}`} x1={x} y1={y} x2={x+20} y2={y}
                    stroke="#4DD9D8" strokeWidth="0.8" opacity="0.3"/>
                ))
              )}
            </svg>
            <p className="text-lg leading-relaxed relative z-10 max-w-3xl"
              style={{ color: "rgba(255,255,255,0.88)", fontFamily: "var(--font-space)" }}>
              Seeking a postdoctoral position in{" "}
              <strong style={{ color: "#4DD9D8" }}>AI-driven Computational Materials Science</strong>,
              combining Density Functional Theory, machine learning, virtual screening, and experimental
              validation to accelerate the discovery, design, and optimisation of{" "}
              <strong style={{ color: "#4DD9D8" }}>advanced functional materials</strong>.
            </p>
            <a href="/contact"
              className="inline-flex items-center gap-2 mt-6 px-6 py-2.5 rounded-xl text-sm font-semibold relative z-10"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Get in Touch →
            </a>
          </div>

          {/* Research Interests grid */}
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest mb-6 block"
              style={{ color: "#94A3B8", fontFamily: "var(--font-space)", letterSpacing: "0.1em" }}>
              Research Interests
            </span>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {researchInterests.map(({ Icon, label, accent }) => (
                <div key={label}
                  className="rounded-2xl border p-5 flex flex-col gap-3 hover:shadow-md transition-all hover:-translate-y-0.5"
                  style={{ background: "#fff", borderColor: "#E2E8F0", borderTop: `3px solid ${accent}` }}>
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center"
                    style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}>
                    <Icon />
                  </div>
                  <p className="text-sm font-semibold leading-snug"
                    style={{ color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}

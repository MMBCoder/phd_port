import Image from "next/image";
import Link from "next/link";
import { profile, education, stats } from "@/lib/data";

export default function AboutPage() {
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
                {[
                  { icon: "🎓", label: "Ph.D. in Chemistry — University of Lucknow" },
                  { icon: "🧪", label: "Synthetic & Computational Chemistry" },
                  { icon: "🧠", label: "DFT • Computational Materials Design • AI for Molecular Discovery" },
                  { icon: "💻", label: "Python • RDKit • Molecular Modelling" },
                  { icon: "📧", label: profile.email },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-start gap-3 mb-3 last:mb-0">
                    <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
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
                {[
                  { label: "ORCID",          href: profile.links.orcid,        icon: "🆔" },
                  { label: "Scopus",         href: profile.links.scopus,       icon: "S"  },
                  { label: "Google Scholar", href: profile.links.scholar,      icon: "🎓" },
                  { label: "ResearchGate",   href: profile.links.researchgate, icon: "📄" },
                  { label: "LinkedIn",       href: profile.links.linkedin,     icon: "🔗" },
                ].map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ background: "#F8FAFC", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    {label === "Scopus" ? (
                      <span className="w-5 h-5 rounded flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: "#E9711C", color: "#fff" }}>S</span>
                    ) : (
                      <span>{icon}</span>
                    )}
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
          {/* Section header */}
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Research Philosophy
            </span>
            <h2 className="font-bold mb-3"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              How I Think About Discovery
            </h2>
            <p className="text-base max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.5)" }}>
              Four principles that guide the integration of computation, AI, and experiment in my research.
            </p>
          </div>

          {/* 4-card grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: "🔄",
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
                icon: "⚛️",
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
                icon: "📊",
                accent: "#F59E0B",
                accentBg: "rgba(245,158,11,0.1)",
                title: "Structure–Property Intelligence",
                desc: "Connecting electronic structure, molecular descriptors, and experimental data to build predictive models for materials performance.",
                tags: ["SAR Analysis", "HOMO–LUMO", "Descriptors"],
                visual: (
                  <svg viewBox="0 0 80 40" width="80" height="40" aria-hidden="true">
                    {[10,20,32,46,58,70].map((x, i) => (
                      <rect key={x} x={x} y={40 - [12,22,16,30,20,26][i]} width="8" height={[12,22,16,30,20,26][i]}
                        fill="#F59E0B" opacity={0.3 + i * 0.1} rx="2"/>
                    ))}
                    <polyline points="14,28 24,18 36,24 50,10 62,20 74,14"
                      fill="none" stroke="#F59E0B" strokeWidth="1.5" opacity="0.9"/>
                  </svg>
                ),
              },
              {
                icon: "🌍",
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
            ].map((item) => (
              <div key={item.title} className="relative rounded-2xl overflow-hidden border"
                style={{ background: "rgba(255,255,255,0.02)", borderColor: `${item.accent}30` }}>
                {/* Accent top bar */}
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${item.accent}, transparent)` }} />
                <div className="p-7">
                  {/* Icon + visual row */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: item.accentBg }}>
                      {item.icon}
                    </div>
                    <div className="opacity-70">{item.visual}</div>
                  </div>
                  {/* Title */}
                  <h3 className="font-bold text-base mb-3"
                    style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                    {item.title}
                  </h3>
                  {/* Description */}
                  <p className="text-base leading-relaxed mb-5"
                    style={{ color: "rgba(255,255,255,0.6)" }}>
                    {item.desc}
                  </p>
                  {/* Keyword tags */}
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span key={tag} className="px-2.5 py-1 rounded-md text-xs font-semibold"
                        style={{ background: item.accentBg, color: item.accent, fontFamily: "var(--font-space)" }}>
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
            Seeking a postdoctoral position in computational and medicinal inorganic chemistry, with the goal of integrating predictive modelling, computational chemistry, and experimental validation to accelerate the discovery of metal-based therapeutics.
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

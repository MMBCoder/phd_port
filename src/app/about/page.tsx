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
            Synthetic &amp; Computational Chemist · Ruthenium Metallodrug Design
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
                  { icon: "📍", label: profile.location },
                  { icon: "🎓", label: "Ph.D., Chemistry — University of Lucknow" },
                  { icon: "🔬", label: "Ruthenium Metallodrug Research" },
                  { icon: "💻", label: "DFT · Molecular Docking · ML/CADD" },
                  { icon: "📧", label: profile.email },
                ].map(({ icon, label }) => (
                  <div key={label} className="flex items-start gap-3 mb-3 last:mb-0">
                    <span className="text-base flex-shrink-0 mt-0.5">{icon}</span>
                    <span className="text-xs leading-relaxed" style={{ color: "#475569", fontFamily: "var(--font-space)" }}>
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
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                I am an inorganic and medicinal chemist at the University of Lucknow, specialising in the design, synthesis, and biological evaluation of <strong>ruthenium-based anticancer and antimycobacterial agents</strong>. My research sits at the intersection of wet-lab organometallic chemistry and computational drug discovery.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                Every complex I synthesise undergoes a parallel computational study: DFT geometry optimisation and HOMO–LUMO analysis reveal the electronic landscape, MEP maps highlight reactive sites, and molecular docking estimates binding affinity inside target proteins. Lab results then validate — or challenge — the predictions.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                Beyond the bench, I am building expertise in <strong>Python-based computational chemistry</strong> — RDKit, DeepChem, ASE, PySCF, and PyTorch — with the goal of training machine-learned force fields and graph neural networks tailored to transition-metal complexes.
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
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: "ORCID",          href: profile.links.orcid,        icon: "🆔" },
                  { label: "Google Scholar", href: profile.links.scholar,      icon: "🎓" },
                  { label: "ResearchGate",   href: profile.links.researchgate, icon: "📄" },
                  { label: "LinkedIn",       href: profile.links.linkedin,     icon: "🔗" },
                ].map(({ label, href, icon }) => (
                  <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                    className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
                    style={{ background: "#F8FAFC", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    <span>{icon}</span>
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research philosophy */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="lg:col-span-1">
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Philosophy
              </span>
              <h2 className="font-bold"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
                How I Approach Research
              </h2>
            </div>
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: "🔄", title: "Computation → Synthesis Loop",
                  desc: "Design is computational first; the bench validates or redirects the model. Iteration is the engine of discovery." },
                { icon: "🎯", title: "Target-Aware Design",
                  desc: "Every complex is designed with a biological target in mind, using docking scores and binding-site complementarity to guide ligand choice." },
                { icon: "📊", title: "Data-Driven SAR",
                  desc: "Systematic substituent variation across a series, correlated with computed and measured properties, to extract transferable design rules." },
                { icon: "🤝", title: "Collaborative Evaluation",
                  desc: "Biological assays — anticancer, antimycobacterial, antioxidant — are run with partner labs to ensure rigorous, independent validation." },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl p-6 border"
                  style={{ background: "rgba(255,255,255,0.03)", borderColor: "rgba(14,124,123,0.18)" }}>
                  <span className="text-2xl mb-3 block">{item.icon}</span>
                  <h3 className="font-semibold text-sm mb-2" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
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
                  <p className="text-xs mt-2 leading-relaxed max-w-2xl" style={{ color: "#94A3B8" }}>{e.detail}</p>
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
          <p className="text-base leading-relaxed mb-8 max-w-2xl mx-auto" style={{ color: "#475569" }}>
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

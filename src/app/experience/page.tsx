import { education, experience, conferences, skills } from "@/lib/data";

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
          <p className="text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            Five-plus years of doctoral research in inorganic synthesis and computational chemistry, underpinned by formal training in CADD at India&apos;s premier drug-discovery institute.
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
                    <li key={b} className="flex items-start gap-2 text-sm" style={{ color: "#475569" }}>
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
                {e.detail && <p className="text-xs mt-1 leading-relaxed" style={{ color: "#94A3B8" }}>{e.detail}</p>}
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
                <h3 className="font-semibold text-sm leading-snug mb-2" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                  {c.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>{c.org}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Postdoctoral Interests */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-2xl">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Looking Ahead
            </span>
            <h2 className="font-bold mb-5"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
              Postdoctoral Interests
            </h2>
            <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
              Actively seeking a postdoctoral position bridging computational drug discovery with experimental validation — translating computational insights into viable metallodrug candidates through rational, structure-based design.
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "In vivo behaviour and pharmacokinetics of metal-based therapeutic agents",
                "Lead-compound optimisation and structure–activity refinement",
                "Computational drug-discovery workflows for metal complexes",
                "Metallodrug–biomolecule interaction studies",
                "Machine learning applications in medicinal inorganic chemistry",
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm" style={{ color: "#475569" }}>
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#0E7C7B" }} />
                  {item}
                </li>
              ))}
            </ul>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Get in Touch →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

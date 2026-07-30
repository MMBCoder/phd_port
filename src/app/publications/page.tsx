"use client";
import { useState } from "react";
import { publications } from "@/lib/data";

/* ══════════════════════════════════════════════════════
   Section SVG graphics
   ══════════════════════════════════════════════════════ */

function BookGraphic() {
  return (
    <svg viewBox="0 0 120 80" width="120" height="80" fill="none" aria-hidden="true">
      {/* Left page */}
      <path d="M60 12 L20 8 Q14 8 14 14 L14 66 Q14 72 20 72 L60 68 Z"
        fill="rgba(14,124,123,0.07)" stroke="#0E7C7B" strokeWidth="1.2"/>
      {/* Right page */}
      <path d="M60 12 L100 8 Q106 8 106 14 L106 66 Q106 72 100 72 L60 68 Z"
        fill="rgba(14,124,123,0.05)" stroke="#0E7C7B" strokeWidth="1.2"/>
      {/* Spine */}
      <line x1="60" y1="12" x2="60" y2="68" stroke="#0E7C7B" strokeWidth="1.8"/>
      {/* Text lines — left page */}
      <line x1="24" y1="24" x2="54" y2="23" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="24" y1="30" x2="54" y2="29" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="24" y1="36" x2="54" y2="35" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="24" y1="42" x2="48" y2="41" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      {/* Text lines — right page */}
      <line x1="66" y1="24" x2="96" y2="23" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="66" y1="30" x2="96" y2="29" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="66" y1="36" x2="96" y2="35" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      <line x1="66" y1="42" x2="88" y2="41" stroke="#0E7C7B" strokeWidth="1" opacity="0.35"/>
      {/* Molecular structure on right page */}
      <circle cx="76" cy="58" r="4" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.08)"/>
      <circle cx="88" cy="54" r="3" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.06)"/>
      <circle cx="88" cy="62" r="3" stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.06)"/>
      <line x1="80" y1="56" x2="85" y2="54" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
      <line x1="80" y1="60" x2="85" y2="62" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
    </svg>
  );
}

function PodiumGraphic() {
  return (
    <svg viewBox="0 0 120 80" width="120" height="80" fill="none" aria-hidden="true">
      {/* Podium */}
      <path d="M45 48 L75 48 L80 68 L40 68 Z"
        fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.2"/>
      <rect x="38" y="42" width="44" height="8" rx="2"
        fill="rgba(14,124,123,0.1)" stroke="#0E7C7B" strokeWidth="1.2"/>
      {/* Microphone stem */}
      <line x1="60" y1="42" x2="60" y2="30" stroke="#0E7C7B" strokeWidth="1.4"/>
      {/* Microphone head */}
      <rect x="55" y="22" width="10" height="10" rx="5"
        fill="rgba(14,124,123,0.15)" stroke="#0E7C7B" strokeWidth="1.4"/>
      {/* Audience dots */}
      {([18,30,42,54,66,78,90,102] as number[]).map((x, i) => (
        <circle key={x} cx={x} cy={72 + (i % 2 === 0 ? 0 : -3)} r="2.5"
          fill="#0E7C7B" opacity={0.2 + (i * 0.06)}/>
      ))}
      {/* Slide screen */}
      <rect x="14" y="8" width="36" height="24" rx="2"
        fill="rgba(14,124,123,0.06)" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="18" y1="16" x2="46" y2="16" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.4"/>
      <line x1="18" y1="20" x2="42" y2="20" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.4"/>
      <line x1="18" y1="24" x2="44" y2="24" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.4"/>
    </svg>
  );
}

function PosterGraphic() {
  return (
    <svg viewBox="0 0 80 100" width="56" height="70" fill="none" aria-hidden="true">
      {/* Poster board */}
      <rect x="8" y="4" width="64" height="88" rx="3"
        fill="rgba(14,124,123,0.05)" stroke="#0E7C7B" strokeWidth="1.4"/>
      {/* Title bar */}
      <rect x="12" y="10" width="56" height="10" rx="2"
        fill="rgba(14,124,123,0.12)" stroke="none"/>
      <line x1="16" y1="15" x2="64" y2="15" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.6"/>
      {/* Content lines */}
      <line x1="14" y1="28" x2="66" y2="28" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      <line x1="14" y1="33" x2="60" y2="33" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      <line x1="14" y1="38" x2="62" y2="38" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      {/* Molecular diagram */}
      <circle cx="26" cy="58" r="7" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.07)"/>
      <circle cx="40" cy="52" r="5" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.06)"/>
      <circle cx="40" cy="64" r="5" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.06)"/>
      <circle cx="54" cy="58" r="5" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.06)"/>
      <line x1="33" y1="54" x2="35" y2="53" stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="33" y1="62" x2="35" y2="63" stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="45" y1="52" x2="49" y2="55" stroke="#0E7C7B" strokeWidth="1.2"/>
      <line x1="45" y1="64" x2="49" y2="61" stroke="#0E7C7B" strokeWidth="1.2"/>
      {/* Footer lines */}
      <line x1="14" y1="78" x2="66" y2="78" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.25"/>
      <line x1="14" y1="83" x2="50" y2="83" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.25"/>
    </svg>
  );
}

function LabGraphic() {
  return (
    <svg viewBox="0 0 120 80" width="120" height="80" fill="none" aria-hidden="true">
      {/* Beaker */}
      <path d="M30 16 L30 44 L16 64 Q14 70 20 70 L50 70 Q56 70 54 64 L40 44 L40 16 Z"
        fill="rgba(14,124,123,0.06)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <line x1="30" y1="16" x2="40" y2="16" stroke="#0E7C7B" strokeWidth="2" strokeLinecap="round"/>
      {/* Liquid in beaker */}
      <path d="M21 58 Q35 54 49 58 L54 64 Q52 68 50 70 L20 70 Q18 68 16 64 Z"
        fill="rgba(14,124,123,0.15)"/>
      {/* Bubbles */}
      <circle cx="30" cy="60" r="2"   stroke="#0E7C7B" strokeWidth="1" fill="rgba(14,124,123,0.1)"/>
      <circle cx="40" cy="56" r="1.5" stroke="#0E7C7B" strokeWidth="1" fill="rgba(14,124,123,0.1)"/>
      {/* Computer screen */}
      <rect x="62" y="10" width="50" height="36" rx="3"
        fill="rgba(14,124,123,0.06)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <rect x="66" y="14" width="42" height="28" rx="1"
        fill="rgba(14,124,123,0.04)" stroke="#0E7C7B" strokeWidth="0.8" opacity="0.6"/>
      {/* Code-like lines on screen */}
      <line x1="70" y1="20" x2="100" y2="20" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="70" y1="25" x2="94"  y2="25" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="70" y1="30" x2="98"  y2="30" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="70" y1="35" x2="88"  y2="35" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      {/* Screen stand */}
      <line x1="87" y1="46" x2="87" y2="56" stroke="#0E7C7B" strokeWidth="1.3"/>
      <line x1="78" y1="56" x2="96" y2="56" stroke="#0E7C7B" strokeWidth="1.8" strokeLinecap="round"/>
      {/* Connection arrow */}
      <line x1="50" y1="40" x2="62" y2="36" stroke="#0E7C7B" strokeWidth="1" strokeDasharray="3,2" opacity="0.5"/>
    </svg>
  );
}

function NetworkGraphic() {
  return (
    <svg viewBox="0 0 120 80" width="120" height="80" fill="none" aria-hidden="true">
      {/* Central node */}
      <circle cx="60" cy="40" r="10" fill="rgba(14,124,123,0.15)" stroke="#0E7C7B" strokeWidth="1.6"/>
      <circle cx="60" cy="40" r="4"  fill="#0E7C7B"/>
      {/* Outer nodes */}
      <circle cx="20"  cy="18" r="6" fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <circle cx="100" cy="18" r="6" fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <circle cx="14"  cy="58" r="6" fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <circle cx="106" cy="58" r="6" fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.3"/>
      <circle cx="60"  cy="70" r="6" fill="rgba(14,124,123,0.08)" stroke="#0E7C7B" strokeWidth="1.3"/>
      {/* Connecting lines */}
      <line x1="51"  y1="34" x2="26"  y2="22" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="69"  y1="34" x2="94"  y2="22" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="50"  y1="43" x2="20"  y2="54" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="70"  y1="43" x2="100" y2="54" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="60"  y1="50" x2="60"  y2="64" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      {/* Person silhouettes in outer nodes */}
      {([[20,18],[100,18],[14,58],[106,58],[60,70]] as [number,number][]).map(([cx,cy]) => (
        <g key={`${cx}-${cy}`}>
          <circle cx={cx} cy={cy-2} r="1.5" fill="#0E7C7B" opacity="0.5"/>
          <path d={`M${cx-2.5} ${cy+3} Q${cx} ${cy+1} ${cx+2.5} ${cy+3}`}
            stroke="#0E7C7B" strokeWidth="1" fill="none" opacity="0.5"/>
        </g>
      ))}
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   Existing publication filter & card
   ══════════════════════════════════════════════════════ */

const FILTERS = ["All", "2026", "2025", "2023", "2022", "Preprint"];

function PubCard({ pub }: { pub: (typeof publications)[0] }) {
  const isPreprint = pub.tag === "Preprint";
  return (
    <article className="rounded-2xl border p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 flex flex-col gap-4"
      style={{ background: "#fff", borderColor: "#E2E8F0" }}>
      <div className="flex items-start justify-between gap-3">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="px-2.5 py-1 rounded-md text-xs font-semibold"
            style={{
              fontFamily: "var(--font-ibm)",
              background: isPreprint ? "rgba(245,158,11,0.1)" : "rgba(14,124,123,0.1)",
              color:      isPreprint ? "#D97706"              : "#0E7C7B",
            }}>
            {pub.month} {pub.year}
          </span>
          <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
            style={{
              background: isPreprint ? "rgba(245,158,11,0.08)" : "rgba(34,197,94,0.08)",
              color:      isPreprint ? "#D97706"               : "#16A34A",
              fontFamily: "var(--font-space)",
            }}>
            {pub.tag}
          </span>
        </div>
      </div>
      <div>
        <h3 className="font-bold leading-snug mb-2 text-lg"
          style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
          {pub.title}
        </h3>
        <p className="text-base font-medium mb-3" style={{ color: "#0E7C7B" }}>
          {pub.journal}
        </p>
        <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
          {pub.abstract}
        </p>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {pub.topics.map((t) => (
          <span key={t} className="px-2.5 py-1 rounded text-sm"
            style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
            {t}
          </span>
        ))}
      </div>
      <div className="flex items-center gap-3 pt-1 mt-auto flex-wrap">
        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-sm font-semibold transition-all hover:scale-105"
          style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
          Read Paper ↗
        </a>
        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-sm font-medium transition-colors hover:opacity-80"
          style={{ color: "#64748B", fontFamily: "var(--font-ibm)" }}>
          DOI: {pub.doiShort}
        </a>
      </div>
    </article>
  );
}

/* ══════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════ */
export default function PublicationsPage() {
  const [active, setActive] = useState("All");
  const filtered = publications.filter((p) => {
    if (active === "All")      return true;
    if (active === "Preprint") return p.tag === "Preprint";
    return String(p.year) === active;
  });

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Peer-Reviewed Work
          </span>
          <h1 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Publications
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            5 peer-reviewed articles across Q1/Q2 journals in inorganic, medicinal, and computational
            chemistry — plus 1 preprint and 1 book chapter.
          </p>
          <div className="flex items-center gap-6 mt-8 flex-wrap">
            {([["26","Citations"],["4","H-Index"],["5","Journals"],["6","Total Works"]] as [string,string][]).map(([n,l]) => (
              <div key={l}>
                <p className="text-2xl font-bold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>{n}</p>
                <p className="text-sm" style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Journal Articles ── */}
      <section className="py-14" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Journal Articles
            </span>
            <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
              Peer-Reviewed Publications
            </h2>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap gap-2 mb-10">
            {FILTERS.map((f) => (
              <button key={f} onClick={() => setActive(f)}
                className="px-4 py-2 rounded-xl text-sm font-semibold transition-all"
                style={{
                  fontFamily: "var(--font-space)",
                  background: active === f ? "#0E7C7B" : "#fff",
                  color:      active === f ? "#fff"    : "#64748B",
                  border:     `1px solid ${active === f ? "#0E7C7B" : "#E2E8F0"}`,
                }}>
                {f}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {filtered.map((p) => <PubCard key={p.id} pub={p} />)}
          </div>

          {filtered.length === 0 && (
            <p className="text-center py-20 text-sm" style={{ color: "#94A3B8" }}>
              No publications found for this filter.
            </p>
          )}
        </div>
      </section>

      {/* ── Book Chapter ── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Authored Chapter
            </span>
            <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
              Book Chapter
            </h2>
          </div>

          <div className="rounded-2xl border overflow-hidden"
            style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
            <div className="flex flex-col lg:flex-row">

              {/* Graphic panel */}
              <div className="lg:w-56 flex items-center justify-center p-10 flex-shrink-0"
                style={{ background: "rgba(14,124,123,0.04)", borderRight: "1px solid #E2E8F0" }}>
                <BookGraphic />
              </div>

              {/* Content */}
              <div className="p-8 flex flex-col gap-5 flex-1">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold"
                    style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1", fontFamily: "var(--font-space)" }}>
                    2022
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(99,102,241,0.07)", color: "#6366F1", fontFamily: "var(--font-space)" }}>
                    Book Chapter
                  </span>
                </div>

                <div>
                  <h3 className="font-bold text-xl leading-snug mb-3"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Synthesis, Characterization, Molecular Docking and Biological Evaluation of Ruthenium Complexes
                  </h3>
                  <p className="text-base font-semibold mb-1" style={{ color: "#0E7C7B" }}>
                    Arshi, F., &amp; Singh, A. K.
                  </p>
                  <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                    In <em>Advancement in Chemical Sciences</em> (Chapter 7, pp. 97–118).
                    Aryabhat Publication House.
                  </p>
                </div>

                <div className="flex flex-wrap gap-3 pt-1">
                  {[
                    { label: "ISBN", value: "978-93-95463-01-0" },
                    { label: "Chapter",  value: "7" },
                    { label: "Pages",    value: "97–118" },
                  ].map(({ label, value }) => (
                    <div key={label} className="px-4 py-2 rounded-xl"
                      style={{ background: "#fff", border: "1px solid #E2E8F0" }}>
                      <span className="text-xs block mb-0.5"
                        style={{ color: "#94A3B8", fontFamily: "var(--font-space)", letterSpacing: "0.05em" }}>
                        {label}
                      </span>
                      <span className="text-sm font-semibold"
                        style={{ color: "#0F172A", fontFamily: "var(--font-ibm)" }}>
                        {value}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Ruthenium Complexes","Molecular Docking","Biological Evaluation","Organometallic Synthesis"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-sm"
                      style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conference Presentations ── */}
      <section className="py-16" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Scientific Dissemination
              </span>
              <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                Conference Presentations
              </h2>
            </div>
            <div className="flex-shrink-0 opacity-80">
              <PodiumGraphic />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

            {/* Poster — ISCB 2025 */}
            <div className="rounded-2xl border flex flex-col overflow-hidden"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg,#0E7C7B,#4DD9D8)" }}/>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold"
                    style={{ background: "rgba(14,124,123,0.1)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                    2025
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(14,124,123,0.07)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                    Poster
                  </span>
                </div>
                <div className="rounded-xl p-4 flex items-center justify-center"
                  style={{ background: "rgba(14,124,123,0.04)", border: "1px solid rgba(14,124,123,0.1)" }}>
                  <PosterGraphic />
                </div>
                <div>
                  <h3 className="font-bold text-base leading-snug mb-2"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Comprehensive Exploration of Ampicillin-Schiff Base Metal Complexes: Synthesis, DFT Insights, Molecular Docking, and Biotherapeutic Applications
                  </h3>
                  <p className="text-sm font-semibold mt-2" style={{ color: "#0E7C7B" }}>
                    30th ISCB International Conference
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>
                    International Society for Chemical and Biological Sciences
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {["Schiff Base","DFT","Molecular Docking","Biotherapeutic"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs"
                      style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Oral — ICMARI 2022 */}
            <div className="rounded-2xl border flex flex-col overflow-hidden"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              {/* Accent top */}
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg,#6366F1,#818CF8)" }}/>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold"
                    style={{ background: "rgba(99,102,241,0.1)", color: "#6366F1", fontFamily: "var(--font-space)" }}>
                    2022
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(99,102,241,0.07)", color: "#6366F1", fontFamily: "var(--font-space)" }}>
                    Oral
                  </span>
                </div>
                {/* Mini oral-presentation graphic */}
                <div className="rounded-xl p-4 flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.04)", border: "1px solid rgba(99,102,241,0.1)" }}>
                  <svg viewBox="0 0 80 44" width="80" height="44" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="50" height="32" rx="3"
                      fill="rgba(99,102,241,0.07)" stroke="#6366F1" strokeWidth="1.2"/>
                    <line x1="10" y1="12" x2="48" y2="12" stroke="#6366F1" strokeWidth="1" opacity="0.4"/>
                    <line x1="10" y1="18" x2="44" y2="18" stroke="#6366F1" strokeWidth="1" opacity="0.4"/>
                    <line x1="10" y1="24" x2="46" y2="24" stroke="#6366F1" strokeWidth="1" opacity="0.4"/>
                    <line x1="29" y1="36" x2="29" y2="42" stroke="#6366F1" strokeWidth="1.2"/>
                    <line x1="20" y1="42" x2="38" y2="42" stroke="#6366F1" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="68" cy="10" r="6" fill="rgba(99,102,241,0.12)" stroke="#6366F1" strokeWidth="1.2"/>
                    <circle cx="68" cy="8"  r="2" fill="#6366F1" opacity="0.5"/>
                    <path d="M64 14 Q68 12 72 14" stroke="#6366F1" strokeWidth="1" fill="none" opacity="0.6"/>
                    <line x1="56" y1="28" x2="62" y2="14" stroke="#6366F1" strokeWidth="1" opacity="0.4" strokeDasharray="2,1.5"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-snug mb-2"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Synthesis, Characterization, Molecular Docking and Biological Evaluation of Ruthenium Complexes
                  </h3>
                  <p className="text-sm font-semibold mt-2" style={{ color: "#6366F1" }}>
                    ICMARI 2022
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>
                    International Conference on Multidiscipline Academic Research and Innovation
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {["Ruthenium Complexes","Molecular Docking","Synthesis"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs"
                      style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Oral — National Seminar 2023 */}
            <div className="rounded-2xl border flex flex-col overflow-hidden"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="h-1.5 w-full" style={{ background: "linear-gradient(90deg,#F59E0B,#FCD34D)" }}/>
              <div className="p-6 flex flex-col gap-4 flex-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="px-3 py-1 rounded-md text-xs font-semibold"
                    style={{ background: "rgba(245,158,11,0.1)", color: "#D97706", fontFamily: "var(--font-space)" }}>
                    2023
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(245,158,11,0.07)", color: "#D97706", fontFamily: "var(--font-space)" }}>
                    Oral
                  </span>
                </div>
                {/* Mini oral graphic */}
                <div className="rounded-xl p-4 flex items-center justify-center"
                  style={{ background: "rgba(245,158,11,0.04)", border: "1px solid rgba(245,158,11,0.12)" }}>
                  <svg viewBox="0 0 80 44" width="80" height="44" fill="none" aria-hidden="true">
                    <rect x="4" y="4" width="50" height="32" rx="3"
                      fill="rgba(245,158,11,0.07)" stroke="#F59E0B" strokeWidth="1.2"/>
                    <line x1="10" y1="12" x2="48" y2="12" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
                    <line x1="10" y1="18" x2="44" y2="18" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
                    <line x1="10" y1="24" x2="46" y2="24" stroke="#F59E0B" strokeWidth="1" opacity="0.4"/>
                    {/* Molecular structure on slide */}
                    <circle cx="24" cy="28" r="3" stroke="#F59E0B" strokeWidth="1" fill="rgba(245,158,11,0.1)"/>
                    <circle cx="34" cy="24" r="2" stroke="#F59E0B" strokeWidth="1" fill="rgba(245,158,11,0.08)"/>
                    <line x1="27" y1="27" x2="32" y2="25" stroke="#F59E0B" strokeWidth="0.8"/>
                    <line x1="29" y1="36" x2="29" y2="42" stroke="#F59E0B" strokeWidth="1.2"/>
                    <line x1="20" y1="42" x2="38" y2="42" stroke="#F59E0B" strokeWidth="1.8" strokeLinecap="round"/>
                    <circle cx="68" cy="10" r="6" fill="rgba(245,158,11,0.12)" stroke="#F59E0B" strokeWidth="1.2"/>
                    <circle cx="68" cy="8"  r="2" fill="#F59E0B" opacity="0.5"/>
                    <path d="M64 14 Q68 12 72 14" stroke="#F59E0B" strokeWidth="1" fill="none" opacity="0.6"/>
                  </svg>
                </div>
                <div>
                  <h3 className="font-bold text-base leading-snug mb-2"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Synthesis, Spectral Studies and Molecular Docking of Thiosemicarbazide Ligands and Ruthenium Complexes
                  </h3>
                  <p className="text-sm font-semibold mt-2" style={{ color: "#D97706" }}>
                    National Seminar on Sustainable Development and Environmental Protection, 2023
                  </p>
                  <p className="text-sm mt-0.5" style={{ color: "#64748B" }}>
                    Netaji Subhash Chandra Bose Government Girls P.G. College, Lucknow
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-1">
                  {["Thiosemicarbazide","Spectral Studies","Molecular Docking"].map((t) => (
                    <span key={t} className="px-2.5 py-1 rounded text-xs"
                      style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Workshops ── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Training & Certification
              </span>
              <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                Workshops &amp; Professional Development
              </h2>
            </div>
            <div className="flex-shrink-0 opacity-80">
              <LabGraphic />
            </div>
          </div>

          <div className="flex flex-col gap-4">

            {/* CADD — featured */}
            <div className="rounded-2xl border overflow-hidden"
              style={{ background: "#F8FAFC", borderColor: "#E2E8F0", borderLeft: "4px solid #0E7C7B" }}>
              <div className="p-6 flex flex-col sm:flex-row gap-5 sm:items-start">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: "rgba(14,124,123,0.1)", border: "1px solid rgba(14,124,123,0.15)" }}>
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                      <rect x="3" y="3" width="18" height="14" rx="2"
                        stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.06)"/>
                      <line x1="7" y1="8"  x2="17" y2="8"  stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
                      <line x1="7" y1="11" x2="14" y2="11" stroke="#0E7C7B" strokeWidth="1" opacity="0.5"/>
                      <line x1="9" y1="17" x2="9"  y2="21" stroke="#0E7C7B" strokeWidth="1.4"/>
                      <line x1="5" y1="21" x2="13" y2="21" stroke="#0E7C7B" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 flex-wrap mb-2">
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold"
                      style={{ background: "rgba(14,124,123,0.1)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      2019
                    </span>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                      style={{ background: "rgba(14,124,123,0.07)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      8-Week Certificate
                    </span>
                  </div>
                  <h3 className="font-bold text-lg leading-snug mb-1"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    Computational Approaches to Drug Design and Development (CADD)
                  </h3>
                  <p className="text-base" style={{ color: "#0E7C7B", fontWeight: 600 }}>
                    CSIR – Central Drug Research Institute (CDRI), Lucknow
                  </p>
                  <div className="flex flex-wrap gap-2 mt-3">
                    {["Molecular Docking","ADME","Pharmacophore Modelling","Virtual Screening"].map((t) => (
                      <span key={t} className="px-2.5 py-1 rounded text-sm"
                        style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* GLP */}
            <div className="rounded-2xl border p-6 flex flex-col sm:flex-row gap-5 sm:items-center"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.15)" }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                    <path d="M9 12l2 2 4-4" stroke="#16A34A" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 12A9 9 0 1 1 3 12a9 9 0 0 1 18 0Z"
                      stroke="#16A34A" strokeWidth="1.5" fill="rgba(34,197,94,0.06)"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(34,197,94,0.08)", color: "#16A34A", fontFamily: "var(--font-space)" }}>
                    Workshop
                  </span>
                </div>
                <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Good Laboratory Practice (GLP)
                </h3>
              </div>
            </div>

            {/* HPTLC */}
            <div className="rounded-2xl border p-6 flex flex-col sm:flex-row gap-5 sm:items-center"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.15)" }}>
                  <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
                    {/* Chromatography plate bars */}
                    <rect x="3"  y="4" width="3" height="14" rx="1" fill="#6366F1" opacity="0.6"/>
                    <rect x="8"  y="8" width="3" height="10" rx="1" fill="#6366F1" opacity="0.5"/>
                    <rect x="13" y="6" width="3" height="12" rx="1" fill="#6366F1" opacity="0.7"/>
                    <rect x="18" y="10" width="3" height="8" rx="1" fill="#6366F1" opacity="0.45"/>
                    <line x1="2" y1="20" x2="22" y2="20" stroke="#6366F1" strokeWidth="1.3" opacity="0.5"/>
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 flex-wrap mb-1.5">
                  <span className="px-2.5 py-1 rounded-full text-xs font-semibold"
                    style={{ background: "rgba(99,102,241,0.07)", color: "#6366F1", fontFamily: "var(--font-space)" }}>
                    Virtual Workshop
                  </span>
                </div>
                <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  HPTLC: Technique and Applications
                </h3>
                <p className="text-sm" style={{ color: "#64748B" }}>
                  Anchrom Enterprises (I) Pvt. Ltd. &amp; Smriti College of Pharmaceutical Education
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Membership & Outreach ── */}
      <section className="py-16" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-start justify-between gap-8 mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Community & Service
              </span>
              <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                Professional Membership &amp; Scientific Outreach
              </h2>
            </div>
            <div className="flex-shrink-0 opacity-80">
              <NetworkGraphic />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">

            <div className="rounded-2xl border p-6 flex gap-4 items-start"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.12)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  <circle cx="12" cy="8" r="4" stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.1)"/>
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="#0E7C7B" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1"
                  style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                  Membership
                </span>
                <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Member, Chemical Society
                </h3>
              </div>
            </div>

            <div className="rounded-2xl border p-6 flex gap-4 items-start"
              style={{ background: "#fff", borderColor: "#E2E8F0" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(34,197,94,0.08)", border: "1px solid rgba(34,197,94,0.12)" }}>
                <svg viewBox="0 0 24 24" width="20" height="20" fill="none" aria-hidden="true">
                  {/* Earth + leaf */}
                  <circle cx="12" cy="12" r="9" stroke="#16A34A" strokeWidth="1.5" fill="rgba(34,197,94,0.06)"/>
                  <path d="M12 3 Q17 8 12 12 Q7 16 12 21" stroke="#16A34A" strokeWidth="1.2" fill="none" opacity="0.5"/>
                  <line x1="3.5" y1="10" x2="20.5" y2="10" stroke="#16A34A" strokeWidth="1" opacity="0.35"/>
                  <line x1="3"   y1="14" x2="21"   y2="14" stroke="#16A34A" strokeWidth="1" opacity="0.35"/>
                  {/* Leaf accent */}
                  <path d="M14 6 Q18 6 17 10 Q16 12 14 10 Z" fill="#16A34A" opacity="0.25"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest block mb-1"
                  style={{ color: "#16A34A", fontFamily: "var(--font-space)" }}>
                  Outreach
                </span>
                <h3 className="font-bold text-base mb-0.5" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Volunteer, India International Science Festival
                </h3>
                <p className="text-sm" style={{ color: "#64748B" }}>Clean Air Campaign</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

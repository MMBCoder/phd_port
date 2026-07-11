"use client";
import { useState } from "react";
import { publications } from "@/lib/data";

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
        <h3 className="font-bold leading-snug mb-2 text-base"
          style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
          {pub.title}
        </h3>
        <p className="text-sm font-medium mb-3" style={{ color: "#0E7C7B" }}>
          {pub.journal}
        </p>
        <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
          {pub.abstract}
        </p>
      </div>

      <div className="flex flex-wrap gap-1.5">
        {pub.topics.map((t) => (
          <span key={t} className="px-2 py-0.5 rounded text-xs"
            style={{ background: "#F1F5F9", color: "#475569", fontFamily: "var(--font-space)" }}>
            {t}
          </span>
        ))}
      </div>

      <div className="flex items-center gap-3 pt-1 mt-auto flex-wrap">
        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:scale-105"
          style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
          Read Paper ↗
        </a>
        <a href={pub.doi} target="_blank" rel="noopener noreferrer"
          className="inline-flex items-center gap-1 text-xs font-medium transition-colors hover:opacity-80"
          style={{ color: "#64748B", fontFamily: "var(--font-ibm)" }}>
          DOI: {pub.doiShort}
        </a>
      </div>
    </article>
  );
}

export default function PublicationsPage() {
  const [active, setActive] = useState("All");
  const filtered = publications.filter((p) => {
    if (active === "All") return true;
    if (active === "Preprint") return p.tag === "Preprint";
    return String(p.year) === active;
  });

  return (
    <>
      {/* Page hero */}
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
          <p className="text-base max-w-2xl" style={{ color: "rgba(255,255,255,0.6)" }}>
            5 peer-reviewed articles across Q1/Q2 journals in inorganic, medicinal, and computational chemistry — plus 1 preprint.
          </p>
          <div className="flex items-center gap-6 mt-8 flex-wrap">
            {[
              ["25+", "Citations"],
              ["4",   "H-Index"],
              ["5",   "Journals"],
              ["6",   "Total Works"],
            ].map(([n, l]) => (
              <div key={l}>
                <p className="text-2xl font-bold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>{n}</p>
                <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space)" }}>{l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
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
    </>
  );
}

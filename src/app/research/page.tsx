import Link from "next/link";
import { researchAreas, workflowSteps, publications } from "@/lib/data";
import RuViewer from "@/components/research/RuViewer";

/* ══════════════════════════════════════════════════════
   Approach card SVGs — 24 × 24 viewport, stroke style
   ══════════════════════════════════════════════════════ */

function IconFlask() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M9 3h6M9 3v6L4.5 17A2 2 0 0 0 6.3 20h11.4a2 2 0 0 0 1.8-3L15 9V3" stroke="#0E7C7B" strokeWidth="1.6"/>
      <line x1="5.5" y1="15" x2="18.5" y2="15" stroke="#0E7C7B" strokeWidth="1.1" opacity="0.45" strokeDasharray="2,1.5"/>
      <circle cx="10" cy="17" r="1"  fill="#0E7C7B" opacity="0.55"/>
      <circle cx="14" cy="18.5" r="0.8" fill="#0E7C7B" opacity="0.45"/>
    </svg>
  );
}

function IconOrbitals() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Energy axis */}
      <line x1="4" y1="3" x2="4" y2="21" stroke="#0E7C7B" strokeWidth="1.3" opacity="0.45"/>
      <line x1="3" y1="21" x2="21" y2="21" stroke="#0E7C7B" strokeWidth="1.3" opacity="0.45"/>
      {/* HOMO level */}
      <line x1="6" y1="16" x2="18" y2="16" stroke="#0E7C7B" strokeWidth="1.8"/>
      {/* LUMO level */}
      <line x1="6" y1="8"  x2="18" y2="8"  stroke="#4DD9D8" strokeWidth="1.8"/>
      {/* Gap brace */}
      <line x1="20" y1="8" x2="20" y2="16" stroke="#0E7C7B" strokeWidth="1" strokeDasharray="2,1.5" opacity="0.6"/>
      <line x1="19" y1="8"  x2="21" y2="8"  stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      <line x1="19" y1="16" x2="21" y2="16" stroke="#0E7C7B" strokeWidth="1" opacity="0.6"/>
      {/* Electrons on HOMO */}
      <circle cx="10" cy="16" r="1.8" fill="#0E7C7B" opacity="0.8"/>
      <circle cx="14" cy="16" r="1.8" fill="#0E7C7B" opacity="0.8"/>
    </svg>
  );
}

function IconCell() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Cell membrane */}
      <circle cx="12" cy="12" r="9" stroke="#0E7C7B" strokeWidth="1.6" fill="rgba(14,124,123,0.05)"/>
      {/* Nucleus */}
      <circle cx="12" cy="12" r="4" stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.1)"/>
      {/* Small drug molecule approaching */}
      <circle cx="20" cy="6" r="2" stroke="#4DD9D8" strokeWidth="1.3" fill="rgba(77,217,216,0.12)"/>
      <line x1="18.5" y1="7.5" x2="16" y2="10" stroke="#4DD9D8" strokeWidth="1" strokeDasharray="2,1.5" opacity="0.7"/>
      {/* DNA strand hint in nucleus */}
      <path d="M10 11 Q12 9.5 14 11 Q12 12.5 10 11Z" fill="#0E7C7B" opacity="0.4"/>
    </svg>
  );
}

function IconSARCorrelation() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" aria-hidden="true">
      {/* Axes */}
      <line x1="3" y1="21" x2="3"  y2="3"  stroke="#0E7C7B" strokeWidth="1.3" opacity="0.4"/>
      <line x1="3" y1="21" x2="21" y2="21" stroke="#0E7C7B" strokeWidth="1.3" opacity="0.4"/>
      {/* Scatter points */}
      <circle cx="6"  cy="18" r="1.6" fill="#0E7C7B" opacity="0.55"/>
      <circle cx="9"  cy="14" r="1.6" fill="#0E7C7B" opacity="0.65"/>
      <circle cx="13" cy="11" r="1.6" fill="#0E7C7B" opacity="0.75"/>
      <circle cx="16" cy="8"  r="1.6" fill="#0E7C7B" opacity="0.85"/>
      <circle cx="19" cy="5"  r="1.6" fill="#4DD9D8"/>
      {/* Regression line */}
      <line x1="4" y1="20" x2="21" y2="4" stroke="#0E7C7B" strokeWidth="1.4" strokeDasharray="2.5,2" opacity="0.7"/>
    </svg>
  );
}

/* ══════════════════════════════════════════════════════
   Core Research Area SVGs — 44 × 44 viewport
   ══════════════════════════════════════════════════════ */

/* Ruthenium coordination complex — octahedral centre + arene */
function IconRuComplex() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {/* Central Ru */}
      <circle cx="22" cy="22" r="5" fill="rgba(14,124,123,0.25)" stroke="#0E7C7B" strokeWidth="1.8"/>
      <circle cx="22" cy="22" r="2" fill="#0E7C7B"/>
      {/* 6 coordinate bonds */}
      <line x1="22" y1="17" x2="22" y2="6"  stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="22" y1="27" x2="22" y2="38" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="17" y1="22" x2="6"  y2="22" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="27" y1="22" x2="38" y2="22" stroke="#0E7C7B" strokeWidth="1.5"/>
      <line x1="18" y1="18" x2="10" y2="10" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.7"/>
      <line x1="26" y1="26" x2="34" y2="34" stroke="#0E7C7B" strokeWidth="1.5" opacity="0.7"/>
      {/* Ligand atoms */}
      <circle cx="22" cy="5"  r="3.5" stroke="#4DD9D8" strokeWidth="1.4" fill="rgba(77,217,216,0.12)"/>
      <circle cx="22" cy="39" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="5"  cy="22" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="39" cy="22" r="3"   stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.1)"/>
      <circle cx="9"  cy="9"  r="2.5" stroke="#4DD9D8" strokeWidth="1.3" fill="rgba(77,217,216,0.1)"/>
    </svg>
  );
}

/* Computational drug design — MEP contour map */
function IconMEP() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {/* Contour rings (MEP map) */}
      <ellipse cx="22" cy="22" rx="18" ry="12" stroke="#0E7C7B" strokeWidth="1.4" opacity="0.35"/>
      <ellipse cx="22" cy="22" rx="13" ry="8"  stroke="#0E7C7B" strokeWidth="1.5" opacity="0.55"/>
      <ellipse cx="22" cy="22" rx="8"  ry="5"  stroke="#4DD9D8" strokeWidth="1.6" opacity="0.75"/>
      <ellipse cx="22" cy="22" rx="4"  ry="2.5" stroke="#4DD9D8" strokeWidth="1.8" opacity="0.9"/>
      {/* Core atom */}
      <circle cx="22" cy="22" r="2.5" fill="#0E7C7B"/>
      {/* + / - charge indicators */}
      <text x="5"  y="14" fontSize="8" fill="#EF4444" fontWeight="bold" opacity="0.7">−</text>
      <text x="34" y="32" fontSize="8" fill="#3B82F6" fontWeight="bold" opacity="0.7">+</text>
    </svg>
  );
}

/* Structure–Activity Relationships — substituent series */
function IconSubstituent() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {/* Three hexagons (R group variation) */}
      {([8, 19, 30] as number[]).map((cx, i) => (
        <g key={cx}>
          <polygon
            points={`${cx},5 ${cx+5},8 ${cx+5},14 ${cx},17 ${cx-5},14 ${cx-5},8`}
            stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)" opacity={0.5 + i * 0.2}/>
          {/* R group stub */}
          <line x1={cx} y1="17" x2={cx} y2="22" stroke="#0E7C7B" strokeWidth="1.2" opacity="0.6"/>
          <circle cx={cx} cy="24" r="2" fill="#0E7C7B" opacity={0.4 + i * 0.2}/>
        </g>
      ))}
      {/* Activity bars below */}
      <rect x="5"  y="30" width="6" height="8"  rx="1" fill="#0E7C7B" opacity="0.4"/>
      <rect x="16" y="27" width="6" height="11" rx="1" fill="#0E7C7B" opacity="0.6"/>
      <rect x="27" y="24" width="6" height="14" rx="1" fill="#0E7C7B" opacity="0.85"/>
      {/* Trend arrow */}
      <line x1="5" y1="43" x2="36" y2="43" stroke="#0E7C7B" strokeWidth="1" opacity="0.3"/>
    </svg>
  );
}

/* Biological Evaluation — protein helix + ligand binding */
function IconProteinBinding() {
  return (
    <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
      {/* Alpha helix ribbon */}
      <path d="M8 8 Q14 6 14 12 Q14 18 8 16 Q2 14 2 20 Q2 26 8 24 Q14 22 14 28 Q14 34 8 32"
        stroke="#0E7C7B" strokeWidth="2" fill="none" strokeLinecap="round"/>
      {/* Binding pocket */}
      <path d="M24 16 Q38 12 40 22 Q42 32 28 34 Q20 36 18 28 Q16 20 24 16Z"
        stroke="#0E7C7B" strokeWidth="1.5" fill="rgba(14,124,123,0.08)"/>
      {/* Small ligand molecule */}
      <circle cx="30" cy="25" r="4" stroke="#4DD9D8" strokeWidth="1.6" fill="rgba(77,217,216,0.15)"/>
      <circle cx="30" cy="25" r="1.5" fill="#4DD9D8" opacity="0.8"/>
      {/* Binding interaction lines */}
      <line x1="26" y1="22" x2="29" y2="23" stroke="#4DD9D8" strokeWidth="1" strokeDasharray="1.5,1" opacity="0.7"/>
      <line x1="26" y1="28" x2="29" y2="27" stroke="#4DD9D8" strokeWidth="1" strokeDasharray="1.5,1" opacity="0.7"/>
    </svg>
  );
}

/* Map research area title → SVG icon */
function ResearchAreaIcon({ title }: { title: string }) {
  if (title.toLowerCase().includes("ruthenium"))    return <IconRuComplex />;
  if (title.toLowerCase().includes("computational")) return <IconMEP />;
  if (title.toLowerCase().includes("structure"))    return <IconSubstituent />;
  if (title.toLowerCase().includes("biological"))   return <IconProteinBinding />;
  return <IconFlask />;
}

/* ══════════════════════════════════════════════════════
   Page
   ══════════════════════════════════════════════════════ */
export default function ResearchPage() {
  const featured = publications.filter((p) => p.featured);

  const approachCards = [
    {
      Icon: IconFlask,
      title: "Synthesis & Characterisation",
      desc:  "Multistep organometallic synthesis confirmed by ¹H/¹³C NMR, FT-IR, UV-Vis, single-crystal X-ray diffraction, and CHNS elemental analysis.",
      accent: "#0E7C7B",
    },
    {
      Icon: IconOrbitals,
      title: "Computational Analysis",
      desc:  "DFT geometry optimisation, HOMO–LUMO, MEP surface mapping (GAUSSIAN), and molecular docking studies (AutoDock, Discovery Studio) with ADME profiling.",
      accent: "#6366F1",
    },
    {
      Icon: IconCell,
      title: "Biological Evaluation",
      desc:  "Anticancer, antimycobacterial, antioxidant, and DNA-binding assays conducted with partner laboratories; results integrated into SAR analyses.",
      accent: "#22C55E",
    },
    {
      Icon: IconSARCorrelation,
      title: "Structure–Activity Relationships",
      desc:  "Substituent effects, coordination geometry, and electronic parameters correlated with biological potency across 10+ complexes.",
      accent: "#F59E0B",
    },
  ];

  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Doctoral Research
          </span>
          <h1 className="font-bold mb-5"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Ruthenium-Based Therapeutics
          </h1>
          <p className="text-lg max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Combining <strong style={{ color: "#4DD9D8" }}>bench-top synthesis</strong> with{" "}
            <strong style={{ color: "#4DD9D8" }}>quantum chemistry</strong>, molecular docking, and machine learning
            to design the next generation of <strong style={{ color: "#4DD9D8" }}>metal-based anticancer</strong> and antimycobacterial agents.
          </p>
        </div>
      </section>

      {/* ── Overview ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-bold mb-6"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", color: "#0F172A" }}>
                A Two-Pronged Research Strategy
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#374151" }}>
                My PhD research centres on{" "}
                <strong style={{ color: "#0E7C7B" }}>ruthenium(III) and half-sandwich Ru–arene complexes</strong>{" "}
                bearing Schiff-base ligands. Unlike <strong>cisplatin</strong> — the gold-standard
                metal-based anticancer drug — ruthenium compounds can switch oxidation
                states inside the cell, potentially offering{" "}
                <strong style={{ color: "#0E7C7B" }}>improved selectivity and lower toxicity</strong>.
              </p>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "#374151" }}>
                For every compound I synthesise, I run a parallel computational study:{" "}
                <strong style={{ color: "#0E7C7B" }}>DFT calculations</strong> reveal the electronic structure,{" "}
                <strong style={{ color: "#0E7C7B" }}>HOMO–LUMO gaps</strong> predict reactivity,{" "}
                <strong style={{ color: "#0E7C7B" }}>MEP maps</strong> show where the molecule wants to bind,
                and <strong style={{ color: "#0E7C7B" }}>molecular docking</strong> places it inside a target
                protein to estimate affinity.
              </p>
              <p className="text-lg leading-relaxed mb-7" style={{ color: "#374151" }}>
                Lab results then <strong>confirm — or challenge — what the computer predicted</strong>. This
                dialogue between computation and experiment is the engine of my research.
              </p>
              <Link href="/publications"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold"
                style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
                View Publications →
              </Link>
            </div>

            {/* Approach cards — SVG icons */}
            <div className="grid grid-cols-1 gap-4">
              {approachCards.map(({ Icon, title, desc, accent }) => (
                <div key={title} className="flex gap-4 p-6 rounded-xl border overflow-hidden relative"
                  style={{ background: "#fff", borderColor: "#E2E8F0", borderLeft: `3px solid ${accent}` }}>
                  <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                    style={{ background: `${accent}12` }}>
                    <Icon />
                  </div>
                  <div>
                    <h3 className="font-bold text-base mb-1.5"
                      style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                      {title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>{desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Core Research Areas ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Specialisations
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Core Research Areas
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {researchAreas.map((r) => (
              <div key={r.title}
                className="rounded-2xl p-7 border flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center"
                  style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.12)" }}>
                  <ResearchAreaIcon title={r.title} />
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    {r.title}
                  </h3>
                  {r.desc && <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>{r.desc}</p>}
                </div>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {r.techniques.map((t) => (
                    <span key={t} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{ background: "rgba(14,124,123,0.08)", color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 3D Molecular Viewer ── */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                3D Structure
              </span>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", color: "#fff" }}>
                Piano-Stool Geometry
              </h2>
              <p className="text-lg leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.75)" }}>
                Half-sandwich{" "}
                <strong style={{ color: "#4DD9D8" }}>[Ru(η⁶-<em>p</em>-cymene)(N,O-Schiff base)Cl]⁺</strong>{" "}
                complexes adopt the distinctive <strong style={{ color: "#fff" }}>piano-stool geometry</strong>:
                the η⁶-coordinated arene acts as the &ldquo;seat&rdquo;, while the bidentate Schiff base
                N,O donors and chloride ligand form the three &ldquo;legs&rdquo;.
              </p>
              <p className="text-lg leading-relaxed mb-7" style={{ color: "rgba(255,255,255,0.75)" }}>
                This geometry is biologically significant — it exposes the{" "}
                <strong style={{ color: "#4DD9D8" }}>chloride leaving group</strong> to aquation inside cells,
                while the arene ring controls lipophilicity and cellular uptake. Varying the Schiff-base
                substituents tunes <strong style={{ color: "#4DD9D8" }}>HOMO–LUMO gaps</strong>, binding
                affinities, and ultimately <strong style={{ color: "#4DD9D8" }}>anticancer potency</strong>.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Coordination number", value: "6 (half-sandwich)" },
                  { label: "η⁶ arene",            value: "p-Cymene" },
                  { label: "Chelate ligand",       value: "N,O-Schiff base" },
                  { label: "Leaving group",        value: "Cl⁻ (aquation)" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,124,123,0.2)" }}>
                    <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space)" }}>{label}</p>
                    <p className="text-base font-semibold" style={{ color: "#fff", fontFamily: "var(--font-ibm)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div><RuViewer /></div>
          </div>
        </div>
      </section>

      {/* ── AI Discovery Bridge ── */}
      <section className="py-16" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="rounded-2xl border p-8 flex flex-col sm:flex-row items-center justify-between gap-6"
            style={{ background: "#fff", borderColor: "#E2E8F0" }}>
            <div className="flex items-start gap-5">
              {/* Bridge graphic */}
              <div className="w-14 h-14 rounded-xl flex-shrink-0 flex items-center justify-center"
                style={{ background: "rgba(14,124,123,0.08)", border: "1px solid rgba(14,124,123,0.15)" }}>
                <svg viewBox="0 0 44 44" width="28" height="28" fill="none" aria-hidden="true">
                  {/* Neural net over molecule */}
                  <circle cx="8"  cy="22" r="3.5" stroke="#0E7C7B" strokeWidth="1.6" fill="rgba(14,124,123,0.12)"/>
                  <circle cx="22" cy="12" r="3.5" stroke="#0E7C7B" strokeWidth="1.6" fill="rgba(14,124,123,0.12)"/>
                  <circle cx="22" cy="32" r="3.5" stroke="#0E7C7B" strokeWidth="1.6" fill="rgba(14,124,123,0.12)"/>
                  <circle cx="36" cy="22" r="3.5" stroke="#4DD9D8" strokeWidth="1.8" fill="rgba(77,217,216,0.15)"/>
                  <line x1="11.5" y1="20" x2="18.5" y2="14" stroke="#0E7C7B" strokeWidth="1.2"/>
                  <line x1="11.5" y1="24" x2="18.5" y2="30" stroke="#0E7C7B" strokeWidth="1.2"/>
                  <line x1="25.5" y1="13" x2="32.5" y2="20" stroke="#4DD9D8" strokeWidth="1.2" strokeDasharray="2,1.5"/>
                  <line x1="25.5" y1="31" x2="32.5" y2="24" stroke="#4DD9D8" strokeWidth="1.2" strokeDasharray="2,1.5"/>
                  <circle cx="36" cy="22" r="1.5" fill="#4DD9D8"/>
                </svg>
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                  style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                  Future Research Vision
                </span>
                <h3 className="font-bold text-lg mb-1.5" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  AI-Driven Discovery Methods
                </h3>
                <p className="text-base leading-relaxed max-w-xl" style={{ color: "#64748B" }}>
                  Python toolkit (RDKit · DeepChem), AI-driven virtual screening pipeline, and
                  multi-agent automation for computational drug design — explored on a dedicated page.
                </p>
              </div>
            </div>
            <Link href="/ai-discovery"
              className="flex-shrink-0 px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 whitespace-nowrap"
              style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
              Explore AI Methods →
            </Link>
          </div>
        </div>
      </section>

      {/* ── Doctorate Research Workflow ── */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              From Idea to Discovery
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              Doctorate Research Workflow
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {workflowSteps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-3">
                <div className="w-14 h-14 rounded-full flex items-center justify-center text-base font-bold"
                  style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
                  {s.step}
                </div>
                <p className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>
                  {s.label}
                </p>
                <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.55)" }}>
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Key Publications ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-end justify-between mb-10">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Highlighted Work
              </span>
              <h2 className="font-bold"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
                Key Publications
              </h2>
            </div>
            <Link href="/publications" className="text-base font-semibold"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              All papers →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <a key={p.id} href={p.doi} target="_blank" rel="noopener noreferrer"
                className="rounded-2xl border p-7 flex flex-col gap-3 hover:shadow-lg transition-all hover:-translate-y-0.5 group"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                    {p.year}
                  </span>
                  <span className="px-2.5 py-1 rounded text-sm" style={{ background: "#F1F5F9", color: "#64748B" }}>
                    {p.journal}
                  </span>
                </div>
                <h3 className="font-bold text-base leading-snug group-hover:text-teal-700 transition-colors"
                  style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  {p.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{p.abstract}</p>
                <span className="text-sm font-semibold mt-auto" style={{ color: "#0E7C7B" }}>
                  Read paper ↗
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

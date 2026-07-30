import Link from "next/link";
import { researchAreas, workflowSteps, publications } from "@/lib/data";
import RuViewer from "@/components/research/RuViewer";

export default function ResearchPage() {
  const featured = publications.filter((p) => p.featured);

  const mlLibraries = [
    {
      name: "RDKit",
      category: "Cheminformatics",
      color: "#0E7C7B",
      icon: "⚗️",
      desc: "Industry-standard Python library for cheminformatics. Used for molecule parsing (SMILES/SDF), fingerprint generation (Morgan, MACCS), substructure search, and property prediction in virtual screening pipelines.",
      uses: ["SMILES parsing", "Morgan fingerprints", "Property filters", "SAR analysis"],
    },
    {
      name: "DeepChem",
      category: "ML / Drug Discovery",
      color: "#22C55E",
      icon: "🧠",
      desc: "Deep learning library for drug discovery and quantum chemistry. Applied for graph neural networks on molecular graphs, activity prediction, and ADMET modelling of ruthenium complex candidates.",
      uses: ["Graph conv models", "ADMET prediction", "Multitask learning", "Scaffold splits"],
    },
  ];

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Research
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

      {/* Overview */}
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
              <Link href="/publications" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-base font-semibold"
                style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
                View Publications →
              </Link>
            </div>

            {/* Approach cards */}
            <div className="grid grid-cols-1 gap-4">
              {[
                { icon: "⚗️", title: "Synthesis & Characterisation",
                  desc: "Multistep organometallic synthesis confirmed by ¹H/¹³C NMR, FT-IR, UV-Vis, single-crystal X-ray diffraction, and CHNS elemental analysis." },
                { icon: "💻", title: "Computational Analysis",
                  desc: "DFT geometry optimisation, HOMO–LUMO, MEP surface mapping (GAUSSIAN), and molecular docking studies (AutoDock, Discovery Studio) with ADME profiling." },
                { icon: "🔬", title: "Biological Evaluation",
                  desc: "Anticancer, antimycobacterial, antioxidant, and DNA-binding assays conducted with partner laboratories; results integrated into SAR analyses." },
                { icon: "📊", title: "Structure–Activity Relationships",
                  desc: "Substituent effects, coordination geometry, and electronic parameters correlated with biological potency across 10+ complexes." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-6 rounded-xl border"
                  style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                  <span className="text-2xl flex-shrink-0 mt-0.5">{item.icon}</span>
                  <div>
                    <h3 className="font-bold text-base mb-2"
                      style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                      {item.title}
                    </h3>
                    <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Research Areas */}
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
              <div key={r.title} className="rounded-2xl p-7 border flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl"
                  style={{ background: "rgba(14,124,123,0.08)" }}>
                  {r.icon}
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
                  { label: "η⁶ arene", value: "p-Cymene" },
                  { label: "Chelate ligand", value: "N,O-Schiff base" },
                  { label: "Leaving group", value: "Cl⁻ (aquation)" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-4"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,124,123,0.2)" }}>
                    <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.45)", fontFamily: "var(--font-space)" }}>{label}</p>
                    <p className="text-base font-semibold" style={{ color: "#fff", fontFamily: "var(--font-ibm)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <RuViewer />
            </div>
          </div>
        </div>
      </section>

      {/* ── ML & Python Toolkit ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Computational Toolkit
            </span>
            <h2 className="font-bold mb-3"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Machine Learning &amp; Python Libraries
            </h2>
            <p className="text-base max-w-2xl mx-auto leading-relaxed" style={{ color: "#64748B" }}>
              Python-based open-source ecosystem for computational chemistry, cheminformatics,
              and machine learning — applied to drug discovery and metallodrug research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {mlLibraries.map((lib) => (
              <div key={lib.name}
                className="rounded-2xl border p-7 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="flex items-start gap-4">
                  <div className="w-14 h-14 rounded-xl flex items-center justify-center text-3xl flex-shrink-0"
                    style={{ background: `${lib.color}15` }}>
                    {lib.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                      {lib.name}
                    </h3>
                    <span className="px-2.5 py-1 rounded text-sm font-semibold"
                      style={{ background: `${lib.color}15`, color: lib.color, fontFamily: "var(--font-space)" }}>
                      {lib.category}
                    </span>
                  </div>
                </div>
                <p className="text-base leading-relaxed" style={{ color: "#475569" }}>
                  {lib.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {lib.uses.map((u) => (
                    <span key={u} className="px-3 py-1.5 rounded-lg text-sm font-medium"
                      style={{ background: "#F1F5F9", color: "#64748B", fontFamily: "var(--font-ibm)" }}>
                      {u}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Virtual Screening Pipeline ── */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Steps */}
            <div>
              <h2 className="font-bold mb-4"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,2.5vw,2.1rem)", color: "#fff" }}>
                Future Research Vision:{" "}
                <span style={{ color: "#4DD9D8" }}>AI-Driven Virtual Screening</span>
              </h2>
              <p className="text-base leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.65)" }}>
                A <strong style={{ color: "#fff" }}>five-step AI pipeline</strong> that takes a large compound
                library and intelligently narrows it down to the most promising metal-complex
                candidates — ready for bench synthesis.
              </p>
              <div className="flex flex-col gap-6">
                {[
                  { n: "01", title: "Library Preparation",
                    desc: "Parse all candidate structures with RDKit; generate 3-D shapes; convert file formats for downstream analysis." },
                  { n: "02", title: "Drug-Likeness Filter",
                    desc: "Apply Lipinski rules — checking molecular weight, water-solubility, and drug absorption potential — to keep only viable candidates." },
                  { n: "03", title: "AI Similarity Ranking",
                    desc: "Use machine learning to score each molecule by how similar it is to known active Ru complexes from the literature." },
                  { n: "04", title: "Molecular Docking",
                    desc: "Virtually place the top candidates inside the target protein using AutoDock and score how tightly each one binds (binding energy ΔG)." },
                  { n: "05", title: "DFT Validation",
                    desc: "Run quantum chemistry calculations on the shortlisted hits to verify their electronic structure and HOMO–LUMO gap. Best candidates go to the lab." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <span className="w-11 h-11 rounded-xl flex items-center justify-center text-sm font-bold flex-shrink-0"
                      style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
                      {step.n}
                    </span>
                    <div>
                      <h4 className="font-bold text-base mb-1" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                        {step.title}
                      </h4>
                      <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Visual Screening Funnel */}
            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold uppercase tracking-widest mb-2"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                How AI Narrows Thousands to a Handful
              </p>

              {[
                { icon: "🗂️", label: "Compound Library",     count: "10,000+", note: "All candidate Ru–Schiff-base structures",       color: "#94A3B8", pct: 100 },
                { icon: "💊", label: "Drug-Like Filter",      count: "~3,000",  note: "Pass molecular weight & lipophilicity rules",    color: "#6366F1", pct: 82  },
                { icon: "🤖", label: "AI Similarity Ranking", count: "Top 200", note: "Most similar to known active Ru complexes",      color: "#F59E0B", pct: 62  },
                { icon: "🎯", label: "Molecular Docking",     count: "Top 20",  note: "Strongest predicted protein binding (ΔG)",       color: "#EF4444", pct: 40  },
                { icon: "⚛️", label: "DFT Validation",        count: "5 leads", note: "HOMO–LUMO & electronic structure verified",      color: "#0E7C7B", pct: 22  },
                { icon: "🧪", label: "Ready for Synthesis",   count: "Best 2–3",note: "Shortlisted for the wet lab",                   color: "#22C55E", pct: 10  },
              ].map((stage, idx, arr) => (
                <div key={stage.label} className="flex flex-col items-center w-full">
                  <div style={{ width: `${stage.pct}%`, minWidth: "72%" }}>
                    <div className="rounded-xl px-4 py-3 flex items-center gap-3"
                      style={{ background: `${stage.color}22`, border: `1px solid ${stage.color}50` }}>
                      <span className="text-xl flex-shrink-0">{stage.icon}</span>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-bold leading-tight"
                          style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                          {stage.label}
                        </p>
                        <p className="text-sm mt-0.5 leading-tight"
                          style={{ color: "rgba(255,255,255,0.5)" }}>
                          {stage.note}
                        </p>
                      </div>
                      <span className="text-base font-bold flex-shrink-0 ml-2"
                        style={{ color: stage.color, fontFamily: "var(--font-ibm)" }}>
                        {stage.count}
                      </span>
                    </div>
                  </div>
                  {idx < arr.length - 1 && (
                    <div className="flex flex-col items-center" style={{ height: "22px" }}>
                      <div className="w-px flex-1" style={{ background: "rgba(255,255,255,0.12)" }} />
                      <span className="text-xs leading-none" style={{ color: "rgba(255,255,255,0.25)" }}>▼</span>
                    </div>
                  )}
                </div>
              ))}

              <p className="text-sm text-center pt-2" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space)" }}>
                Each stage filters smarter — only the most promising candidates reach the bench
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Agent AI (Future Vision) ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Future Research Vision
            </span>
            <h2 className="font-bold mb-4"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#0F172A" }}>
              Multi-Agent AI for Computational Drug Design
            </h2>
            <p className="text-lg max-w-3xl mx-auto leading-relaxed" style={{ color: "#475569" }}>
              During my PhD, designing a Ru complex, running{" "}
              <strong style={{ color: "#0E7C7B" }}>DFT in GAUSSIAN</strong>, docking in{" "}
              <strong style={{ color: "#0E7C7B" }}>AutoDock</strong>, and extracting{" "}
              <strong style={{ color: "#0E7C7B" }}>SAR insights</strong> was done manually — one
              compound at a time. Here is how specialised AI agents could automate that exact same workflow.
            </p>
          </div>

          {/* Agent flow diagram */}
          <div className="flex flex-col items-center mb-14">

            {/* INPUT */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 text-center border-2 border-dashed"
                style={{ borderColor: "#0E7C7B", background: "rgba(14,124,123,0.04)" }}>
                <span className="text-4xl block mb-3">👩‍🔬</span>
                <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Chemistry Researcher
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                  Sets the goal: Ru scaffold · substituent library · target protein (e.g. PARP-1 / HSA)
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#0E7C7B" }} />
              <span className="text-base font-bold" style={{ color: "#0E7C7B" }}>▼</span>
            </div>

            {/* ORCHESTRATOR */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 text-center" style={{ background: "#0E7C7B" }}>
                <span className="text-4xl block mb-3">🤖</span>
                <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>
                  Orchestrator
                </p>
                <p className="text-base leading-relaxed" style={{ color: "rgba(255,255,255,0.8)" }}>
                  Receives the research goal, breaks it into tasks, and assigns each to a specialised agent in sequence
                </p>
              </div>
            </div>

            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#0E7C7B" }} />
              <span className="text-base font-bold" style={{ color: "#0E7C7B" }}>▼</span>
            </div>

            {/* 4 AGENTS */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { icon: "🧪", step: "Agent 1", title: "Design Agent",
                  tool: "RDKit · DeepChem", color: "#6366F1",
                  desc: "Enumerates new Ru–Schiff-base candidates and scores predicted biological activity using ML models",
                  output: "Candidate library" },
                { icon: "⚛️", step: "Agent 2", title: "DFT Agent",
                  tool: "GAUSSIAN", color: "#F59E0B",
                  desc: "Runs B3LYP/LANL2DZ calculations automatically, extracts HOMO–LUMO gap and MEP surface data",
                  output: "Electronic descriptors" },
                { icon: "🎯", step: "Agent 3", title: "Docking Agent",
                  tool: "AutoDock · Discovery Studio", color: "#EF4444",
                  desc: "Docks each candidate into the target protein binding pocket and returns predicted binding affinity (ΔG)",
                  output: "Binding affinity scores" },
                { icon: "📊", step: "Agent 4", title: "SAR Agent",
                  tool: "Statistical Analysis", color: "#22C55E",
                  desc: "Correlates electronic structure with binding affinity across the full series and ranks the best leads",
                  output: "Ranked lead compounds" },
              ].map((agent) => (
                <div key={agent.title} className="rounded-2xl border flex flex-col gap-3 overflow-hidden"
                  style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                  <div className="px-2 py-2 text-center text-sm font-bold"
                    style={{ background: agent.color, color: "#fff", fontFamily: "var(--font-ibm)", letterSpacing: "0.05em" }}>
                    {agent.step}
                  </div>
                  <div className="px-5 pb-1 flex items-center gap-3">
                    <span className="text-2xl">{agent.icon}</span>
                    <div>
                      <p className="font-bold text-base leading-tight" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                        {agent.title}
                      </p>
                      <span className="text-sm font-medium px-2 py-0.5 rounded-md mt-1 inline-block"
                        style={{ background: `${agent.color}18`, color: agent.color, fontFamily: "var(--font-ibm)" }}>
                        {agent.tool}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm leading-relaxed px-5" style={{ color: "#475569" }}>
                    {agent.desc}
                  </p>
                  <div className="mx-4 mb-4 rounded-lg px-3 py-2 text-center"
                    style={{ background: `${agent.color}12`, border: `1px solid ${agent.color}35` }}>
                    <p className="text-sm font-semibold" style={{ color: agent.color, fontFamily: "var(--font-space)" }}>
                      ↓ {agent.output}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col items-center py-2">
              <div className="w-px h-8" style={{ background: "#22C55E" }} />
              <span className="text-base font-bold" style={{ color: "#22C55E" }}>▼</span>
            </div>

            {/* OUTPUT */}
            <div className="w-full max-w-lg">
              <div className="rounded-2xl p-6 text-center border-2"
                style={{ borderColor: "#22C55E", background: "rgba(34,197,94,0.05)" }}>
                <span className="text-4xl block mb-3">🧫</span>
                <p className="font-bold text-lg mb-1" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Shortlisted Lead Compounds
                </p>
                <p className="text-base leading-relaxed" style={{ color: "#64748B" }}>
                  Top-ranked Ru complexes — filtered by <strong>HOMO–LUMO gap</strong>, binding <strong>ΔG</strong>, and <strong>ADME</strong> —
                  passed directly to bench synthesis, saving weeks of manual iteration
                </p>
              </div>
            </div>
          </div>

          {/* Benefit cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { icon: "⚡", title: "10–100× Faster Iteration",
                desc: "Parallel DFT jobs and automated docking replace sequential manual steps, compressing weeks into hours." },
              { icon: "🤖", title: "Automated SAR Analysis",
                desc: "The SAR Agent correlates electronic descriptors with binding affinity across the full series — no spreadsheet required." },
              { icon: "🎯", title: "Intelligent Lead Prioritisation",
                desc: "Agents rank candidates by HOMO–LUMO gap, docking ΔG, and ADME filters before a single milligram is synthesised." },
              { icon: "🔄", title: "Closed-Loop Design",
                desc: "Experimental results from the bench feed back into the Design Agent, continuously refining the next generation of candidates." },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 rounded-xl border"
                style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                <span className="text-2xl flex-shrink-0">{item.icon}</span>
                <div>
                  <h4 className="font-bold text-base mb-1"
                    style={{ color: "#0F172A", fontFamily: "var(--font-space)" }}>
                    {item.title}
                  </h4>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctorate Research Workflow */}
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

      {/* Key Publications */}
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

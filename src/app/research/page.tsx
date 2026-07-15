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
      desc: "Industry-standard Python library for cheminformatics. Used for molecule parsing (SMILES/SDF), fingerprint generation (Morgan, MACCS), substructure search, and property prediction in my virtual screening pipelines.",
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
          <h1 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Ruthenium-Based Therapeutics
          </h1>
          <p className="text-base max-w-2xl leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
            Combining bench-top synthesis with quantum chemistry, molecular docking, and machine learning
            to design the next generation of metal-based anticancer and antimycobacterial agents.
          </p>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            <div>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
                A Two-Pronged Research Strategy
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                My PhD research centres on <strong>ruthenium(III) and half-sandwich Ru–arene
                complexes</strong> bearing Schiff-base ligands. Unlike cisplatin — the gold-standard
                metal-based anticancer drug — ruthenium compounds can switch between oxidation
                states inside the cell, potentially offering improved selectivity and lower toxicity.
              </p>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                For every compound I synthesise, I run a parallel computational study: DFT
                calculations reveal the electronic structure, HOMO-LUMO gaps predict reactivity,
                MEP maps show where the molecule wants to bind, and molecular docking places it
                inside a target protein to estimate affinity.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                Lab results then confirm — or challenge — what the computer predicted. This
                dialogue between computation and experiment is the engine of my research.
              </p>
              <Link href="/publications" className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold"
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
                  desc: "DFT geometry optimisation, HOMO-LUMO, MEP surface mapping (GAUSSIAN), and molecular docking studies (AutoDock, Discovery Studio) with ADME profiling." },
                { icon: "🔬", title: "Biological Evaluation",
                  desc: "Anticancer, antimycobacterial, antioxidant, and DNA-binding assays conducted with partner laboratories; results integrated into SAR analyses." },
                { icon: "📊", title: "Structure–Activity Relationships",
                  desc: "Substituent effects, coordination geometry, and electronic parameters correlated with biological potency across 10+ complexes." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 p-5 rounded-xl border"
                  style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                  <span className="text-2xl flex-shrink-0">{item.icon}</span>
                  <div>
                    <h3 className="font-semibold text-sm mb-1"
                      style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                      {item.title}
                    </h3>
                    <p className="text-sm" style={{ color: "#64748B" }}>{item.desc}</p>
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
                <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: "rgba(14,124,123,0.08)" }}>
                  {r.icon}
                </div>
                <div>
                  <h3 className="font-bold text-base mb-2"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    {r.title}
                  </h3>
                  {r.desc && <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>{r.desc}</p>}
                </div>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {r.techniques.map((t) => (
                    <span key={t} className="px-2 py-1 rounded text-xs font-medium"
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
            {/* Left: text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                3D Structure
              </span>
              <h2 className="font-bold mb-5"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
                Piano-Stool Geometry
              </h2>
              <p className="text-base leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.65)" }}>
                Half-sandwich <strong style={{ color: "#fff" }}>[Ru(η⁶-<em>p</em>-cymene)(N,O-Schiff base)Cl]⁺</strong> complexes
                adopt the distinctive <em>piano-stool geometry</em>: the η⁶-coordinated arene acts as the
                &ldquo;seat&rdquo;, while the bidentate Schiff base N,O donors and chloride ligand form the
                three &ldquo;legs&rdquo;.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.65)" }}>
                This geometry is biologically significant — it exposes the chloride leaving group to
                aquation inside cells, while the arene ring controls lipophilicity and cellular uptake.
                Varying the Schiff-base substituents tunes HOMO-LUMO gaps, binding affinities, and
                ultimately anticancer potency.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Coordination number", value: "6 (half-sandwich)" },
                  { label: "η⁶ arene", value: "p-Cymene" },
                  { label: "Chelate ligand", value: "N,O-Schiff base" },
                  { label: "Leaving group", value: "Cl⁻ (aquation)" },
                ].map(({ label, value }) => (
                  <div key={label} className="rounded-xl p-4" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(14,124,123,0.2)" }}>
                    <p className="text-xs mb-1" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-space)" }}>{label}</p>
                    <p className="text-sm font-semibold" style={{ color: "#fff", fontFamily: "var(--font-ibm)" }}>{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: viewer */}
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
            <p className="text-sm max-w-2xl mx-auto" style={{ color: "#64748B" }}>
              Python-based open-source ecosystem for computational chemistry, cheminformatics,
              and machine learning — applied to drug discovery and metallodrug research.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {mlLibraries.map((lib) => (
              <div key={lib.name}
                className="rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-1"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl flex-shrink-0"
                    style={{ background: `${lib.color}15` }}>
                    {lib.icon}
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-0.5">
                      <h3 className="font-bold text-base" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                        {lib.name}
                      </h3>
                      <span className="px-2 py-0.5 rounded text-xs font-semibold"
                        style={{ background: `${lib.color}15`, color: lib.color, fontFamily: "var(--font-space)" }}>
                        {lib.category}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: "#475569" }}>
                  {lib.desc}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto">
                  {lib.uses.map((u) => (
                    <span key={u} className="px-2.5 py-1 rounded-lg text-xs font-medium"
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
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#fff" }}>
                Future Research Vision: AI-Driven Virtual Screening
              </h2>
              <p className="text-sm leading-relaxed mb-8" style={{ color: "rgba(255,255,255,0.55)" }}>
                A five-step Python pipeline that takes a compound library from raw SMILES to
                a ranked list of metal-complex candidates for synthesis.
              </p>
              <div className="flex flex-col gap-5">
                {[
                  { n: "01", title: "Library Preparation",
                    desc: "Parse SMILES with RDKit; generate 3-D conformers; convert to SDF/MOL2 via OpenBabel." },
                  { n: "02", title: "Physicochemical Filtering",
                    desc: "Apply Lipinski / Veber rules (MW, logP, HBD/HBA, TPSA) to discard non-drug-like compounds." },
                  { n: "03", title: "Fingerprint-Based Pre-Screening",
                    desc: "Compute Morgan fingerprints; use a pre-trained random-forest classifier to rank similarity to known active Ru complexes." },
                  { n: "04", title: "Molecular Docking",
                    desc: "Dock top-ranked candidates into the target protein binding pocket (AutoDock Vina) and score binding affinity (ΔG)." },
                  { n: "05", title: "DFT Validation",
                    desc: "Run PySCF single-point DFT on short-listed hits to verify electronic structure and HOMO-LUMO gap. Top candidates go to synthesis." },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <span className="w-10 h-10 rounded-xl flex items-center justify-center text-xs font-bold flex-shrink-0"
                      style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
                      {step.n}
                    </span>
                    <div>
                      <h4 className="font-semibold text-sm mb-1" style={{ color: "#fff", fontFamily: "var(--font-space)" }}>
                        {step.title}
                      </h4>
                      <p className="text-sm" style={{ color: "rgba(255,255,255,0.5)" }}>{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Code snippet */}
            <div>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(14,124,123,0.25)" }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ background: "rgba(14,124,123,0.08)", borderColor: "rgba(14,124,123,0.2)" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                  <span className="text-xs ml-2" style={{ color: "rgba(255,255,255,0.4)", fontFamily: "var(--font-ibm)" }}>
                    virtual_screen.py
                  </span>
                </div>
                <pre className="p-5 text-xs leading-relaxed overflow-x-auto"
                  style={{ background: "#0a1628", color: "rgba(255,255,255,0.8)", fontFamily: "var(--font-ibm)" }}>
{`from rdkit import Chem
from rdkit.Chem import Descriptors, AllChem
from openbabel import pybel
from pyscf import gto, dft

# Step 1 — Library preparation
smiles_list = load_compound_library("candidates.smi")
mols = [Chem.MolFromSmiles(s) for s in smiles_list]

# Step 2 — Lipinski filter
def drug_like(mol):
    return (Descriptors.MolWt(mol)      <= 500 and
            Descriptors.MolLogP(mol)    <=   5 and
            Descriptors.NumHDonors(mol) <=   5 and
            Descriptors.NumHAcceptors(mol) <= 10)

filtered = [m for m in mols if drug_like(m)]

# Step 3 — Morgan fingerprint ranking
fps = [AllChem.GetMorganFingerprintAsBitVect(m, 2)
       for m in filtered]
scores = rf_model.predict_proba(fps)[:, 1]
top50  = [filtered[i] for i in scores.argsort()[-50:]]

# Step 5 — DFT single-point (PySCF)
for mol in top50[:5]:
    geom = mol_to_pyscf_atoms(mol)
    mf   = gto.M(atom=geom, basis="def2-SVP",
                 charge=1, spin=0)
    dft.RKS(mf).run()
    print(f"HOMO–LUMO gap: {get_gap(mf):.2f} eV")`}
                </pre>
              </div>
              <p className="mt-3 text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space)" }}>
                Illustrative pipeline — actual scripts use internal compound databases and DFT parameters tuned for ruthenium (ECP basis sets, dispersion correction).
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Multi-Agent AI (Future Vision) ── */}
      <section className="py-20" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-start">
            {/* Code snippet */}
            <div>
              <div className="rounded-2xl overflow-hidden border" style={{ borderColor: "#E2E8F0" }}>
                <div className="flex items-center gap-2 px-4 py-3 border-b"
                  style={{ background: "#F1F5F9", borderColor: "#E2E8F0" }}>
                  <span className="w-3 h-3 rounded-full" style={{ background: "#ef4444" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#f59e0b" }} />
                  <span className="w-3 h-3 rounded-full" style={{ background: "#22c55e" }} />
                  <span className="text-xs ml-2" style={{ color: "#94A3B8", fontFamily: "var(--font-ibm)" }}>
                    multi_agent_drug_design.py
                  </span>
                </div>
                <pre className="p-5 text-xs leading-relaxed overflow-x-auto"
                  style={{ background: "#0F172A", color: "rgba(255,255,255,0.82)", fontFamily: "var(--font-ibm)" }}>
{`# Multi-agent orchestration for Ru complex discovery
# Each agent handles one step of the PhD workflow

class DesignAgent:
    """Proposes new Ru–Schiff-base candidates via
    RDKit enumeration and DeepChem activity scoring."""
    def run(self, scaffold, substituents):
        candidates = enumerate_complexes(scaffold,
                                         substituents)
        scores = deepchem_model.predict(candidates)
        return rank_by_score(candidates, scores)

class DFTAgent:
    """Submits GAUSSIAN B3LYP/LANL2DZ jobs and
    extracts HOMO-LUMO gap, MEP, and charge data."""
    def run(self, candidate):
        gjf = write_gaussian_input(candidate,
              functional="B3LYP",
              basis="LANL2DZ")
        result = run_gaussian(gjf)
        return parse_homo_lumo(result)

class DockingAgent:
    """Runs AutoDock Vina against PARP-1 / HSA
    and returns predicted binding affinity (ΔG)."""
    def run(self, candidate, receptor="PARP1"):
        pdbqt = prepare_ligand(candidate)
        out   = autodock_vina(pdbqt, receptor,
                              exhaustiveness=16)
        return parse_binding_energy(out)

class SARAgent:
    """Correlates DFT descriptors with docking
    scores across the series; flags best leads."""
    def run(self, series_data):
        df = build_sar_table(series_data)
        df["lead"] = (df["delta_g"] < -7.0) & \
                     (df["homo_lumo_gap"] < 3.5)
        return df[df["lead"]]

# Orchestrator — mirrors the manual PhD workflow
def discover_leads(scaffold, substituents):
    candidates = DesignAgent().run(scaffold, substituents)
    results = []
    for c in candidates:
        dft_data    = DFTAgent().run(c)
        dock_data   = DockingAgent().run(c)
        results.append({**dft_data, **dock_data})
    leads = SARAgent().run(results)
    return leads  # → shortlist for bench synthesis`}
                </pre>
              </div>
            </div>

            {/* Text */}
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
                style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
                Future Research Vision
              </span>
              <h2 className="font-bold mb-4"
                style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.4rem,2.5vw,2rem)", color: "#0F172A" }}>
                Multi-Agent AI for Computational Drug Design
              </h2>
              <p className="text-base leading-relaxed mb-4" style={{ color: "#475569" }}>
                During my PhD, the workflow of designing a Ru complex, running DFT in GAUSSIAN,
                docking in AutoDock, and extracting SAR insights was executed manually — one
                compound at a time, each step requiring human handoff. A natural next step is to
                orchestrate these same tasks as <strong>specialised AI agents</strong> that
                communicate, share data, and iterate in parallel.
              </p>
              <p className="text-base leading-relaxed mb-6" style={{ color: "#475569" }}>
                A <em>Design Agent</em> proposes new ligand combinations; a <em>DFT Agent</em>
                submits and parses GAUSSIAN calculations; a <em>Docking Agent</em> scores each
                candidate against target proteins; a <em>SAR Agent</em> synthesises the results
                into ranked leads — delivering in hours what previously took weeks, and feeding
                the best candidates directly to the bench.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  <div key={item.title} className="flex gap-3 p-4 rounded-xl border"
                    style={{ background: "#F8FAFC", borderColor: "#E2E8F0" }}>
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <div>
                      <h4 className="font-semibold text-xs mb-0.5"
                        style={{ color: "#0F172A", fontFamily: "var(--font-space)" }}>
                        {item.title}
                      </h4>
                      <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Research Workflow */}
      <section className="py-20" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              From Idea to Discovery
            </span>
            <h2 className="font-bold"
              style={{ fontFamily: "var(--font-space)", fontSize: "clamp(1.5rem,3vw,2.25rem)", color: "#fff" }}>
              Research Workflow
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {workflowSteps.map((s) => (
              <div key={s.step} className="flex flex-col items-center text-center gap-3">
                <div className="w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold"
                  style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-ibm)" }}>
                  {s.step}
                </div>
                <p className="font-semibold text-sm" style={{ fontFamily: "var(--font-space)", color: "#fff" }}>
                  {s.label}
                </p>
                <p className="text-xs leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
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
            <Link href="/publications" className="text-sm font-semibold"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              All papers →
            </Link>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {featured.map((p) => (
              <a key={p.id} href={p.doi} target="_blank" rel="noopener noreferrer"
                className="rounded-2xl border p-6 flex flex-col gap-3 hover:shadow-lg transition-all hover:-translate-y-0.5 group"
                style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold" style={{ color: "#0E7C7B", fontFamily: "var(--font-ibm)" }}>
                    {p.year}
                  </span>
                  <span className="px-2 py-0.5 rounded text-xs" style={{ background: "#F1F5F9", color: "#64748B" }}>
                    {p.journal}
                  </span>
                </div>
                <h3 className="font-semibold text-sm leading-snug group-hover:text-teal-700 transition-colors"
                  style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  {p.title}
                </h3>
                <p className="text-xs leading-relaxed" style={{ color: "#64748B" }}>{p.abstract}</p>
                <span className="text-xs font-semibold mt-auto" style={{ color: "#0E7C7B" }}>
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

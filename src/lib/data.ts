export const profile = {
  name: "Dr. Farha Arshi",
  title: "Synthetic, Computational & AI-Driven Chemist",
  tagline: "Accelerating advanced materials discovery through molecular design and artificial intelligence",
  bio: "Inorganic and medicinal chemist specialising in ruthenium-based metallodrugs, uniting hands-on organometallic synthesis with computational design (DFT, molecular docking, ADME). Seeking a postdoctoral role applying structure-based computational design to advance metal-based therapeutic candidates from prediction toward validated leads.",
  email: "farhaarshi02@gmail.com",
  location: "Lucknow, Uttar Pradesh, India",
  website: "https://drfarhaarshi.space",
  links: {
    orcid:       "https://orcid.org/0000-0002-2891-5697",
    linkedin:    "https://linkedin.com/in/farha-arshi-7b2131173",
    researchgate:"https://researchgate.net/profile/Farha-Arshi",
    scholar:     "https://scholar.google.com/citations?user=JAw7WC4AAAAJ",
    scopus:      "https://www.scopus.com/authid/detail.uri?authorId=57918278300",
  },
  cv: "/Farha_Arshi_CV_New.pdf",
};

export const stats = [
  { value: 10,  label: "Ru Complexes",  suffix: "" },
  { value: 5,   label: "Publications",  suffix: "" },
  { value: 26,  label: "Citations",     suffix: "" },
  { value: 4,   label: "H-Index",       suffix: ""  },
  { value: 3,   label: "Conferences",   suffix: ""  },
  { value: 5,   label: "Years Research",suffix: "+" },
];

export const publications = [
  {
    id: 1,
    year: 2026,
    month: "Jan",
    tag: "Published",
    title: "Exploring Schiff Base and its Palladium Complexes: Synthesis, Characterization, Antimycobacterial Activity, DFT, Molecular Docking and ADME Studies",
    journal: "Journal of Molecular Structure",
    doi: "https://doi.org/10.1016/j.molstruc.2025.143704",
    doiShort: "10.1016/j.molstruc.2025.143704",
    topics: ["Palladium", "DFT", "ADME", "Antimycobacterial"],
    abstract: "Synthesis and characterisation of Schiff-base palladium complexes with full computational profiling (DFT, HOMO–LUMO, MEP, molecular docking, ADME) and antimycobacterial evaluation.",
    featured: false,
  },
  {
    id: 2,
    year: 2025,
    month: "Apr",
    tag: "Published",
    title: "New Ru(III) 2,6-Bis(2-Benzimidazolyl)Pyridine Complexes Bearing p-Sub-Benzyl Thiosemicarbazones Schiff Base: Synthesis, Characterization, DNA Binding and Anti-cancer Activity",
    journal: "Chemistry – An Asian Journal",
    doi: "https://doi.org/10.1002/asia.202500059",
    doiShort: "10.1002/asia.202500059",
    topics: ["Ru(III)", "DNA Binding", "Anticancer", "Thiosemicarbazones"],
    abstract: "Ru(III) complexes with 2,6-bis(2-benzimidazolyl)pyridine and p-substituted benzyl thiosemicarbazone Schiff bases; DNA binding, anticancer activity, and full DFT characterisation.",
    featured: true,
  },
  {
    id: 3,
    year: 2025,
    month: "Jan",
    tag: "Published",
    title: "Design, Synthesis, and Biological Insights of Half-Sandwich Ruthenium–Arene Schiff Base Complexes: Molecular Docking and DFT",
    journal: "ChemistrySelect",
    doi: "https://doi.org/10.1002/slct.202404895",
    doiShort: "10.1002/slct.202404895",
    topics: ["Half-Sandwich Ru(II)", "Piano-Stool", "Molecular Docking", "DFT"],
    abstract: "Half-sandwich η⁶-arene Ru(II) complexes with Schiff-base ligands; full structure-based computational analysis and anticancer/antimycobacterial biological evaluation.",
    featured: true,
  },
  {
    id: 4,
    year: 2023,
    month: "Feb",
    tag: "Published",
    title: "Synthesis, DFT Calculation, DNA Binding and Biological Evaluation of Mononuclear Ru(III) Complexes with 2,6-Bis(2-benzimidazolyl)pyridine Bearing p-Substituted Heterochalcones",
    journal: "Russian Journal of General Chemistry",
    doi: "https://doi.org/10.1134/S1070363223020202",
    doiShort: "10.1134/S1070363223020202",
    topics: ["Ru(III)", "DNA Binding", "DFT", "Heterochalcones"],
    abstract: "Mononuclear Ru(III) complexes with benzimidazolyl-pyridine scaffold; DFT, DNA binding studies, and biological evaluation against anticancer and antimycobacterial targets.",
    featured: false,
  },
  {
    id: 5,
    year: 2022,
    month: "Nov",
    tag: "Published",
    title: "Design, Synthesis, Theoretical, Spectroscopic and Molecular Docking Studies of Ruthenium and Zinc Complexes and their Antimycobacterial Study",
    journal: "Asian Journal of Chemistry",
    doi: "https://doi.org/10.14233/ajchem.2022.23867",
    doiShort: "10.14233/ajchem.2022.23867",
    topics: ["Ruthenium", "Zinc", "Antimycobacterial", "Docking"],
    abstract: "Ruthenium and zinc Schiff-base complexes with complete DFT, spectroscopic characterisation, molecular docking, and antimycobacterial evaluation.",
    featured: true,
  },
  {
    id: 6,
    year: 2024,
    month: "Preprint",
    tag: "Preprint",
    title: "Ampicillin-Derived Ruthenium Schiff Base Complexes as Emerging Anticancer and Antimicrobial Candidates: Synthesis, Characterization, DFT, ADME and Molecular Docking",
    journal: "SSRN",
    doi: "https://doi.org/10.2139/ssrn.5512074",
    doiShort: "10.2139/ssrn.5512074",
    topics: ["Ruthenium", "Ampicillin", "Anticancer", "ADME"],
    abstract: "Ampicillin-derived Ru Schiff-base complexes as dual anticancer/antimicrobial candidates with complete DFT, ADME, and molecular docking profiling.",
    featured: false,
  },
];

export const researchAreas = [
  {
    icon: "🧬",
    title: "Ruthenium Chemistry",
    color: "teal",
    desc: "Designing Ru(III) and half-sandwich Ru(II)–arene complexes as next-generation anticancer and antimycobacterial agents with selectivity advantages over cisplatin.",
    techniques: ["Organometallic Synthesis", "NMR / X-ray Diffraction", "DNA Binding Studies", "Anticancer Assays"],
    pubId: 3,
  },
  {
    icon: "💻",
    title: "Computational Drug Design",
    color: "emerald",
    desc: "Applying DFT, HOMO–LUMO analysis, MEP mapping, and molecular docking to rationalise reactivity and predict binding affinities.",
    techniques: ["GAUSSIAN (DFT)", "AutoDock / Discovery Studio", "HOMO–LUMO & MEP", "ADME Prediction"],
    pubId: 2,
  },
  {
    icon: "⚗️",
    title: "Structure–Activity Relationships",
    color: "navy",
    desc: "Correlating electronic structure, ligand substitution patterns, and molecular geometry with experimental biological activity to understand structure–activity relationships across a series of ruthenium complexes.",
    techniques: ["SAR Analysis", "Electronic Descriptor Analysis", "Substituent Effect Studies", "Computational–Experimental Correlation"],
    pubId: 5,
  },
  {
    icon: "🔬",
    title: "Biological Evaluation",
    color: "teal",
    desc: "Collaborating on anticancer, antimycobacterial, antioxidant, and DNA-binding studies and integrating the experimental findings with computational analyses to support mechanistic interpretation.",
    techniques: ["MTT Anticancer Assay", "MIC Antimycobacterial", "DPPH Antioxidant", "DNA Binding Fluorescence"],
    pubId: 4,
  },
];

export const workflowSteps = [
  { step: "01", label: "Molecular Design", desc: "Design Ru(III) and half-sandwich Ru(II)–arene Schiff-base complexes based on coordination chemistry principles and literature-guided ligand selection." },
  { step: "02", label: "Synthesis", desc: "Multistep organometallic synthesis of Ru(III) and half-sandwich Ru(II)–arene Schiff-base complexes." },
  { step: "03", label: "Characterisation", desc: "¹H/¹³C NMR · FT-IR · UV-Vis · Single-crystal X-ray (where applicable) · CHNS elemental analysis." },
  { step: "04", label: "Computational Analysis", desc: "DFT geometry optimisation, HOMO–LUMO, MEP maps, and molecular docking in GAUSSIAN / AutoDock." },
  { step: "05", label: "Biological Evaluation", desc: "Anticancer, antimycobacterial, antioxidant assays; DNA binding kinetics via fluorescence." },
  { step: "06", label: "Structure–Activity Interpretation", desc: "SAR analysis correlates substituent effects with potency to guide the next synthetic cycle." },
];

export const skills = [
  "DFT", "GAUSSIAN", "AutoDock", "Discovery Studio", "RDKit", "ChemDraw",
  "Python", "ADME", "QSAR", "SAR", "Molecular Docking", "Molecular Modelling",
  "¹H NMR", "¹³C NMR", "FT-IR", "UV-Vis", "X-Ray Crystallography",
  "CHNS Analysis", "Organometallic Synthesis", "Schiff-Base Ligands",
  "Scientific Writing", "Peer-Reviewed Publishing", "Junior Mentoring",
];

export const education = [
  {
    period: "2020 – 2026",
    degree: "Ph.D., Chemistry",
    institution: "University of Lucknow",
    detail: "NAAC A++ · Thesis: Synthesis, Characterization and Biological Evaluation of Ruthenium Complexes with Different Amines · Supervisor: Dr. Ashok Kumar Singh",
  },
  {
    period: "2016 – 2018",
    degree: "M.Sc., Chemistry",
    institution: "University of Lucknow",
    detail: "",
  },
  {
    period: "2013 – 2016",
    degree: "B.Sc., Zoology, Botany & Chemistry",
    institution: "University of Lucknow",
    detail: "",
  },
  {
    period: "2019",
    degree: "Certificate — CADD",
    institution: "CSIR – Central Drug Research Institute",
    detail: "8-week intensive programme in molecular modelling, virtual screening, and molecular docking.",
  },
];

export const experience = [
  {
    period: "Dec 2020 – Jan 2026",
    role: "Doctoral Researcher — Inorganic & AI Assisted Materials",
    org: "University of Lucknow, India",
    bullets: [
      "Built a structurally diverse library of ten Ru(III) and half-sandwich Ru–arene Schiff-base complexes as anticancer and antimycobacterial candidates.",
      "Executed multistep organometallic synthesis; confirmed structures by ¹H/¹³C NMR, FT-IR, UV-Vis, X-ray diffraction, and CHNS analysis.",
      "Applied DFT, HOMO–LUMO, and MEP analysis alongside AutoDock molecular docking to establish predictive structure–activity relationships.",
      "Coordinated anticancer, antimycobacterial, and antioxidant evaluation with partner laboratories.",
      "Mentored junior researchers in synthesis, spectroscopic characterisation, and computational workflows.",
    ],
  },
  {
    period: "Jan – Mar 2019",
    role: "Trainee — Computational Approaches to Drug Design (CADD)",
    org: "CSIR – Central Drug Research Institute (CDRI), Lucknow",
    bullets: [
      "Completed an intensive 8-week certificate programme in molecular modelling, virtual screening, and molecular docking.",
      "Gained hands-on exposure to bioinformatics tools applied to pharmaceutical drug discovery.",
    ],
  },
];

export const conferences = [
  {
    type: "Poster · International",
    title: "Synthesis, Characterization, Molecular Docking and Biological Evaluation of Ruthenium Complexes",
    org: "30th ISCB International Conference (ISCB-2025) · International Society for Chemical and Biological Sciences",
    year: 2025,
  },
  {
    type: "Oral · National Seminar",
    title: "Synthesis, Spectral Studies and Molecular Docking of Thiosemicarbazide Ligands and Ruthenium Complexes",
    org: "National Seminar on Advancement and Strategies for Sustainable Development & Environmental Protection · Lucknow",
    year: 2024,
  },
  {
    type: "Paper · National Conference",
    title: "Synthesis, Characterization, Molecular Docking and Biological Evaluation of Ruthenium Complexes",
    org: "Aryabhat Institute of Academics and Research & Goel Institute of Higher Studies (Affiliated to University of Lucknow)",
    year: 2023,
  },
  {
    type: "Workshop",
    title: "HPTLC: Technique and Applications",
    org: "Anchrom Enterprises (I) Pvt. Ltd. & Smriti College of Pharmaceutical Education",
    year: 2022,
  },
];

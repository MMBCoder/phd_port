import Link from "next/link";
import { profile } from "@/lib/data";

export default function Footer() {
  return (
    <footer
      className="py-12 mt-auto"
      style={{ background: "#071A2D", borderTop: "1px solid rgba(255,255,255,0.07)" }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <p
              className="text-lg font-bold mb-2"
              style={{ fontFamily: "var(--font-space)", color: "#fff" }}
            >
              Dr. <span style={{ color: "#0E7C7B" }}>Farha Arshi</span>
            </p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.5)" }}>
              Synthetic &amp; Computational Chemist
            </p>
            <p className="text-sm mt-1" style={{ color: "rgba(255,255,255,0.35)", fontStyle: "italic" }}>
              &ldquo;Advancing medicinal chemistry through computational innovation.&rdquo;
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
               style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space)" }}>
              Navigation
            </p>
            <ul className="space-y-2">
              {[["Home","/"],["About","/about"],["Research","/research"],["Publications","/publications"],["Experience","/experience"],["Contact","/contact"]].map(([l,h]) => (
                <li key={h}>
                  <Link href={h} className="text-sm transition-colors hover:text-teal-400"
                    style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)" }}>
                    {l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Profiles */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4"
               style={{ color: "rgba(255,255,255,0.35)", fontFamily: "var(--font-space)" }}>
              Academic Profiles
            </p>
            <ul className="space-y-2">
              {[
                ["ORCID", profile.links.orcid],
                ["Scopus", profile.links.scopus],
                ["Google Scholar", profile.links.scholar],
                ["ResearchGate", profile.links.researchgate],
                ["LinkedIn", profile.links.linkedin],
              ].map(([label, url]) => (
                <li key={label}>
                  <a href={url} target="_blank" rel="noopener noreferrer"
                     className="text-sm transition-colors hover:text-white"
                     style={{ color: "rgba(255,255,255,0.55)", fontFamily: "var(--font-space)" }}>
                    {label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
             style={{ borderColor: "rgba(255,255,255,0.07)" }}>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-space)" }}>
            © 2026 Dr. Farha Arshi · Lucknow, India
          </p>
          <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end">
            <a href={profile.links.orcid} target="_blank" rel="noopener noreferrer"
               className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ibm)" }}>
              ORCID 0000-0002-2891-5697
            </a>
            <a href={profile.links.scopus} target="_blank" rel="noopener noreferrer"
               className="text-xs" style={{ color: "rgba(255,255,255,0.3)", fontFamily: "var(--font-ibm)" }}>
              Scopus 57918278300
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

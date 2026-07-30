"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { profile } from "@/lib/data";

const links = [
  { href: "/",             label: "Home" },
  { href: "/about",        label: "About" },
  { href: "/research",     label: "Research" },
  { href: "/publications", label: "Publications" },
  { href: "/experience",   label: "Experience" },
  { href: "/contact",      label: "Contact" },
];

/* ── Brand SVG icons ─────────────────────────────────────────── */
function LinkedInSVG() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  );
}

function OrcidSVG() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
      <path d="M12 0C5.372 0 0 5.372 0 12s5.372 12 12 12 12-5.372 12-12S18.628 0 12 0zM7.369 4.378c.525 0 .947.431.947.947s-.422.947-.947.947a.95.95 0 0 1-.947-.947c0-.525.422-.947.947-.947zm-.722 3.038h1.444v10.041H6.647V7.416zm3.562 0h3.9c3.712 0 5.344 2.653 5.344 5.025 0 2.578-2.016 5.025-5.325 5.025h-3.919V7.416zm1.444 1.303v7.444h2.297c2.359 0 3.9-1.564 3.9-3.722 0-2.013-1.425-3.722-3.862-3.722h-2.335z"/>
    </svg>
  );
}

function ScholarSVG() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
      {/* Graduation cap — Google Scholar's visual identity */}
      <path d="M12 3 1 9l4 2.18V17c0 1.1 3.13 3 7 3s7-1.9 7-3v-5.82L23 9 12 3zm6 13.5c0 .5-2.13 1.5-6 1.5s-6-1-6-1.5v-4.14l6 3.28 6-3.28v4.14z"/>
      <path d="M12 5.96 6.43 8.81 12 11.67l5.57-2.86L12 5.96z"/>
    </svg>
  );
}

function ResearchGateSVG() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
      {/* RG cross-mark logo shape */}
      <path d="M19.586 0c-.818 0-1.296.424-1.296 1.34v15.628c0 .879.478 1.33 1.296 1.33h.437c.817 0 1.295-.451 1.295-1.33V1.34C21.318.424 20.840 0 20.023 0zM5.725.072C2.471.072 0 2.624 0 5.89c0 3.265 2.47 5.818 5.725 5.818 3.254 0 5.719-2.553 5.719-5.818C11.444 2.624 8.979.072 5.725.072zm0 2.392c1.85 0 3.329 1.534 3.329 3.426 0 1.891-1.48 3.424-3.33 3.424-1.85 0-3.334-1.533-3.334-3.424 0-1.892 1.483-3.426 3.335-3.426zm9.376 1.962v2.392h2.383v2.393h-2.383v2.392h-2.384V9.211h-2.384V6.818h2.384V4.426z"/>
    </svg>
  );
}

function ScopusSVG() {
  return (
    <svg viewBox="0 0 24 24" width="17" height="17" fill="white" aria-hidden="true">
      <text x="2" y="18" fontSize="18" fontWeight="900" fontFamily="Arial, sans-serif">S</text>
    </svg>
  );
}

const socialLinks = [
  { href: profile.links.linkedin,     Icon: LinkedInSVG,      bg: "#0A66C2", title: "LinkedIn" },
  { href: profile.links.orcid,        Icon: OrcidSVG,         bg: "#A6CE39", title: "ORCID" },
  { href: profile.links.scopus,       Icon: ScopusSVG,        bg: "#E9711C", title: "Scopus" },
  { href: profile.links.scholar,      Icon: ScholarSVG,       bg: "#4285F4", title: "Google Scholar" },
  { href: profile.links.researchgate, Icon: ResearchGateSVG,  bg: "#00CCBB", title: "ResearchGate" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const path = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(7,26,45,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2" style={{ fontFamily: "var(--font-space)" }}>
          <span className="text-base font-bold tracking-tight" style={{ color: "#fff" }}>
            Dr. <span style={{ color: "#0E7C7B" }}>Farha Arshi</span>
          </span>
        </Link>

        {/* Desktop nav links */}
        <ul className="hidden md:flex items-center gap-0.5">
          {links.map((l) => {
            const active = path === l.href;
            return (
              <li key={l.href}>
                <Link href={l.href}
                  className="px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200"
                  style={{
                    fontFamily: "var(--font-space)",
                    color: active ? "#0E7C7B" : "rgba(255,255,255,0.72)",
                    background: active ? "rgba(14,124,123,0.12)" : "transparent",
                  }}>
                  {l.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Social icon buttons — desktop */}
        <div className="hidden md:flex items-center gap-2">
          {socialLinks.map(({ href, Icon, bg, title }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              title={title}
              aria-label={title}
              className="flex items-center justify-center rounded-full transition-all duration-200 hover:scale-110 hover:brightness-115"
              style={{
                width: 34, height: 34,
                background: bg,
                boxShadow: "0 2px 8px rgba(0,0,0,0.35)",
              }}
            >
              <Icon />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button className="md:hidden p-2 rounded-lg" style={{ color: "#fff" }}
          onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-1"
          style={{ background: "rgba(7,26,45,0.98)", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
          {links.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)}
              className="px-4 py-3 rounded-lg text-sm font-medium"
              style={{ color: path === l.href ? "#0E7C7B" : "rgba(255,255,255,0.75)", fontFamily: "var(--font-space)" }}>
              {l.label}
            </Link>
          ))}
          {/* Mobile social icons */}
          <div className="flex gap-3 px-4 pt-4 mt-1 border-t" style={{ borderColor: "rgba(255,255,255,0.08)" }}>
            {socialLinks.map(({ href, Icon, bg, title }) => (
              <a key={href} href={href} target="_blank" rel="noopener noreferrer"
                title={title} aria-label={title}
                className="flex items-center justify-center rounded-full"
                style={{ width: 38, height: 38, background: bg, boxShadow: "0 2px 6px rgba(0,0,0,0.4)" }}>
                <Icon />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

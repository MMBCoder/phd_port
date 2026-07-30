"use client";
import { profile } from "@/lib/data";

/* ══════════════════════════════════════════════════════
   "Open To" card SVGs — 24 × 24 viewport
   ══════════════════════════════════════════════════════ */

function IconPostdoc() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* Monitor */}
      <rect x="2" y="4" width="20" height="13" rx="2"
        stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)"/>
      {/* Molecular orbital on screen */}
      <ellipse cx="12" cy="10" rx="5"  ry="3"  stroke="#0E7C7B" strokeWidth="1" opacity="0.45"/>
      <ellipse cx="12" cy="10" rx="3"  ry="1.8" stroke="#4DD9D8" strokeWidth="1.1" opacity="0.7"/>
      <circle  cx="12" cy="10" r="1.2" fill="#0E7C7B"/>
      {/* Stand */}
      <line x1="12" y1="17" x2="12" y2="20" stroke="#0E7C7B" strokeWidth="1.4"/>
      <line x1="8"  y1="20" x2="16" y2="20" stroke="#0E7C7B" strokeWidth="1.8" strokeLinecap="round"/>
    </svg>
  );
}

function IconCollaboration() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* Globe */}
      <circle cx="12" cy="12" r="9" stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.06)"/>
      <ellipse cx="12" cy="12" rx="5" ry="9" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="3" y1="12" x2="21" y2="12" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      <line x1="5" y1="7"  x2="19" y2="7"  stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      <line x1="5" y1="17" x2="19" y2="17" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.3"/>
      {/* Connection dots */}
      <circle cx="12" cy="3"  r="1.5" fill="#4DD9D8" opacity="0.8"/>
      <circle cx="21" cy="12" r="1.5" fill="#4DD9D8" opacity="0.8"/>
      <circle cx="5"  cy="17" r="1.5" fill="#4DD9D8" opacity="0.7"/>
    </svg>
  );
}

function IconPublication() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* Open book */}
      <path d="M12 5 L4 3 Q3 3 3 4 L3 19 Q3 20 4 20 L12 18 Z"
        stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)"/>
      <path d="M12 5 L20 3 Q21 3 21 4 L21 19 Q21 20 20 20 L12 18 Z"
        stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.05)"/>
      <line x1="12" y1="5" x2="12" y2="18" stroke="#0E7C7B" strokeWidth="1.6"/>
      {/* Text lines */}
      <line x1="5"  y1="9"  x2="10" y2="8.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="5"  y1="12" x2="10" y2="11.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="14" y1="9"  x2="19" y2="8.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="14" y1="12" x2="19" y2="11.5" stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      {/* Pen accent */}
      <line x1="17" y1="15" x2="20" y2="19" stroke="#4DD9D8" strokeWidth="1.5" strokeLinecap="round"/>
      <circle cx="17" cy="15" r="1" fill="#4DD9D8"/>
    </svg>
  );
}

function IconTalk() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* Slide screen */}
      <rect x="2" y="2" width="16" height="11" rx="2"
        stroke="#0E7C7B" strokeWidth="1.3" fill="rgba(14,124,123,0.07)"/>
      <line x1="5" y1="6"  x2="15" y2="6"  stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="5" y1="9"  x2="13" y2="9"  stroke="#0E7C7B" strokeWidth="0.9" opacity="0.4"/>
      <line x1="10" y1="13" x2="10" y2="16" stroke="#0E7C7B" strokeWidth="1.3"/>
      {/* Podium */}
      <path d="M6 16 h8 l1.5 5 h-11 Z"
        stroke="#0E7C7B" strokeWidth="1.2" fill="rgba(14,124,123,0.08)"/>
      {/* Speaker */}
      <circle cx="20" cy="7"  r="2.5" stroke="#4DD9D8" strokeWidth="1.3" fill="rgba(77,217,216,0.12)"/>
      <circle cx="20" cy="5.5" r="1"  fill="#4DD9D8" opacity="0.5"/>
      <path d="M17.5 10 Q20 9 22.5 10" stroke="#4DD9D8" strokeWidth="0.9" fill="none" opacity="0.6"/>
      <line x1="19" y1="9.5" x2="17" y2="12" stroke="#4DD9D8" strokeWidth="0.8" opacity="0.4" strokeDasharray="1.5,1"/>
    </svg>
  );
}

function IconDFTML() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* DFT orbital contours — left half */}
      <ellipse cx="9" cy="12" rx="7" ry="4.5" stroke="#0E7C7B" strokeWidth="1.3" opacity="0.4"/>
      <ellipse cx="9" cy="12" rx="4" ry="2.5" stroke="#0E7C7B" strokeWidth="1.4" opacity="0.7"/>
      <circle  cx="9" cy="12" r="1.5" fill="#0E7C7B" opacity="0.8"/>
      {/* Neural net — right */}
      <circle cx="18" cy="8"  r="1.8" stroke="#4DD9D8" strokeWidth="1.2" fill="rgba(77,217,216,0.1)"/>
      <circle cx="18" cy="16" r="1.8" stroke="#4DD9D8" strokeWidth="1.2" fill="rgba(77,217,216,0.1)"/>
      {/* Bridge lines */}
      <line x1="13" y1="11" x2="16.2" y2="9"  stroke="#0E7C7B" strokeWidth="1" strokeDasharray="2,1.5" opacity="0.5"/>
      <line x1="13" y1="13" x2="16.2" y2="15" stroke="#0E7C7B" strokeWidth="1" strokeDasharray="2,1.5" opacity="0.5"/>
    </svg>
  );
}

function IconIndustry() {
  return (
    <svg viewBox="0 0 24 24" width="24" height="24" fill="none" aria-hidden="true">
      {/* Building */}
      <rect x="3" y="8" width="10" height="13" rx="1"
        stroke="#0E7C7B" strokeWidth="1.4" fill="rgba(14,124,123,0.07)"/>
      <rect x="5"  y="11" width="2" height="2" rx="0.5" fill="#0E7C7B" opacity="0.4"/>
      <rect x="9"  y="11" width="2" height="2" rx="0.5" fill="#0E7C7B" opacity="0.4"/>
      <rect x="5"  y="15" width="2" height="2" rx="0.5" fill="#0E7C7B" opacity="0.4"/>
      <rect x="9"  y="15" width="2" height="2" rx="0.5" fill="#0E7C7B" opacity="0.4"/>
      {/* Chart bars — right */}
      <rect x="15" y="14" width="2" height="7" rx="0.5" fill="#0E7C7B" opacity="0.45"/>
      <rect x="18" y="10" width="2" height="11" rx="0.5" fill="#4DD9D8" opacity="0.7"/>
      <line x1="14" y1="21" x2="21" y2="21" stroke="#0E7C7B" strokeWidth="1" opacity="0.4"/>
      {/* Growth arrow */}
      <path d="M15 16 L18 12 L21 8" stroke="#4DD9D8" strokeWidth="1.3" fill="none" strokeLinecap="round" opacity="0.6"/>
    </svg>
  );
}

const openToItems = [
  {
    Icon: IconPostdoc,
    label: "Postdoctoral Positions",
    desc:  "Computational Modelling and Artificial Intelligence for Advanced Materials",
    accent: "#0E7C7B",
  },
  {
    Icon: IconCollaboration,
    label: "International Research Collaborations",
    desc:  "AI-driven materials discovery across institutions and borders",
    accent: "#0E7C7B",
  },
  {
    Icon: IconPublication,
    label: "Joint Publications",
    desc:  "Computational chemistry, materials science, and scientific machine learning",
    accent: "#6366F1",
  },
  {
    Icon: IconTalk,
    label: "Invited Talks & Seminars",
    desc:  "Workshops and conference presentations on AI-driven materials design",
    accent: "#6366F1",
  },
  {
    Icon: IconDFTML,
    label: "Collaborative Projects",
    desc:  "Integrating DFT, machine learning, and experimental validation",
    accent: "#0E7C7B",
  },
  {
    Icon: IconIndustry,
    label: "Research & Industry Opportunities",
    desc:  "Computational materials science, scientific AI, and advanced functional materials",
    accent: "#F59E0B",
  },
];

export default function ContactPage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="pt-28 pb-16" style={{ background: "#071A2D" }}>
        <div className="max-w-7xl mx-auto px-6">
          <span className="text-xs font-semibold uppercase tracking-widest mb-3 block"
            style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
            Connect
          </span>
          <h1 className="font-bold mb-4"
            style={{ fontFamily: "var(--font-space)", fontSize: "clamp(2rem,4vw,3rem)", color: "#fff" }}>
            Get in Touch
          </h1>
          <p className="text-lg max-w-xl leading-relaxed" style={{ color: "rgba(255,255,255,0.75)" }}>
            Open to postdoctoral opportunities, research collaborations, joint publications, and academic invitations.
          </p>
        </div>
      </section>

      {/* ── Open To ── */}
      <section className="py-16" style={{ background: "#fff" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest mb-2 block"
              style={{ color: "#0E7C7B", fontFamily: "var(--font-space)" }}>
              Opportunities
            </span>
            <h2 className="font-bold text-2xl" style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
              Open To
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {openToItems.map(({ Icon, label, desc, accent }) => (
              <div key={label}
                className="rounded-2xl border p-6 flex flex-col gap-4 hover:shadow-lg transition-all hover:-translate-y-0.5"
                style={{ background: "#F8FAFC", borderColor: "#E2E8F0", borderTop: `3px solid ${accent}` }}>

                {/* Icon badge + context graphic */}
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${accent}10`, border: `1px solid ${accent}20` }}>
                    <Icon />
                  </div>
                  {/* Subtle background accent dot */}
                  <div className="w-8 h-8 rounded-full opacity-10"
                    style={{ background: accent }} />
                </div>

                <div>
                  <h3 className="font-bold text-base leading-snug mb-1.5"
                    style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                    {label}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "#64748B" }}>
                    {desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Contact + Form ── */}
      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — contact info */}
            <div className="flex flex-col gap-6">

              {/* Contact details */}
              <div className="rounded-2xl border p-7 flex flex-col gap-5" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-sm uppercase tracking-widest"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                  Contact Details
                </h3>
                {[
                  { label: "Email",    value: profile.email,           href: `mailto:${profile.email}` },
                  { label: "Location", value: profile.location,        href: undefined },
                  { label: "ORCID",    value: "0000-0002-2891-5697",   href: profile.links.orcid },
                  { label: "Scopus",   value: "57918278300",           href: profile.links.scopus },
                ].map(({ label, value, href }) => (
                  <div key={label} className="flex items-start gap-3">
                    <span className="text-xs font-semibold w-20 flex-shrink-0 pt-0.5"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                      {label}
                    </span>
                    {href ? (
                      <a href={href} target="_blank" rel="noopener noreferrer"
                        className="text-base font-medium hover:opacity-80 transition-opacity"
                        style={{ color: "#0E7C7B" }}>
                        {value}
                      </a>
                    ) : (
                      <span className="text-base" style={{ color: "#475569" }}>{value}</span>
                    )}
                  </div>
                ))}

                <a href={profile.cv} download
                  className="mt-2 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:scale-105 w-fit"
                  style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}>
                  ↓ Download CV (PDF)
                </a>
              </div>

              {/* Academic profiles */}
              <div className="rounded-2xl border p-7" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-5"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                  Academic Profiles
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {[
                    { label: "ORCID",         href: profile.links.orcid,        badge: { bg: "#A6CE39", text: "iD",  color: "#fff" } },
                    { label: "Scopus",         href: profile.links.scopus,       badge: { bg: "#E9711C", text: "S",   color: "#fff" } },
                    { label: "Google Scholar", href: profile.links.scholar,      badge: { bg: "#4285F4", text: "G",   color: "#fff" } },
                    { label: "ResearchGate",   href: profile.links.researchgate, badge: { bg: "#00CCBB", text: "RG",  color: "#fff" } },
                    { label: "LinkedIn",       href: profile.links.linkedin,     badge: { bg: "#0A66C2", text: "in",  color: "#fff" } },
                  ].map(({ label, href, badge }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
                      style={{ background: "#F8FAFC", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                      <span className="w-6 h-6 rounded flex items-center justify-center text-xs font-black flex-shrink-0"
                        style={{ background: badge.bg, color: badge.color, fontSize: "10px" }}>
                        {badge.text}
                      </span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — message form */}
            <div>
              <div className="rounded-2xl border p-8" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-lg mb-6"
                  style={{ fontFamily: "var(--font-space)", color: "#0F172A" }}>
                  Send a Message
                </h3>
                <form id="contact-form" noValidate className="flex flex-col gap-5"
                  onSubmit={undefined}>
                  <div>
                    <label htmlFor="cf-name" className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                      Your Name
                    </label>
                    <input id="cf-name" type="text" name="name" placeholder="e.g. Prof. Smith" required
                      className="w-full px-4 py-3 rounded-xl border text-base outline-none transition-colors focus:border-teal-500"
                      style={{ borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)", background: "#F8FAFC" }} />
                  </div>
                  <div>
                    <label htmlFor="cf-email" className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                      Email Address
                    </label>
                    <input id="cf-email" type="email" name="email" placeholder="you@institution.edu" required
                      className="w-full px-4 py-3 rounded-xl border text-base outline-none transition-colors focus:border-teal-500"
                      style={{ borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)", background: "#F8FAFC" }} />
                  </div>
                  <div>
                    <label htmlFor="cf-msg" className="block text-xs font-semibold uppercase tracking-wide mb-1.5"
                      style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                      Message
                    </label>
                    <textarea id="cf-msg" name="message" rows={5} placeholder="Hello Dr. Arshi, I'd like to discuss..." required
                      className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-colors focus:border-teal-500 resize-y"
                      style={{ borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)", background: "#F8FAFC" }} />
                  </div>
                  <button type="submit"
                    className="px-6 py-3 rounded-xl text-sm font-semibold transition-all hover:scale-105 w-fit"
                    style={{ background: "#0E7C7B", color: "#fff", fontFamily: "var(--font-space)" }}
                    onClick={(e) => {
                      e.preventDefault();
                      const name  = (document.getElementById("cf-name")  as HTMLInputElement)?.value.trim();
                      const email = (document.getElementById("cf-email") as HTMLInputElement)?.value.trim();
                      const msg   = (document.getElementById("cf-msg")   as HTMLTextAreaElement)?.value.trim();
                      if (!name || !email || !msg) return;
                      window.location.href = `mailto:farhaarshi02@gmail.com?subject=${encodeURIComponent(`Message from ${name}`)}&body=${encodeURIComponent(`From: ${name} <${email}>\n\n${msg}`)}`;
                    }}>
                    Send Message
                  </button>
                  <p className="text-sm" style={{ color: "#94A3B8" }}>
                    * This opens your default email client to send the message.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

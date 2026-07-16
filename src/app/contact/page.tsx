"use client";
import { profile } from "@/lib/data";

export default function ContactPage() {
  return (
    <>
      {/* Hero */}
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

      <section className="py-20" style={{ background: "#F8FAFC" }}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

            {/* Left — contact info */}
            <div className="flex flex-col gap-6">
              {/* Open to */}
              <div className="rounded-2xl border p-7" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-sm uppercase tracking-widest mb-5"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                  Open To
                </h3>
                <ul className="space-y-3">
                  {[
                    "Postdoctoral positions in computational or medicinal inorganic chemistry",
                    "Research collaboration on metallodrug design & screening",
                    "Joint publications and dataset sharing",
                    "Academic talks, seminars, and conference invitations",
                    "Industry research roles in CADD / drug discovery",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3 text-base" style={{ color: "#475569" }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ background: "#0E7C7B" }} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Contact details */}
              <div className="rounded-2xl border p-7 flex flex-col gap-5" style={{ background: "#fff", borderColor: "#E2E8F0" }}>
                <h3 className="font-bold text-sm uppercase tracking-widest"
                  style={{ color: "#94A3B8", fontFamily: "var(--font-space)" }}>
                  Contact Details
                </h3>
                {[
                  { label: "Email", value: profile.email, href: `mailto:${profile.email}` },
                  { label: "Location", value: profile.location, href: undefined },
                  { label: "ORCID", value: "0000-0002-2891-5697", href: profile.links.orcid },
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
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "ORCID",         href: profile.links.orcid,        icon: "🆔" },
                    { label: "Google Scholar", href: profile.links.scholar,      icon: "🎓" },
                    { label: "ResearchGate",   href: profile.links.researchgate, icon: "📄" },
                    { label: "LinkedIn",       href: profile.links.linkedin,     icon: "🔗" },
                  ].map(({ label, href, icon }) => (
                    <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-2.5 px-4 py-3 rounded-xl border text-sm font-medium transition-all hover:shadow-sm hover:-translate-y-0.5"
                      style={{ background: "#F8FAFC", borderColor: "#E2E8F0", color: "#0F172A", fontFamily: "var(--font-space)" }}>
                      <span>{icon}</span>
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

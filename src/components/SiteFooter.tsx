import { Link } from "@tanstack/react-router";
import { AMAZON_URL, CONTACT, NAV_LINKS, SITE_NAME } from "@/config/site";
import { Flourish } from "@/components/Flourish";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="texture-dark bg-espresso text-ivory/85">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-12">
          {/* Brand */}
          <div className="md:col-span-5">
            <p className="font-display text-2xl font-medium text-ivory">
              There Is Still <span className="italic text-gold">Romance</span> in Food
            </p>
            <p className="mt-1 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-gold/80">
              by Chef Richard Carr
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-ivory/65">
              A celebration of the art of cooking and the timeless connection between food, passion, and togetherness.
              Signed hardcover copies are available through our dedicated ordering website.
            </p>
            <Flourish className="mt-6" tone="gold" />
          </div>

          {/* Quick links */}
          <nav className="md:col-span-3" aria-label="Footer">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-gold">Explore</p>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sm text-ivory/75 transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="md:col-span-4">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-gold">Correspondence</p>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="text-ivory/75 transition-colors hover:text-gold"
                >
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="text-ivory/75 transition-colors hover:text-gold">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={AMAZON_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/75 transition-colors hover:text-gold"
                >
                  View on Amazon ↗
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-ivory/10 pt-8 text-[0.72rem] tracking-wide text-ivory/50 sm:flex-row">
          <p>© {year} {SITE_NAME} · Chef Richard Carr. All rights reserved.</p>
          <p className="italic text-ivory/40">Purchasing is handled on our separate ordering website.</p>
        </div>
      </div>
    </footer>
  );
}

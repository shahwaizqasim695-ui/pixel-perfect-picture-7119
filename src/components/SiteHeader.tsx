import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { NAV_LINKS, SITE_NAME } from "@/config/site";
import { OrderButton } from "@/components/OrderButton";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/70 bg-background/92 backdrop-blur-md transition-all duration-500",
        scrolled ? "shadow-[0_10px_30px_-18px_oklch(0.267_0.024_40.5/0.35)]" : "",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between gap-6 px-5 transition-all duration-500 sm:px-8",
          scrolled ? "py-2.5" : "py-4",
        )}
      >
        {/* Brand */}
        <Link to="/" className="group flex flex-col items-start leading-none" aria-label={`${SITE_NAME} — home`}>
          <span
            className={cn(
              "font-display font-semibold text-primary transition-all duration-500",
              scrolled ? "text-lg" : "text-xl sm:text-2xl",
            )}
          >
            There Is Still <span className="italic text-gold-deep">Romance</span> in Food
          </span>
          <span
            className={cn(
              "mt-1 text-[0.62rem] font-bold uppercase tracking-[0.32em] text-muted-foreground transition-all duration-500",
              scrolled && "hidden sm:block",
            )}
          >
            by Chef Richard Carr
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              data-active={location.pathname === link.to}
              className="nav-link text-[0.72rem] font-bold uppercase tracking-[0.22em] text-foreground/80 transition-colors hover:text-primary data-[active=true]:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <OrderButton className="hidden px-5 py-2.5 !text-[0.66rem] md:inline-flex">Order Signed Hardcover</OrderButton>

          {/* Mobile toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((v) => !v)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 flex-col items-center justify-center gap-[5px] rounded-sm border border-border bg-card text-primary lg:hidden"
          >
            <span className={cn("h-px w-5 bg-current transition-transform duration-300", menuOpen && "translate-y-[6px] rotate-45")} />
            <span className={cn("h-px w-5 bg-current transition-opacity duration-300", menuOpen && "opacity-0")} />
            <span className={cn("h-px w-5 bg-current transition-transform duration-300", menuOpen && "-translate-y-[6px] -rotate-45")} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          "grid overflow-hidden border-t border-border/60 bg-background transition-[grid-template-rows] duration-400 ease-out lg:hidden",
        )}
        style={{ gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
      >
        <nav className="overflow-hidden" aria-label="Mobile">
          <ul className="flex flex-col px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.to}>
                <Link
                  to={link.to}
                  className={cn(
                    "block border-b border-border/50 py-4 font-display text-2xl transition-colors",
                    location.pathname === link.to ? "italic text-primary" : "text-foreground/85 hover:text-primary",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="pt-6 pb-3">
              <OrderButton className="w-full">Order Signed Hardcover</OrderButton>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

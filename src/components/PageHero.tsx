import type { ReactNode } from "react";
import { Flourish } from "@/components/Flourish";
import { Reveal } from "@/components/Reveal";
import { cn } from "@/lib/utils";

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  subtitle: ReactNode;
  className?: string;
}

/** Shared editorial page header band for inner pages. */
export function PageHero({ eyebrow, title, subtitle, className }: PageHeroProps) {
  return (
    <section className={cn("texture-parchment border-b border-border/60 bg-cream/70", className)}>
      <div className="mx-auto max-w-4xl px-5 py-20 text-center sm:px-8 lg:py-24">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <Flourish className="mx-auto mt-6" />
          <p className="mx-auto mt-5 max-w-2xl font-display text-xl italic text-espresso/80 sm:text-2xl">{subtitle}</p>
        </Reveal>
      </div>
    </section>
  );
}

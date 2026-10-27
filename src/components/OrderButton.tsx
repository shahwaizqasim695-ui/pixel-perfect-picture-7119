import type { ReactNode } from "react";
import { WORDPRESS_STORE_URL } from "@/config/site";
import { cn } from "@/lib/utils";

interface OrderButtonProps {
  children: ReactNode;
  className?: string;
  /** Show the small "ordering opens soon" caption while the store URL is unset. */
  withNote?: boolean;
}

/**
 * The single purchase CTA used across the site. While WORDPRESS_STORE_URL is
 * empty it renders a disabled button (with an optional informational note);
 * once the URL is configured it links to the external WordPress ordering page.
 */
export function OrderButton({ children, className, withNote = false }: OrderButtonProps) {
  if (WORDPRESS_STORE_URL) {
    return (
      <a
        href={WORDPRESS_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("btn btn-primary", className)}
      >
        {children}
      </a>
    );
  }

  return (
    <span className="inline-flex flex-col items-center gap-2">
      <button type="button" disabled aria-disabled="true" className={cn("btn btn-primary", className)}>
        {children}
      </button>
      {withNote && (
        <span className="text-[0.7rem] italic tracking-wide text-muted-foreground">
          Online ordering opens soon — for now, please {""}
          <a href="mailto:ChefCarr@AOL.com" className="underline decoration-gold underline-offset-2 hover:text-primary">
            email Chef Carr
          </a>{" "}
          to reserve a signed copy.
        </span>
      )}
    </span>
  );
}

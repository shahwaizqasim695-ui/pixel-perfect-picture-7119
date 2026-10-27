/**
 * Central site configuration.
 *
 * WORDPRESS_STORE_URL — every "Order Signed Hardcover" style CTA reads this
 * single constant. Leave it empty until the WordPress ordering page is live;
 * all purchase buttons then show a graceful "coming soon" state. Set the URL
 * once and every CTA across the site links there.
 */
export const WORDPRESS_STORE_URL = "";

export const AMAZON_URL = "https://www.amazon.com/dp/0974058106";

export const SITE_NAME = "There Is Still Romance in Food";

export const CONTACT = {
  email: "ChefCarr@AOL.com",
  phoneDisplay: "757-879-6580",
  phoneHref: "tel:+17578796580",
};

export const BOOK = {
  title: "There Is Still Romance in Food",
  author: "Chef Richard Carr",
  format: "Hardcover",
  isbn: "0974058106",
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "The Book", to: "/book" },
  { label: "About the Author", to: "/author" },
  { label: "FAQ", to: "/faq" },
  { label: "Contact", to: "/contact" },
] as const;

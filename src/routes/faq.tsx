import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Accordion, type FaqItem } from "@/components/ui/accordion";
import { CONTACT } from "@/config/site";

export const Route = createFileRoute("/faq")({
  component: FaqPage,
  head: () => ({
    meta: [
      { title: "FAQ — There Is Still Romance in Food | Chef Richard Carr" },
      {
        name: "description",
        content:
          "Frequently asked questions about There Is Still Romance in Food by Chef Richard Carr — the hardcover edition, signed copies, and how to order.",
      },
      { property: "og:title", content: "FAQ — There Is Still Romance in Food" },
      {
        property: "og:description",
        content: "Answers about the book, signed hardcover copies, and how to order.",
      },
      { property: "og:url", content: "/faq" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/faq" }],
  }),
});

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is There Is Still Romance in Food about?",
    answer:
      "It is a celebration of the close relationship between food and romance. Chef Carr shows how fast food, fast dinners, and take-aways have stolen the heart out of our mealtimes — and how the art of cooking can inspire, stimulate, and satisfy again, reminding us how seductive a gorgeous dish can be.",
  },
  {
    question: "Who is the author?",
    answer:
      "The book was written by Chef Richard Carr. You can read more about him and the story behind the book on the About the Author page.",
  },
  {
    question: "Is the book available in hardcover?",
    answer:
      "Yes. There Is Still Romance in Food is available in hardcover only (ISBN 0974058106) — a beautifully made edition intended to be kept, gifted, and revisited.",
  },
  {
    question: "Can I order a signed copy?",
    answer:
      "Yes — signed hardcover copies can be ordered. Ordering is handled on our separate ordering website: the “Order Signed Hardcover” button will take you there. While that page is being prepared, you are welcome to contact Chef Carr directly by email.",
  },
  {
    question: "Where can I purchase the book?",
    answer:
      "Signed copies are purchased through our dedicated ordering website, reached via any “Order Signed Hardcover” button on this site. The book is also listed on Amazon.",
  },
  {
    question: "Can I request a personalized inscription?",
    answer:
      "Personalized inscriptions are not offered at this time. Signed copies are available, and for special requests you are welcome to contact Chef Carr directly.",
  },
  {
    question: "How can I contact the author?",
    answer: `You can reach Chef Richard Carr by email at ${CONTACT.email} or by phone at ${CONTACT.phoneDisplay}. Visit the Contact page for details.`,
  },
];

function FaqPage() {
  return (
    <main>
      <PageHero
        eyebrow="Frequently Asked Questions"
        title={
          <>
            Everything You'd <span className="gold-text italic">Like to Know</span>
          </>
        }
        subtitle="About the book, signed copies, and ordering"
      />

      <section className="bg-background">
        <div className="mx-auto max-w-3xl px-5 py-20 sm:px-8 lg:py-24">
          <Reveal>
            <Accordion items={FAQ_ITEMS} />
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-14 rounded-xl border border-border bg-cream/70 px-8 py-8 text-center">
              <p className="font-display text-2xl text-primary">Still curious?</p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Chef Carr is happy to hear from readers. Reach him at{" "}
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="font-semibold text-primary underline decoration-gold underline-offset-4"
                >
                  {CONTACT.email}
                </a>{" "}
                or{" "}
                <a
                  href={CONTACT.phoneHref}
                  className="font-semibold text-primary underline decoration-gold underline-offset-4"
                >
                  {CONTACT.phoneDisplay}
                </a>
                , or visit the{" "}
                <Link to="/contact" className="font-semibold text-primary underline decoration-gold underline-offset-4">
                  Contact page
                </Link>
                .
              </p>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}

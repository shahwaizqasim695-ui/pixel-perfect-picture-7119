import { createFileRoute, Link } from "@tanstack/react-router";
import bookCover from "@/assets/book-cover.jpg.asset.json";
import kitchenAtmosphere from "@/assets/kitchen-atmosphere.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Flourish } from "@/components/Flourish";
import { BOOK, SITE_NAME } from "@/config/site";

export const Route = createFileRoute("/author")({
  component: AuthorPage,
  head: () => ({
    meta: [
      { title: `About the Author — ${SITE_NAME} | Chef Richard Carr` },
      {
        name: "description",
        content:
          "Meet Chef Richard Carr, author of There Is Still Romance in Food — a chef with a romantic's heart defending the beautiful, unhurried meal.",
      },
      { property: "og:title", content: `About the Author — ${SITE_NAME}` },
      {
        property: "og:description",
        content: "The Man Behind the Romance — meet Chef Richard Carr, author of There Is Still Romance in Food.",
      },
      { property: "og:url", content: "/author" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/author" }],
  }),
});

function AuthorIntro() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-28">
        <Reveal className="lg:col-span-5">
          {/* Official portrait placeholder — swap this frame for Chef Carr's portrait when available */}
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden="true" />
            <div className="relative flex aspect-[4/5] items-center justify-center bg-cream shadow-[var(--shadow-lift)]">
              <div className="text-center">
                <p className="font-display text-8xl font-semibold text-gold-deep/70">RC</p>
                <p className="mt-4 px-10 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Official portrait coming soon
                </p>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-7 lg:pl-10">
          <p className="eyebrow">Meet Chef Richard Carr</p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            A Chef with a <span className="italic text-gold-deep">Romantic's Heart</span>
          </h2>
          <Flourish className="mt-6" />
          <p className="dropcap mt-8 text-base leading-loose text-muted-foreground sm:text-lg">
            There Is Still Romance in Food was born of a simple conviction: that the meal, properly loved, is one of
            the last truly romantic rituals we share. Chef Richard Carr watched fast food, fast dinners, and
            take-aways steal the heart out of mealtimes — and decided to answer with a book instead of a sigh.
          </p>
          <p className="mt-6 text-base leading-loose text-muted-foreground sm:text-lg">
            Between these pages he shows how the art of cooking can inspire, stimulate, and satisfy, and how seductive
            a gorgeous dish can be when it is made slowly, served warmly, and shared with someone dear.
          </p>

          {/* Placeholder for the official author biography.
              EDIT HERE: replace this block with Chef Carr's approved biography. */}
          <div className="mt-8 rounded-lg border border-dashed border-gold/60 bg-secondary/50 px-6 py-5">
            <p className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-gold-deep">Official Biography</p>
            <p className="mt-2 text-sm italic leading-relaxed text-muted-foreground">
              Chef Carr's official biography will appear here. This space is reserved for his approved text.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AuthorKitchen() {
  return (
    <section className="texture-dark bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <img
            src={kitchenAtmosphere}
            alt="A warm professional kitchen at dusk, with copper pots and golden light"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full max-w-md rounded-sm object-cover shadow-[var(--shadow-book)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow eyebrow--ivory">In the Kitchen</p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Where Every <span className="gold-text italic">Story Begins</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/75 sm:text-lg">
            Copper pots, golden light, and a jacket laid down after a long service — the quiet moments where a love of
            food is carried home. It is from kitchens like these that the romance in this book was written.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function AuthorBookPromo() {
  return (
    <section className="bg-cream/60 texture-parchment">
      <div className="mx-auto grid max-w-5xl items-center gap-12 px-5 py-20 text-center sm:px-8 lg:grid-cols-[auto_1fr] lg:py-24 lg:text-left">
        <Reveal>
          <Link to="/book" className="book-frame mx-auto block w-[200px] transition-transform duration-700 hover:-translate-y-2">
            <img
              src={bookCover.url}
              alt={`Official cover of ${BOOK.title} by ${BOOK.author}`}
              width={394}
              height={500}
              loading="lazy"
              className="block w-full"
            />
          </Link>
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow">His Book</p>
          <h2 className="mt-5 font-display text-4xl font-medium text-primary sm:text-5xl">
            Explore <span className="italic text-gold-deep">His Book</span>
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted-foreground lg:mx-0">
            {BOOK.title} — available in hardcover. Rediscover the art of cooking, the romance of dining, and the
            connection that brings us back to the table.
          </p>
          <div className="mt-8">
            <Link to="/book" className="btn btn-primary">
              Explore His Book
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function AuthorPage() {
  return (
    <main>
      <PageHero
        eyebrow="About the Author"
        title={
          <>
            The Man Behind the <span className="gold-text italic">Romance</span>
          </>
        }
        subtitle="Meet Chef Richard Carr"
      />
      <AuthorIntro />
      <AuthorKitchen />
      <AuthorBookPromo />
    </main>
  );
}

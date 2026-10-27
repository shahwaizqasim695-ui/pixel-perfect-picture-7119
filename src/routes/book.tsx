import { createFileRoute, Link } from "@tanstack/react-router";
import bookCover from "@/assets/book-cover.jpg.asset.json";
import tableSetting from "@/assets/table-setting.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { OrderButton } from "@/components/OrderButton";
import { Flourish } from "@/components/Flourish";
import { AMAZON_URL, BOOK, SITE_NAME } from "@/config/site";

export const Route = createFileRoute("/book")({
  component: BookPage,
  head: () => ({
    meta: [
      { title: `The Book — ${SITE_NAME} | Chef Richard Carr` },
      {
        name: "description",
        content:
          "There Is Still Romance in Food by Chef Richard Carr — a culinary celebration of cooking, dining, and romance. Available in hardcover.",
      },
      { property: "og:title", content: `The Book — ${SITE_NAME}` },
      {
        property: "og:description",
        content:
          "A Culinary Celebration by Chef Richard Carr. Rediscover how the art of cooking can inspire, stimulate, and satisfy.",
      },
      { property: "og:url", content: "/book" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
});

function BookHeader() {
  return (
    <PageHero
      eyebrow="The Book"
      title={
        <>
          There Is Still <span className="gold-text italic">Romance</span> in Food
        </>
      }
      subtitle="A Culinary Celebration by Chef Richard Carr"
    />
  );
}

function BookPresentation() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
        <Reveal>
          <div className="relative mx-auto w-fit">
            <div className="absolute -left-6 -top-6 h-full w-full border border-gold/40" aria-hidden="true" />
            <div className="book-frame relative w-[280px] sm:w-[320px]">
              <img
                src={bookCover.url}
                alt={`Official cover of ${BOOK.title} by ${BOOK.author}`}
                width={394}
                height={500}
                className="block w-full"
              />
            </div>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <p className="eyebrow">About This Book</p>
          <blockquote className="mt-8 border-l-2 border-gold pl-6 sm:pl-8">
            <p className="font-display text-xl leading-relaxed text-espresso/90 sm:text-2xl">
              "Food and romance, as Mr. Carr reminds us, have had a close relationship all through the ages. Yet, in
              this day and age, they seem to be drifting apart. Fast food, fast dinners and take-aways of every
              description have stolen the heart out of our mealtimes, making them more of a refuelling stop than an
              enjoyable experience with those we love. There is Still Romance in Food will show you again how the Art
              of Cooking can inspire, stimulate and satisfy and how seductive a gorgeous dish can be."
            </p>
          </blockquote>

          <dl className="mt-10 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-border pt-8 text-sm">
            <div>
              <dt className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-gold-deep">Title</dt>
              <dd className="mt-1.5 text-foreground">{BOOK.title}</dd>
            </div>
            <div>
              <dt className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-gold-deep">Author</dt>
              <dd className="mt-1.5 text-foreground">{BOOK.author}</dd>
            </div>
            <div>
              <dt className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-gold-deep">Format</dt>
              <dd className="mt-1.5 text-foreground">{BOOK.format}</dd>
            </div>
            <div>
              <dt className="text-[0.66rem] font-bold uppercase tracking-[0.28em] text-gold-deep">ISBN</dt>
              <dd className="mt-1.5 text-foreground">{BOOK.isbn}</dd>
            </div>
          </dl>
        </Reveal>
      </div>
    </section>
  );
}

function BookQuote() {
  return (
    <section className="texture-dark bg-primary">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-24">
        <Reveal>
          <img
            src={tableSetting}
            alt="A romantic table setting with a rose, red wine, and candlelight"
            width={1200}
            height={1504}
            loading="lazy"
            className="aspect-[4/5] w-full max-w-md rounded-sm object-cover shadow-[var(--shadow-book)]"
          />
        </Reveal>
        <Reveal delay={120}>
          <p className="eyebrow eyebrow--ivory">Make This Book Part of Your Collection</p>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            A Signed Copy, <span className="gold-text italic">Kept and Given</span>
          </h2>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-ivory/75 sm:text-lg">
            A signed hardcover makes a beautiful gift — for the host who cooks from the heart, the couple building
            their own table, or anyone who believes dinner should still feel like an occasion.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <OrderButton className="btn-gold" withNote>
              Order Signed Hardcover
            </OrderButton>
            <a
              href={AMAZON_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-outline border-gold/60 text-ivory hover:bg-ivory/10 hover:border-gold"
            >
              View on Amazon ↗
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function BookPage() {
  return (
    <main>
      <BookHeader />
      <BookPresentation />
      <BookQuote />
      <section className="bg-cream/60 py-16 text-center">
        <Reveal>
          <p className="text-sm text-muted-foreground">
            Purchasing is handled on our separate ordering website — this page is for discovery, not checkout.{" "}
            <Link to="/faq" className="underline decoration-gold underline-offset-4 hover:text-primary">
              Read the FAQ
            </Link>
          </p>
        </Reveal>
      </section>
    </main>
  );
}

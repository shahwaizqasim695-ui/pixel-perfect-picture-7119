import { createFileRoute, Link } from "@tanstack/react-router";
import bookCover from "@/assets/book-cover.jpg.asset.json";
import heroDining from "@/assets/hero-dining.jpg";
import foodEditorial from "@/assets/food-editorial.jpg";
import { Reveal } from "@/components/Reveal";
import { OrderButton } from "@/components/OrderButton";
import { Flourish } from "@/components/Flourish";
import { BOOK, SITE_NAME } from "@/config/site";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: `${SITE_NAME} | Chef Richard Carr` },
      {
        name: "description",
        content:
          "Discover There Is Still Romance in Food by Chef Richard Carr, an inspiring celebration of cooking, dining, and romance.",
      },
      { property: "og:title", content: `${SITE_NAME} | Chef Richard Carr` },
      {
        property: "og:description",
        content:
          "Rediscover the art of cooking, dining, and connection in Chef Richard Carr's inspiring celebration of the culinary arts.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function SectionEyebrow({ children, ivory = false }: { children: string; ivory?: boolean }) {
  return <p className={ivory ? "eyebrow eyebrow--ivory" : "eyebrow"}>{children}</p>;
}

/* ---------------- Hero ---------------- */

function Hero() {
  return (
    <section className="texture-parchment relative overflow-hidden bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 pb-24 pt-16 sm:px-8 lg:grid-cols-2 lg:gap-10 lg:pb-32 lg:pt-24">
        {/* Copy */}
        <Reveal className="max-w-xl">
          <SectionEyebrow>A Celebration of Food &amp; Romance</SectionEyebrow>
          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.05] text-primary sm:text-6xl lg:text-[4.2rem]">
            There Is Still <span className="gold-text italic">Romance</span> in Food
          </h1>
          <p className="mt-5 font-display text-2xl italic text-espresso/85">
            Rediscover the Art of Cooking, Dining, and Connection.
          </p>
          <div className="rule-gold mt-8 max-w-xs" />
          <p className="mt-8 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Explore the beautiful relationship between food and romance through Chef Richard Carr's inspiring
            celebration of the culinary arts.
          </p>
          <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
            <Link to="/book" className="btn btn-gold">
              Discover the Book
            </Link>
            <OrderButton className="btn-outline">Order Signed Hardcover</OrderButton>
          </div>
        </Reveal>

        {/* Composition: candlelit table + floating cover */}
        <Reveal delay={150} className="relative">
          <div className="relative mx-auto max-w-lg lg:max-w-none">
            <div className="overflow-hidden rounded-t-[10rem] shadow-[var(--shadow-book)]">
              <img
                src={heroDining}
                alt="A candlelit fine-dining table set with wine and an elegant plated meal"
                width={1600}
                height={1200}
                className="h-[420px] w-full object-cover sm:h-[520px]"
              />
            </div>
            <div className="book-frame absolute -bottom-8 left-1/2 w-[230px] -translate-x-1/2 sm:left-auto sm:right-[-1.5rem] sm:translate-x-0 sm:w-[260px]">
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
      </div>
    </section>
  );
}

/* ---------------- The Romance of Food ---------------- */

function RomanceOfFood() {
  return (
    <section className="bg-cream/60 texture-parchment">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 rounded-full border border-gold/40" aria-hidden="true" />
            <img
              src={foodEditorial}
              alt="An elegantly plated dish under warm candlelight"
              width={1200}
              height={1504}
              loading="lazy"
              className="relative aspect-[4/5] w-full rounded-sm object-cover shadow-[var(--shadow-lift)]"
            />
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:pl-10">
          <SectionEyebrow>The Romance of Food</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-primary sm:text-5xl">
            Because Every Great Meal <span className="italic text-gold-deep">Tells a Story</span>
          </h2>
          <Flourish className="mt-6" />
          <p className="dropcap mt-8 text-base leading-loose text-muted-foreground sm:text-lg">
            A meal is never only about the food on the plate. It is the candle lowered between two people, the recipe
            remembered from a grandmother's kitchen, the unhurried evening that turns strangers into companions and
            companions into loves. Cooking is an act of devotion; dining, an act of celebration.
          </p>
          <p className="mt-6 text-base leading-loose text-muted-foreground sm:text-lg">
            There Is Still Romance in Food invites you to slow down and return feeling to the table — to rediscover
            how a beautifully prepared dish can seduce the senses, awaken memory, and draw the people we love a little
            closer.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Featured Book ---------------- */

function FeaturedBook() {
  return (
    <section className="bg-background">
      <div className="mx-auto max-w-7xl px-5 py-24 text-center sm:px-8 lg:py-32">
        <Reveal>
          <SectionEyebrow>Featured Book</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium text-primary sm:text-5xl">Discover the Book</h2>
          <Flourish className="mx-auto mt-6" />
        </Reveal>

        <div className="mx-auto mt-16 grid max-w-4xl items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <div className="book-frame mx-auto w-[260px] transition-transform duration-700 hover:-translate-y-2 sm:w-[300px]">
              <img
                src={bookCover.url}
                alt={`Official cover of ${BOOK.title} by ${BOOK.author}`}
                width={394}
                height={500}
                loading="lazy"
                className="block w-full"
              />
            </div>
          </Reveal>
          <Reveal delay={120} className="text-left">
            <p className="text-[0.68rem] font-bold uppercase tracking-[0.3em] text-gold-deep">Hardcover Edition</p>
            <h3 className="mt-3 font-display text-3xl font-medium text-primary sm:text-4xl">{BOOK.title}</h3>
            <p className="mt-2 font-display text-xl italic text-espresso/80">by {BOOK.author}</p>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              A warm, elegant reminder that the art of cooking can inspire, stimulate, and satisfy — and that a gorgeous
              dish, shared by candlelight, remains one of life's great romances.
            </p>
            <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row">
              <Link to="/book" className="btn btn-primary">
                Explore the Book
              </Link>
              <OrderButton className="btn-outline">Order Signed Hardcover</OrderButton>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------------- What Makes This Book Special ---------------- */

const FEATURES = [
  {
    title: "The Art of Cooking",
    body: "Celebrate the creativity and passion behind preparing beautiful meals — where every dish becomes an expression of care.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="h-10 w-10" aria-hidden="true">
        <path d="M16 10c0-4 3.6-7 8-7s8 3 8 7" />
        <path d="M13 18c-2.8 0-5-2.2-5-5s2.2-5 5-5c.4 0 .8 0 1.1.1M35 18c2.8 0 5-2.2 5-5s-2.2-5-5-5c-.4 0-.8 0-1.1.1" />
        <path d="M14 18h20l-2 22H16l-2-22Z" />
        <path d="M20 18v22M28 18v22M24 18v22" />
      </svg>
    ),
  },
  {
    title: "The Romance of Dining",
    body: "Discover how food can create memorable, intimate experiences — the candlelight, the conversation, the lingering dessert.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="h-10 w-10" aria-hidden="true">
        <path d="M12 6h10c0 8-2 13-5 14v18M12 6c0 8 2 13 5 14M8 38h18" />
        <path d="M30 42c-3-2-6-5.5-6-9a3.4 3.4 0 0 1 6-2 3.4 3.4 0 0 1 6 2c0 3.5-3 7-6 9Z" />
      </svg>
    ),
  },
  {
    title: "Rediscover Connection",
    body: "Explore how thoughtful dining can bring people closer together, turning everyday meals into cherished rituals.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" className="h-10 w-10" aria-hidden="true">
        <circle cx="16" cy="12" r="5" />
        <circle cx="32" cy="12" r="5" />
        <path d="M6 40c0-7 4.5-12 10-12s10 5 10 12M22 40c0-7 4.5-12 10-12s10 5 10 12" />
      </svg>
    ),
  },
];

function SpecialFeatures() {
  return (
    <section className="bg-cream/60 texture-parchment">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <Reveal className="text-center">
          <SectionEyebrow>What Makes This Book Special</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium text-primary sm:text-5xl">
            Three Reasons to <span className="italic text-gold-deep">Fall in Love</span> with It
          </h2>
          <Flourish className="mx-auto mt-6" />
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {FEATURES.map((feature, i) => (
            <Reveal key={feature.title} delay={i * 130}>
              <div className="group h-full rounded-xl border border-border bg-card px-8 py-10 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[var(--shadow-lift)]">
                <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-gold/50 bg-secondary/60 text-gold-deep transition-colors duration-500 group-hover:border-gold group-hover:bg-gold/15">
                  {feature.icon}
                </div>
                <h3 className="mt-6 font-display text-2xl font-medium text-primary">{feature.title}</h3>
                <div className="rule-gold mx-auto mt-4 w-16" />
                <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground">{feature.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------------- Meet the Author ---------------- */

function MeetTheAuthor() {
  return (
    <section className="bg-background">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-24 sm:px-8 lg:grid-cols-12 lg:py-32">
        <Reveal className="lg:col-span-5">
          {/* Official portrait placeholder — replace with Chef Carr's portrait when available */}
          <div className="relative mx-auto max-w-sm">
            <div className="absolute -inset-3 border border-gold/40" aria-hidden="true" />
            <div className="relative flex aspect-[4/5] items-center justify-center bg-cream shadow-[var(--shadow-lift)]">
              <div className="text-center">
                <p className="font-display text-7xl font-semibold text-gold-deep/70">RC</p>
                <p className="mt-3 px-10 text-[0.7rem] font-bold uppercase tracking-[0.3em] text-muted-foreground">
                  Official portrait coming soon
                </p>
              </div>
            </div>
          </div>
        </Reveal>
        <Reveal delay={120} className="lg:col-span-7 lg:pl-10">
          <SectionEyebrow>Meet the Author</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium text-primary sm:text-5xl">
            Meet Chef <span className="italic text-gold-deep">Richard Carr</span>
          </h2>
          <Flourish className="mt-6" />
          <p className="mt-8 text-base leading-loose text-muted-foreground sm:text-lg">
            A chef with a romantic's heart, Richard Carr wrote There Is Still Romance in Food to defend something
            quietly disappearing: the beautiful, unhurried meal shared with people we love. His book is both a
            gentle lament for what fast food and fast dinners have taken from us, and an invitation to claim it back —
            one candlelit table at a time.
          </p>
          <div className="mt-8">
            <Link to="/author" className="btn btn-primary">
              Learn More About the Author
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ---------------- Promotional CTA ---------------- */

function PromoCta() {
  return (
    <section className="texture-dark relative overflow-hidden bg-primary">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, var(--gold) 0, transparent 40%), radial-gradient(circle at 80% 70%, var(--gold) 0, transparent 35%)",
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl px-5 py-24 text-center sm:px-8 lg:py-28">
        <Reveal>
          <SectionEyebrow ivory>Reserve Your Copy</SectionEyebrow>
          <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-ivory sm:text-5xl">
            Bring Romance <span className="gold-text italic">Back to the Table</span>
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-ivory/75 sm:text-lg">
            Discover a book that celebrates the timeless connection between food, passion, and togetherness.
          </p>
          <div className="mt-10">
            <OrderButton className="btn-gold px-10 py-4" withNote>
              Order Your Signed Hardcover
            </OrderButton>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Index() {
  return (
    <main>
      <Hero />
      <RomanceOfFood />
      <FeaturedBook />
      <SpecialFeatures />
      <MeetTheAuthor />
      <PromoCta />
    </main>
  );
}

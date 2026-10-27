import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { CONTACT } from "@/config/site";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
  head: () => ({
    meta: [
      { title: "Contact — There Is Still Romance in Food | Chef Richard Carr" },
      {
        name: "description",
        content:
          "Get in touch with Chef Richard Carr — email ChefCarr@AOL.com or call 757-879-6580 about There Is Still Romance in Food.",
      },
      { property: "og:title", content: "Contact — There Is Still Romance in Food" },
      {
        property: "og:description",
        content: "Connect with Chef Richard Carr by email or phone.",
      },
      { property: "og:url", content: "/contact" },
      { property: "og:type", content: "article" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
});

function ContactCards() {
  const cards = [
    {
      label: "Email",
      value: CONTACT.email,
      href: `mailto:${CONTACT.email}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="m3 7 9 6 9-6" />
        </svg>
      ),
    },
    {
      label: "Telephone",
      value: CONTACT.phoneDisplay,
      href: CONTACT.phoneHref,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6" aria-hidden="true">
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 2 .7 2.9a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.5c.9.3 1.9.6 2.9.7a2 2 0 0 1 1.7 2Z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="grid gap-6 sm:grid-cols-2">
      {cards.map((card) => (
        <a
          key={card.label}
          href={card.href}
          className="group rounded-xl border border-border bg-card px-8 py-8 text-center shadow-[var(--shadow-card)] transition-all duration-500 hover:-translate-y-1 hover:shadow-[var(--shadow-lift)]"
        >
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-gold/50 bg-secondary/60 text-gold-deep transition-colors duration-500 group-hover:bg-gold/15">
            {card.icon}
          </div>
          <p className="mt-5 text-[0.66rem] font-bold uppercase tracking-[0.3em] text-gold-deep">{card.label}</p>
          <p className="mt-2 font-display text-xl text-primary">{card.value}</p>
        </a>
      ))}
    </div>
  );
}

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  // This site is static: submitting opens the visitor's own email application
  // with the message pre-filled. Wire a form service here later
  // (Formspree / Netlify Forms / WPForms endpoint) for in-page submission.
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const body = encodeURIComponent(`From: ${name} (${email})\n\n${message}`);
    const subjectLine = encodeURIComponent(subject || `Website inquiry from ${name}`);
    window.location.href = `mailto:${CONTACT.email}?subject=${subjectLine}&body=${body}`;
  };

  const inputClass =
    "w-full rounded-md border border-input bg-card px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold-deep focus:ring-2 focus:ring-gold/30";

  return (
    <form onSubmit={handleSubmit} className="rounded-xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:p-10">
      <p className="eyebrow">Send a Message</p>
      <h2 className="mt-3 font-display text-3xl font-medium text-primary">Write to Chef Carr</h2>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="contact-name" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Full Name
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your name"
            className={inputClass}
          />
        </div>
        <div>
          <label htmlFor="contact-email" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
            Email Address
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={inputClass}
          />
        </div>
      </div>

      <div className="mt-5">
        <label htmlFor="contact-subject" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
          Subject
        </label>
        <input
          id="contact-subject"
          type="text"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          placeholder="What is this about?"
          className={inputClass}
        />
      </div>

      <div className="mt-5">
        <label htmlFor="contact-message" className="mb-2 block text-[0.68rem] font-bold uppercase tracking-[0.24em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          required
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message…"
          className={`${inputClass} resize-y`}
        />
      </div>

      <button type="submit" className="btn btn-primary mt-8 w-full sm:w-auto">
        Send Message
      </button>

      <p className="mt-5 text-xs leading-relaxed text-muted-foreground">
        Submitting opens your own email application with the message pre-filled — nothing is stored on this website.
        A direct form service (e.g. a form provider endpoint) can be connected here later; meanwhile{" "}
        <a href={`mailto:${CONTACT.email}`} className="font-semibold text-primary underline decoration-gold underline-offset-2">
          {CONTACT.email}
        </a>{" "}
        and{" "}
        <a href={CONTACT.phoneHref} className="font-semibold text-primary underline decoration-gold underline-offset-2">
          {CONTACT.phoneDisplay}
        </a>{" "}
        always work.
      </p>
    </form>
  );
}

function ContactPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contact"
        title={
          <>
            Get in <span className="gold-text italic">Touch</span>
          </>
        }
        subtitle="Connect with Chef Richard Carr"
      />

      <section className="bg-background texture-parchment">
        <div className="mx-auto grid max-w-6xl gap-14 px-5 py-20 sm:px-8 lg:grid-cols-12 lg:py-24">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">Correspondence</p>
            <h2 className="mt-5 font-display text-4xl font-medium leading-tight text-primary">
              A Warm <span className="italic text-gold-deep">Welcome</span>
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-muted-foreground">
              Questions about the book, requests for signed copies, interviews, or simply a kind word about a shared
              meal — Chef Carr reads every message.
            </p>
            <div className="mt-10">
              <ContactCards />
            </div>
          </Reveal>
          <Reveal delay={130} className="lg:col-span-7">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </main>
  );
}

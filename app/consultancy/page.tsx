import type { Metadata } from "next";
import Badge from "@/components/ui/Badge";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "SMB AI Consultancy — AREIS",
  description: "Business-first AI consultancy for SMBs focused on ROI, implementation, and long-term support.",
  openGraph: { images: ["/og-image.png"] },
};

const faqs = [
  "How do I know if AI is right for my business?",
  "What does this actually cost?",
  "Do I need technical staff to maintain it?",
  "How long until I see results?",
  "What if I've already tried AI tools that didn't work?",
];

export default function ConsultancyPage() {
  const electrifyProject = projects.find((p) => p.id === "electrify");

  return (
    <>
      <section className="section-wrap">
        <Badge>AI CONSULTANCY FOR GROWING BUSINESSES</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] md:text-6xl">
          AI that pays for
          <br />
          <span className="text-accent-4">itself.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-text-dim">Most businesses don&apos;t need more AI tools. They need the right one, set up properly, solving a real problem. That&apos;s what I do.</p>
        <div className="mt-6">
          <Button href="#contact-consultancy">Book a free discovery call</Button>
          <p className="mt-3 text-sm text-text-faint">No obligation. 30 minutes. I&apos;ll tell you honestly if AI can help.</p>
        </div>
      </section>

      <section className="bg-surface px-6 py-12 md:px-12">
        <div className="mx-auto grid max-w-[1100px] gap-6 md:grid-cols-3">
          {[
            ['"We tried AI tools but nothing stuck"', "Most AI tools fail without the right setup and integration."],
            ['"We don\'t know where to start"', "An AI audit maps exactly where the ROI is before you spend a dollar."],
            ['"We\'re worried about wasting budget"', "Every project starts with a scoped, fixed-cost phase."],
          ].map((x) => (
            <Card key={x[0]}>
              <p className="text-text-dim"><span className="text-accent-3">✕</span> {x[0]}</p>
              <p className="mt-3 text-sm"><span className="text-accent-4">✓</span> {x[1]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">How we work together</h2>
        <p className="mt-2 text-text-dim">Three stages. Start at whichever fits.</p>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          <Card>
            <h3 className="text-xl font-semibold">AI Audit</h3>
            <p className="mt-2 text-accent-4">$2,000-$5,000 · 1-2 weeks</p>
            <p className="mt-3 text-sm text-text-dim">Deep review of operations to identify where AI saves time, reduces cost, or creates revenue.</p>
            <ul className="mt-4 space-y-2 text-sm"><li>✓ Process mapping</li><li>✓ ROI opportunities</li><li>✓ Clear roadmap</li></ul>
          </Card>
          <Card className="border-accent-4">
            <Badge className="border-accent-4 text-accent-4">MOST POPULAR</Badge>
            <h3 className="mt-3 text-xl font-semibold">Implementation</h3>
            <p className="mt-2 text-accent-4">$8,000-$40,000 · 4-8 weeks</p>
            <p className="mt-3 text-sm text-text-dim">Build and deploy your scoped AI system with integrations, team training, and documentation.</p>
          </Card>
          <Card>
            <h3 className="text-xl font-semibold">Retainer</h3>
            <p className="mt-2 text-accent-4">$2,500-$8,000/mo · Ongoing</p>
            <p className="mt-3 text-sm text-text-dim">Monthly advisory, iteration, monitoring, and support without hiring an in-house AI lead.</p>
          </Card>
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">Industries I work with</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            ["E-commerce", "Automation, product content, support bots"],
            ["Marketing agencies", "AI content pipelines, reporting automation"],
            ["Real estate", "Lead follow-up, CRM AI, listing automation"],
            ["Professional svcs", "Document automation, client intake, billing"],
            ["SaaS / startups", "AI feature integration, RAG, LLM workflows"],
            ["Health & wellness", "Scheduling, reminders, admin automation"],
          ].map((industry) => (
            <Card key={industry[0]}>
              <h3 className="font-semibold">{industry[0]}</h3>
              <p className="mt-1 text-sm text-text-dim">{industry[1]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">What a typical engagement looks like</h2>
        <div className="mt-8 space-y-4">
          {[
            ["Week 1-2", "Discovery & Audit", "We map your operations and identify where AI adds real value."],
            ["Week 3-4", "Scoping & Proposal", "Fixed-scope, fixed-price proposal. No surprises."],
            ["Week 5-10", "Build & Integrate", "I build, you review, weekly demos, and full documentation."],
            ["Ongoing", "Support & Iterate", "Monthly retainer option or handoff with team training."],
          ].map((step) => (
            <Card key={step[0]}>
              <p className="font-mono text-accent">{step[0]}</p>
              <h3 className="mt-1 text-lg font-semibold">{step[1]}</h3>
              <p className="mt-2 text-sm text-text-dim">{step[2]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">Common questions</h2>
        <div className="mt-8">
          <FaqAccordion items={faqs} />
        </div>
      </section>

      <section className="section-wrap">
        {electrifyProject ? (
          <div
            className="case-study-highlight mb-10 rounded-xl border border-solid p-7"
            style={{
              borderColor: "color-mix(in srgb, var(--accent-2) 30%, transparent)",
              borderLeftWidth: "3px",
              borderLeftColor: "var(--accent-2)",
            }}
          >
            <p className="label-chip border border-border text-accent-2">CASE STUDY</p>
            <h3 className="mt-4 text-2xl font-semibold">Electrify Mobility — AI/IoT Startup</h3>
            <p className="mt-3 text-text-dim">
              Built an NLP-powered assistive system for users with mobility impairments. Received government grant funding, filed 3 patents, and was acquired. Demonstrates what production-grade AI looks like in a regulated, safety-critical environment.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {["85% misactivation reduction", "$6K grant funding", "Acquired"].map((metric) => (
                <span
                  key={metric}
                  className="rounded-md border px-3 py-1 text-xs"
                  style={{ borderColor: "color-mix(in srgb, var(--accent-2) 30%, transparent)", color: "var(--accent-2)" }}
                >
                  {metric}
                </span>
              ))}
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {electrifyProject.tags.map((tag) => (
                <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs text-text-dim">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ) : null}
        {/* TODO: Replace placeholder testimonials. */}
        <h2 className="text-3xl font-semibold">Client feedback</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Card key={i}>
              <p className="italic text-text-dim">&quot;Placeholder testimonial copy for business impact and collaboration quality. Replace with real client quotes.&quot;</p>
              <p className="mt-4 text-sm">Name Surname · Company · Role</p>
              <p className="mt-2 text-accent-4">★★★★★</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact-consultancy" className="section-wrap text-center">
        <h2 className="text-3xl font-semibold">Book a free discovery call</h2>
        <p className="mt-3 text-text-dim">30 minutes. I&apos;ll tell you honestly what AI can and can&apos;t do for your business right now.</p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          {/* TODO: Replace [CALENDLY_URL] placeholder with booking URL. */}
          <Button href="[CALENDLY_URL]">Book via Calendly →</Button>
          {/* TODO: Replace [EMAIL] placeholder with actual email. */}
          <Button href="mailto:[EMAIL]" variant="ghost">Send me an email →</Button>
        </div>
        <p className="mt-3 text-xs text-text-faint">
          <span className="todo-highlight">[CALENDLY_URL]</span> · <span className="todo-highlight">[EMAIL]</span>
        </p>
        <p className="mt-4 text-sm text-text-faint">Response within 24 hours · No commitment required · Based in New York</p>
      </section>
    </>
  );
}

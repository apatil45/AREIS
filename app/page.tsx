import type { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProjectBadge from "@/components/ui/ProjectBadge";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Freelancer & Consultant | AREIS",
  description: "From rapid AI tool builds to long-term consultancy for growing businesses. Choose the track that matches your needs.",
  openGraph: { images: ["/og-image.png"] },
};

export default function HomePage() {
  const selectedWorkProjects = projects.filter((p) => p.showOn.includes("homepage") && p.featured);
  const otherWorkProject = projects.find((p) => p.id === "iitb");
  const getProjectLink = (project: (typeof projects)[number]) => {
    if (project.links.demo) return { href: project.links.demo, label: "View demo →" };
    if (project.links.github) return { href: project.links.github, label: "View repo →" };
    return null;
  };

  return (
    <>
      {/* TODO: Replace placeholder identity values. */}
      <Hero />

      <section className="border-y border-border bg-surface px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-4">
          <span className="label-chip text-text-faint">TRUSTED BY</span>
          <div className="flex flex-wrap gap-3">
            {["Company A", "Company B", "Company C", "Company D", "Company E"].map((name) => (
              <span key={name} className="rounded border border-border bg-surface-2 px-4 py-2 text-sm text-text-dim">
                {name}
              </span>
            ))}
          </div>
          <span className="text-sm text-accent-2">→ open to new projects</span>
        </div>
      </section>

      <FadeInUp className="section-wrap">
        <h2 className="text-3xl font-semibold">Two ways to work together</h2>
        <p className="mt-3 text-text-dim">Pick the one that fits where you are right now.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <Card className="border-l-[3px] border-l-accent-3">
            <Badge className="border-accent-3 text-accent-3">FAST DELIVERY</Badge>
            <h3 className="mt-4 text-xl font-semibold">AI Tools &amp; Automation</h3>
            <p className="mt-3 text-text-dim">Need something built? I design and ship AI-powered tools, automations, and integrations fast, clean, and production-ready.</p>
            <ul className="mt-4 space-y-2 text-sm text-text-dim">
              <li><span className="text-accent-3">→</span> AI video &amp; image pipelines</li>
              <li><span className="text-accent-3">→</span> Workflow automation (n8n, Make, APIs)</li>
              <li><span className="text-accent-3">→</span> Chatbots, RAG systems, integrations</li>
            </ul>
            <div className="mt-6"><Button href="/services" variant="ghost">See services →</Button></div>
          </Card>
          <Card className="border-l-[3px] border-l-accent-4">
            <Badge className="border-accent-4 text-accent-4">STRATEGIC</Badge>
            <h3 className="mt-4 text-xl font-semibold">AI Consultancy</h3>
            <p className="mt-3 text-text-dim">Running a small or mid-size business? I help you find exactly where AI saves time and money, then implement it end to end.</p>
            <ul className="mt-4 space-y-2 text-sm text-text-dim">
              <li><span className="text-accent-4">→</span> AI readiness audit</li>
              <li><span className="text-accent-4">→</span> Custom implementation</li>
              <li><span className="text-accent-4">→</span> Ongoing retainer support</li>
            </ul>
            <div className="mt-6"><Button href="/consultancy" variant="ghost">For businesses →</Button></div>
          </Card>
        </div>
      </FadeInUp>

      <section id="work" className="section-wrap">
        <h2 className="text-3xl font-semibold">Selected work</h2>
        <StaggerGroup className="mt-8 grid gap-6 md:grid-cols-3">
          {selectedWorkProjects.map((project) => {
            const projectLink = getProjectLink(project);

            return (
            <StaggerItem key={project.id}>
              <Card className="h-full border-l-[3px]" style={{ borderLeftColor: project.accentColor }}>
                <span className="label-chip border border-border" style={{ color: project.labelColor }}>
                  {project.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-xs text-text-faint">{project.subtitle}</p>
                <p className="mt-2 text-sm text-text-dim">{project.description}</p>
                <div className="my-3 flex flex-wrap gap-4">
                  {project.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-semibold" style={{ color: "var(--accent-2)" }}>
                        {m.value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs text-text-dim">{tag}</span>
                    ))}
                  </div>
                  {projectLink ? (
                    <a
                      href={projectLink.href}
                      className="text-sm text-text hover:text-accent-2"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {projectLink.label}
                    </a>
                  ) : (
                    <ProjectBadge label={project.links.badge ?? "Demo coming"} color={project.labelColor} />
                  )}
                </div>
              </Card>
            </StaggerItem>
          )})}
        </StaggerGroup>
        {otherWorkProject ? (
          <div className="mt-8">
            <h3 className="text-sm font-medium" style={{ color: "var(--text-dim)" }}>Other work</h3>
            <div className="mt-3 max-w-[360px]">
              <Card
                className="h-full border-l-[3px]"
                style={{ borderLeftColor: otherWorkProject.accentColor, opacity: 0.75, transform: "scale(0.97)" }}
              >
                <span className="label-chip border border-border" style={{ color: otherWorkProject.labelColor }}>
                  {otherWorkProject.label}
                </span>
                <h3 className="mt-3 text-lg font-semibold">{otherWorkProject.title}</h3>
                <p className="mt-1 text-xs text-text-faint">{otherWorkProject.subtitle}</p>
                <p className="mt-2 text-sm text-text-dim">{otherWorkProject.description}</p>
                <div className="my-3 flex flex-wrap gap-4">
                  {otherWorkProject.metrics.map((m) => (
                    <div key={m.label}>
                      <div className="text-lg font-semibold" style={{ color: "var(--accent-2)" }}>
                        {m.value}
                      </div>
                      <div className="text-xs" style={{ color: "var(--text-faint)" }}>
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex flex-wrap items-center justify-between gap-2">
                  <div className="flex flex-wrap gap-2">
                    {otherWorkProject.tags.map((tag) => (
                      <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs text-text-dim">{tag}</span>
                    ))}
                  </div>
                  <ProjectBadge label={otherWorkProject.links.badge ?? "Published"} color="var(--text-dim)" />
                </div>
              </Card>
            </div>
          </div>
        ) : null}
      </section>

      <section id="about" className="section-wrap grid gap-8 md:grid-cols-2">
        <p className="text-text-dim">I&apos;m an AI engineer focused on practical outcomes: faster operations, cleaner automations, and production-ready tools. I care about clarity, reliability, and shipping work that teams actually adopt.</p>
        <div className="space-y-3 border-l border-border pl-6 font-mono text-sm">
          <p><span className="text-text-faint">BASED IN</span> New York, NY</p>
          <p><span className="text-text-faint">EXPERIENCE</span> Full-stack + AI engineering</p>
          <p><span className="text-text-faint">AVAILABILITY</span> Open to projects</p>
          <p><span className="text-text-faint">RESPONSE TIME</span> &lt; 24 hours</p>
        </div>
      </section>

      <section id="contact" className="section-wrap">
        <div className="mx-auto max-w-[600px] text-center">
          <h2 className="text-3xl font-semibold">Let&apos;s build something.</h2>
          <p className="mt-3 text-text-dim">Whether you need a quick build or a long-term partner, reach out and I&apos;ll respond within a day.</p>
          <div className="mt-6 flex flex-wrap justify-center gap-3">
            {/* TODO: Replace [EMAIL] placeholder with actual email. */}
            <Button href="mailto:[EMAIL]">Email me</Button>
            {/* TODO: Replace [CALENDLY_URL] placeholder with booking URL. */}
            <Button href="[CALENDLY_URL]" variant="ghost">Book a call</Button>
          </div>
          <p className="mt-3 text-xs text-text-faint">
            <span className="todo-highlight">[EMAIL]</span> · <span className="todo-highlight">[CALENDLY_URL]</span>
          </p>
          <p className="mt-4 text-sm text-text-faint">Upwork profile ↗ · LinkedIn ↗ · GitHub ↗</p>
        </div>
      </section>
    </>
  );
}

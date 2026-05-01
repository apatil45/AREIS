import type { Metadata } from "next";
import Card from "@/components/ui/Card";
import Badge from "@/components/ui/Badge";
import ProjectBadge from "@/components/ui/ProjectBadge";
import ContactForm from "@/components/sections/ContactForm";
import { FadeInUp, StaggerGroup, StaggerItem } from "@/components/ui/Motion";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "AI Services — AREIS",
  description: "Production-grade AI tools, automations, and integrations for project-based clients.",
  openGraph: { images: ["/og-image.png"] },
};

export default function ServicesPage() {
  const serviceProjects = projects.filter((p) => p.showOn.includes("services"));
  const getProjectLink = (project: (typeof projects)[number]) => {
    if (project.links.demo) return { href: project.links.demo, label: "View demo →" };
    if (project.links.github) return { href: project.links.github, label: "View repo →" };
    return null;
  };
  const pipelineCard = {
    id: "video-pipeline",
    label: "AI VIDEO · IN PROGRESS",
    title: "AI Video Pipeline",
    description: "Automated video generation pipeline — script to storyboard to rendered clip. Currently in development.",
    tags: ["Runway API", "FFmpeg", "Next.js", "GPT-4o"],
    accentColor: "var(--accent-3)",
    badge: "Coming Soon",
    badgeColor: "var(--text-faint)",
  };
  const serviceItems = [
    {
      chip: "329% YoY DEMAND",
      title: "AI Video & Creative Pipelines",
      description:
        "Automated video generation and rendering pipelines. Runway, Kling, FFmpeg, and production shaping.",
      rate: "$35-$80/hr",
      tags: ["Runway", "Kling", "FFmpeg", "ComfyUI"],
    },
    {
      chip: "MOST REQUESTED",
      title: "AI Automation & Integrations",
      description:
        "Connecting AI to your existing stack: CRMs, APIs, SaaS tools, and databases with LLM layers.",
      rate: "$75-$150/hr",
      tags: ["n8n", "Make.com", "OpenAI", "LangChain", "Zapier"],
    },
    {
      chip: "PRODUCTION-READY",
      title: "Chatbots, RAG & LLM Systems",
      description:
        "Custom chatbots, RAG knowledge systems, and full-stack AI apps with clean deployable interfaces.",
      rate: "$100-$175/hr",
      tags: ["LangChain", "Pinecone", "Next.js", "Claude", "GPT-4o"],
    },
  ];

  return (
    <>
      <section className="section-wrap">
        <Badge>SERVICES</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-[-0.02em] md:text-6xl">
          AI tools built fast,
          <br />
          <span className="text-accent-3">built right.</span>
        </h1>
        <p className="mt-4 max-w-3xl text-text-dim">I specialize in shipping production-grade AI tools, automations, and integrations. Intermediate scope to complex systems. Tell me what you need.</p>
        <a href="#contact-services" className="mt-6 inline-flex rounded-lg bg-accent-2 px-6 py-3 font-semibold text-bg">Start a project</a>
      </section>

      <FadeInUp className="section-wrap">
        <h2 className="text-3xl font-semibold">What I build</h2>
        <StaggerGroup className="mt-8 grid gap-6 lg:grid-cols-3">
          {serviceItems.map((item) => (
            <StaggerItem key={item.title}>
              <Card className="h-full border-l-[3px] border-l-accent-3">
                <Badge className="border-accent-3 text-accent-3">{item.chip}</Badge>
                <h3 className="mt-4 text-xl font-semibold">{item.title}</h3>
                <p className="mt-3 text-text-dim">{item.description}</p>
                <p className="mt-4 font-mono text-sm text-text-faint">Typical rate: {item.rate}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs">{tag}</span>)}
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerGroup>
      </FadeInUp>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">How a project runs</h2>
        <div className="mt-8 grid gap-6 md:grid-cols-4">
          {[
            ["01", "BRIEF", "You describe what you need"],
            ["02", "SCOPING", "I define scope, timeline, and cost"],
            ["03", "BUILD", "Weekly check-ins with live preview"],
            ["04", "SHIP", "Delivered with docs and handoff"],
          ].map((step) => (
            <Card key={step[1]} className="h-full">
              <p className="font-mono text-accent">{step[0]}</p>
              <h3 className="mt-2 text-sm font-semibold tracking-[0.12em]">{step[1]}</h3>
              <p className="mt-2 text-sm text-text-dim">{step[2]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section className="section-wrap">
        <h2 className="text-3xl font-semibold">Things I&apos;ve built</h2>
        <p className="mt-3 text-text-dim">Live demos, not screenshots.</p>
        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {serviceProjects.map((project) => {
            const projectLink = getProjectLink(project);

            return (
            <Card key={project.id} className="border-t-2" style={{ borderTopColor: project.accentColor }}>
              <span className="label-chip border border-border" style={{ color: project.labelColor }}>{project.label}</span>
              <h3 className="mt-3 text-lg font-semibold">{project.title}</h3>
              <p className="mt-1 text-xs text-text-faint">{project.subtitle}</p>
              <p className="mt-2 text-sm text-text-dim">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tags.map((tag) => <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs">{tag}</span>)}
              </div>
              <div className="mt-4">
                {projectLink ? (
                  <a
                    href={projectLink.href}
                    className="inline-block text-sm text-text hover:text-accent-2"
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
          )})}
          <Card className="border-t-2" style={{ borderTopColor: pipelineCard.accentColor }}>
            <span className="label-chip border border-border text-accent-3">{pipelineCard.label}</span>
            <h3 className="mt-3 text-lg font-semibold">{pipelineCard.title}</h3>
            <p className="mt-2 text-sm text-text-dim">{pipelineCard.description}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {pipelineCard.tags.map((tag) => <span key={tag} className="rounded bg-surface-2 px-2 py-1 text-xs">{tag}</span>)}
            </div>
            <div className="mt-4">
              <ProjectBadge label={pipelineCard.badge} color={pipelineCard.badgeColor} />
            </div>
          </Card>
        </div>
      </section>

      <section className="section-wrap grid gap-8 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-semibold">Pricing</h2>
          <p className="mt-2 text-text-dim">Transparent from the start.</p>
          <div className="mt-6 rounded-xl border border-border bg-surface p-6">
            {[
              ["AI Video pipelines", "$35-$80/hr"],
              ["Automation / APIs", "$75-$150/hr"],
              ["Chatbot / RAG systems", "$100-$175/hr"],
              ["Full-stack AI apps", "$125-$200/hr"],
            ].map((row) => (
              <div key={row[0]} className="flex justify-between border-b border-border py-3 text-sm last:border-none">
                <span>{row[0]}</span>
                <span className="text-text-dim">{row[1]}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-4">
          {[
            ["Starter", "from $1,500", "Single automation or chatbot. 3-5 day delivery."],
            ["Builder", "from $4,000", "Full AI tool or pipeline. 1-2 weeks."],
            ["Custom", "Let's scope it", "Complex systems, integrations, ongoing work."],
          ].map((pkg) => (
            <Card key={pkg[0]}>
              <h3 className="text-lg font-semibold">{pkg[0]}</h3>
              <p className="text-accent-2">{pkg[1]}</p>
              <p className="mt-2 text-sm text-text-dim">{pkg[2]}</p>
            </Card>
          ))}
        </div>
      </section>

      <section id="contact-services" className="section-wrap">
        <div className="mx-auto max-w-[700px]">
          <h2 className="text-3xl font-semibold">Start a project</h2>
          <p className="mt-2 text-text-dim">Tell me what you&apos;re building. I&apos;ll respond within 24 hours.</p>
          <div className="mt-6">
            <ContactForm />
          </div>
          <p className="mt-4 text-sm text-text-faint">Prefer Upwork? <a href="#" className="underline">Upwork profile ↗</a></p>
        </div>
      </section>
    </>
  );
}

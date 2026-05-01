import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import { FadeInUp } from "@/components/ui/Motion";

export default function Hero() {
  return (
    <section className="section-wrap grid gap-12 lg:grid-cols-2">
      <FadeInUp className="space-y-6">
        <Badge>AI ENGINEER · CONSULTANT</Badge>
        <h1 className="text-4xl font-bold leading-tight tracking-[-0.02em] md:text-6xl md:tracking-[-0.03em]">
          I build AI that
          <br />
          <span className="text-accent-2">actually ships.</span>
        </h1>
        <p className="max-w-xl text-base text-text-dim">
          From rapid AI-powered tools to long-term strategy for growing businesses. Let&apos;s cut through the hype and build what works.
        </p>
        <div className="flex flex-wrap gap-3">
          <Button href="/services">See our services →</Button>
          <Button href="/consultancy" variant="ghost">
            For businesses →
          </Button>
        </div>
      </FadeInUp>
      <FadeInUp>
        <div className="rounded-2xl border border-border bg-surface p-6 font-mono text-[13px] text-text-dim">
          <div className="mb-5 flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
          </div>
          <p>&gt; running ai_pipeline.py</p>
          <p>
            <span className="text-accent-2">✓</span> model loaded&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;[124ms]
          </p>
          <p>
            <span className="text-accent-2">✓</span> embeddings built&nbsp;&nbsp;[38ms]
          </p>
          <p>
            &gt; awaiting input... <span className="blink-cursor">█</span>
          </p>
        </div>
      </FadeInUp>
    </section>
  );
}

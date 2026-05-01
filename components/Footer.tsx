export default function Footer() {
  return (
    <footer className="border-t border-border px-6 py-8 md:px-12">
      <div className="mx-auto flex w-full max-w-[1100px] flex-col items-center justify-between gap-4 text-sm md:flex-row">
        <p><span>AREIS</span></p>
        <p className="text-text-faint">Built with AI + craft</p>
        <div className="flex gap-4 text-text-dim">
          {/* TODO: Replace [LINKEDIN_URL] placeholder with actual profile URL. */}
          <a href="[LINKEDIN_URL]">LinkedIn</a>
          {/* TODO: Replace [EMAIL] placeholder with actual email. */}
          <a href="mailto:[EMAIL]">Email</a>
        </div>
        <p className="text-xs text-text-faint">
          <span className="todo-highlight">[LINKEDIN_URL]</span> · <span className="todo-highlight">[EMAIL]</span>
        </p>
      </div>
    </footer>
  );
}

export default function ContactForm() {
  return (
    <form
      // TODO: Replace [EMAIL] placeholder with actual destination.
      action="mailto:[EMAIL]"
      method="post"
      encType="text/plain"
      className="space-y-4 rounded-xl border border-border bg-surface p-7"
    >
      <input
        required
        name="name"
        placeholder="Name"
        className="w-full rounded-lg border border-border bg-bg px-4 py-3 outline-none placeholder:text-text-faint focus:border-border-2"
      />
      <input
        required
        type="email"
        name="email"
        placeholder="Email"
        className="w-full rounded-lg border border-border bg-bg px-4 py-3 outline-none placeholder:text-text-faint focus:border-border-2"
      />
      <textarea
        required
        name="project"
        placeholder="What do you need?"
        rows={5}
        className="w-full rounded-lg border border-border bg-bg px-4 py-3 outline-none placeholder:text-text-faint focus:border-border-2"
      />
      <button
        type="submit"
        className="inline-flex rounded-lg bg-accent-2 px-6 py-3 text-sm font-semibold text-bg transition hover:opacity-90"
      >
        Submit
      </button>
    </form>
  );
}

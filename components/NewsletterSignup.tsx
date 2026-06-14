export function NewsletterSignup() {
  return (
    <form className="flex flex-col gap-0 border-4 border-forest bg-white sm:flex-row">
      <label className="sr-only" htmlFor="newsletter-email">Email</label>
      <input
        id="newsletter-email"
        type="email"
        placeholder="Email address"
        className="min-h-14 flex-1 border-0 px-4 text-basalt outline-none"
      />
      <button type="button" className="min-h-14 bg-forest px-6 text-sm font-black uppercase tracking-[0.08em] text-cream hover:bg-pine">
        Join Updates
      </button>
    </form>
  );
}

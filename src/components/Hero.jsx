function Hero() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-24 overflow-hidden bg-navy"
    >
      {/* Subtle dot-grid pattern overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            'radial-gradient(circle, rgba(255,255,255,0.045) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* Glow blob — top-right, violet accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,106,247,0.22) 0%, transparent 68%)',
          filter: 'blur(60px)',
        }}
      />

      {/* Glow blob — bottom-left, violet-blue accent */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-28 -left-28 h-[480px] w-[480px] rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(124,106,247,0.14) 0%, transparent 70%)',
          filter: 'blur(64px)',
        }}
      />

      {/* Glow blob — center, soft white haze */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 h-[320px] w-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full"
        style={{
          background:
            'radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
      />

      {/* min-h uses 65px = sticky navbar height */}
      <div className="relative mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center px-4 py-20 sm:px-6 lg:px-8">
        <div className="w-full">
          {/* Pill label */}
          <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold">
            <span className="h-1.5 w-1.5 rounded-full bg-gold" />
            TekstStudio
          </span>

          <h1 className="max-w-3xl text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-[3.75rem]">
            Treści, które zamieniają{' '}
            <span className="block text-gold">czytelników w klientów</span>
          </h1>
          <p className="mt-7 max-w-xl text-lg leading-relaxed text-slate-300/90">
            Tworzę artykuły blogowe, opisy produktów i treści SEO,
            które pomagają stronom zdobywać widoczność w Google i realne zapytania od klientów.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:kontakt@tekststudio.pl"
              className="inline-flex items-center justify-center rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/25 transition hover:brightness-110"
            >
              Napisz do mnie
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-lg border border-white/15 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/10"
            >
              Zobacz portfolio
            </a>
          </div>

          {/* Trust indicators */}
          <div className="mt-12 flex flex-wrap items-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <span className="h-4 w-px bg-slate-600" aria-hidden="true" />
              SEO-friendly
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-4 w-px bg-slate-600" aria-hidden="true" />
              Dopasowany styl
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-4 w-px bg-slate-600" aria-hidden="true" />
              Szybka realizacja
            </span>
          </div>
        </div>
      </div>

      {/* Bottom fade to next section */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24"
        style={{
          background: 'linear-gradient(to bottom, transparent, rgba(255,255,255,0.03))',
        }}
      />
    </section>
  )
}

export default Hero


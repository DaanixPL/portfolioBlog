function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 bg-gradient-to-br from-navy via-[#0d1b30] to-navy"
    >
      {/* min-h uses 65px = sticky navbar height */}
      <div className="mx-auto flex min-h-[calc(100vh-65px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-gold">
            TekstStudio
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Treści, które zamieniają czytelników w klientów
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Piszę eksperckie artykuły blogowe, które windują Twoją stronę
            w Google i przekuwają ruch organiczny w realne zapytania od
            klientów. Konkretnie, bez lania wody.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:kontakt@tekststudio.pl"
              className="inline-flex items-center justify-center rounded-md bg-gold px-7 py-3.5 text-sm font-semibold text-navy transition hover:brightness-110"
            >
              Napisz do mnie
            </a>
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/5 px-7 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Zobacz portfolio
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

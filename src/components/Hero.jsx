function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 border-b border-slate-200 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-500">
          TekstStudio
        </p>
        <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 sm:text-5xl">
          Treści, które przyciągają klientów
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-600">
          Piszę artykuły blogowe, które budują widoczność Twojej firmy w sieci.
          Pomagam Ci mówić językiem klientów i tworzyć treści, które naprawdę
          działają.
        </p>
        <div className="mt-10 flex flex-col gap-3 sm:flex-row">
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Zobacz moje prace
          </a>
          <a
            href="#kontakt"
            className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-900"
          >
            Napisz do mnie
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero

function Hero() {
  return (
    <section
      id="hero"
      className="scroll-mt-24 border-b border-slate-200 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"
    >
      <div className="mx-auto flex min-h-[calc(100vh-73px)] max-w-6xl items-center px-4 py-16 sm:px-6 lg:px-8">
        <div className="w-full">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
          TekstStudio
          </p>
          <h1 className="max-w-3xl text-4xl font-semibold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
            Landing page, który wygląda profesjonalnie i pracuje na wynik
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-200">
            Tworzę treści, które pomagają zdobywać ruch z wyszukiwarki i
            przekuwać go w zapytania od klientów. Bez lania wody — konkretnie i
            pod Twoją branżę.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href="#portfolio"
              className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Zobacz portfolio
            </a>
            <a
              href="#kontakt"
              className="inline-flex items-center justify-center rounded-md border border-slate-500 bg-transparent px-6 py-3 text-sm font-semibold text-white transition hover:border-white"
            >
              Napisz do mnie
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

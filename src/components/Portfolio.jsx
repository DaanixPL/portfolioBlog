import PortfolioCard from './PortfolioCard'
import { articles } from '../data/articles'

function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-24 border-b border-slate-200 bg-[#f8f8fc]">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Realizacje
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Portfolio
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
          Przykładowe artykuły. Kliknij kartę, aby przeczytać pełny tekst.
        </p>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Portfolio

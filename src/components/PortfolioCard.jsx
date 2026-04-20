import { ArrowRight } from 'lucide-react'

function PortfolioCard({ item, onOpen }) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
      <span className="inline-flex self-start rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
        {item.tag}
      </span>
      <h3 className="mt-4 text-lg font-semibold leading-snug tracking-tight text-slate-900">
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-500">
        {item.excerpt}
      </p>
      <button
        type="button"
        onClick={onOpen}
        className="mt-5 inline-flex items-center gap-1.5 self-start text-sm font-semibold text-gold transition-all hover:gap-2.5"
      >
        Czytaj artykuł
        <ArrowRight size={14} />
      </button>
    </article>
  )
}

export default PortfolioCard


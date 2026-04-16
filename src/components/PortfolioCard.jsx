function PortfolioCard({ item, isExpanded, onToggle }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <button className="w-full text-left" onClick={onToggle} type="button">
        <span className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-semibold text-slate-700">
          {item.tag}
        </span>
        <h3 className="mt-4 text-xl font-semibold tracking-tight text-slate-900">
          {item.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-slate-600">
          {item.excerpt}
        </p>
      </button>
      <div
        className={`grid transition-all duration-300 ease-in-out ${
          isExpanded
            ? 'mt-4 grid-rows-[1fr] opacity-100'
            : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="overflow-hidden">
          {item.content.map((paragraph) => (
            <p
              key={paragraph}
              className="mt-3 text-sm leading-relaxed text-slate-600"
            >
              {paragraph}
            </p>
          ))}
        </div>
      </div>
      <button
        type="button"
        onClick={onToggle}
        className="mt-5 text-sm font-semibold text-slate-900 underline-offset-4 transition hover:underline"
      >
        {isExpanded ? 'Zwiń artykuł' : 'Rozwiń artykuł'}
      </button>
    </article>
  )
}

export default PortfolioCard

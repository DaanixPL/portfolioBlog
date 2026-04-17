function renderInlineFormatting(text) {
  return text.split(/(\*\*.*?\*\*)/g).filter(Boolean).map((part, index) => {
    const boldMatch = part.match(/^\*\*(.*)\*\*$/)

    if (boldMatch) {
      return (
        <strong key={`part-${index}`} className="font-semibold text-slate-800">
          {boldMatch[1]}
        </strong>
      )
    }

    return <span key={`part-${index}`}>{part}</span>
  })
}

function FormattedPortfolioText({ text }) {
  const lines = text.split('\n')
  const blocks = []
  let currentList = null

  const flushList = () => {
    if (currentList) {
      blocks.push(currentList)
      currentList = null
    }
  }

  lines.forEach((line) => {
    const trimmedLine = line.trim()

    if (!trimmedLine) {
      flushList()
      return
    }

    const orderedMatch = trimmedLine.match(/^\d+\.\s+(.*)$/)
    const bulletMatch = trimmedLine.match(/^\*\s+(.*)$/)
    const headingMatch = trimmedLine.match(/^\*\*(.*)\*\*$/)

    if (orderedMatch) {
      if (!currentList || currentList.type !== 'ordered') {
        flushList()
        currentList = { type: 'ordered', items: [] }
      }

      currentList.items.push(orderedMatch[1])
      return
    }

    if (bulletMatch) {
      if (!currentList || currentList.type !== 'unordered') {
        flushList()
        currentList = { type: 'unordered', items: [] }
      }

      currentList.items.push(bulletMatch[1])
      return
    }

    flushList()

    blocks.push({
      type: headingMatch ? 'heading' : 'paragraph',
      content: headingMatch ? headingMatch[1] : trimmedLine,
    })
  })

  flushList()

  return (
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
      {blocks.map((block, index) => {
        if (block.type === 'heading') {
          return (
            <h4 key={`heading-${index}`} className="text-base font-semibold text-slate-900">
              {renderInlineFormatting(block.content)}
            </h4>
          )
        }

        if (block.type === 'ordered' || block.type === 'unordered') {
          const listClassName =
            block.type === 'ordered'
              ? 'list-decimal space-y-1 pl-5'
              : 'list-disc space-y-1 pl-5'
          const ListTag = block.type === 'ordered' ? 'ol' : 'ul'

          return (
            <ListTag key={`list-${index}`} className={listClassName}>
              {block.items.map((listItem, itemIndex) => (
                <li key={`item-${itemIndex}`}>
                  {renderInlineFormatting(listItem)}
                </li>
              ))}
            </ListTag>
          )
        }

        return <p key={`paragraph-${index}`}>{renderInlineFormatting(block.content)}</p>
      })}
    </div>
  )
}

function PortfolioCard({ item, isExpanded, onToggle }) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <button className="w-full text-left" onClick={onToggle} type="button">
        <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
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
          {item.content.map((paragraph, index) => (
            <FormattedPortfolioText key={`${item.id}-${index}`} text={paragraph} />
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

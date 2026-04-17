function createStableKey(value, index) {
  let hash = 0

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }

  return `${index}-${Math.abs(hash)}`
}

function renderInlineFormatting(text) {
  return text.split(/(\*\*[\s\S]*?\*\*)/g).filter(Boolean).map((part, index) => {
    const key = createStableKey(part, index)
    const boldMatch = part.match(/^\*\*([\s\S]*)\*\*$/)

    if (boldMatch) {
      return (
        <strong key={key} className="font-semibold text-slate-800">
          {boldMatch[1]}
        </strong>
      )
    }

    return <span key={key}>{part}</span>
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
      type: 'paragraph',
      content: trimmedLine,
    })
  })

  flushList()

  return (
    <div className="mt-3 space-y-3 text-sm leading-relaxed text-slate-600">
      {blocks.map((block, index) => {
        if (block.type === 'ordered' || block.type === 'unordered') {
          const listClassName =
            block.type === 'ordered'
              ? 'list-decimal space-y-1 pl-5'
              : 'list-disc space-y-1 pl-5'
          const ListTag = block.type === 'ordered' ? 'ol' : 'ul'

          return (
            <ListTag key={`list-${index}`} className={listClassName}>
              {block.items.map((listItem, itemIndex) => (
                <li key={createStableKey(listItem, itemIndex)}>
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

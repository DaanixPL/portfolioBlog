function createStableKey(value, index) {
  let hash = 0
  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i)
    hash |= 0
  }
  return `${index}-${Math.abs(hash)}`
}

function renderInline(text) {
  const parts = text.split(/(\*\*[\s\S]*?\*\*|\*[^*\n]+\*)/g).filter(Boolean)
  return parts.map((part, i) => {
    const boldMatch = part.match(/^\*\*([\s\S]*)\*\*$/)
    const italicMatch = part.match(/^\*([^*\n]+)\*$/)
    if (boldMatch) {
      return (
        <strong key={createStableKey(part, i)} className="font-semibold text-slate-800">
          {boldMatch[1]}
        </strong>
      )
    }
    if (italicMatch) {
      return (
        <em key={createStableKey(part, i)} className="italic">
          {italicMatch[1]}
        </em>
      )
    }
    return <span key={createStableKey(part, i)}>{part}</span>
  })
}

function ArticleContent({ content }) {
  const blocks = []

  content.forEach((segment) => {
    const lines = segment.split('\n')
    let currentList = null

    const flushList = () => {
      if (currentList) {
        blocks.push(currentList)
        currentList = null
      }
    }

    lines.forEach((line) => {
      const trimmed = line.trim()
      if (!trimmed) {
        flushList()
        return
      }

      const h3Match = trimmed.match(/^###\s+(.+)$/)
      const h2Match = trimmed.match(/^##\s+(.+)$/)
      const h1Match = trimmed.match(/^#\s+(.+)$/)
      const orderedMatch = trimmed.match(/^\d+\.\s+(.+)$/)
      const bulletMatch = trimmed.match(/^\*\s+(.+)$/)

      if (h1Match) {
        flushList()
        blocks.push({ type: 'h1', text: h1Match[1] })
        return
      }
      if (h2Match) {
        flushList()
        blocks.push({ type: 'h2', text: h2Match[1] })
        return
      }
      if (h3Match) {
        flushList()
        blocks.push({ type: 'h3', text: h3Match[1] })
        return
      }

      if (orderedMatch) {
        if (!currentList || currentList.type !== 'ol') {
          flushList()
          currentList = { type: 'ol', items: [] }
        }
        currentList.items.push(orderedMatch[1])
        return
      }

      if (bulletMatch) {
        if (!currentList || currentList.type !== 'ul') {
          flushList()
          currentList = { type: 'ul', items: [] }
        }
        currentList.items.push(bulletMatch[1])
        return
      }

      flushList()
      blocks.push({ type: 'p', text: trimmed })
    })

    flushList()
  })

  return (
    <div>
      {blocks.map((block, i) => {
        switch (block.type) {
          case 'h1':
            return (
              <h1 key={`h1-${i}`} className="mt-8 mb-3 text-2xl font-bold tracking-tight text-slate-900 first:mt-0">
                {block.text}
              </h1>
            )
          case 'h2':
            return (
              <h2 key={`h2-${i}`} className="mt-7 mb-2 text-xl font-semibold tracking-tight text-slate-900 first:mt-0">
                {block.text}
              </h2>
            )
          case 'h3':
            return (
              <h3 key={`h3-${i}`} className="mt-5 mb-1.5 text-base font-semibold text-slate-800 first:mt-0">
                {block.text}
              </h3>
            )
          case 'ol':
            return (
              <ol key={`ol-${i}`} className="my-3 list-decimal space-y-1.5 pl-6 text-slate-600 leading-relaxed">
                {block.items.map((item, j) => (
                  <li key={createStableKey(item, j)}>{renderInline(item)}</li>
                ))}
              </ol>
            )
          case 'ul':
            return (
              <ul key={`ul-${i}`} className="my-3 list-disc space-y-1.5 pl-6 text-slate-600 leading-relaxed">
                {block.items.map((item, j) => (
                  <li key={createStableKey(item, j)}>{renderInline(item)}</li>
                ))}
              </ul>
            )
          default:
            return (
              <p key={`p-${i}`} className="mt-4 leading-relaxed text-slate-600 first:mt-0">
                {renderInline(block.text)}
              </p>
            )
        }
      })}
    </div>
  )
}

export default ArticleContent

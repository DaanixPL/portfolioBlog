import { useEffect } from 'react'
import { X } from 'lucide-react'
import ArticleContent from './ArticleContent'

function PortfolioModal({ item, onClose }) {
  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [])

  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center p-4 sm:p-6 lg:p-10">
      {/* Backdrop */}
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal card */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        className="relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/8"
      >
        {/* Header */}
        <div className="flex shrink-0 items-start justify-between gap-4 border-b border-slate-100 px-7 py-6 sm:px-8">
          <div className="min-w-0">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              {item.tag}
            </span>
            <h2 id="modal-title" className="mt-3 text-xl font-bold leading-snug tracking-tight text-slate-900 sm:text-2xl">
              {item.title}
            </h2>
          </div>
          <button
            type="button"
            aria-label="Zamknij"
            onClick={onClose}
            className="ml-2 shrink-0 rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
          >
            <X size={20} />
          </button>
        </div>

        {/* Scrollable body */}
        <div className="overflow-y-auto px-7 py-6 sm:px-8 sm:py-8">
          <ArticleContent content={item.content} />
        </div>

        {/* Footer */}
        <div className="flex shrink-0 items-center border-t border-slate-100 px-7 py-4 sm:px-8">
          <button
            type="button"
            onClick={onClose}
            className="text-sm font-medium text-slate-400 transition hover:text-slate-700"
          >
            ← Zamknij artykuł
          </button>
        </div>
      </div>
    </div>
  )
}

export default PortfolioModal

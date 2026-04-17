import { useEffect, useState } from 'react'

function Navbar() {
  const [hasShadow, setHasShadow] = useState(false)

  useEffect(() => {
    const onScroll = () => setHasShadow(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 border-b border-transparent bg-white/90 backdrop-blur transition-shadow ${
        hasShadow ? 'shadow-sm' : ''
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-xl font-semibold tracking-tight text-slate-900">
          TekstStudio
        </a>
        <ul className="flex items-center gap-5 text-sm font-medium text-slate-700 sm:gap-8">
          <li>
            <a href="#oferta" className="transition hover:text-slate-900">
              Co oferujemy
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition hover:text-slate-900">
              Portfolio
            </a>
          </li>
          <li>
            <a href="#kontakt" className="transition hover:text-slate-900">
              Kontakt
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar

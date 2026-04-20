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
      className={`sticky top-0 z-50 border-b border-white/8 bg-navy backdrop-blur-md transition-shadow ${
        hasShadow ? 'shadow-xl shadow-black/40' : ''
      }`}
    >
      <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <a href="#hero" className="text-lg font-bold tracking-tight text-white">
          Tekst<span className="text-gold">Studio</span>
        </a>
        <ul className="flex items-center gap-5 text-sm font-medium text-slate-300 sm:gap-8">
          <li>
            <a href="#oferta" className="transition hover:text-gold">
              Co oferujemy
            </a>
          </li>
          <li>
            <a href="#portfolio" className="transition hover:text-gold">
              Portfolio
            </a>
          </li>
          <li>
            <a
              href="mailto:kontakt@tekststudio.pl"
              className="inline-flex items-center justify-center rounded-lg border border-gold/60 px-4 py-2 text-gold transition hover:bg-gold hover:text-white"
            >
              Napisz do mnie
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Navbar


function Footer() {
  return (
    <footer className="border-t border-white/8 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-2 text-sm text-slate-500 sm:flex-row sm:items-center">
          <span>
            Tekst<span className="text-gold/70">Studio</span>
          </span>
          <span>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer


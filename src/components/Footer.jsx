function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-400 sm:px-6 lg:px-8">
        TekstStudio © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}

export default Footer

function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-6 text-sm text-slate-600 sm:px-6 lg:px-8">
        TekstStudio © {new Date().getFullYear()} Wszelkie prawa zastrzeżone.
      </div>
    </footer>
  )
}

export default Footer

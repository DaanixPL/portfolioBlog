function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-navy">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-white">
          Kontakt
        </h2>
        <p className="mt-4 max-w-2xl text-slate-300">
          Chętnie porozmawiam o Twoim projekcie. Napisz bezpośrednio na{' '}
          <a
            href="mailto:kontakt@tekststudio.pl"
            className="font-semibold text-gold underline-offset-4 hover:underline"
          >
            kontakt@tekststudio.pl
          </a>{' '}
          lub skorzystaj z formularza poniżej.
        </p>
        <form
          className="mt-10 grid max-w-2xl gap-5"
          action="mailto:kontakt@tekststudio.pl"
          method="post"
          encType="text/plain"
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">Imię</span>
            <input
              required
              type="text"
              name="imie"
              className="rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">Email</span>
            <input
              required
              type="email"
              name="email"
              className="rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-300">Wiadomość</span>
            <textarea
              required
              name="wiadomosc"
              rows="5"
              className="rounded-md border border-white/20 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-slate-500 focus:border-gold"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-md bg-gold px-6 py-3 text-sm font-semibold text-navy transition hover:brightness-110"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
    </section>
  )
}

export default Contact

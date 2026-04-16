function Contact() {
  return (
    <section id="kontakt" className="scroll-mt-24 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Kontakt
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Chętnie porozmawiam o Twoim projekcie. Napisz do mnie przez formularz
          lub bezpośrednio na maila.
        </p>
        <form
          className="mt-10 grid max-w-2xl gap-5"
          action="mailto:kontakt@tekststudio.pl"
          method="post"
          encType="text/plain"
        >
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Imię</span>
            <input
              required
              type="text"
              name="imie"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Email</span>
            <input
              required
              type="email"
              name="email"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            />
          </label>
          <label className="grid gap-2">
            <span className="text-sm font-medium text-slate-700">Wiadomość</span>
            <textarea
              required
              name="wiadomosc"
              rows="5"
              className="rounded-md border border-slate-300 px-4 py-3 text-sm outline-none transition focus:border-slate-900"
            />
          </label>
          <button
            type="submit"
            className="inline-flex w-fit items-center justify-center rounded-md bg-slate-900 px-6 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
          >
            Wyślij wiadomość
          </button>
        </form>
        <p className="mt-8 text-sm text-slate-600">
          Email:{' '}
          <a
            href="mailto:kontakt@tekststudio.pl"
            className="font-semibold text-slate-900 underline decoration-slate-300 underline-offset-4"
          >
            kontakt@tekststudio.pl
          </a>
        </p>
      </div>
    </section>
  )
}

export default Contact

import { CheckCircle, PencilLine } from 'lucide-react'

function Services() {
  const benefits = [
    'Lepsza widoczność Twojej strony w Google.',
    'Większe zaufanie do marki dzięki eksperckim treściom.',
    'Więcej wartościowego ruchu i potencjalnych klientów.',
    'Spójny, profesjonalny wizerunek komunikacji.',
  ]

  return (
    <section id="oferta" className="scroll-mt-24 border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Oferta
        </p>
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Co oferujemy
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Jedna konkretna usługa, realizowana kompleksowo — od researchu i
          planowania po gotowy, zoptymalizowany tekst.
        </p>
        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8 transition hover:shadow-md">
            <div className="mb-5 inline-flex rounded-xl bg-navy p-3 text-gold shadow-sm">
              <PencilLine size={22} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Pisanie artykułów blogowych
            </h3>
            <p className="mt-3 leading-relaxed text-slate-600">
              Piszę merytoryczne i angażujące artykuły, które wspierają SEO oraz
              budują zaufanie do Twojej marki. Dopasowuję styl do branży i celu,
              aby każdy tekst pomagał Ci zdobywać nowych klientów.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:shadow-md">
            <h3 className="text-xl font-semibold text-slate-900">Co to daje?</h3>
            <ul className="mt-5 space-y-3 text-slate-600">
              {benefits.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-gold" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

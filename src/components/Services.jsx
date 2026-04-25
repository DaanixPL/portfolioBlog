import { CheckCircle, PencilLine } from 'lucide-react'

const benefits = [
  'Więcej wejść z Google na Twoją stronę',
  'Treści, które budują profesjonalny wizerunek marki',
  'Stały dopływ potencjalnych klientów',
  'Spójna komunikacja, która sprzedaje, a nie tylko informuje',
]

function Services() {  return (
    <section id="oferta" className="scroll-mt-24 border-b border-slate-100 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-gold">
          Oferta
        </p>
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Co oferuję
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-500">
         Zajmuję się całym procesem tworzenia treści blogowych, od pomysłu i researchu po gotowy artykuł, który jest przygotowany pod SEO i realnie wspiera widoczność Twojej firmy w Google.
        </p>
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-slate-50/70 p-8 transition hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
            <div className="mb-5 inline-flex rounded-xl bg-navy p-3 text-gold shadow-sm shadow-gold/20">
              <PencilLine size={22} />
            </div>
            <h3 className="text-xl font-semibold text-slate-900">
              Pisanie artykułów blogowych
            </h3>
            <p className="mt-3 leading-relaxed text-slate-500">
             Tworzę przemyślane artykuły blogowe dla firm, które realnie wspierają SEO i budują widoczność marki w Google. Każdy tekst opieram na researchu, analizie słów kluczowych i dopasowaniu do Twojej branży, aby przyciągał właściwych odbiorców i wspierał sprzedaż.
            </p>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-8 transition hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5">
            <h3 className="text-xl font-semibold text-slate-900">Co to daje?</h3>
            <ul className="mt-5 space-y-3 text-slate-500">
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


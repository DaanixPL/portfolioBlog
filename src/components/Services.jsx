import { PencilLine } from 'lucide-react'

function Services() {
  return (
    <section id="uslugi" className="scroll-mt-24 border-b border-slate-200 bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <h2 className="text-3xl font-semibold tracking-tight text-slate-900">
          Usługi
        </h2>
        <p className="mt-4 max-w-2xl text-slate-600">
          Skupiam się na jednej usłudze i wykonuję ją od A do Z: od researchu
          po gotowy tekst.
        </p>
        <div className="mt-10 max-w-xl rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <div className="mb-4 inline-flex rounded-xl bg-white p-3 text-slate-900 shadow-sm">
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
      </div>
    </section>
  )
}

export default Services

import { Helmet } from 'react-helmet-async'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import { getArticleBySlug } from '../data/articles'
import ArticleContent from '../components/ArticleContent'

const SITE_URL = 'https://tekststudio.pl'

function ArticlePage() {
  const { slug } = useParams()
  const article = getArticleBySlug(slug)

  if (!article) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-white px-4 text-center">
        <p className="text-4xl font-bold text-slate-900">404</p>
        <p className="mt-4 text-slate-500">Artykuł nie został znaleziony.</p>
        <Link
          to="/"
          className="mt-8 inline-flex items-center gap-2 rounded-lg bg-gold px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-gold/25 transition hover:brightness-110"
        >
          <ArrowLeft size={16} />
          Wróć na stronę główną
        </Link>
      </div>
    )
  }

  const pageTitle = `${article.title} | TekstStudio`
  const pageUrl = `${SITE_URL}/blog/${article.slug}`

  return (
    <div className="min-h-screen bg-[#f8f8fc]">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={article.metaDescription} />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={pageUrl} />
        <meta property="og:type" content="article" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="TekstStudio" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={article.metaDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={article.metaDescription} />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.metaDescription,
            datePublished: article.datePublished,
            author: {
              '@type': 'Person',
              name: 'TekstStudio',
              url: SITE_URL,
            },
            publisher: {
              '@type': 'Organization',
              name: 'TekstStudio',
              url: SITE_URL,
            },
            mainEntityOfPage: {
              '@type': 'WebPage',
              '@id': pageUrl,
            },
          })}
        </script>
      </Helmet>
      {/* Top bar */}
      <header className="sticky top-0 z-50 border-b border-white/8 bg-navy shadow-xl shadow-black/40">
        <nav className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <Link to="/" className="text-lg font-bold tracking-tight text-white">
            Tekst<span className="text-gold">Studio</span>
          </Link>
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-300 transition hover:text-gold"
          >
            <ArrowLeft size={16} />
            Wróć do portfolio
          </Link>
        </nav>
      </header>

      {/* Article */}
      <main>
        <article
          className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8"
          itemScope
          itemType="https://schema.org/Article"
        >
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 text-sm text-slate-500">
              <li>
                <Link to="/" className="transition hover:text-gold">
                  Strona główna
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li>
                <Link to="/#portfolio" className="transition hover:text-gold">
                  Portfolio
                </Link>
              </li>
              <li aria-hidden="true" className="text-slate-300">
                /
              </li>
              <li className="truncate text-slate-700" aria-current="page">
                {article.title}
              </li>
            </ol>
          </nav>

          {/* Header */}
          <header className="mb-10 border-b border-slate-200 pb-8">
            <span className="inline-flex rounded-full bg-gold/10 px-3 py-1 text-xs font-semibold text-gold">
              {article.tag}
            </span>
            <h1
              itemProp="headline"
              className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl"
            >
              {article.title}
            </h1>
            <p className="mt-4 text-base leading-relaxed text-slate-500">{article.excerpt}</p>
            <time
              itemProp="datePublished"
              dateTime={article.datePublished}
              className="mt-4 block text-xs text-slate-400"
            >
              Opublikowano:{' '}
              {new Date(article.datePublished).toLocaleDateString('pl-PL', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </header>

          {/* Content */}
          <div itemProp="articleBody" className="prose-custom">
            <ArticleContent content={article.content} />
          </div>

          {/* CTA at bottom */}
          <div className="mt-16 rounded-2xl border border-gold/20 bg-white p-8 shadow-sm">
            <p className="text-lg font-semibold text-slate-900">
              Potrzebujesz takich treści dla swojej firmy?
            </p>
            <p className="mt-2 text-sm text-slate-500">
              Tworzę artykuły SEO, które przyciągają klientów z Google. Napisz do mnie.
            </p>
            <a
              href="mailto:kontakt@tekststudio.pl"
              className="mt-5 inline-flex items-center justify-center rounded-lg bg-gold px-7 py-3.5 text-sm font-semibold text-white shadow-lg shadow-gold/25 transition hover:brightness-110"
            >
              Napisz do mnie
            </a>
          </div>
        </article>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/8 bg-navy">
        <div className="mx-auto max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex flex-col items-start justify-between gap-2 text-sm text-slate-500 sm:flex-row sm:items-center">
            <span>
              Tekst<span className="text-gold/70">Studio</span>
            </span>
            <span>© {new Date().getFullYear()} Wszelkie prawa zastrzeżone.</span>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default ArticlePage

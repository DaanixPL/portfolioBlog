import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'
import ArticlePage from './pages/ArticlePage'

const SITE_URL = 'https://tekststudio.pl'

function HomePage() {
  return (
    <div className="text-slate-800">
      <Helmet>
        <title>TekstStudio | Portfolio twórcy treści – artykuły SEO dla firm</title>
        <meta
          name="description"
          content="TekstStudio – portfolio copywritera i twórcy treści SEO. Piszę artykuły blogowe dla firm w Polsce, które zdobywają widoczność w Google i przyciągają klientów."
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="pl_PL" />
        <meta property="og:site_name" content="TekstStudio" />
        <meta
          property="og:title"
          content="TekstStudio | Portfolio twórcy treści – artykuły SEO dla firm"
        />
        <meta
          property="og:description"
          content="Piszę artykuły blogowe dla firm w Polsce. Zobacz moje przykładowe realizacje i skontaktuj się ze mną."
        />
        <meta property="og:url" content={`${SITE_URL}/`} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content="TekstStudio | Portfolio twórcy treści" />
        <meta
          name="twitter:description"
          content="Tworzę artykuły SEO dla firm w Polsce. Sprawdź portfolio i napisz do mnie."
        />
      </Helmet>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog/:slug" element={<ArticlePage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App

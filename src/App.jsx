import Contact from './components/Contact'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Services from './components/Services'

function App() {
  return (
    <div className="bg-slate-50 text-slate-800">
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

export default App

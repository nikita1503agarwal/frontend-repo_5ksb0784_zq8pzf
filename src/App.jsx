import Hero from './components/Hero'
import Features from './components/Features'
import Shop from './components/Shop'
import Gallery from './components/Gallery'
import PillowScene from './components/PillowScene'
import Admin from './components/Admin'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <a href="/" className="font-extrabold tracking-tight text-xl">OD Nameštaj</a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-gray-600">
            <a href="#shop" className="hover:text-gray-900">Shop</a>
            <a href="#galerija" className="hover:text-gray-900">Galerija</a>
            <a href="#admin" className="hover:text-gray-900">Dodaj</a>
            <a href="#kontakt" className="hover:text-gray-900">Kontakt</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <Features />
        <Shop />
        <section id="galerija"><Gallery /></section>
        <PillowScene />
        <Admin />
        <CTA />
      </main>

      <footer className="py-10 border-t border-gray-100">
        <div className="max-w-6xl mx-auto px-6 md:px-12 text-sm text-gray-500 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} OD Nameštaj. Sva prava zadržana.</p>
          <p>Izrada po meri • Kuhinje • Plakari • Komode</p>
        </div>
      </footer>
    </div>
  )
}

export default App

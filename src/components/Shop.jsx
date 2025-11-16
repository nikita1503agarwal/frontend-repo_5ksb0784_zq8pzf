import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Shop(){
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [filter, setFilter] = useState('')

  const load = async () => {
    try {
      setLoading(true)
      const url = new URL('/api/products', apiBase)
      if (filter) url.searchParams.set('kategorija', filter)
      const res = await fetch(url, { headers: { 'Content-Type': 'application/json' } })
      if(!res.ok) throw new Error('Greška pri učitavanju proizvoda')
      const data = await res.json()
      setItems(data)
    } catch(e){
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(()=>{ load() }, [filter])

  return (
    <section id="shop" className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Shop</h2>
            <p className="text-gray-600 mt-2">Pregledajte naše istaknute komade i inspiraciju za vaš prostor.</p>
          </div>
          <div className="flex gap-3">
            <select value={filter} onChange={(e)=>setFilter(e.target.value)} className="px-3 py-2 rounded-xl border border-gray-200 bg-white">
              <option value="">Sve kategorije</option>
              <option value="kuhinja">Kuhinje</option>
              <option value="ormar">Ormari</option>
              <option value="komoda">Komode</option>
              <option value="radni sto">Radni stolovi</option>
            </select>
          </div>
        </div>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {loading && (
              <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}} className="col-span-full text-center text-gray-500">Učitavanje...</motion.div>
            )}
          </AnimatePresence>

          {!loading && items.length === 0 && (
            <div className="col-span-full text-center text-gray-500">Trenutno nema proizvoda.</div>
          )}

          {items.map((it)=> (
            <motion.div key={it.id || it._id} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.5}} className="group rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-rose-100 relative">
                {it.slike && it.slike[0] && (
                  <img src={it.slike[0]} alt={it.naziv} className="absolute inset-0 w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{it.naziv}</h3>
                  <span className="text-gray-900 font-bold">{Number(it.cena).toLocaleString('sr-RS')} €</span>
                </div>
                {it.opis && <p className="mt-1 text-gray-600 line-clamp-2">{it.opis}</p>}
                {it.kategorija && <p className="mt-2 text-xs text-gray-500">{it.kategorija}</p>}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

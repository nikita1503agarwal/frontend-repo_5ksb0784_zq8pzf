import { useState } from 'react'
import { motion } from 'framer-motion'

const apiBase = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

export default function Admin(){
  const [form, setForm] = useState({
    naziv: '', opis: '', cena: '', kategorija: 'kuhinja', dimenzije: '', materijal: '', slike: [''], istaknuto: false, dostupno: true
  })
  const [status, setStatus] = useState({ type: '', msg: '' })
  const [loading, setLoading] = useState(false)

  const setField = (k, v) => setForm(prev => ({ ...prev, [k]: v }))

  const setImage = (i, v) => {
    const arr = [...form.slike]
    arr[i] = v
    setField('slike', arr)
  }
  const addImage = () => setField('slike', [...form.slike, ''])
  const removeImage = (i) => setField('slike', form.slike.filter((_, idx) => idx !== i))

  const submit = async (e) => {
    e.preventDefault()
    setStatus({ type: '', msg: '' })
    setLoading(true)
    try {
      const payload = {
        ...form,
        cena: parseFloat(form.cena || '0'),
        slike: form.slike.filter(Boolean)
      }
      const res = await fetch(new URL('/api/products', apiBase), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })
      const data = await res.json()
      if(!res.ok) throw new Error(data?.detail || 'Greška pri čuvanju')
      setStatus({ type: 'ok', msg: 'Proizvod sačuvan! ID: ' + data.id })
      setForm({ naziv: '', opis: '', cena: '', kategorija: 'kuhinja', dimenzije: '', materijal: '', slike: [''], istaknuto: false, dostupno: true })
    } catch (err) {
      setStatus({ type: 'err', msg: err.message })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section id="admin" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="md:w-1/2">
            <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-2xl md:text-3xl font-bold text-gray-900">Dodaj proizvod</motion.h2>
            <p className="mt-2 text-gray-600">Popunite formu i objavite novi komad u shop-u.</p>
            <form onSubmit={submit} className="mt-6 space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-700">Naziv</label>
                  <input value={form.naziv} onChange={e=>setField('naziv', e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Kategorija</label>
                  <select value={form.kategorija} onChange={e=>setField('kategorija', e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white">
                    <option value="kuhinja">Kuhinja</option>
                    <option value="ormar">Ormar</option>
                    <option value="komoda">Komoda</option>
                    <option value="radni sto">Radni sto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Cena (€)</label>
                  <input type="number" step="0.01" value={form.cena} onChange={e=>setField('cena', e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white" required />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Dostupno</label>
                  <select value={String(form.dostupno)} onChange={e=>setField('dostupno', e.target.value === 'true')} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white">
                    <option value="true">Da</option>
                    <option value="false">Ne</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Dimenzije</label>
                  <input value={form.dimenzije} onChange={e=>setField('dimenzije', e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white" />
                </div>
                <div>
                  <label className="block text-sm text-gray-700">Materijal</label>
                  <input value={form.materijal} onChange={e=>setField('materijal', e.target.value)} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white" />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Opis</label>
                <textarea value={form.opis} onChange={e=>setField('opis', e.target.value)} rows={4} className="mt-1 w-full px-3 py-2 rounded-xl border border-gray-200 bg-white" />
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <label className="block text-sm text-gray-700">Istaknuto</label>
                  <input type="checkbox" checked={form.istaknuto} onChange={e=>setField('istaknuto', e.target.checked)} />
                </div>
              </div>
              <div>
                <label className="block text-sm text-gray-700">Slike (URL)</label>
                <div className="space-y-2 mt-1">
                  {form.slike.map((url, idx)=> (
                    <div key={idx} className="flex items-center gap-2">
                      <input value={url} onChange={e=>setImage(idx, e.target.value)} placeholder="https://..." className="flex-1 px-3 py-2 rounded-xl border border-gray-200 bg-white" />
                      {form.slike.length > 1 && (
                        <button type="button" onClick={()=>removeImage(idx)} className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100">Ukloni</button>
                      )}
                    </div>
                  ))}
                  <button type="button" onClick={addImage} className="px-3 py-2 rounded-xl border border-gray-200 hover:bg-gray-100">Dodaj sliku</button>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <button disabled={loading} className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 disabled:opacity-60">{loading ? 'Slanje...' : 'Sačuvaj proizvod'}</button>
                {status.msg && (
                  <span className={"text-sm " + (status.type==='ok' ? 'text-emerald-600' : 'text-rose-600')}>{status.msg}</span>
                )}
              </div>
            </form>
          </div>

          {/* Live preview */}
          <div className="md:w-1/2">
            <div className="rounded-2xl bg-white ring-1 ring-gray-100 shadow-sm overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-amber-100 to-rose-100 relative">
                {form.slike?.[0] && (
                  <img src={form.slike[0]} alt={form.naziv || 'proizvod'} className="absolute inset-0 w-full h-full object-cover" />
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between gap-3">
                  <h3 className="text-lg font-semibold text-gray-900">{form.naziv || 'Naziv proizvoda'}</h3>
                  <span className="text-gray-900 font-bold">{form.cena ? Number(form.cena).toLocaleString('sr-RS') : '0'} €</span>
                </div>
                {form.opis && <p className="mt-1 text-gray-600 line-clamp-2">{form.opis}</p>}
                {form.kategorija && <p className="mt-2 text-xs text-gray-500">{form.kategorija}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

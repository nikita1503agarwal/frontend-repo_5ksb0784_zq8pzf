import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="kontakt" className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-stone-900">Kontakt</h2>
          <p className="mt-3 text-stone-600">Pošaljite nam skicu, dimenzije ili fotografiju prostora i naš tim će vam predložiti optimalno rešenje.</p>
          <div className="mt-6 space-y-2 text-stone-700">
            <p><span className="font-semibold">Telefon:</span> +381 XX XXX XXXX</p>
            <p><span className="font-semibold">Email:</span> office@od-namestaj.com</p>
            <p><span className="font-semibold">Adresa:</span> Beograd, Srbija</p>
          </div>
        </div>
        <form action="https://formspree.io/f/mqazdzne" method="POST" className="bg-stone-50 rounded-2xl p-6 border border-stone-200">
          <div className="grid md:grid-cols-2 gap-4">
            <input name="ime" required placeholder="Ime i prezime" className="px-4 py-3 rounded-lg border border-stone-300 bg-white" />
            <input name="email" required type="email" placeholder="Email" className="px-4 py-3 rounded-lg border border-stone-300 bg-white" />
            <input name="telefon" placeholder="Telefon" className="px-4 py-3 rounded-lg border border-stone-300 bg-white md:col-span-2" />
            <textarea name="poruka" required placeholder="Vaša poruka" rows="5" className="px-4 py-3 rounded-lg border border-stone-300 bg-white md:col-span-2" />
          </div>
          <button className="mt-4 px-6 py-3 rounded-lg bg-stone-900 text-white hover:bg-stone-800 transition">Pošalji</button>
        </form>
      </div>
    </section>
  )
}

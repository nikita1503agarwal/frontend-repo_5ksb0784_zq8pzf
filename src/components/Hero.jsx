import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden min-h-[80vh] grid place-items-center bg-gradient-to-br from-amber-50 via-white to-rose-50">
      <div className="absolute inset-0 pointer-events-none select-none">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ duration: 1.2 }}
          className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tr from-amber-200 via-rose-200 to-emerald-200"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 1.2, delay: 0.2 }}
          className="absolute -bottom-32 -right-32 w-[600px] h-[600px] rounded-full blur-3xl bg-gradient-to-tr from-rose-200 via-amber-200 to-sky-200"
        />
      </div>

      <div className="relative z-10 px-6 md:px-12 max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900"
          >
            Nameštaj po meri koji se uklapa u vaš život
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="mt-6 text-lg md:text-xl text-gray-600"
          >
            Dizajniramo i izrađujemo kuhinje, plakare, komode i radne prostore po vašoj meri, sa pažnjom na detalje i vrhunskom završnom obradom.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.25 }}
            className="mt-8 flex gap-3"
          >
            <a href="#shop" className="px-5 py-3 rounded-xl bg-gray-900 text-white font-semibold hover:bg-gray-800 transition-colors">Pogledaj proizvode</a>
            <a href="#kontakt" className="px-5 py-3 rounded-xl bg-white text-gray-900 font-semibold border border-gray-200 hover:bg-gray-50 transition-colors">Zatraži ponudu</a>
          </motion.div>
        </div>

        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="aspect-[4/3] w-full rounded-3xl bg-white/70 backdrop-blur-md shadow-xl ring-1 ring-black/5 overflow-hidden p-3">
            <div className="grid grid-cols-3 grid-rows-3 gap-3 h-full">
              {[...Array(9)].map((_, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.04 }}
                  className="rounded-xl bg-gradient-to-br from-amber-100 to-rose-100 shadow-sm"
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

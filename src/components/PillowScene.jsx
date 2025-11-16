import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

/*
  Interaktivna scena: jastuk "pada" dok skrolujete i na dnu "sleće" na sofu.
  - Koristi useScroll sa target ref-om za precizan progres unutar ove sekcije
  - Animira y, rotate i scale jastuka, kao i senku prilikom doskoka
*/
export default function PillowScene(){
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start','end end'] })

  // Jastuk: vertikalno kretanje, rotacija i blagi scale pri doskoku
  const y = useTransform(scrollYProgress, [0, 0.85, 1], ['-40vh', '40vh', '44vh'])
  const rotate = useTransform(scrollYProgress, [0, 0.4, 0.8, 1], [-15, 25, -8, 0])
  const scale = useTransform(scrollYProgress, [0.8, 1], [1, 1.02])
  const shadow = useTransform(scrollYProgress, [0.7, 1], [0, 0.35])

  // Parallax pozadine
  const bg1 = useTransform(scrollYProgress, [0,1], [0, -120])
  const bg2 = useTransform(scrollYProgress, [0,1], [0, 80])

  return (
    <section ref={ref} className="relative h-[180vh] overflow-hidden bg-gradient-to-b from-rose-50 via-white to-amber-50">
      {/* Parallax pozadine */}
      <motion.div style={{ y: bg1 }} className="pointer-events-none absolute -top-40 -left-40 w-[70vmin] h-[70vmin] rounded-full blur-3xl bg-rose-200/50" />
      <motion.div style={{ y: bg2 }} className="pointer-events-none absolute -bottom-40 -right-40 w-[70vmin] h-[70vmin] rounded-full blur-3xl bg-amber-200/50" />

      <div className="sticky top-0 h-screen">
        {/* Sofa na dnu */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-[78vw] max-w-4xl">
          {/* Naslon */}
          <div className="mx-auto h-20 rounded-3xl bg-gradient-to-b from-gray-200 to-gray-300 shadow-inner" />
          {/* Sedište */}
          <div className="mt-2 h-16 rounded-3xl bg-gradient-to-b from-gray-100 to-gray-200 shadow" />
          {/* Nogice */}
          <div className="flex justify-between px-6 mt-2">
            <div className="w-10 h-3 bg-gray-400 rounded" />
            <div className="w-10 h-3 bg-gray-400 rounded" />
          </div>
        </div>

        {/* Jastuk */}
        <motion.div
          style={{ y, rotate, scale }}
          className="absolute left-1/2 -translate-x-1/2 top-20"
        >
          <div className="relative">
            {/* Senka */}
            <motion.div style={{ opacity: shadow, scale }} className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-40 h-6 rounded-full bg-black/20 blur-xl" />
            {/* Telo jastuka */}
            <div className="w-40 h-40 rounded-[22%] bg-gradient-to-br from-rose-400 to-amber-300 shadow-xl ring-1 ring-black/10" />
          </div>
        </motion.div>

        {/* Naslov i opis preko scene */}
        <div className="absolute top-24 left-1/2 -translate-x-1/2 text-center px-6">
          <motion.h3 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{ duration: .6 }} className="text-2xl md:text-3xl font-bold text-gray-900">
            Savršeno uklapanje do poslednjeg detalja
          </motion.h3>
          <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{ once: true }} transition={{ duration: .6, delay: .1 }} className="mt-2 text-gray-600 max-w-xl">
            Dok skrolujete, jastuk pronalazi svoje mesto — baš kao što i naš nameštaj nalazi idealan prostor u vašem domu.
          </motion.p>
        </div>
      </div>
    </section>
  )
}

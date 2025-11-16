import { motion } from 'framer-motion'
import { Ruler, Scissors, Hammer, ClipboardCheck } from 'lucide-react'

const steps = [
  {
    icon: Ruler,
    title: 'Merenje i konsultacije',
    desc: 'Dolazimo na lice mesta ili radimo online konsultacije. Zajedno definišemo stil, dimenzije i budžet.'
  },
  {
    icon: Scissors,
    title: 'Izbor tkanina i pena',
    desc: 'Birate između premium štofova, eko kože i punjenja različite tvrdoće – uz uzorke na dodir.'
  },
  {
    icon: Hammer,
    title: 'Ručno tapaciranje',
    desc: 'Konstrukcija, krojenje i tapaciranje – precizno i dugotrajno, bez kompromisa.'
  },
  {
    icon: ClipboardCheck,
    title: 'Isporuka i montaža',
    desc: 'Dostava do kuće i profesionalna montaža. Sve čistimo i ostavljamo spremno za uživanje.'
  }
]

export default function Process(){
  return (
    <section id="proces" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Kako nastaje vaš komad po meri</motion.h2>
        <div className="mt-12 grid md:grid-cols-4 gap-6">
          {steps.map((s, i)=>{
            const Icon = s.icon
            return (
              <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1, y:0}} viewport={{once:true, amount:.3}} transition={{duration:.5, delay:i*0.05}} className="p-6 rounded-2xl bg-white shadow-sm ring-1 ring-gray-100">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gray-900 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-lg font-semibold text-gray-900">{s.title}</h3>
                <p className="mt-2 text-gray-600">{s.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

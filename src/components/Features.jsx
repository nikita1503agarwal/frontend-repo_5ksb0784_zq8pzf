import { motion } from 'framer-motion'
import { Hammer, Ruler, Leaf } from 'lucide-react'

const items = [
  {
    icon: Hammer,
    title: 'Majstorska izrada',
    desc: 'Svaki komad pravimo ručno, sa preciznošću i posvećenošću.'
  },
  {
    icon: Ruler,
    title: 'Potpuna prilagodljivost',
    desc: 'Dimenzije, materijali i završne obrade po vašoj želji.'
  },
  {
    icon: Leaf,
    title: 'Kvalitetni materijali',
    desc: 'Biramo proverene dobavljače i dugotrajne materijale.'
  }
]

export default function Features(){
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Zašto OD Nameštaj</motion.h2>
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {items.map((it,idx)=>{
            const Icon = it.icon
            return (
              <motion.div key={idx} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.3}} transition={{duration:.5, delay: idx*0.1}} className="p-6 rounded-2xl bg-gradient-to-br from-gray-50 to-white shadow-sm ring-1 ring-gray-100">
                <div className="w-12 h-12 rounded-xl grid place-items-center bg-gray-900 text-white">
                  <Icon size={24} />
                </div>
                <h3 className="mt-4 text-xl font-semibold text-gray-900">{it.title}</h3>
                <p className="mt-2 text-gray-600">{it.desc}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

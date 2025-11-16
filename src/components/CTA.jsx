import { motion } from 'framer-motion'

export default function CTA(){
  return (
    <section id="kontakt" className="py-20 bg-gray-900 text-white">
      <div className="max-w-5xl mx-auto px-6 md:px-12 text-center">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold">Imate projekat na umu?</motion.h2>
        <motion.p initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.1}} className="mt-3 text-gray-300">Pišite nam i dobićete okvirnu ponudu i 3D predlog rešenja.</motion.p>
        <motion.a href="mailto:info@od-namestaj.rs" initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6, delay:.2}} className="inline-block mt-6 px-6 py-3 rounded-xl bg-white text-gray-900 font-semibold hover:bg-gray-100">Pošalji upit</motion.a>
      </div>
    </section>
  )
}

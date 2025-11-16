import { motion } from 'framer-motion'

export default function Gallery(){
  const imgs = [
    'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1493666438817-866a91353ca9?q=80&w=1600&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1505692952047-1a78307da8b2?q=80&w=1600&auto=format&fit=crop'
  ]
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2 initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:.6}} className="text-3xl md:text-4xl font-bold text-gray-900 text-center">Galerija radova</motion.h2>
        <div className="mt-10 grid md:grid-cols-4 sm:grid-cols-2 gap-4">
          {imgs.map((src, i)=> (
            <motion.div key={i} initial={{opacity:0, y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true, amount:.2}} transition={{duration:.5, delay: i*0.05}} className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-gray-100">
              <img src={src} alt="rad" className="absolute inset-0 w-full h-full object-cover"/>
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"/>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

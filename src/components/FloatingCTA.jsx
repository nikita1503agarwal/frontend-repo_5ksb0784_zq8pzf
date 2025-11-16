import { motion } from 'framer-motion'
import { MessageCircle } from 'lucide-react'

export default function FloatingCTA(){
  return (
    <motion.a
      href="#kontakt"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 1 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-full shadow-lg bg-gray-900 text-white hover:bg-gray-800"
    >
      <MessageCircle size={18} />
      <span className="font-semibold">Zatraži ponudu</span>
    </motion.a>
  )
}

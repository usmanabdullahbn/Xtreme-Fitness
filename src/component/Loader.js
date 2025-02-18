"use client"

import { motion } from "framer-motion"
import { Dumbbell } from "lucide-react"

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-black">
      <motion.div
        className="relative w-32 h-32 flex items-center justify-center rounded-full overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img
          src="/placeholder.svg?height=128&width=128"
          alt="Loader Background"
          className="absolute w-full h-full object-cover"
        />
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          animate={{ rotate: 360 }}
          transition={{ repeat: Number.POSITIVE_INFINITY, duration: 4, ease: "linear" }}
        >
          <Dumbbell size={80} className="text-[#22c55e]" />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default Loader

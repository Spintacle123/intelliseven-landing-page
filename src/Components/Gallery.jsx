import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Interns } from '../helpers/Interns'

const Gallery = () => {
  const [positionIndex, setPositionIndex] = useState([0, 1, 2, 3, 4])

  const positions = ["center", "left1", "left", "right1", "right"]

  const imageVariants = {
    center: { x: "0%", scale: 1, zIndex: 5 },
    left1: { x: "-50%", scale: 0.7, zIndex: 2 },
    left: { x: "-90%", scale: 0.5, zIndex: 1 },
    right1: { x: "50%", scale: 0.7, zIndex: 2 },
    right: { x: "90%", scale: 0.5, zIndex: 1 },
  }


  const handleNext = () => {
    setPositionIndex((prevIndexes) =>
      prevIndexes.map((prevIndex) => (prevIndex + 1) % positions.length)
    )
  }

  useEffect(() => {
    const interval = setInterval (() => {
      handleNext()
    }, 2500) 
    return () => clearInterval(interval) 
  }, [])

  return (
    <div className=''>
      <div className="max-w-5xl  flex justify-center mx-auto mt-64">
        <div className="w-16 border-t border-main"></div>
        <span className="mx-4 font-rajdhani font-medium text-main uppercase text-xs">
          Gallery Memories of IntelliSeven
        </span>
        <div className="w-16 border-t border-main"></div>
      </div>

      <div className="flex justify-center mx-auto mt-10">
        <h1 className="text-4xl text-main">
          A Visual Journey Through Creativity and Innovation
        </h1>
      </div>

      <div className="relative flex justify-center items-center mt-10  h-[500px] overflow-hidden">
        {Interns.map((intern, index) => (
          <motion.img
            key={index}
            src={intern.img}
            className="rounded-2xl shadow-lg"
            initial="center"
            animate={positions[positionIndex[index]]}
            variants={imageVariants}
            transition={{ duration: 0.7 }}
            style={{
              width: "40%",
              position: "absolute",
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery

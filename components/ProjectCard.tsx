'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react'
import type { Project } from '@/types'

interface SliderProps {
  images: string[]
}

const Slider = ({ images }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1))
  }

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1))
  }

  return (
    <div className="relative w-full aspect-video overflow-hidden rounded-t-lg border-b border-gray-700">
      {/* Terminal header */}
      <div className="absolute top-0 left-0 right-0 bg-gray-900 bg-opacity-80 backdrop-blur-sm z-10 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="terminal-btn terminal-btn-red" />
          <div className="terminal-btn terminal-btn-yellow" />
          <div className="terminal-btn terminal-btn-green" />
          <div className="text-xs text-gray-400 ml-2 font-mono">preview.png</div>
        </div>
        <div className="text-xs text-gray-400 font-mono">
          {currentIndex + 1}/{images.length}
        </div>
      </div>

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out pt-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full flex-shrink-0 relative">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-30 backdrop-blur-[1px]"></div>
            <img
              src={image || "/placeholder.svg"}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 grid grid-cols-12 grid-rows-6 gap-px opacity-10 pointer-events-none">
              {Array.from({ length: 12 * 6 }).map((_, i) => (
                <div key={i} className="bg-gray-300"></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-terminal-green p-2 rounded-full hover:bg-opacity-90 transition z-10"
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-terminal-green p-2 rounded-full hover:bg-opacity-90 transition z-10"
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentIndex ? "bg-terminal-green w-4" : "bg-gray-500 w-2"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  // Generate a random color for the project
  const colors = ["terminal-green", "terminal-blue", "terminal-purple", "terminal-red"]
  const projectColor = colors[index % colors.length]

  return (
    <motion.div
      className="terminal-card overflow-hidden rounded-xl relative"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
    >
      <Slider images={project.images} />
      <div className="p-6">
        <div className="flex justify-between items-start mb-4">
          <h3 className={`text-xl font-semibold font-mono text-${projectColor}`}>
            <span className="text-gray-400">./</span>
            {project.title}
          </h3>
        </div>
        <p className="text-gray-300 mb-4 font-mono text-sm">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, techIndex) => (
            <motion.span
              key={techIndex}
              className={`text-xs font-mono bg-gray-800 text-${projectColor} px-3 py-1 rounded-md border border-${projectColor} border-opacity-30`}
              whileHover={{ y: -2, boxShadow: `0 0 8px var(--${projectColor.replace("terminal-", "terminal-")})` }}
            >
              {tech}
            </motion.span>
          ))}
        </div>
        <div className="flex space-x-4">
          <motion.a
            href={project.live}
            className={`flex items-center text-${projectColor} hover:text-white transition-colors px-3 py-1 rounded-md border border-${projectColor} border-opacity-50 text-sm font-mono`}
            whileHover={{ scale: 1.05, boxShadow: `0 0 10px var(--${projectColor.replace("terminal-", "terminal-")})` }}
            whileTap={{ scale: 0.95 }}
          >
            <ExternalLink size={14} className="mr-2" /> demo
          </motion.a>
          <motion.a
            href={project.github}
            className={`flex items-center text-${projectColor} hover:text-white transition-colors px-3 py-1 rounded-md border border-${projectColor} border-opacity-50 text-sm font-mono`}
            whileHover={{ scale: 1.05, boxShadow: `0 0 10px var(--${projectColor.replace("terminal-", "terminal-")})` }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={14} className="mr-2" /> code
          </motion.a>
        </div>
      </div>
      {/* Decorative glow elements */}
      <div className={`absolute -bottom-10 -right-10 w-20 h-20 rounded-full bg-${projectColor} opacity-10 blur-xl`} />
      <div className={`absolute -top-10 -left-10 w-20 h-20 rounded-full bg-${projectColor} opacity-10 blur-xl`} />
    </motion.div>
  )
}

export default ProjectCard
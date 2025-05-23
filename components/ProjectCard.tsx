'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight, ExternalLink, Github, Maximize2, X } from 'lucide-react'
import type { Project } from '@/types'
import { getTimeAgo } from '@/utils/getTimeAgo'

interface SliderProps {
  images: string[]
  primaryColor: string
  onImageClick: (index: number) => void
}

const colors = ["terminal-blue", "terminal-purple", "terminal-green"];

const Slider = ({ images, primaryColor, onImageClick }: SliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

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
        <div className="flex items-center gap-2">
          <div className="text-xs text-gray-400 font-mono">
            {currentIndex + 1}/{images.length}
          </div>
          {/* Moved the view button to the header for mobile */}
          {isMobile && (
            <button
              onClick={() => onImageClick(currentIndex)}
              className={`bg-gray-900 bg-opacity-70 text-${primaryColor} p-1.5 rounded hover:bg-opacity-90 transition z-10`}
              aria-label="View full image"
            >
              <Maximize2 size={16} />
            </button>
          )}
        </div>
      </div>

      {/* Slides */}
      <div
        className="flex h-full transition-transform duration-500 ease-in-out pt-10"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => {
          const isVideo = image.endsWith('.mp4') || image.endsWith('.webm') || image.endsWith('.ogg');

          return (
            <div key={index} className="w-full flex-shrink-0 relative">
              {
                isVideo ? (
                  <video
                    src={image}
                    className="w-full h-full object-cover opacity-80"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                ) : (
                  <img
                    src={image || '/placeholder.png'}
                    alt={`Slide ${index + 1}`}
                    className="w-full h-full object-cover opacity-80"
                  />
                )
              }
              {/* View button - only shown on desktop */}
              {!isMobile && (
                <button
                  onClick={() => onImageClick(index)}
                  className={`absolute top-12 right-2 bg-gray-900 bg-opacity-70 text-${primaryColor} p-1.5 rounded hover:bg-opacity-90 transition z-10`}
                  aria-label="View full image"
                >
                  <Maximize2 size={16} />
                </button>
              )}
            </div>
          )
        })}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={goToPrevious}
        className={`absolute left-2 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-${primaryColor} p-2 rounded-full hover:bg-opacity-90 transition z-10`}
        aria-label="Previous slide"
      >
        <ChevronLeft size={20} />
      </button>
      <button
        onClick={goToNext}
        className={`absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 bg-opacity-70 text-${primaryColor} p-2 rounded-full hover:bg-opacity-90 transition z-10`}
        aria-label="Next slide"
      >
        <ChevronRight size={20} />
      </button>

      {/* Overlay for the entire slider */}
      <span className='hr-only bg-terminal-green'></span>
      <span className='hr-only bg-terminal-blue'></span>
      <span className='hr-only bg-terminal-purple'></span>

      {/* Slide indicators */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-10">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all ${index === currentIndex ? `bg-${primaryColor} w-4` : "bg-gray-500 w-2"
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
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isMobile, setIsMobile] = useState(false)
  const projectColor = colors[index % colors.length]

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768)
    }
    
    checkIfMobile()
    window.addEventListener('resize', checkIfMobile)
    
    return () => {
      window.removeEventListener('resize', checkIfMobile)
    }
  }, [])

  const openImageModal = (image: string) => {
    setSelectedImage(image)
  }

  const closeImageModal = () => {
    setSelectedImage(null)
  }

  return (
    <>
      <motion.div
        className="terminal-card overflow-hidden rounded-xl relative"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        whileHover={{ y: -5 }}
      >
        <Slider primaryColor={projectColor} images={project.images} onImageClick={(index) => openImageModal(project.images[index])} />
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h3 className={`text-xl font-semibold font-mono text-${projectColor}`}>
            <span className={`text-${projectColor}`}>$ </span>
              {project.title}
            </h3>
            <span className="text-xs text-gray-400 font-mono">
              {getTimeAgo(project.createdAt)}
            </span>
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
            {
              project.live && (
                <motion.a
                  target="_blank"
                  href={project.live}
                  className={`flex items-center text-${projectColor} hover:text-white transition-colors px-3 py-1 rounded-md border border-${projectColor} border-opacity-50 text-sm font-mono`}
                  whileHover={{ scale: 1.05, boxShadow: `0 0 10px var(--${projectColor.replace("terminal-", "terminal-")})` }}
                  whileTap={{ scale: 0.95 }}
                >
                  <ExternalLink size={14} className="mr-2" /> demo
                </motion.a>
              )
            }
            <motion.a
              href={project.github}
              target="_blank"
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

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-90 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeImageModal}
          >
            <motion.div
              className={`relative ${isMobile ? 'w-full h-full' : 'max-w-4xl w-full max-h-[90vh]'}`}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeImageModal}
                className="absolute -top-10 right-0 text-gray-300 hover:text-white p-2 transition-colors"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
              {
                selectedImage.endsWith('.mp4') || selectedImage.endsWith('.webm') || selectedImage.endsWith('.ogg') ? (
                  <video
                    src={selectedImage}
                    className={`${isMobile ? 'w-full h-full' : 'w-full h-full object-cover'} rounded-lg`}
                    controls
                    autoPlay
                    loop
                    muted
                  />
                ) : (
                  <img
                    src={selectedImage}
                    alt="Selected"
                    className={`${isMobile ? 'w-full h-full object-contain' : 'w-full h-full object-cover'} rounded-lg`}
                  />
                )
              }
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default ProjectCard
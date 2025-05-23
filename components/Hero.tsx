'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Github, Linkedin, Mail, Terminal, Code2, Cpu, Database, Binary, Network } from 'lucide-react'
import { useState, useEffect, JSX } from 'react'

const BinaryRain = () => {
  const [digits, setDigits] = useState<JSX.Element[]>([])

  useEffect(() => {
    const createDigits = () => {
      const newDigits = []
      const columns = Math.floor(window.innerWidth / 20)
      const rows = Math.floor(window.innerHeight / 20)
      
      for (let i = 0; i < columns * rows / 4; i++) {
        const digit = Math.random() > 0.5 ? '1' : '0'
        const left = Math.random() * 100
        const top = Math.random() * 100
        const duration = 5 + Math.random() * 10
        const delay = Math.random() * 5
        
        newDigits.push(
          <div 
            key={i}
            className="binary-digit"
            style={{
              left: `${left}%`,
              top: `${-10}%`,
              animationDuration: `${duration}s`,
              animationDelay: `${delay}s`,
              opacity: Math.random() * 0.5 + 0.1
            }}
          >
            {digit}
          </div>
        )
      }
      
      setDigits(newDigits)
    }

    createDigits()
    window.addEventListener('resize', createDigits)
    
    return () => window.removeEventListener('resize', createDigits)
  }, [])

  return <div className="binary-rain">{digits}</div>
}

// const BinaryTreeVisualization = () => {
//   const nodes = [
//     { id: 1, value: 'root', left: 2, right: 3, x: 50, y: 20 },
//     { id: 2, value: 'skills', left: 4, right: 5, x: 30, y: 40 },
//     { id: 3, value: 'projects', left: 6, right: null, x: 70, y: 40 },
//     { id: 4, value: 'frontend', left: null, right: null, x: 20, y: 60 },
//     { id: 5, value: 'backend', left: null, right: null, x: 40, y: 60 },
//     { id: 6, value: 'fullstack', left: null, right: null, x: 80, y: 60 },
//   ]

//   const lines = nodes.reduce((acc, node) => {
//     if (node.left) {
//       const leftNode = nodes.find(n => n.id === node.left)
//       if (leftNode) {
//         acc.push({
//           id: `${node.id}-${leftNode.id}`,
//           x1: node.x,
//           y1: node.y,
//           x2: leftNode.x,
//           y2: leftNode.y,
//           length: Math.sqrt(Math.pow(leftNode.x - node.x, 2) + Math.pow(leftNode.y - node.y, 2)),
//           angle: Math.atan2(leftNode.y - node.y, leftNode.x - node.x) * 180 / Math.PI
//         })
//       }
//     }
//     if (node.right) {
//       const rightNode = nodes.find(n => n.id === node.right)
//       if (rightNode) {
//         acc.push({
//           id: `${node.id}-${rightNode.id}`,
//           x1: node.x,
//           y1: node.y,
//           x2: rightNode.x,
//           y2: rightNode.y,
//           length: Math.sqrt(Math.pow(rightNode.x - node.x, 2) + Math.pow(rightNode.y - node.y, 2)),
//           angle: Math.atan2(rightNode.y - node.y, rightNode.x - node.x) * 180 / Math.PI
//         })
//       }
//     }
//     return acc
//   }, [] as any[])

//   return (
//     <div className="relative w-full h-64 md:h-96">
//       {lines.map(line => (
//         <div
//           key={line.id}
//           className="binary-tree-line"
//           style={{
//             left: `${line.x1}%`,
//             top: `${line.y1}%`,
//             width: `${line.length}%`,
//             transform: `rotate(${line.angle}deg)`
//           }}
//         />
//       ))}
//       {nodes.map(node => (
//         <div
//           key={node.id}
//           className="binary-tree-node"
//           style={{
//             left: `${node.x}%`,
//             top: `${node.y}%`,
//           }}
//         >
//           <span className="text-xs">{node.value}</span>
//         </div>
//       ))}
//     </div>
//   )
// }

const Hero = () => {
  const commands = [
    'A javascript developer',
    'A react developer',
    'A next.js developer',
    'A node.js developer',
    'A typeScript developer',
    'A system designer',
  ]
  const [currentCommand, setCurrentCommand] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCommand(prev => (prev + 1) % commands.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden pt-16">
      <BinaryRain />
      <div className="glow-effect glow-purple w-64 h-64 top-1/4 left-1/4" />
      <div className="glow-effect glow-blue w-96 h-96 bottom-1/4 right-1/4" />
      
      <div className="container mx-auto px-4 md:px-8 py-16 md:py-32">
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="w-full mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div 
              className="terminal-card mb-8 bg-opacity-10 backdrop-blur-lg p-4 rounded-lg mx-auto max-w-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">terminal</div>
              </div>
              <div className="command-line">
                <span className="command-prompt mt-2">$</span>
                <div className="overflow-hidden">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentCommand}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.3 }}
                      className="whitespace-nowrap"
                    >
                      {commands[currentCommand]}
                      <span className="command-cursor" />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6 font-mono"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <span className="text-terminal-green">$</span> akram<span className="text-terminal-red">_</span>khan
            </motion.h1>
            
            <motion.h2 
              className="text-2xl md:text-4xl font-semibold mb-6 gradient-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              &lt;FullStack<span className="text-terminal-green">Developer</span> /&gt;
            </motion.h2>
            
            <motion.p 
              className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              I architect digital experiences with clean code and modern tech stacks. 
              Specializing in <span className="text-terminal-blue">Nodejs</span>, <span className="text-terminal-purple">React</span>, 
              and <span className="text-terminal-green">React-native</span> ecosystems.
            </motion.p>
            
            <motion.div 
              className="flex flex-wrap gap-4 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <motion.a 
                href="/resume_23_may_2025.pdf"
                target='_blank'
                className="px-6 py-3 bg-terminal-green text-gray-900 rounded-lg font-medium flex items-center gap-2 hover:bg-terminal-blue transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Terminal size={18} /> resume.pdf
              </motion.a>
              <motion.a 
                href="#contact" 
                className="px-6 py-3 border border-terminal-green text-terminal-green rounded-lg font-medium hover:bg-opacity-10 transition-all duration-300 font-mono"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                contact_me.sh
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Replaced profile image with binary tree visualization */}
          {/* <motion.div 
            className="w-full max-w-2xl mt-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="terminal-card p-4">
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">tech_tree.js</div>
              </div>
              <BinaryTreeVisualization />
            </div>
          </motion.div> */}
        </div>
        
        {/* <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
        >
          <div className="text-center font-mono text-xs text-terminal-green mb-2">[ scroll_down ]</div>
          <motion.div 
            className="w-8 h-12 border-2 border-terminal-green rounded-full flex justify-center p-1 mx-auto"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <div className="w-1 h-3 bg-terminal-green rounded-full"></div>
          </motion.div> */}
        {/* </motion.div> */}
      </div>
    </section>
  )
}

export default Hero
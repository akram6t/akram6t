// 'use client'

// import { motion } from 'framer-motion'
// import { ChevronRight } from 'lucide-react'
// import ProjectCard from './ProjectCard'
// import { Project } from '@/types'

// const Projects = () => {
//   const projects: Project[] = [
//     {
//       title: 'E-commerce Platform',
//       description: 'A full-featured e-commerce platform with product filtering, cart functionality, and payment processing.',
//       images: [
//         '/api/placeholder/600/400?1',
//         '/api/placeholder/600/400?2',
//         '/api/placeholder/600/400?3'
//       ],
//       technologies: ['Next.js', 'Redux', 'Stripe', 'TailwindCSS'],
//       live: '#',
//       github: '#'
//     },
//     {
//       title: 'Social Media Dashboard',
//       description: 'An analytics dashboard for social media with real-time data visualization and interactive charts.',
//       images: [
//         '/api/placeholder/600/400?4',
//         '/api/placeholder/600/400?5',
//         '/api/placeholder/600/400?6'
//       ],
//       technologies: ['React', 'D3.js', 'Firebase', 'Styled Components'],
//       live: '#',
//       github: '#'
//     },
//     {
//       title: 'Task Management App',
//       description: 'A collaborative task management tool for teams with drag-and-drop functionality and real-time updates.',
//       images: [
//         '/api/placeholder/600/400?7',
//         '/api/placeholder/600/400?8',
//         '/api/placeholder/600/400?9'
//       ],
//       technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
//       live: '#',
//       github: '#'
//     },
//     {
//       title: 'Travel Blog',
//       description: 'A responsive travel blog with content management system, search functionality, and image optimization.',
//       images: [
//         '/api/placeholder/600/400?10',
//         '/api/placeholder/600/400?11',
//         '/api/placeholder/600/400?12'
//       ],
//       technologies: ['Next.js', 'Sanity CMS', 'Framer Motion', 'Vercel'],
//       live: '#',
//       github: '#'
//     }
//   ]
  
//   return (
//     <section id="projects" className="py-20">
//       <div className="container mx-auto px-4 md:px-8">
//         <motion.div 
//           className="mb-16 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">My <span className="highlight">Projects</span></h2>
//           <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
//           <p className="text-gray-300 max-w-2xl mx-auto">
//             Here are some of my recent projects. Each project reflects my approach to problem-solving,
//             design aesthetics, and technical expertise.
//           </p>
//         </motion.div>
        
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} project={project} index={index} />
//           ))}
//         </div>
        
//         <motion.div 
//           className="text-center mt-12"
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <motion.a 
//             href="#"
//             className="inline-flex items-center text-blue-400 font-medium hover:text-blue-300 transition-colors"
//             whileHover={{ x: 5 }}
//             transition={{ type: 'spring', stiffness: 300, damping: 10 }}
//           >
//             View All Projects <ChevronRight size={20} className="ml-1" />
//           </motion.a>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Projects


// "use client"

// import { useState, useEffect } from "react"
// import { motion, AnimatePresence } from "framer-motion"
// import { ChevronRight, Code, Terminal, FolderOpen, Search } from "lucide-react"
// import ProjectCard from "./ProjectCard"
// import type { Project } from "@/types"

// const Projects = () => {
//   const [filter, setFilter] = useState<string>("all")
//   const [searchTerm, setSearchTerm] = useState<string>("")
//   const [terminalLines, setTerminalLines] = useState<string[]>([])
//   const [isTyping, setIsTyping] = useState(false)

//   const projects: Project[] = [
//     {
//       title: "E-commerce Platform",
//       description:
//         "A full-featured e-commerce platform with product filtering, cart functionality, and payment processing.",
//       images: [
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//       ],
//       technologies: ["Next.js", "Redux", "Stripe", "TailwindCSS"],
//       live: "#",
//       github: "#",
//       category: "fullstack",
//     },
//     {
//       title: "Social Media Dashboard",
//       description: "An analytics dashboard for social media with real-time data visualization and interactive charts.",
//       images: [
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//       ],
//       technologies: ["React", "D3.js", "Firebase", "Styled Components"],
//       live: "#",
//       github: "#",
//       category: "frontend",
//     },
//     {
//       title: "Task Management App",
//       description:
//         "A collaborative task management tool for teams with drag-and-drop functionality and real-time updates.",
//       images: [
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//       ],
//       technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
//       live: "#",
//       github: "#",
//       category: "fullstack",
//     },
//     {
//       title: "Travel Blog",
//       description:
//         "A responsive travel blog with content management system, search functionality, and image optimization.",
//       images: [
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//         "/placeholder.svg?height=400&width=600",
//       ],
//       technologies: ["Next.js", "Sanity CMS", "Framer Motion", "Vercel"],
//       live: "#",
//       github: "#",
//       category: "frontend",
//     },
//   ]

//   // Filter projects based on category and search term
//   const filteredProjects = projects.filter((project) => {
//     const matchesCategory = filter === "all" || project.category === filter
//     const matchesSearch =
//       project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
//     return matchesCategory && matchesSearch
//   })

//   // Terminal typing effect
//   useEffect(() => {
//     const lines = [
//       "cd ~/projects",
//       "ls -la",
//       "git status",
//       "# Finding projects...",
//       `find . -type d -name "*${filter !== "all" ? filter : ""}*" | sort`,
//       `# Found ${filteredProjects.length} projects`,
//       filteredProjects.map((p) => `./projects/${p.title.toLowerCase().replace(/\s+/g, "-")}`).join("\n"),
//       "# Ready to explore projects",
//     ]

//     setTerminalLines([])
//     setIsTyping(true)

//     let currentLineIndex = 0
//     const typingInterval = setInterval(() => {
//       if (currentLineIndex < lines.length) {
//         // Handle multi-line strings
//         if (lines[currentLineIndex].includes("\n")) {
//           const multiLines = lines[currentLineIndex].split("\n")
//           setTerminalLines((prev) => [...prev, ...multiLines])
//         } else {
//           setTerminalLines((prev) => [...prev, lines[currentLineIndex]])
//         }
//         currentLineIndex++
//       } else {
//         clearInterval(typingInterval)
//         setIsTyping(false)
//       }
//     }, 300)

//     return () => clearInterval(typingInterval)
//   }, [filter, filteredProjects.length])

//   // Filter categories
//   const categories = [
//     { id: "all", label: "All Projects", icon: <FolderOpen size={16} /> },
//     { id: "frontend", label: "Frontend", icon: <Code size={16} /> },
//     { id: "backend", label: "Backend", icon: <Terminal size={16} /> },
//     { id: "fullstack", label: "Full Stack", icon: <Code size={16} /> },
//   ]

//   return (
//     <section id="projects" className="py-20 relative overflow-hidden">
//       <div className="glow-effect glow-green w-96 h-96 -top-1/4 -right-1/4 opacity-20" />
//       <div className="glow-effect glow-purple w-64 h-64 bottom-1/4 left-1/4 opacity-20" />

//       <div className="container mx-auto px-4 md:px-8">
//         <motion.div
//           className="mb-12 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
//             <span className="text-terminal-green">ls</span> <span className="text-terminal-purple">-la</span>{" "}
//             <span className="text-terminal-blue">~/projects</span>
//           </h2>
//           <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full" />
//         </motion.div>

//         {/* Terminal Output */}
//         <motion.div
//           className="mb-12 terminal-card"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.2 }}
//         >
//           <div className="terminal-card-header">
//             <div className="terminal-btn terminal-btn-red" />
//             <div className="terminal-btn terminal-btn-yellow" />
//             <div className="terminal-btn terminal-btn-green" />
//             <div className="text-xs text-gray-400 ml-2 font-mono">projects.sh</div>
//           </div>
//           <div className="font-mono text-sm p-4 h-[200px] overflow-y-auto">
//             <AnimatePresence mode="wait">
//               <div>
//                 {terminalLines.map((line, index) => (
//                   <motion.div
//                     key={index}
//                     className="mb-1"
//                     initial={{ opacity: 0, x: -10 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.3, delay: index * 0.05 }}
//                   >
//                     {line.startsWith("cd") ||
//                     line.startsWith("ls") ||
//                     line.startsWith("git") ||
//                     line.startsWith("find") ? (
//                       <>
//                         <span className="text-terminal-green">user@portfolio</span>
//                         <span className="text-gray-400">:</span>
//                         <span className="text-terminal-blue">~</span>
//                         <span className="text-gray-400">$</span> <span className="text-gray-300">{line}</span>
//                       </>
//                     ) : line.startsWith("#") ? (
//                       <span className="text-gray-500">{line}</span>
//                     ) : line.startsWith("./projects") ? (
//                       <span className="text-terminal-purple">{line}</span>
//                     ) : (
//                       line
//                     )}
//                   </motion.div>
//                 ))}
//                 {isTyping && (
//                   <motion.span
//                     className="inline-block w-2 h-5 bg-terminal-green"
//                     animate={{ opacity: [1, 0, 1] }}
//                     transition={{ duration: 0.8, repeat: Number.POSITIVE_INFINITY }}
//                   />
//                 )}
//               </div>
//             </AnimatePresence>
//           </div>
//         </motion.div>

//         {/* Filters and Search */}
//         <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
//           <div className="flex flex-wrap gap-2">
//             {categories.map((category) => (
//               <motion.button
//                 key={category.id}
//                 className={`px-4 py-2 rounded-md font-mono text-sm flex items-center gap-2 ${
//                   filter === category.id
//                     ? "bg-terminal-green bg-opacity-20 text-terminal-green border border-terminal-green"
//                     : "bg-gray-800 text-gray-300 border border-gray-700"
//                 }`}
//                 onClick={() => setFilter(category.id)}
//                 whileHover={{ y: -2 }}
//                 whileTap={{ scale: 0.95 }}
//               >
//                 {category.icon}
//                 {category.label}
//               </motion.button>
//             ))}
//           </div>

//           <div className="relative">
//             <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
//               <Search size={16} />
//             </div>
//             <input
//               type="text"
//               placeholder="grep -i 'search term'"
//               className="bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 w-full md:w-64 font-mono text-sm focus:outline-none focus:border-terminal-green"
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//             />
//           </div>
//         </div>

//         {/* Projects Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {filteredProjects.length > 0 ? (
//             filteredProjects.map((project, index) => <ProjectCard key={index} project={project} index={index} />)
//           ) : (
//             <motion.div
//               className="col-span-2 text-center py-12"
//               initial={{ opacity: 0 }}
//               animate={{ opacity: 1 }}
//               transition={{ duration: 0.6 }}
//             >
//               <div className="text-terminal-yellow font-mono text-lg mb-2">No projects found</div>
//               <div className="text-gray-400 font-mono text-sm">
//                 Error: grep: No match found for '{searchTerm}' in {filter} projects
//               </div>
//             </motion.div>
//           )}
//         </div>

//         {/* View All Projects Link */}
//         {filteredProjects.length > 0 && (
//           <motion.div
//             className="text-center mt-12"
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//           >
//             <motion.a
//               href="#"
//               className="inline-flex items-center text-terminal-green font-mono hover:text-terminal-blue transition-colors px-4 py-2 border border-terminal-green rounded-md hover:border-terminal-blue"
//               whileHover={{ x: 5, boxShadow: "0 0 15px rgba(74, 246, 38, 0.3)" }}
//               transition={{ type: "spring", stiffness: 300, damping: 10 }}
//             >
//               cd ~/all-projects <ChevronRight size={16} className="ml-1" />
//             </motion.a>
//           </motion.div>
//         )}
//       </div>
//     </section>
//   )
// }

// export default Projects





// qwen
'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRight, Code, Terminal, FolderOpen, Search } from 'lucide-react'
import ProjectCard from './ProjectCard'
import type { Project } from '@/types'

const Projects = () => {
  const [filter, setFilter] = useState<string>('all')
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [terminalLines, setTerminalLines] = useState<string[]>([])
  const [isTyping, setIsTyping] = useState<boolean>(false)

  const projects: Project[] = [
    {
      title: 'E-commerce Platform',
      description:
        'A full-featured e-commerce platform with product filtering, cart functionality, and payment processing.',
      images: ['/placeholder.svg?height=400&width=600', '/placeholder.svg?height=400&width=600'],
      technologies: ['Next.js', 'Redux', 'Stripe', 'TailwindCSS'],
      live: '#',
      github: '#',
      category: 'fullstack',
    },
    {
      title: 'Social Media Dashboard',
      description: 'An analytics dashboard for social media with real-time data visualization and interactive charts.',
      images: ['/placeholder.svg?height=400&width=600'],
      technologies: ['React', 'D3.js', 'Firebase', 'Styled Components'],
      live: '#',
      github: '#',
      category: 'frontend',
    },
    {
      title: 'Task Management App',
      description:
        'A collaborative task management tool for teams with drag-and-drop functionality and real-time updates.',
      images: ['/placeholder.svg?height=400&width=600'],
      technologies: ['React', 'TypeScript', 'Node.js', 'MongoDB'],
      live: '#',
      github: '#',
      category: 'fullstack',
    },
    {
      title: 'Travel Blog',
      description:
        'A responsive travel blog with content management system, search functionality, and image optimization.',
      images: ['/placeholder.svg?height=400&width=600'],
      technologies: ['Next.js', 'Sanity CMS', 'Framer Motion', 'Vercel'],
      live: '#',
      github: '#',
      category: 'frontend',
    },
  ]

  // Filter projects based on category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' || project.category === filter
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && matchesSearch
  })

  // Terminal typing effect
  useEffect(() => {
    const lines = [
      'cd ~/projects',
      'ls -la',
      'git status',
      '# Finding projects...',
      `find . -type d -name "*${filter !== 'all' ? filter : ''}*" | sort`,
      `# Found ${filteredProjects.length} projects`,
      ...filteredProjects.map((p) => `./projects/${p.title.toLowerCase().replace(/\s+/g, '-')}`),
      '# Ready to explore projects',
    ]
    setTerminalLines([])
    setIsTyping(true)
    let currentLineIndex = 0
    const typingInterval = setInterval(() => {
      if (currentLineIndex < lines.length) {
        const line = lines[currentLineIndex]
        setTerminalLines((prev) => [...prev, line])
        currentLineIndex++
      } else {
        clearInterval(typingInterval)
        setIsTyping(false)
      }
    }, 300)
    return () => clearInterval(typingInterval)
  }, [filter, filteredProjects.length])

  // Filter categories
  const categories = [
    { id: 'all', label: 'All Projects', icon: <FolderOpen size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code size={16} /> },
    { id: 'backend', label: 'Backend', icon: <Terminal size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={16} /> },
  ]

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Glowing Background Effects */}
      <div className="glow-effect glow-green w-96 h-96 -top-1/4 -right-1/4 opacity-20" />
      <div className="glow-effect glow-purple w-64 h-64 bottom-1/4 left-1/4 opacity-20" />

      <div className="container mx-auto px-4 md:px-8">
        {/* Section Header */}
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-green">projects</span><span className="text-terminal-red">()</span>
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full" />
        </motion.div>

        {/* Terminal Output */}
        {/* <motion.div
          className="mb-12 terminal-card"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="terminal-card-header">
            <div className="terminal-btn terminal-btn-red" />
            <div className="terminal-btn terminal-btn-yellow" />
            <div className="terminal-btn terminal-btn-green" />
            <div className="text-xs text-gray-400 ml-2 font-mono">projects.sh</div>
          </div>
          <div className="font-mono text-sm p-4 h-[200px] overflow-y-auto">
            <AnimatePresence mode="wait">
              <div>
                {terminalLines.map((line, index) => (
                  <motion.div
                    key={index}
                    className="mb-1"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    {line.startsWith('cd') ||
                    line.startsWith('ls') ||
                    line.startsWith('git') ||
                    line.startsWith('find') ? (
                      <>
                        <span className="text-terminal-green">user@portfolio</span>
                        <span className="text-gray-400">:</span>
                        <span className="text-terminal-blue">~</span>
                        <span className="text-gray-400">$</span>{' '}
                        <span className="text-gray-300">{line}</span>
                      </>
                    ) : line.startsWith('#') ? (
                      <span className="text-gray-500">{line}</span>
                    ) : line.startsWith('./projects') ? (
                      <span className="text-terminal-purple">{line}</span>
                    ) : (
                      line
                    )}
                  </motion.div>
                ))}
                {isTyping && (
                  <motion.span
                    className="inline-block w-2 h-5 bg-terminal-green"
                    animate={{ opacity: [1, 0, 1] }}
                    transition={{ duration: 0.8, repeat: Infinity }}
                  />
                )}
              </div>
            </AnimatePresence>
          </div>
        </motion.div> */}

        {/* Filters and Search */}
        <div className="mb-8 flex flex-col md:flex-row gap-4 justify-between">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`px-4 py-2 rounded-md font-mono text-sm flex items-center gap-2 ${
                  filter === category.id
                    ? 'outline-terminal-green bg-opacity-20 text-terminal-green border border-terminal-green'
                    : 'bg-gray-800 text-gray-300 border border-gray-700'
                }`}
                onClick={() => setFilter(category.id)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.icon}
                {category.label}
              </motion.button>
            ))}
          </div>
          <div className="relative">
            <div className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
              <Search size={16} />
            </div>
            <input
              type="text"
              placeholder="grep -i 'search term'"
              className="bg-gray-800 border border-gray-700 rounded-md py-2 pl-10 pr-4 w-full md:w-64 font-mono text-sm focus:outline-none focus:border-terminal-green"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} index={index} />
            ))
          ) : (
            <motion.div
              className="col-span-2 text-center py-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <div className="text-terminal-yellow font-mono text-lg mb-2">No projects found</div>
              <div className="text-gray-400 font-mono text-sm">
                Error: grep: No match found for '{searchTerm}' in {filter} projects
              </div>
            </motion.div>
          )}
        </div>

        {/* View All Button */}
        {/* {filteredProjects.length > 0 && (
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="inline-flex items-center text-terminal-green font-mono hover:text-terminal-blue transition-colors px-4 py-2 border border-terminal-green rounded-md hover:border-terminal-blue"
              whileHover={{ x: 5, boxShadow: '0 0 15px rgba(74, 246, 38, 0.3)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 10 }}
            >
              cd ~/all-projects <ChevronRight size={16} className="ml-1" />
            </motion.a>
          </motion.div>
        )} */}
      </div>
    </section>
  )
}

export default Projects
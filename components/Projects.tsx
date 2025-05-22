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
      title: 'Deployr - scale up your app',
      description:
        'A highly scalable alternative to Vercel and Netlify for deploying and managing applications, with a strong focus on performance and scalability.',
      images: [
        'https://s3.tebi.io/portfolio/deployr/diagram.png',
        'https://s3.tebi.io/portfolio/deployr/one.png',
        'https://s3.tebi.io/portfolio/deployr/two.png',
        'https://s3.tebi.io/portfolio/deployr/three.png',
        'https://s3.tebi.io/portfolio/deployr/video.mp4'
      ],
      technologies: ['Nodejs', 'Next.js', 'Postgresql', 'Docker', 'Redis', 'Next-UI', 'Tailwindcss', 'Cloud storage', 'Cloud run jobs', 'Pubsub', 'Bigquery', 'Cloud cdn'],
      live: '',
      github: 'https://github.com/akram6t/vercel-clone',
      category: 'fullstack',
      createdAt: '2025-04-20'
    },
    {
      title: 'DevTeller - Ai Code Explainer',
      description:
        'A web application for Hackathon that uses GEMINI API to explain code with a user-friendly interface and line by line code analysis.',
      images: [
        'https://s3.tebi.io/portfolio/devteller/devteller_one.png',
        'https://s3.tebi.io/portfolio/devteller/devteller_two.png',
        'https://s3.tebi.io/portfolio/devteller/devteller_three.png',
      ],
      technologies: ['Node', 'React', 'Gemini API', 'Tailwind CSS'],
      live: 'https://devteller.vercel.app',
      github: 'https://github.com/akram6t/DevTeller',
      category: 'fullstack',
      createdAt: '2025-05-19'
    },
    {
      title: 'QuickCode - code playground',
      description:'QuickCode is an online code editor and playground designed for developers to write, test, and share code snippets in real-time. Inspired by tools like JS Bin and JS Fiddle, QuickCode provides a fast and intuitive interface for coding on the go.',
      images: ['https://s3.tebi.io/portfolio/quick-code/quickcode_one.png'],
      technologies: ['React', 'Typescript', 'Tailwind CSS'],
      live: 'https://quickcode.pages.dev',
      github: 'https://github.com/akram6t/quick-code',
      category: 'frontend',
      createdAt: '2025-01-19'
    },
    {
      title: 'Laundry management system',
      description: 'A full-featured SaaS solution for laundry service management, including intuitive user and admin dashboards, and a dedicated React Native mobile app for customers.',
      images: [
        'https://s3.tebi.io/portfolio/laundry-app/laundry-one.jpeg',
        'https://s3.tebi.io/portfolio/laundry-app/laundry-two.jpeg',
        'https://s3.tebi.io/portfolio/laundry-app/laundry-mobile.jpg',
        'https://s3.tebi.io/portfolio/laundry-app/for demo.png',
      ],
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'React Native', 'Firebase'],
      live: 'https://loundry-app.onrender.com',
      github: 'https://github.com/akram6t/laundry-app',
      category: 'fullstack',
      createdAt: '2024-06-22'
    },
  ]

  // Filter projects based on category and search term
  const filteredProjects = projects.filter((project) => {
    const matchesCategory = filter === 'all' ||  project.category === filter;
    // const matchesSearch =
    //   project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    //   project.technologies.some((tech) => tech.toLowerCase().includes(searchTerm.toLowerCase()))
    return matchesCategory && project;
  })

  // Terminal typing effect
  // useEffect(() => {
  //   const lines = [
  //     'cd ~/projects',
  //     'ls -la',
  //     'git status',
  //     '# Finding projects...',
  //     `find . -type d -name "*${filter !== 'all' ? filter : ''}*" | sort`,
  //     `# Found ${filteredProjects.length} projects`,
  //     ...filteredProjects.map((p) => `./projects/${p.title.toLowerCase().replace(/\s+/g, '-')}`),
  //     '# Ready to explore projects',
  //   ]
  //   setTerminalLines([])
  //   setIsTyping(true)
  //   let currentLineIndex = 0
  //   const typingInterval = setInterval(() => {
  //     if (currentLineIndex < lines.length) {
  //       const line = lines[currentLineIndex]
  //       setTerminalLines((prev) => [...prev, line])
  //       currentLineIndex++
  //     } else {
  //       clearInterval(typingInterval)
  //       setIsTyping(false)
  //     }
  //   }, 300)
  //   return () => clearInterval(typingInterval)
  // }, [filter, filteredProjects.length])

  // Filter categories
  const categories = [
    { id: 'all', label: 'All', icon: <FolderOpen size={16} /> },
    { id: 'fullstack', label: 'Full Stack', icon: <Code size={16} /> },
    { id: 'frontend', label: 'Frontend', icon: <Code size={16} /> },
    { id: 'backend', label: 'Backend', icon: <Terminal size={16} /> },
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
          {/* <div className="relative">
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
          </div> */}
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

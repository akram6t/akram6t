

// 'use client'
// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { Monitor, Server, Database, Code, Terminal, Braces, Server as ServerIcon, GitBranch, Cpu, Layers } from 'lucide-react'

// const Skills = () => {
//   const [activeCategory, setActiveCategory] = useState('frontend')
//   const [terminalLines, setTerminalLines] = useState<string[]>([])
//   const [isTyping, setIsTyping] = useState(false)

//   // Terminal typing effect
//   useEffect(() => {
//     if (activeCategory === 'frontend') {
//       const lines = [
//         'Loading frontend skills...',
//         'import { React, NextJS, TypeScript } from "skills";',
//         'const frontendSkills = new SkillSet("Frontend");',
//         'frontendSkills.add(React, NextJS, TypeScript);',
//         'frontendSkills.add(TailwindCSS, FramerMotion);',
//         'export default frontendSkills;',
//         '// Frontend skills loaded successfully'
//       ]
//       setTerminalLines([])
//       setIsTyping(true)
//       let currentLineIndex = 0
//       const typingInterval = setInterval(() => {
//         if (currentLineIndex < lines.length) {
//           setTerminalLines(prev => [...prev, lines[currentLineIndex]])
//           currentLineIndex++
//         } else {
//           clearInterval(typingInterval)
//           setIsTyping(false)
//         }
//       }, 500)
//       return () => clearInterval(typingInterval)
//     } else if (activeCategory === 'backend') {
//       const lines = [
//         'Loading backend skills...',
//         'import { NodeJS, Express, GraphQL } from "skills";',
//         'const backendSkills = new SkillSet("Backend");',
//         'backendSkills.add(NodeJS, Express, GraphQL);',
//         'backendSkills.add(MongoDB, PostgreSQL, Firebase);',
//         'export default backendSkills;',
//         '// Backend skills loaded successfully'
//       ]
//       setTerminalLines([])
//       setIsTyping(true)
//       let currentLineIndex = 0
//       const typingInterval = setInterval(() => {
//         if (currentLineIndex < lines.length) {
//           setTerminalLines(prev => [...prev, lines[currentLineIndex]])
//           currentLineIndex++
//         } else {
//           clearInterval(typingInterval)
//           setIsTyping(false)
//         }
//       }, 500)
//       return () => clearInterval(typingInterval)
//     } else if (activeCategory === 'database') {
//       const lines = [
//         'Loading database skills...',
//         'import { MongoDB, PostgreSQL, MySQL } from "skills";',
//         'const dbSkills = new SkillSet("Database");',
//         'dbSkills.add(MongoDB, PostgreSQL, MySQL);',
//         'dbSkills.add(Redis, Prisma, Supabase);',
//         'export default dbSkills;',
//         '// Database skills loaded successfully'
//       ]
//       setTerminalLines([])
//       setIsTyping(true)
//       let currentLineIndex = 0
//       const typingInterval = setInterval(() => {
//         if (currentLineIndex < lines.length) {
//           setTerminalLines(prev => [...prev, lines[currentLineIndex]])
//           currentLineIndex++
//         } else {
//           clearInterval(typingInterval)
//           setIsTyping(false)
//         }
//       }, 500)
//       return () => clearInterval(typingInterval)
//     } else if (activeCategory === 'tools') {
//       const lines = [
//         'Loading tools & other skills...',
//         'import { Git, Docker, Jest, Webpack } from "skills";',
//         'const toolsSkills = new SkillSet("Tools");',
//         'toolsSkills.add(Git, Docker, Jest, Webpack);',
//         'toolsSkills.add(Figma, AWS, Vercel, GitHub);',
//         'export default toolsSkills;',
//         '// Tools skills loaded successfully'
//       ]
//       setTerminalLines([])
//       setIsTyping(true)
//       let currentLineIndex = 0
//       const typingInterval = setInterval(() => {
//         if (currentLineIndex < lines.length) {
//           setTerminalLines(prev => [...prev, lines[currentLineIndex]])
//           currentLineIndex++
//         } else {
//           clearInterval(typingInterval)
//           setIsTyping(false)
//         }
//       }, 500)
//       return () => clearInterval(typingInterval)
//     }
//   }, [activeCategory])

//   const skillCategories = [
//     {
//       id: 'frontend',
//       title: 'Frontend',
//       icon: <Monitor size={20} className="text-terminal-blue" />,
//       skills: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'TailwindCSS', 'Framer Motion'],
//       color: 'text-terminal-blue',
//       borderColor: 'border-terminal-blue',
//       glowColor: 'glow-blue'
//     },
//     {
//       id: 'backend',
//       title: 'Backend',
//       icon: <ServerIcon size={20} className="text-terminal-green" />,
//       skills: ['Node.js', 'Express', 'GraphQL', 'REST API', 'Firebase', 'Supabase'],
//       color: 'text-terminal-green',
//       borderColor: 'border-terminal-green',
//       glowColor: 'glow-green'
//     },
//     {
//       id: 'database',
//       title: 'Database',
//       icon: <Database size={20} className="text-terminal-purple" />,
//       skills: ['MongoDB', 'PostgreSQL', 'MySQL', 'Redis', 'Prisma'],
//       color: 'text-terminal-purple',
//       borderColor: 'border-terminal-purple',
//       glowColor: 'glow-purple'
//     },
//     {
//       id: 'tools',
//       title: 'Tools & Others',
//       icon: <Code size={20} className="text-terminal-red" />,
//       skills: ['Git', 'GitHub Actions', 'Docker', 'Jest', 'Cypress', 'Webpack', 'Vite', 'Figma'],
//       color: 'text-terminal-red',
//       borderColor: 'border-terminal-red',
//       glowColor: 'glow-red'
//     }
//   ]

//   const activeSkillCategory = skillCategories.find(cat => cat.id === activeCategory) || skillCategories[0]

//   return (
//     <section id="skills" className="py-20 relative overflow-hidden">
//       <div className={`glow-effect ${activeSkillCategory.glowColor} w-96 h-96 -top-1/4 -right-1/4 opacity-20`} />
//       <div className="glow-effect glow-purple w-64 h-64 bottom-1/4 left-1/4 opacity-20" />

//       <div className="container mx-auto px-4 md:px-8">
//       <motion.div 
//           className="mb-12 text-center"
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6 }}
//         >
//           <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
//             <span className="text-terminal-green">skills</span><span className="text-terminal-red">()</span>
//           </h2>
//           <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full" />
//         </motion.div>

//         {/* Skill Categories */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
//           {skillCategories.map((category, index) => (
//             <motion.div 
//               key={index}
//               className={`cursor-pointer p-4 rounded-lg border ${
//                 activeCategory === category.id ? 
//                 category.borderColor : 'border-gray-700'
//               } transition-all duration-300 hover:bg-gray-800`}
//               whileHover={{ y: -5 }}
//               onClick={() => setActiveCategory(category.id)}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.4, delay: index * 0.1 }}
//             >
//               <div className="flex items-center gap-3">
//                 <div className={`w-10 h-10 rounded-lg ${category.borderColor} border flex items-center justify-center`}>
//                   {category.icon}
//                 </div>
//                 <h3 className={`font-mono ${activeCategory === category.id ? category.color : 'text-gray-300'}`}>
//                   {category.title}
//                 </h3>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {/* Terminal Output */}
//           <motion.div 
//             className="terminal-card"
//             initial={{ opacity: 0, x: -30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//           >
//             <div className="terminal-card-header">
//               <div className="terminal-btn terminal-btn-red" />
//               <div className="terminal-btn terminal-btn-yellow" />
//               <div className="terminal-btn terminal-btn-green" />
//               <div className="text-xs text-gray-400 ml-2">{activeCategory}.js</div>
//             </div>
//             <div className="font-mono text-sm p-2 h-[300px] overflow-y-auto">
//               <AnimatePresence mode="wait">
//                 <div>
//                   {terminalLines.map((line, index) => (
//                     <motion.div 
//                       key={index}
//                       className="mb-2"
//                       initial={{ opacity: 0, x: -10 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       transition={{ duration: 0.3, delay: index * 0.1 }}
//                     >
//                       {line.startsWith('import') ? (
//                         <span className="text-terminal-purple">{line}</span>
//                       ) : line.startsWith('const') ? (
//                         <span className="text-terminal-blue">{line}</span>
//                       ) : line.startsWith('//') ? (
//                         <span className="text-gray-500">{line}</span>
//                       ) : line.startsWith('export') ? (
//                         <span className="text-terminal-green">{line}</span>
//                       ) : line.includes('Loading') ? (
//                         <span className="text-terminal-yellow">{line}</span>
//                       ) : (
//                         line
//                       )}
//                     </motion.div>
//                   ))}
//                   {isTyping && (
//                     <motion.span 
//                       className="inline-block w-2 h-5 bg-terminal-green"
//                       animate={{ opacity: [1, 0, 1] }}
//                       transition={{ duration: 0.8, repeat: Infinity }}
//                     />
//                   )}
//                 </div>
//               </AnimatePresence>
//             </div>
//           </motion.div>

//           {/* Skills Grid */}
//           <motion.div 
//             className="terminal-card"
//             initial={{ opacity: 0, x: 30 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.3 }}
//           >
//             <div className="terminal-card-header">
//               <div className="terminal-btn terminal-btn-red" />
//               <div className="terminal-btn terminal-btn-yellow" />
//               <div className="terminal-btn terminal-btn-green" />
//               <div className="text-xs text-gray-400 ml-2">skills_array.json</div>
//             </div>
//             <div className="p-4">
//               <div className="code-block mb-4">
//                 <pre className="text-xs md:text-sm">
//                   <code>
//                     {`const ${activeCategory}Skills = [`}
//                     {activeSkillCategory.skills.map((skill, i) => 
//                       `
//   "${skill}"${i < activeSkillCategory.skills.length - 1 ? ',' : ''}`
//                     ).join('')}
//                     {`
// ];`}
//                   </code>
//                 </pre>
//               </div>
//               <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
//                 {activeSkillCategory.skills.map((skill, skillIndex) => (
//                   <motion.div 
//                     key={skillIndex}
//                     className={`skill-tag ${activeSkillCategory.borderColor}`}
//                     initial={{ opacity: 0, scale: 0.8 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
//                     whileHover={{ 
//                       y: -5, 
//                       boxShadow: `0 0 15px ${
//                         activeSkillCategory.id === 'frontend' ? 'rgba(45, 249, 255, 0.3)' : 
//                         activeSkillCategory.id === 'backend' ? 'rgba(74, 246, 38, 0.3)' : 
//                         activeSkillCategory.id === 'database' ? 'rgba(157, 77, 255, 0.3)' : 
//                         'rgba(255, 45, 117, 0.3)'
//                       }`
//                     }}
//                   >
//                     <div className="flex items-center justify-between">
//                       <span>{skill}</span>
//                       {activeSkillCategory.id === 'frontend' ? <Braces size={14} /> : 
//                        activeSkillCategory.id === 'backend' ? <ServerIcon size={14} /> : 
//                        activeSkillCategory.id === 'database' ? <Database size={14} /> : 
//                        <Code size={14} />}
//                     </div>
//                   </motion.div>
//                 ))}
//               </div>
//             </div>
//           </motion.div>
//         </div>

//         {/* Memory Usage Visualization */}
//         <motion.div 
//           className="mt-12 terminal-card"
//           initial={{ opacity: 0, y: 30 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.6, delay: 0.4 }}
//         >
//           <div className="terminal-card-header">
//             <div className="terminal-btn terminal-btn-red" />
//             <div className="terminal-btn terminal-btn-yellow" />
//             <div className="terminal-btn terminal-btn-green" />
//             <div className="text-xs text-gray-400 ml-2">memory_allocation.log</div>
//           </div>
//           <div className="p-4">
//             <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
//               {skillCategories.map((category, index) => {
//                 const percentage = category.id === activeCategory ? 85 : 25
//                 return (
//                   <div key={index} className="space-y-2">
//                     <div className="flex justify-between text-xs font-mono">
//                       <span className={category.color}>{category.title}</span>
//                       <span>{percentage}%</span>
//                     </div>
//                     <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
//                       <motion.div 
//                         className={`h-full ${category.borderColor.replace('border-', 'bg-')}`}
//                         initial={{ width: '0%' }}
//                         animate={{ width: `${percentage}%` }}
//                         transition={{ duration: 1, delay: index * 0.1 }}
//                       />
//                     </div>
//                     <div className="text-xs text-gray-500 font-mono">
//                       {category.id === activeCategory ? 'ACTIVE' : 'CACHED'}
//                     </div>
//                   </div>
//                 )
//               })}
//             </div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   )
// }

// export default Skills


'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Paintbrush, Smartphone, Server, Cloud, GitBranch } from 'lucide-react'

const Skills = () => {
  const skillCategories = [
    {
      name: 'Frontend',
      icon: <Code2 className="text-terminal-green" />,
      skills: [
        { name: 'React', level: 90 },
        { name: 'Next.js', level: 85 },
        { name: 'TypeScript', level: 88 },
        { name: 'Tailwind CSS', level: 92 }
      ]
    },
    {
      name: 'Backend',
      icon: <Server className="text-terminal-blue" />,
      skills: [
        { name: 'Node.js', level: 85 },
        { name: 'Express', level: 80 },
        { name: 'GraphQL', level: 75 },
        { name: 'REST APIs', level: 88 }
      ]
    },
    {
      name: 'Database',
      icon: <Database className="text-terminal-purple" />,
      skills: [
        { name: 'MongoDB', level: 82 },
        { name: 'PostgreSQL', level: 78 },
        { name: 'Firebase', level: 75 },
        { name: 'Redis', level: 70 }
      ]
    },
    {
      name: 'Mobile',
      icon: <Smartphone className="text-terminal-yellow" />,
      skills: [
        { name: 'React Native', level: 80 },
        { name: 'Flutter', level: 65 },
        { name: 'Swift', level: 60 }
      ]
    },
    {
      name: 'DevOps',
      icon: <Cloud className="text-terminal-red" />,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'AWS', level: 70 },
        { name: 'CI/CD', level: 80 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      name: 'Other',
      icon: <GitBranch className="text-terminal-cyan" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Jest', level: 75 },
        { name: 'Figma', level: 65 },
        { name: 'Webpack', level: 72 }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative overflow-hidden">
      <div className="glow-effect glow-green w-64 h-64 top-1/4 -left-1/4" />
      <div className="glow-effect glow-purple w-96 h-96 -bottom-1/4 -right-1/4" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-green">skills</span>_and<span className="text-terminal-red">()</span>
            <span className="text-terminal-blue">_tech</span>
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            $ My technical toolbox - constantly expanding and evolving
          </p>
        </motion.div>

        <div className="terminal-card">
          <div className="terminal-card-header">
            <div className="terminal-btn terminal-btn-red" />
            <div className="terminal-btn terminal-btn-yellow" />
            <div className="terminal-btn terminal-btn-green" />
            <div className="text-xs text-gray-400 ml-2">skills.json</div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
            {skillCategories.map((category, catIndex) => (
              <motion.div
                key={catIndex}
                className="terminal-card p-4 hover:bg-gray-800 transition-colors duration-200"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: catIndex * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-4">
                  {category.icon}
                  <h3 className="text-xl font-semibold font-mono">{category.name}</h3>
                </div>
                
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="group">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-mono text-gray-300 group-hover:text-terminal-green transition-colors">
                          {skill.name}
                        </span>
                        <span className="text-xs text-gray-500 font-mono">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-800 rounded-full h-2">
                        <motion.div
                          className="h-full rounded-full bg-gradient-to-r from-terminal-green to-terminal-blue"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + catIndex * 0.05 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack visualization */}
        <motion.div
          className="mt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-xl font-semibold mb-6 text-center font-mono">
            <span className="text-terminal-green">tech_stack</span>.visualize()
          </h3>
          
          <div className="terminal-card p-6">
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'React', 'Next.js', 'TypeScript', 'Node.js', 
                'GraphQL', 'MongoDB', 'Tailwind', 'Docker',
                'AWS', 'Git', 'Jest', 'Figma'
              ].map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-gray-900 border border-terminal-green border-opacity-20 rounded-full text-sm font-mono hover:bg-terminal-green hover:bg-opacity-10 hover:border-opacity-50 transition-all"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                >
                  {tech}
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex justify-center">
              <motion.div
                className="text-center max-w-md"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <p className="text-gray-400 font-mono mb-4">
                  $ Always learning new technologies and frameworks
                </p>
                <div className="w-full bg-gray-800 rounded-full h-1">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-terminal-green via-terminal-blue to-terminal-purple"
                    initial={{ width: 0 }}
                    whileInView={{ width: '100%' }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
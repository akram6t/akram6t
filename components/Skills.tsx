'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Paintbrush, Smartphone, Server, Cloud, GitBranch, LucideVegan } from 'lucide-react'

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
      ]
    },
    {
      name: 'DevOps',
      icon: <Cloud className="text-terminal-red" />,
      skills: [
        { name: 'Docker', level: 75 },
        { name: 'Google Cloud', level: 70 },
        { name: 'Linux', level: 85 }
      ]
    },
    {
      name: 'Other',
      icon: <GitBranch className="text-terminal-cyan" />,
      skills: [
        { name: 'Git', level: 90 },
        { name: 'Chatgpt', level: 90 }
      ]
    }
  ]

  const techstacks = [
    'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js', 'Express', 'React Native', 
    'GraphQL', 'Tailwindcss','MongoDB', 'PostgreSQL', 'Firebase', 'Redis','Git', 'Docker', 
    'Google cloud', 'Vercel', 'Cloudflare','Chatgpt', 'deepseek', 'claude ai'
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
            <span className="text-terminal-green">skills</span><span className="text-terminal-red">()</span>
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
              {techstacks.map((tech, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-2 bg-gray-900 border border-terminal-green border-opacity-20 rounded-full text-sm font-mono hover:border-terminal-blue hover:bg-opacity-10 hover:border-opacity-50 transition-all"
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
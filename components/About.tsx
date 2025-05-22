'use client'

import { motion } from 'framer-motion'
import { Code2, Cpu, Database, Terminal, User, Briefcase, Rocket, Coffee } from 'lucide-react'

const About = () => {
  const stats = [
    { value: '5+', label: 'Years Experience', icon: <Briefcase className="text-terminal-green" /> },
    { value: '50+', label: 'Projects Completed', icon: <Rocket className="text-terminal-blue" /> },
    { value: '∞', label: 'Cups of Coffee', icon: <Coffee className="text-terminal-purple" /> }
  ]

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 
    'GraphQL', 'MongoDB', 'Tailwind', 'Docker',
    'AWS', 'Git', 'Jest', 'Figma'
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      <div className="glow-effect glow-blue w-96 h-96 -top-1/4 -right-1/4" />
      <div className="glow-effect glow-purple w-64 h-64 bottom-1/4 left-1/4" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-green">about</span>_me<span className="text-terminal-red">()</span>
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            $ whoami // Full-stack developer passionate about building digital experiences
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Profile Image */}
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-card p-2 rounded-xl overflow-hidden relative group">
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">profile.jpg</div>
              </div>
              
              {/* Matrix grid overlay */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12 gap-px p-px pointer-events-none">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="bg-gray-900 bg-opacity-20 rounded-sm" />
                ))}
              </div>
              
              <img 
                src="https://avatars.githubusercontent.com/u/91476267?s=400&u=e0130001a369dcb7fd4e9eff484a2ab7b45121af&v=4" 
                alt="Developer Portrait" 
                className="w-full h-auto rounded-lg border border-gray-800 mix-blend-lighten opacity-90" 
              />
              
              {/* Tech stack floating tags */}
              {/* {technologies.slice(0, 6).map((tech, i) => (
                <motion.div
                  key={i}
                  className="absolute bg-gray-900 border border-terminal-green border-opacity-30 px-3 py-1 rounded-full text-xs font-mono"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  style={{
                    left: `${10 + (i * 12) % 60}%`,
                    top: `${20 + (i * 7) % 60}%`
                  }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(74, 246, 38, 0.1)' }}
                >
                  {tech}
                </motion.div>
              ))} */}
            </div>
            
            {/* Stats */}
            {/* <div className="grid grid-cols-3 gap-4 mt-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  className="terminal-card p-4 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <div className="flex justify-center mb-2">
                    {stat.icon}
                  </div>
                  <h3 className="text-2xl font-bold font-mono">{stat.value}</h3>
                  <p className="text-sm text-gray-400">{stat.label}</p>
                </motion.div>
              ))}
            </div> */}
          </motion.div>
          
          {/* Bio */}
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-card">
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">bio.md</div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 font-mono">
                  <span className="text-terminal-green">class</span> AboutMe <span className="text-terminal-red">{}</span>
                </h3>
                
                <div className="space-y-4 text-gray-300">
                  <p>
                    I'm a <span className="text-terminal-green">full-stack developer</span> with over 5 years of experience building web applications. My journey in tech started when I built my first website at 15, and I've been obsessed with creating digital experiences ever since.
                  </p>
                  
                  <p>
                    I specialize in the <span className="text-terminal-blue">JavaScript ecosystem</span>, particularly <span className="text-terminal-purple">React</span>, <span className="text-terminal-blue">Next.js</span>, and <span className="text-terminal-green">Node.js</span>. I'm passionate about building performant, accessible, and visually appealing applications.
                  </p>
                  
                  <div className="terminal-card p-4 my-4">
                    <div className="flex items-center gap-3 mb-3">
                      <Code2 className="text-terminal-blue" />
                      <h4 className="font-mono text-sm text-terminal-green">$ currentFocus</h4>
                    </div>
                    <p className="text-sm">
                      Currently diving deeper into <span className="text-terminal-purple">Web3 technologies</span> and <span className="text-terminal-blue">serverless architectures</span>. Always learning and exploring new parts of the stack.
                    </p>
                  </div>
                  
                  <p>
                    When I'm not coding, you'll find me contributing to <span className="text-terminal-green">open source</span>, writing technical articles, or experimenting with new frameworks. I believe in the power of technology to solve real-world problems.
                  </p>
                </div>
                
                {/* <div className="mt-8">
                  <h4 className="text-sm text-gray-400 font-mono mb-3">$ tech_stack</h4>
                  <div className="flex flex-wrap gap-3">
                    {technologies.map((tech, i) => (
                      <motion.div
                        key={i}
                        className="px-3 py-1 bg-gray-900 border border-terminal-green border-opacity-20 rounded-full text-sm font-mono hover:bg-terminal-green hover:bg-opacity-10 transition-all"
                        whileHover={{ y: -2 }}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        {tech}
                      </motion.div>
                    ))}
                  </div>
                </div> */}

              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
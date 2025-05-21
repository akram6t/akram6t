'use client'

import { motion } from 'framer-motion'
import { ChevronRight } from 'lucide-react'
import { ExperienceItem } from '@/types'

const Experience = () => {
  const experiences: ExperienceItem[] = [
    {
      role: 'Senior Frontend Developer',
      company: 'Tech Solutions Inc.',
      period: 'Jan 2022 - Present',
      description: 'Leading frontend development for enterprise applications using Next.js and TypeScript. Implemented CI/CD pipelines and mentored junior developers.',
      responsibilities: [
        'Architected and developed scalable React applications',
        'Implemented responsive UI designs across multiple devices',
        'Optimized application performance and accessibility',
        'Collaborated with design and backend teams'
      ]
    },
    {
      role: 'Frontend Developer',
      company: 'Creative Agency',
      period: 'Mar 2020 - Dec 2021',
      description: 'Developed interactive and responsive websites for clients across various industries. Created reusable component libraries to streamline development.',
      responsibilities: [
        'Built interactive websites and web applications',
        'Collaborated with designers to implement pixel-perfect designs',
        'Optimized website performance and SEO',
        'Managed client feedback and revision processes'
      ]
    },
    {
      role: 'Web Developer Intern',
      company: 'StartUp Labs',
      period: 'May 2019 - Feb 2020',
      description: 'Assisted in developing frontend components and implementing UI designs. Participated in code reviews and learned modern development practices.',
      responsibilities: [
        'Developed UI components using HTML, CSS, and JavaScript',
        'Participated in daily stand-ups and sprint planning',
        'Fixed bugs and improved existing features',
        'Learned modern JavaScript frameworks and tools'
      ]
    }
  ]
  
  return (
    <section id="experience" className="py-20 bg-gray-900 bg-opacity-50">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Work <span className="highlight">Experience</span></h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto">
            My professional journey in web development, showcasing my career growth and key contributions.
          </p>
        </motion.div>
        
        <div className="relative pl-0 md:pl-8">
          <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-blue-500 bg-opacity-30"></div>
          
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              className="mb-12 relative"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="hidden md:block absolute left-0 top-0 w-4 h-4 rounded-full bg-blue-500 -ml-2"></div>
              <div className="md:pl-8">
                <div className="glass-card p-6 rounded-xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
                      <p className="text-blue-400">{exp.company}</p>
                    </div>
                    <div className="mt-2 md:mt-0 flex items-center">
                      <div className="px-3 py-1 rounded-full bg-blue-900 bg-opacity-30 text-blue-300 text-sm">
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">{exp.description}</p>
                  <div>
                    <p className="font-medium mb-2">Key Responsibilities:</p>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                      {exp.responsibilities.map((resp, respIndex) => (
                        <li key={respIndex} className="flex items-start">
                          <div className="mr-2 mt-1 text-blue-400">
                            <ChevronRight size={14} />
                          </div>
                          <span className="text-gray-300 text-sm">{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience
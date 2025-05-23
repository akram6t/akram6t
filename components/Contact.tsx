'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Mail, Linkedin, Github, Terminal, Send, Code2, Cpu, Database } from 'lucide-react'

const Contact = () => {
  const [formStatus, setFormStatus] = useState<'success' | 'error' | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (data.success) {
        setFormStatus('success')
        // Reset form
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        })
      } else {
        setFormStatus('error')
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setFormStatus('error')
    } finally {
      setIsSubmitting(false)
      setTimeout(() => setFormStatus(null), 3000)
    }
  }
  
  const contactInfo = [
    {
      icon: <Mail className="text-terminal-green" size={20} />,
      title: 'email',
      value: 'khanakram8435@gmail.com',
      link: 'mailto:khanakram8435@gmail.com',
      command: 'mailto khanakram8435@gmail.com'
    },
    {
      icon: <Linkedin className="text-terminal-blue" size={20} />,
      title: 'linkedin',
      value: '/in/akram6t',
      link: 'https://www.linkedin.com/in/akram6t',
      command: 'connect linkedin.com/in/akram6t'
    },
    {
      icon: <Github className="text-terminal-purple" size={20} />,
      title: 'github',
      value: '/akram6t',
      link: 'https://github.com/akram6t',
      command: 'clone github.com/akram6t'
    }
  ]
  
  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      <div className="glow-effect glow-green w-64 h-64 top-1/4 -left-1/4" />
      <div className="glow-effect glow-blue w-96 h-96 -bottom-1/4 -right-1/4" />
      
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-terminal-green">contact</span>_me<span className="text-terminal-red">()</span>
          </h2>
          <div className="w-24 h-1 bg-terminal-green mx-auto rounded-full mb-6" />
          <p className="text-gray-300 max-w-2xl mx-auto font-mono">
            $ Currently accepting new projects and opportunities. Let's build something amazing together.
          </p>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-8">
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-card h-full">
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">contact_info.sh</div>
              </div>
              
              <div className="p-1 space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block group"
                    whileHover={{ x: 5 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 10 }}
                  >
                    <div className="terminal-card p-4 hover:bg-gray-800 transition-colors duration-200">
                      <div className="flex items-start gap-4">
                        <div className="mt-1">
                          {info.icon}
                        </div>
                        <div>
                          <p className="text-sm text-gray-400 font-mono">$ {info.title}</p>
                          <p className="text-terminal-green font-mono">{info.value}</p>
                          <p className="text-xs text-gray-500 mt-1 font-mono opacity-0 group-hover:opacity-100 transition-opacity">
                            {info.command}
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
              
              <div className="terminal-card mt-6 p-4">
                <h4 className="text-sm text-gray-400 font-mono mb-3">$ social_links</h4>
                <div className="flex gap-3">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-gray-900 border border-gray-800 flex items-center justify-center hover:border-terminal-green transition-colors duration-200"
                      whileHover={{ 
                        y: -3, 
                        scale: 1.1,
                        backgroundColor: 'rgba(16, 185, 129, 0.1)',
                        borderColor: 'rgba(16, 185, 129, 0.5)'
                      }}
                      whileTap={{ scale: 0.9 }}
                    >
                      {info.icon}
                    </motion.a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="terminal-card h-full">
              <div className="terminal-card-header">
                <div className="terminal-btn terminal-btn-red" />
                <div className="terminal-btn terminal-btn-yellow" />
                <div className="terminal-btn terminal-btn-green" />
                <div className="text-xs text-gray-400 ml-2">send_message.js</div>
              </div>
              
              <div className="p-4 md:p-6">
                <AnimatePresence>
                  {formStatus === 'success' && (
                    <motion.div 
                      className="border-terminal-green bg-opacity-10 border border-terminal-green text-terminal-green px-4 py-3 rounded-lg mb-6 flex items-center gap-2 font-mono text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Terminal size={16} />
                      Message sent successfully! I'll get back to you soon.
                    </motion.div>
                  )}
                  {formStatus === 'error' && (
                    <motion.div 
                      className="bg-terminal-red bg-opacity-10 border border-terminal-red text-terminal-red px-4 py-3 rounded-lg mb-6 flex items-center gap-2 font-mono text-sm"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                    >
                      <Terminal size={16} />
                      Error sending message. Please try again later.
                    </motion.div>
                  )}
                </AnimatePresence>
                
                <form onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label htmlFor="name" className="block text-sm text-gray-400 font-mono mb-2">// your_name</label>
                      <input 
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green font-mono text-sm transition-all"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm text-gray-400 font-mono mb-2">// your_email</label>
                      <input 
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green font-mono text-sm transition-all"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="subject" className="block text-sm text-gray-400 font-mono mb-2">// subject (optional)</label>
                    <input 
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green font-mono text-sm transition-all"
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm text-gray-400 font-mono mb-2">// your_message</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-gray-900 border border-gray-800 rounded-lg focus:outline-none focus:border-terminal-green focus:ring-1 focus:ring-terminal-green font-mono text-sm transition-all min-h-32"
                      rows={5}
                      required
                    ></textarea>
                  </div>
                  
                  <motion.button 
                    type="submit"
                    className="w-full px-6 py-3 bg-terminal-green text-gray-900 rounded-lg font-mono font-medium flex items-center justify-center gap-2 hover:bg-terminal-blue transition-all duration-300 relative overflow-hidden"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="inline-block w-4 h-4 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></span>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={18} />
                        <span>submit_message()</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
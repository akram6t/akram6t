'use client'
import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Twitter, Terminal } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const socialLinks = [
    {
      icon: <Github className="text-terminal-green" size={18} />,
      href: "https://github.com/akram6t",
      title: "github",
      color: "terminal-green",
      command: "clone github.com/akram6t"
    },
    {
      icon: <Linkedin className="text-terminal-blue" size={18} />,
      href: "https://linkedin.com/in/akram6t",
      title: "linkedin",
      color: "terminal-blue",
      command: "connect linkedin.com/in/akram6t"
    },
    {
      icon: <Twitter className="text-terminal-purple" size={18} />,
      href: "#",
      title: "twitter",
      color: "terminal-purple",
      command: "follow @username"
    },
    {
      icon: <Mail className="text-terminal-red" size={18} />,
      href: "mailto:khanakram8435@gmail.com",
      title: "email",
      color: "terminal-red",
      command: "mailto khanakram8435@gmail.com"
    }
  ]

  return (
    <footer className="relative py-12 overflow-hidden border-t border-gray-800">
      {/* Background Glow Effects */}
      <div className="glow-effect glow-green w-64 h-64 top-1/4 -right-1/4 opacity-30" />
      <div className="glow-effect glow-purple w-64 h-64 bottom-1/4 left-1/4 opacity-30" />

      <div className="container mx-auto px-4 md:px-8">
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Logo / Name */}
          <motion.div
            className="mb-6 md:mb-0 text-center md:text-left"
            initial={{ x: -20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
              <Terminal size={20} className="text-terminal-green" />
              <span className="text-xl font-mono text-terminal-green">akram</span>
              <span className="text-xl font-mono text-gray-300">@portfolio</span>
            </div>
            <p className="text-sm text-gray-400 font-mono">
              Built with ❤️ using Next.js & Tailwind CSS
            </p>
          </motion.div>

          {/* Navigation Links */}
          <motion.nav
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-6 gap-y-2 text-sm font-mono mb-6 md:mb-0"
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {footerLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                className="text-gray-400 hover:text-terminal-green transition-colors duration-300"
                whileHover={{ x: 3 }}
              >
                {link.name}
              </motion.a>
            ))}
          </motion.nav>

          {/* Social Icons - Enhanced */}
          <motion.div
            className="flex flex-col items-center"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex space-x-4 mb-2">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-${social.color} hover:bg-${social.color} hover:text-gray-900 transition-all duration-300`}
                  whileHover={{ 
                    y: -3,
                    scale: 1.1,
                    rotate: index % 2 === 0 ? 5 : -5
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  {social.icon}
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-mono text-${social.color} opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap`}>
                    {social.title}
                  </span>
                </motion.a>
              ))}
            </div>
            <div className="hidden group-hover:block text-xs text-gray-500 font-mono mt-1">
              {/* Command will appear when any icon is hovered */}
              {socialLinks.map((social, index) => (
                <span 
                  key={index}
                  className={`group-hover/${index}:inline hidden text-${social.color}`}
                >
                  {social.command}
                </span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {currentYear} akram@portfolio. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-600">// Built in the terminal with love 💻</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
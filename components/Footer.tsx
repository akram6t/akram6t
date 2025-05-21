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
              <span className="text-xl font-mono text-terminal-green">dev</span>
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

          {/* Social Icons */}
          <motion.div
            className="flex space-x-4"
            initial={{ x: 20, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-terminal-green hover:bg-terminal-green hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-terminal-blue hover:bg-terminal-blue hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: -5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Linkedin size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-terminal-purple hover:bg-terminal-purple hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.1, y: -3 }}
              whileTap={{ scale: 0.95 }}
            >
              <Twitter size={18} />
            </motion.a>
            <motion.a
              href="#"
              className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center border border-terminal-red hover:bg-terminal-red hover:text-gray-900 transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail size={18} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="mt-8 pt-6 border-t border-gray-800 text-center text-gray-500 text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p>© {currentYear} John Doe. All rights reserved.</p>
          <p className="mt-2 text-xs text-gray-600">// Built in the terminal with love 💻</p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer



// 'use client'

// import { motion } from 'framer-motion'
// import { Github, Linkedin, Mail, Terminal, Coffee, Code2 } from 'lucide-react'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()
  
//   const footerLinks = [
//     {
//       name: 'GitHub',
//       icon: <Github size={18} />,
//       url: '#',
//       color: 'text-gray-300 hover:text-terminal-purple'
//     },
//     {
//       name: 'LinkedIn',
//       icon: <Linkedin size={18} />,
//       url: '#',
//       color: 'text-gray-300 hover:text-terminal-blue'
//     },
//     {
//       name: 'Email',
//       icon: <Mail size={18} />,
//       url: 'mailto:john@example.com',
//       color: 'text-gray-300 hover:text-terminal-green'
//     }
//   ]

//   return (
//     <footer className="relative border-t border-gray-800 bg-gray-900 bg-opacity-50 backdrop-blur-lg overflow-hidden">
//       {/* Glowing elements */}
//       <div className="glow-effect glow-purple w-64 h-64 -bottom-32 -left-32 opacity-30" />
//       <div className="glow-effect glow-blue w-96 h-96 -top-64 -right-64 opacity-20" />
      
//       <div className="container mx-auto px-4 md:px-8 py-12">
//         <div className="flex flex-col md:flex-row justify-between items-center gap-8">
//           {/* Left section - Branding */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6 }}
//             viewport={{ once: true }}
//             className="flex items-center gap-3"
//           >
//             <Terminal className="text-terminal-green" size={24} />
//             <div className="font-mono">
//               <span className="text-terminal-green">dev</span>
//               <span className="text-gray-300">Portfolio</span>
//             </div>
//           </motion.div>
          
//           {/* Middle section - Navigation */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.2 }}
//             viewport={{ once: true }}
//             className="flex flex-wrap justify-center gap-6"
//           >
//             {['About', 'Skills', 'Projects', 'Contact'].map((item, index) => (
//               <motion.a
//                 key={index}
//                 href={`#${item.toLowerCase()}`}
//                 className="text-gray-400 hover:text-terminal-green font-mono text-sm transition-colors"
//                 whileHover={{ y: -2 }}
//               >
//                 {item}
//               </motion.a>
//             ))}
//           </motion.div>
          
//           {/* Right section - Social links */}
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             viewport={{ once: true }}
//             className="flex gap-4"
//           >
//             {footerLinks.map((link, index) => (
//               <motion.a
//                 key={index}
//                 href={link.url}
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className={`${link.color} transition-colors`}
//                 whileHover={{ y: -3, scale: 1.1 }}
//                 whileTap={{ scale: 0.9 }}
//               >
//                 {link.icon}
//               </motion.a>
//             ))}
//           </motion.div>
//         </div>
        
//         {/* Bottom section - Copyright */}
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.6, delay: 0.6 }}
//           viewport={{ once: true }}
//           className="mt-12 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4"
//         >
//           <div className="text-gray-500 text-sm font-mono flex items-center gap-2">
//             <Code2 size={16} className="text-terminal-green" />
//             <span>Built with Next.js, Tailwind CSS and Framer Motion</span>
//           </div>
          
//           <div className="text-gray-500 text-sm font-mono flex items-center gap-2">
//             <Coffee size={16} className="text-terminal-purple" />
//             <span>© {currentYear} John Doe. All rights reserved.</span>
//           </div>
//         </motion.div>
        
//         {/* Easter egg - Build command */}
//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           viewport={{ once: true }}
//           className="mt-6 text-center"
//         >
//           <p className="text-gray-600 text-xs font-mono">
//             $ npm run build && npm start
//           </p>
//         </motion.div>
//       </div>
//     </footer>
//   )
// }

// export default Footer
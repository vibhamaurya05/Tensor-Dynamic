
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "About", href: "/about", isInternal: true},
    { name: "Technology", href: "/technology", isInternal: true },
    { name: "Case Studies", href: "/case-studies", isInternal: true},
    { name: "Blog", href: "/blog", isInternal: true},
    { name: "Contact", href: "/contact", isInternal: true},
    { name: "Privacy Policy", href: "/legal", isInternal: true}
  ];

  return (
    <footer className="bg-gray-900 text-white pt-16 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 pb-12">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-6">
                <span className="text-xl font-bold text-primary mr-1">Tensor</span>
                <span className="text-xl font-bold">Dynamics</span>
              </div>
              <p className="text-gray-400 text-sm">
                Empowering industries to navigate climate challenges with actionable intelligence, leveraging AI and physics-driven models.
              </p>
            </motion.div>
          </div>
          
          {/* Quick Links */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
              {/* <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href} 
                      className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover-link"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul> */}

<ul className="space-y-3">
    {quickLinks.map((link, index) => (
      <li key={index}>
        {link.isInternal ? (
          <Link 
            to={link.href}
            className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover-link"
          >
            {link.name}
          </Link>
        ) : (
          <a 
            href={link.href}
            className="text-gray-400 hover:text-primary transition-colors duration-300 text-sm hover-link"
          >
            {link.name}
          </a>
        )}
      </li>
    ))}
  </ul>

            </motion.div>
          </div>
          
          {/* Contact Info */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-400">Phone: +91-7869770573</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-400">Email: Support@tensordynamics.in</span>
                </li>
                <li className="flex items-start">
                  <span className="text-primary mr-2">•</span>
                  <span className="text-gray-400">
                    Head Office: 3B-5D, Research & Innovation Park IIT Delhi, Hauz Khas, New Delhi (110016) India
                  </span>
                </li>
              </ul>
            </motion.div>
          </div>
          
          {/* Social Media */}
          <div className="md:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h3 className="text-lg font-semibold mb-6">Connect With Us</h3>
              <a 
                href="https://www.linkedin.com/company/tensor-dynamics-pvt-ltd/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary/20 hover:bg-primary hover:text-white text-primary rounded-md transition-colors duration-300"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
                LinkedIn
              </a>
              
              <div className="mt-8">
                <button 
                  onClick={scrollToTop} 
                  className="flex items-center text-sm text-gray-400 hover:text-primary transition-colors duration-300 group"
                >
                  <ArrowUp className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:-translate-y-1" />
                  Back to top
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © {currentYear} Tensor Dynamics Pvt Ltd. All Rights Reserved.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-500 text-sm">
                Designed and Developed with ❤️ for a Better Climate Future
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

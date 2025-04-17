
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

const AboutSection = () => {
  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Our Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              About Tensor Dynamics
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-10 h-full flex flex-col">
              <div className="mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="16"></line>
                    <line x1="8" y1="12" x2="16" y2="12"></line>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                  Empowering industries to navigate climate challenges with actionable intelligence, leveraging AI, satellite insights, and physics-driven models to deliver precise, real-time solutions that mitigate risk and drive resilience.
                </p>
              </div>

              <div className="mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                    <circle cx="12" cy="12" r="2"></circle>
                    <path d="M12 19c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"></path>
                    <path d="M12 6V2"></path>
                    <path d="M12 22v-4"></path>
                    <path d="M6 12H2"></path>
                    <path d="M22 12h-4"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Our Vision</h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-balance">
                  To pioneer a future where climate uncertainty is transformed into strategic advantage, enabling businesses and communities to thrive in harmony with a dynamic environment.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Visual representation - abstract weather patterns */}
            <div className="relative aspect-square overflow-hidden rounded-2xl shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/40 to-purple-600/40 mix-blend-multiply"></div>
              
              {/* Vector/abstract representation of weather data */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full h-full">
                  {/* Grid lines */}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={`h-${i}`} 
                      className="absolute left-0 right-0" 
                      style={{ top: `${(i + 1) * 10}%`, height: '1px', background: 'rgba(255,255,255,0.1)' }}
                    ></div>
                  ))}
                  {Array.from({ length: 8 }).map((_, i) => (
                    <div 
                      key={`v-${i}`} 
                      className="absolute top-0 bottom-0" 
                      style={{ left: `${(i + 1) * 10}%`, width: '1px', background: 'rgba(255,255,255,0.1)' }}
                    ></div>
                  ))}
                  
                  {/* Animated data points */}
                  {Array.from({ length: 30 }).map((_, i) => (
                    <motion.div
                      key={`point-${i}`}
                      className="absolute w-2 h-2 rounded-full bg-white"
                      style={{
                        top: `${Math.random() * 90 + 5}%`,
                        left: `${Math.random() * 90 + 5}%`,
                        opacity: Math.random() * 0.5 + 0.3,
                      }}
                      animate={{
                        scale: [1, Math.random() * 1.5 + 1, 1],
                        opacity: [0.3, 0.7, 0.3],
                      }}
                      transition={{
                        duration: Math.random() * 4 + 3,
                        repeat: Infinity,
                      }}
                    />
                  ))}
                  
                  {/* Wave patterns */}
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={`wave-${i}`}
                      className="absolute h-px bg-white/30"
                      style={{
                        top: `${30 + i * 20}%`,
                        left: 0,
                        right: 0,
                      }}
                      animate={{
                        y: [0, 10, -10, 0],
                      }}
                      transition={{
                        duration: 8 - i * 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <svg width="100%" height="20" viewBox="0 0 1200 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path 
                          d="M0 10C200 30 400 -10 600 10C800 30 1000 -10 1200 10" 
                          stroke="white" 
                          strokeOpacity="0.5" 
                          strokeWidth="1.5"
                          fill="none"
                        />
                      </svg>
                    </motion.div>
                  ))}
                </div>
              </div>
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-white text-opacity-90 text-center">
                  <h3 className="text-2xl md:text-3xl font-bold mb-3">Tensor Dynamics</h3>
                  <p className="text-sm md:text-base text-white/70">Where Physics Meets AI</p>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-blue-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

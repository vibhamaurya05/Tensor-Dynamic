
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-hero-pattern"></div>
        <div 
          className="absolute inset-0 bg-gradient-radial from-blue-500/10 to-transparent" 
          style={{ mixBlendMode: 'overlay' }}
        ></div>
        
        {/* Animated particles/weather elements */}
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-primary/20 blur-xl"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 100 + 50}px`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            animate={{
              y: [0, Math.random() * 40 - 20],
              x: [0, Math.random() * 40 - 20],
              scale: [1, Math.random() * 0.3 + 0.9],
              opacity: [0.4, 0.7, 0.4],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mb-2"
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-slate-200 rounded-full text-sm font-medium tracking-wide">
              Climate Intelligence
            </span>
          </motion.div>


          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6 text-slate-100 dark:text-slate-100"
          >
            Revolutionizing Industries with Dynamic Weather Intelligence
          </motion.h1>
          {/* <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance mb-6 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300"
          >
            Revolutionizing Industries with Dynamic Weather Intelligence
          </motion.h1> */}

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="text-lg md:text-xl text-gray-300 dark:text-gray-300 text-balance mb-10 max-w-2xl mx-auto"
          >
            Innovating Climate Solutions — Powered by AI, Grounded in Science.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button 
              size="lg" 
              className="px-6 py-6 text-base font-medium animated-btn flex items-center gap-2"
              onClick={() => window.location.href='#contact'}
            >
              Contact Us
              <ArrowRight size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-6 py-6 text-base font-medium"
              onClick={() => window.location.href='#technology'}
            >
              Learn More
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center"
        >
          <div className="w-6 h-10 border-2 border-gray-700 dark:border-gray-300 rounded-full flex justify-center">
            <motion.div 
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="w-2 h-2 bg-primary rounded-full mt-2"
            />
          </div>
          <span className="text-xs text-gray-600 dark:text-gray-400 mt-2">Scroll</span>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

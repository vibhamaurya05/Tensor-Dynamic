
import { motion } from "framer-motion";
import { Database, CircuitBoard, BarChart3, Lightbulb, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Ingestion",
      description: "Collect data from satellites, weather stations, radar systems, and IoT devices in real-time."
    },
    {
      icon: <CircuitBoard className="w-8 h-8" />,
      title: "AI Model Processing",
      description: "Process data through our physics-driven AI models to create accurate weather predictions."
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: "Real-Time Prediction",
      description: "Generate location-specific forecasts with high spatial and temporal resolution."
    },
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Actionable Insights",
      description: "Deliver tailored insights and recommendations to optimize business operations."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              How It Works
            </h2>
          </motion.div>
        </div>

        <div className="relative">
          {/* Connector line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gray-200 dark:bg-gray-700 transform -translate-x-1/2 hidden md:block"></div>
          
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className={`relative ${index % 2 === 0 ? "md:text-right md:pr-16" : "md:pl-16 md:row-start-auto"}`}
              >
                {/* Step number - desktop */}
                <div className="hidden md:flex absolute top-0 items-center justify-center w-12 h-12 rounded-full bg-primary text-white font-bold text-lg z-10"
                  style={{ 
                    [index % 2 === 0 ? 'right' : 'left']: '-6px',
                    transform: 'translateX(50%)' 
                  }}
                >
                  {index + 1}
                </div>
                
                {/* Content */}
                <div className="glass-card p-8 h-full">
                  {/* Step number - mobile */}
                  <div className="flex md:hidden items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-lg mb-4 md:mb-0">
                    {index + 1}
                  </div>
                  
                  <div className={`flex items-center mb-4 ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                    <div className="p-3 rounded-lg bg-primary/10 text-primary">
                      {step.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{step.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{step.description}</p>
                  
                  {index < steps.length - 1 && (
                    <div className="mt-6 hidden md:block">
                      <ArrowRight 
                        className={`text-primary ${index % 2 === 0 ? "ml-auto transform rotate-90" : "transform -rotate-90"}`} 
                        size={24} 
                      />
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;

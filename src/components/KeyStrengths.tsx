
import { motion } from "framer-motion";
import { Brain, Zap, Layers } from "lucide-react";

const KeyStrengths = () => {
  const strengths = [
    {
      icon: <Brain className="w-7 h-7" />,
      title: "Physics-Driven AI Models",
      description: "NWP frameworks enhanced by machine learning for reliable forecasts that combine scientific principles with data intelligence."
    },
    {
      icon: <Zap className="w-7 h-7" />,
      title: "Real-Time Weather Engine™",
      description: "Sophisticated data fusion platform incorporating satellite, radar, and NWP data for real-time forecasting and analysis."
    },
    {
      icon: <Layers className="w-7 h-7" />,
      title: "Proprietary AI Architecture",
      description: "Self-calibrating, anomaly-prioritizing models that continuously adapt to new data and climate patterns."
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.7 } 
    }
  };

  return (
    <section id="strengths" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              What Sets Us Apart
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Key Strengths
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              Where Physics Meets AI for Climate Intelligence You Can Trust
            </p>
          </motion.div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-3 gap-8"
        >
          {strengths.map((strength, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass-card p-8 group hover:shadow-xl transition-all duration-300"
            >
              <div className="flex flex-col h-full">
                <div className="mb-6 rounded-full bg-primary/10 text-primary p-3 w-16 h-16 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {strength.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{strength.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 flex-grow">{strength.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default KeyStrengths;


import { motion } from "framer-motion";
import { Check, LineChart, Zap, Puzzle } from "lucide-react";

const FeaturesBenefits = () => {
  const features = [
    {
      icon: <LineChart className="w-6 h-6" />,
      title: "30% Higher Accuracy",
      description: "Compared to purely data-driven models, our physics-enhanced AI delivers significantly better predictions."
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "1-Minute Latency",
      description: "From data ingestion to actionable insights, ensuring you have timely information when it matters most."
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Seamless Integration",
      description: "Easily connects with existing ERP, IoT, or GIS systems through our flexible API architecture."
    }
  ];

  return (
    <section id="features" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Features & Benefits
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 transition-all duration-300 hover:shadow-lg"
            >
              <div className="flex flex-col h-full">
                <div className="w-14 h-14 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                
                <div className="mt-8 flex items-center text-gray-600 dark:text-gray-300">
                  <Check className="text-green-500 w-5 h-5 mr-2" />
                  <span className="text-sm">Industry-leading performance</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesBenefits;

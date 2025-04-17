
import { motion } from "framer-motion";
import { Wind, Truck, Ship, ShoppingBag, Sprout } from "lucide-react";

const Industries = () => {
  const industries = [
    {
      icon: <Wind className="w-6 h-6" />,
      title: "Renewable Energy",
      description: "Optimize energy generation forecasts and grid management systems with precise weather intelligence."
    },
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Cold Chain Logistics",
      description: "Prevent product spoilage and optimize routes based on real-time weather conditions."
    },
    {
      icon: <Ship className="w-6 h-6" />,
      title: "Maritime & Aviation",
      description: "Enhance safety and efficiency with accurate weather forecasting for transportation routes."
    },
    {
      icon: <ShoppingBag className="w-6 h-6" />,
      title: "Food Delivery & E-commerce",
      description: "Improve delivery ETAs and reduce weather-related disruptions in last-mile logistics."
    },
    {
      icon: <Sprout className="w-6 h-6" />,
      title: "Agriculture",
      description: "Make informed decisions about planting, harvesting, and resource management based on weather forecasts."
    }
  ];

  return (
    <section id="industries" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Sectors
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Industries We Serve
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-6 transition-all duration-300 hover:shadow-lg group"
            >
              <div className="flex items-start">
                <div className="mr-4 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {industry.icon}
                </div>
                <div>
                  <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{industry.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300">{industry.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;

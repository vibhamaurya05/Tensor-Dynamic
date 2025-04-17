
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      title: "Renewable Energy Forecasting with Adani Green",
      summary: "Optimizing renewable energy generation through accurate weather predictions.",
      impact: "25% improvement in generation forecasting accuracy, leading to enhanced grid stability and reduced penalties.",
      image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Cold Chain Optimization with Zomato",
      summary: "Reducing food spoilage and improving delivery efficiency during adverse weather conditions.",
      impact: "30% reduction in order spoilage and 20% decrease in platform downtime during adverse weather events.",
      image: "https://images.unsplash.com/photo-1526367790999-0150786686a2?q=80&w=1771&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      title: "Long-Term Energy Profiles with EMA",
      summary: "Creating detailed long-term energy demand forecasts based on climate patterns.",
      impact: "Enabled strategic planning with 18% more accurate seasonal energy demand forecasts.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  return (
    <section id="case-studies" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Success Stories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Case Studies
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card overflow-hidden group h-full flex flex-col"
            >
              <div className="relative h-48 overflow-hidden image-hover-zoom">
                <img 
                  src={study.image} 
                  alt={study.title} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <span className="px-3 py-1 bg-primary/80 text-white rounded-full text-xs font-medium">
                    Case Study
                  </span>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{study.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">{study.summary}</p>
                
                <div className="mt-auto">
                  <div className="mb-4 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                    <p className="text-sm font-medium text-green-700 dark:text-green-400">
                      <span className="font-bold">Impact:</span> {study.impact}
                    </p>
                  </div>
                  
                  <Button variant="ghost" className="group w-full flex justify-between items-center">
                    <span>Read full case study</span>
                    <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-2" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;

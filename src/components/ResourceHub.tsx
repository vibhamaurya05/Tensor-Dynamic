
import { motion } from "framer-motion";
import { FileBox, Download, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const resources = [
  {
    title: "Climate Intelligence White Paper",
    description: "Discover how climate intelligence is transforming industries and enabling strategic decision-making.",
    icon: <FileBox className="w-6 h-6" />,
    downloadLink: "#"
  },
  {
    title: "Meteorological Research Publication",
    description: "Our latest research on advanced meteorological modeling techniques and applications.",
    icon: <FileBox className="w-6 h-6" />,
    downloadLink: "#"
  },
  {
    title: "Case Study: Renewable Energy Forecasting",
    description: "Learn how our AI models improved power generation forecasting by 30%.",
    icon: <FileBox className="w-6 h-6" />,
    downloadLink: "#"
  }
];

const ResourceHub = () => {
  return (
    <section id="resources" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
            Knowledge Center
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            Resource Hub
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Access our latest research, whitepapers, and case studies on climate intelligence and weather forecasting.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
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
                  {resource.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{resource.title}</h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">{resource.description}</p>
                
                <div className="mt-auto">
                  <Button variant="outline" className="w-full flex items-center justify-center gap-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                    <ExternalLink className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="link" className="text-primary hover:text-primary/80 flex items-center mx-auto">
            <span>View all resources</span>
            <ExternalLink className="w-4 h-4 ml-1" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ResourceHub;

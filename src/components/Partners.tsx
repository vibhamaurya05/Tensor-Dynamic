
import { motion } from "framer-motion";
import { Building, BookOpen, Globe } from "lucide-react";

const Partners = () => {
  const partners = [
    {
      icon: <Building className="w-8 h-8" />,
      name: "IIT Delhi",
      role: "Incubation Partner",
      description: "Strategic research and development support through academic expertise and resources."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      name: "Survey of India",
      role: "Data Partner",
      description: "Collaboration on geospatial data integration for enhanced mapping capabilities."
    },
    {
      icon: <BookOpen className="w-8 h-8" />,
      name: "Department of Science & Technology",
      role: "Innovation Partner",
      description: "Government support for advancing climate technology solutions across India."
    }
  ];

  return (
    <section id="partners" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Collaborations
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Partners & Collaborations
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 flex flex-col h-full"
            >
              <div className="mb-6 p-4 rounded-lg bg-primary/10 text-primary inline-flex">
                {partner.icon}
              </div>
              
              <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{partner.name}</h3>
              <p className="text-primary font-medium mb-4">{partner.role}</p>
              <p className="text-gray-600 dark:text-gray-300">{partner.description}</p>
              
              <div className="mt-6 pt-6 border-t border-gray-100 dark:border-gray-700">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-500 dark:text-gray-400">Strategic Partnership</span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                    Active
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;


import { motion } from "framer-motion";
import { Award, Users } from "lucide-react";

const Awards = () => {
  const awards = [
    {
      icon: <Award className="w-6 h-6" />,
      title: "Recognized by Hon' Minister of DST",
      description: "Awarded by Dr. Jitendra Singh, Minister of Department of Science & Technology, for innovation in climate intelligence."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Microsoft & DST Geospatial Hackathon Winner",
      description: "First prize for developing innovative geospatial solutions for weather intelligence and climate challenges."
    }
  ];

  return (
    <section id="awards" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Awards & Recognitions
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {awards.map((award, index) => (
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
                  {award.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{award.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{award.description}</p>
                
                <div className="mt-8 flex flex-wrap gap-3">
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                    Innovation
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 rounded-full text-xs font-medium text-gray-600 dark:text-gray-300">
                    Recognition
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* Trophy/Award visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="w-28 h-28 md:w-36 md:h-36 flex items-center justify-center bg-primary/10 rounded-full">
              <Award className="w-14 h-14 md:w-20 md:h-20 text-primary" />
            </div>
            
            <motion.div
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute -inset-4 rounded-full border-2 border-primary/20"
            ></motion.div>
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              className="absolute -inset-8 rounded-full border-2 border-primary/10"
            ></motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Awards;

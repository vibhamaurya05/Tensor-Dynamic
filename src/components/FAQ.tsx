
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const FAQ = () => {
  const faqs = [
    {
      question: "How does Tensor Dynamics' AI differ from other weather models?",
      answer: "Our models uniquely combine physics-based numerical weather prediction with machine learning to achieve significantly higher accuracy. Unlike purely data-driven approaches, our hybrid models understand the fundamental physical processes governing weather patterns, making them more reliable, especially for rare or extreme events."
    },
    {
      question: "What industries benefit most from Skycaster?",
      answer: "Skycaster is particularly valuable for industries where weather directly impacts operations and logistics, including renewable energy, cold chain logistics, food delivery services, maritime and aviation, agriculture, and consumer navigation. Any business whose operations are affected by weather conditions can benefit from our technology."
    },
    {
      question: "How is real-time data fusion achieved?",
      answer: "Our proprietary Weather Engine™ continuously ingests and processes data from multiple sources including satellite imagery, radar systems, weather stations, and IoT sensors. Advanced AI algorithms then harmonize these diverse data streams, accounting for spatial and temporal differences to create a comprehensive, real-time view of current and predicted weather conditions."
    },
    {
      question: "What level of accuracy improvement can we expect?",
      answer: "Clients typically experience 20-30% higher accuracy compared to traditional weather services or purely data-driven models. The exact improvement varies by region and use case, with the most significant gains in areas with complex terrain or rapidly changing weather patterns."
    },
    {
      question: "How easy is it to integrate Skycaster with our existing systems?",
      answer: "Skycaster offers flexible integration options through standard REST APIs, WebSockets for real-time data, and pre-built connectors for common enterprise systems. Most clients achieve full integration within 2-4 weeks, with our engineering team providing support throughout the process."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Common Questions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h2>
          </motion.div>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="mb-4"
            >
              <div 
                className={`glass-card transition-all duration-300 ${openIndex === index ? 'shadow-md' : ''}`}
              >
                <button
                  className="flex justify-between items-center w-full px-6 py-4 text-left"
                  onClick={() => toggleFaq(index)}
                >
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{faq.question}</h3>
                  <div className="flex-shrink-0 ml-4">
                    {openIndex === index ? (
                      <Minus className="w-5 h-5 text-primary" />
                    ) : (
                      <Plus className="w-5 h-5 text-gray-500 dark:text-gray-400" />
                    )}
                  </div>
                </button>
                
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <div className="px-6 pb-4 text-gray-600 dark:text-gray-300">
                    {faq.answer}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;

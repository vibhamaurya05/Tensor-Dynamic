
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "Alok Kumar",
      role: "GM Grid Controller of India",
      content: "Tensor Dynamics' unique capability to integrate dynamic weather technologies into grid balancing applications has enabled us to collaboratively develop India's first Renewable Energy Day-Ahead and Intra-Day Forecasting and Scheduling Platform.",
      image: "https://images.unsplash.com/photo-1566753323558-f4e0952af115?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3"
    },
    {
      id: 2,
      name: "Navdeep Dahiya",
      role: "Senior Meteorologist Zomato",
      content: "Tensor Dynamics has helped us achieve 20% improvement in platform downtime and 30% improvement in order spoilage on routes due to adverse weather conditions.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.0.3"
    }
  ];

  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);
  const currentTestimonial = testimonials[currentTestimonialIndex];

  const nextTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              What Our Clients Say
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Client Testimonials
            </h2>
          </motion.div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass-card p-8 md:p-12 relative">
              <div className="absolute top-8 left-8 text-primary opacity-20">
                <Quote size={60} />
              </div>
              
              {/* Testimonial content */}
              <div className="relative z-10">
                <motion.div
                  key={currentTestimonial.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 italic relative z-10 text-balance mb-8">
                    "{currentTestimonial.content}"
                  </p>
                  
                  <div className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={currentTestimonial.image} 
                        alt={currentTestimonial.name} 
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">{currentTestimonial.name}</h4>
                      <p className="text-sm text-gray-600 dark:text-gray-400">{currentTestimonial.role}</p>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Navigation controls */}
              <div className="flex justify-between mt-8">
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentTestimonialIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                        index === currentTestimonialIndex ? "bg-primary" : "bg-gray-300 dark:bg-gray-700"
                      }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>
                
                <div className="flex space-x-2">
                  <button
                    onClick={prevTestimonial}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Previous testimonial"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                    aria-label="Next testimonial"
                  >
                    <ChevronRight size={18} />
                  </button>
                </div>
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl -z-10"></div>
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-purple-500/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

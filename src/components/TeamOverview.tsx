
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";

const TeamOverview = () => {
  const leaders = [
    {
      name: "Faizan Khan",
      role: "Founder & CEO",
      credentials: "IIT Delhi Alumnus",
      image: "/faizan.jpg"
    },
    {
      name: "Dr. Somnath Baidya Roy",
      role: "Chief Scientific Officer",
      credentials: "HOD CAS IIT Delhi",
      image: "/somnath1.jpg"
    },
    {
      name: "Sanaj Mehta",
      role: "Chief Business Officer",
      credentials: "TU Delft Alumnus",
      image: "/sanaj.jpg"
    },
    {
      name: "Atyab Mohammad",
      role: "Chief Technology Officer",
      credentials: "Ex-Founder",
      image: "/atyab.jpg"
    },
    {
      name: "Vasudev Gupta",
      role: "Senior Developer - AI & ML",
      credentials: "",
      image: "/vasudev1.jpg"
    },
    {
      name: "Alisha Khan",
      role: "Senior Marketing Manager",
      credentials: "",
      image: "/alisa1.jpg"
    }
  ];

  return (
    <section id="team" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Meet Our Experts
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Team Overview
            </h2>
            <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto text-balance">
              At Tensor Dynamics, we create innovative climate technology solutions grounded in physics and mathematics. Our dedicated team brings over 15 years of R&D experience in meteorology, with numerous published research papers in the US, Europe, and India.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leaders.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card overflow-hidden group"
            >
              <div className="relative h-64 overflow-hidden image-hover-zoom">
                <img 
                  src={leader.image} 
                  alt={leader.name} 
                  className="w-full h-full object-cover transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                
                {/* Social media links */}
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a href="#" className="w-8 h-8 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300">
                    <Linkedin size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">{leader.name}</h3>
                <p className="text-primary font-medium mb-1">{leader.role}</p>
                {leader.credentials && (
                  <p className="text-sm text-gray-600 dark:text-gray-400">{leader.credentials}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamOverview;

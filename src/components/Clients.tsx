
import { motion } from "framer-motion";

const Clients = () => {
  // const clients = [
  //   "Grid Controller of India Limited",
  //   "NTPC",
  //   "Adani Green Energy",
  //   "EY Parthenon",
  //   "Zomato",
  //   "Athena RE",
  //   "Viriscent",
  //   "Genesis Ray",
  //   "EMA (Energy Market Analytics)",
  //   "Azure Power"
  // ];

  const clients = [
    { name: "Grid Controller of India Limited", logo: "/grid_india.png" },
    { name: "NTPC", logo: "/NTPC.png" },
    { name: "Adani Green Energy", logo: "/adani.png" },
    { name: "EY Parthenon", logo: "/Ey.png" },
    { name: "Zomato", logo: "/zomato.png" },
    { name: "Athena RE", logo: "/athena.jpg" },
    { name: "Viriscent", logo: "/viriscent.png" },
    { name: "Genesis Ray", logo: "/genesis.png" },
    { name: "EMA", logo: "/ema.png" },
    { name: "Azure Power", logo: "/azure.png" }
  ];


  return (
    <section id="clients" className="py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Trusted By Industry Leaders
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Clients
            </h2>
          </motion.div>
        </div>

        <div className="overflow-hidden">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            {/* Logo Cloud - for desktop */}
            {/* <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 items-center">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-24"
                >
                  <div className="glass-card h-full w-full flex items-center justify-center p-6 rounded-xl group hover:border-primary/30 transition-all duration-300">
                    <p className="text-gray-700 dark:text-gray-300 font-medium text-center transition-all duration-300 group-hover:text-primary">
                      {client}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div> */}
            <div className="hidden md:grid grid-cols-3 lg:grid-cols-5 gap-8 items-center pb-4">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center justify-center h-28"
                >
                  <div className="glass-card h-full w-full flex items-center justify-center p-6 rounded-xl group hover:border-primary/30 transition-all duration-300">
                    <img 
                      src={client.logo}
                      alt={client.name}
                      className="max-h-18 w-auto object-contain filter dark:invert dark:brightness-200 transition-all duration-300"
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Logo slider - for mobile */}
            <div className="md:hidden">
              <div className="relative">
                {/* <div className="relative whitespace-nowrap overflow-x-auto pb-6 no-scrollbar">
                  <div className="inline-flex space-x-6">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        className="glass-card h-20 w-64 flex-shrink-0 flex items-center justify-center p-6 rounded-xl"
                      >
                        <p className="text-gray-700 dark:text-gray-300 font-medium text-center">
                          {client}
                        </p>
                      </div>
                    ))}
                  </div>
                </div> */}

<div className="relative whitespace-nowrap overflow-x-auto pb-6 no-scrollbar">
                  <div className="inline-flex space-x-6">
                    {clients.map((client, index) => (
                      <div
                        key={index}
                        className="glass-card h-20 w-64 flex-shrink-0 flex items-center justify-center p-6 rounded-xl"
                      >
                        <img 
                          src={client.logo}
                          alt={client.name}
                          className="max-h-10 w-auto object-contain filter dark:invert dark:brightness-200"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Fade edges for carousel effect */}
                <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900"></div>
                <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white via-white to-transparent dark:from-gray-900 dark:via-gray-900"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Clients;

import { motion } from "framer-motion";
import { BrainCircuit, Zap, Bell, AreaChart } from "lucide-react";

const Technology = () => {
  const advantages = [
    {
      icon: <BrainCircuit className="w-6 h-6" />,
      title: "Hybrid AI + Physics Models",
      description:
        "Combines numerical weather prediction with machine learning for unprecedented accuracy.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Real-Time Data Fusion",
      description:
        "Merges satellite, radar, and sensor data for comprehensive weather insights.",
    },
    {
      icon: <Bell className="w-6 h-6" />,
      title: "Proactive Alerts",
      description:
        "ETA-based alerts for extreme weather conditions to prevent disruptions.",
    },
    {
      icon: <AreaChart className="w-6 h-6" />,
      title: "Route Simulation Engine",
      description:
        "Optimizes departure time scenarios for efficient route planning.",
    },
  ];

  const industries = [
    "Cold Chain Logistics",
    "Food Delivery & Ride-Hailing",
    "Maritime & Aviation",
    "Consumer Navigation",
  ];

  return (
    <section id="technology" className="py-0 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="text-lg md:text-3xl text-gray-600 dark:text-gray-300 mb-3 pb-8">
              <span className="font-semibold">SkyCaster Weather Enroute:</span>{" "}
              World's first weather on route platform
            </p>

            <p className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Innovation
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Our Technology
            </h2>
          </motion.div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Technology description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="glass-card p-8">
              <h3 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
                What is Skycaster?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-8">
                Skycaster is our weather-on-routes intelligence platform powered
                by Tensor Dynamics' AI-driven Weather Engine. It provides
                precise, real-time weather intelligence for routes and
                locations, helping businesses make informed decisions.
              </p>

              <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                Unique advantages:
              </h4>
              <div className="space-y-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="flex items-start">
                    <div className="mr-4 p-2 rounded-lg bg-primary/10 text-primary">
                      {advantage.icon}
                    </div>
                    <div>
                      <h5 className="font-semibold mb-1 text-gray-900 dark:text-white">
                        {advantage.title}
                      </h5>
                      <p className="text-sm text-gray-600 dark:text-gray-300">
                        {advantage.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8">
                <h4 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">
                  Industries benefiting from Skycaster:
                </h4>
                <div className="flex flex-wrap gap-3">
                  {industries.map((industry, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {industry}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Visual representation */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
          >
            {/* Animated technology visualization */}
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-xl bg-gradient-to-br from-blue-900/90 to-purple-900/90">
              {/* Grid background */}
              <div className="absolute inset-0 grid grid-cols-12 grid-rows-12">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="border-[0.5px] border-white/5"></div>
                ))}
              </div>

              {/* Interactive weather visualization - animated map with routes */}
              <div className="absolute inset-0 p-6 flex flex-col">
                <div className="text-white mb-6">
                  <h3 className="text-2xl font-bold">Skycaster</h3>
                  <p className="text-sm text-white/70">
                    Weather-on-routes intelligence platform
                  </p>
                </div>

                <div className="flex-grow relative">
                  {/* Map representation */}
                  <div className="absolute inset-0 bg-white/5 rounded-xl overflow-hidden">
                    {/* Map grid lines */}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={`h-${i}`}
                        className="absolute left-0 right-0"
                        style={{
                          top: `${(i + 1) * 10}%`,
                          height: "1px",
                          background: "rgba(255,255,255,0.1)",
                        }}
                      ></div>
                    ))}
                    {Array.from({ length: 10 }).map((_, i) => (
                      <div
                        key={`v-${i}`}
                        className="absolute top-0 bottom-0"
                        style={{
                          left: `${(i + 1) * 10}%`,
                          width: "1px",
                          background: "rgba(255,255,255,0.1)",
                        }}
                      ></div>
                    ))}

                    {/* Routes */}
                    <svg className="absolute inset-0" viewBox="0 0 100 100">
                      <motion.path
                        d="M20,80 C30,60 50,55 70,20"
                        stroke="rgba(59, 130, 246, 0.8)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5 }}
                        viewport={{ once: true }}
                      />
                      <motion.path
                        d="M10,40 C30,45 60,45 90,60"
                        stroke="rgba(139, 92, 246, 0.8)"
                        strokeWidth="2"
                        fill="none"
                        strokeDasharray="5,5"
                        initial={{ pathLength: 0, opacity: 0 }}
                        whileInView={{ pathLength: 1, opacity: 1 }}
                        transition={{ duration: 1.5, delay: 0.3 }}
                        viewport={{ once: true }}
                      />
                    </svg>

                    {/* Weather indicators */}
                    {Array.from({ length: 5 }).map((_, i) => (
                      <motion.div
                        key={`weather-${i}`}
                        className="absolute w-12 h-12 rounded-full"
                        style={{
                          top: `${20 + Math.random() * 60}%`,
                          left: `${20 + Math.random() * 60}%`,
                          background: `radial-gradient(circle, rgba(96, 165, 250, 0.2) 0%, rgba(96, 165, 250, 0) 70%)`,
                        }}
                        initial={{ scale: 0, opacity: 0 }}
                        whileInView={{
                          scale: [0, 1.5, 1],
                          opacity: [0, 1, 0.7],
                        }}
                        transition={{
                          duration: 2,
                          delay: 0.5 + i * 0.3,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                        viewport={{ once: true }}
                      />
                    ))}

                    {/* Route points */}
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-blue-500"
                      style={{ top: "80%", left: "20%" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                    />
                    <motion.div
                      className="absolute w-3 h-3 rounded-full bg-blue-500"
                      style={{ top: "20%", left: "70%" }}
                      initial={{ scale: 0 }}
                      whileInView={{ scale: [0, 1.3, 1] }}
                      transition={{ duration: 0.5, delay: 1.5 }}
                      viewport={{ once: true }}
                    />

                    {/* Moving point along route */}
                    <motion.div
                      className="absolute w-2 h-2 rounded-full bg-white"
                      initial={{ top: "80%", left: "20%" }}
                      whileInView={{
                        top: ["80%", "20%"],
                        left: ["20%", "70%"],
                      }}
                      transition={{
                        duration: 3,
                        delay: 0.5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 2,
                      }}
                      viewport={{ once: true }}
                    />
                  </div>
                </div>

                {/* Live data indicators */}
                <div className="mt-6 grid grid-cols-3 gap-3">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <motion.div
                      key={`indicator-${i}`}
                      className="rounded-lg bg-white/10 p-3"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 * i }}
                      viewport={{ once: true }}
                    >
                      <div className="text-xs text-white/60 mb-1">
                        {["Temperature", "Precipitation", "Wind Speed"][i]}
                      </div>
                      <div className="text-sm font-medium text-white">
                        {["24°C", "12%", "15 km/h"][i]}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-blue-600/10 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-purple-400/10 rounded-full blur-3xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Technology;

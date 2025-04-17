import { motion } from "framer-motion";
import { Award, MapPin, Trophy } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      image: {
        type: "img",
        src: "/geospatial.jpg",
        alt: "Geospatial Hackathon",
      },
      //<Trophy className="w-6 h-6" />,
      title: "Microsoft & DST Geospatial Hackathon Winner",
      description:
        "Recognized for innovative geospatial solutions in weather intelligence.",
    },
    {
      // image: <MapPin className="w-6 h-6" />,
      image: {
        type: "video",
        // component: <MapPin className="w-6 h-6" />,
        videoId: "d8kiLnJOpqw",
      },
      title: "India's 1st Renewable Energy Round The Clock Resource Map",
      description: "Developed in collaboration with Survey of India & IMD.",
    },
    {
      image: {
        type: "img",
        src: "/excellence.jpg", // Remove 'public' from path
        alt: "Excellence Award",
      },
      // <Award className="w-6 h-6" />,
      title: "AI for India Excellence Award 2024",
      description:
        "Honored for contributions to AI advancement in climate technology.",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-400/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      <div className="absolute left-0 bottom-0 w-80 h-80 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
              Our Achievements
            </h2>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card p-8 flex flex-col h-full group hover:shadow-lg transition-all duration-300"
            >
              <div className="w-full h-64  bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                {/* {achievement.image} */}
                {achievement.image.type === "img" ? (
                  <img
                    src={achievement.image.src}
                    alt={achievement.image.alt}
                    className="w-full h-full object-conver"
                  />
                ) : achievement.image.type === "video" ? (
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${achievement.image.videoId}?autoplay=1&mute=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                ) : null}
              </div>
              <h3 className="text-xl font-bold mb-4 text-balance text-gray-900 dark:text-white">
                {achievement.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {achievement.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

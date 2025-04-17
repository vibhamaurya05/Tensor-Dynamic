
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import AboutSection from "@/components/AboutSection";
import TeamOverview from "@/components/TeamOverview";
import Achievements from "@/components/Achievements";

const About = () => {
  return (
    <PageLayout 
      title="About Us" 
      subtitle="Our mission, vision, and the team behind Tensor Dynamics"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <AboutSection />
          
          <div className="my-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <TeamOverview />
          </div>
          
          <div className="my-20">
            <h2 className="text-3xl font-bold text-center mb-12">Our Achievements</h2>
            <Achievements />
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default About;


import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import Achievements from "@/components/Achievements";
import Awards from "@/components/Awards";

const AchievementsPage = () => {
  return (
    <PageLayout 
      title="Our Achievements" 
      subtitle="Milestones and recognitions in our journey"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-20"
        >
          <Achievements />
          
          <div>
            <h2 className="text-3xl font-bold text-center mb-12">Awards & Recognition</h2>
            <Awards />
          </div>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default AchievementsPage;

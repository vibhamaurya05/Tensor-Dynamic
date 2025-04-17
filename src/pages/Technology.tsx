
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import Technology from "@/components/Technology";

const TechnologyPage = () => {
  return (
    <PageLayout 
      title="Our Technology" 
      subtitle="The innovations powering our solutions"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Technology />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default TechnologyPage;

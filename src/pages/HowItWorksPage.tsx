
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import HowItWorks from "@/components/HowItWorks";

const HowItWorksPage = () => {
  return (
    <PageLayout 
      title="Our Process" 
      subtitle="How our solutions are implemented"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <HowItWorks />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default HowItWorksPage;

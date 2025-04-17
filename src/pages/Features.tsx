
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import FeaturesBenefits from "@/components/FeaturesBenefits";

const Features = () => {
  return (
    <PageLayout 
      title="Features & Benefits" 
      subtitle="How our solutions transform your business"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <FeaturesBenefits />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Features;


import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import CaseStudies from "@/components/CaseStudies";

const CaseStudiesPage = () => {
  return (
    <PageLayout 
      title="Success Stories" 
      subtitle="Real-world implementations and client achievements"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <CaseStudies />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default CaseStudiesPage;

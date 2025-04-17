
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import Industries from "@/components/Industries";

const Sectors = () => {
  return (
    <PageLayout 
      title="Industries We Serve" 
      subtitle="Specialized solutions across diverse business sectors"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Industries />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Sectors;

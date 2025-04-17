
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import ResourceHub from "@/components/ResourceHub";

const ResourcesPage = () => {
  return (
    <PageLayout 
      title="Knowledge Center" 
      subtitle="Guides, whitepapers, and educational resources"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ResourceHub />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ResourcesPage;


import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import BlogList from "@/components/BlogList";

const BlogPage = () => {
  return (
    <PageLayout 
      title="Insights & Updates" 
      subtitle="Latest news and articles from our team"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <BlogList />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default BlogPage;

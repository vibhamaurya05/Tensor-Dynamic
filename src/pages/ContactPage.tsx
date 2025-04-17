
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <PageLayout 
      title="Get In Touch" 
      subtitle="We're here to answer your questions"
      showNewsletter={false}
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <ContactForm />
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default ContactPage;

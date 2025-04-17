
import { ReactNode } from "react";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import Newsletter from "@/components/Newsletter";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: ReactNode;
  title: string;
  subtitle?: string;
  bgImage?: string;
  showNewsletter?: boolean;
}

const PageLayout = ({ 
  children, 
  title, 
  subtitle, 
  bgImage,
  showNewsletter = true 
}: PageLayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      {/* Page header */}
      <header 
        className={cn(
          "w-full pt-32 pb-0 bg-gradient-to-b from-background to-secondary/20",
          bgImage && "bg-cover bg-center"
        )}
        style={bgImage ? { backgroundImage: `url(${bgImage})` } : {}}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl md:text-5xl font-bold text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {title}
          </motion.h1>
          {subtitle && (
            <motion.p 
              className="mt-4 text-xl text-center text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {subtitle}
            </motion.p>
          )}
        </div>
      </header>
      
      {/* Page content */}
      <main className="flex-grow">
        {children}
      </main>
      
      {/* Newsletter section */}
      {showNewsletter && (
        <Newsletter />
      )}
      
      <Footer />
    </div>
  );
};

export default PageLayout;

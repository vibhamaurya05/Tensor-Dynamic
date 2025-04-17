
import { useEffect } from "react";
import { Link } from "react-router-dom";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import KeyStrengths from "@/components/KeyStrengths";
import Clients from "@/components/Clients";
import TeamOverview from "@/components/TeamOverview";
import Achievements from "@/components/Achievements";
import Technology from "@/components/Technology";
import Testimonials from "@/components/Testimonials";
import FeaturesBenefits from "@/components/FeaturesBenefits";
import Industries from "@/components/Industries";
import Awards from "@/components/Awards";
import HowItWorks from "@/components/HowItWorks";
import CaseStudies from "@/components/CaseStudies";
import FAQ from "@/components/FAQ";
import Partners from "@/components/Partners";
import ResourceHub from "@/components/ResourceHub";
import Blog from "@/components/Blog";
import Newsletter from "@/components/Newsletter";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const Index = () => {
  // Scroll to section if URL has hash
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 500);
      }
    }
  }, []);

  // Create section components with a "View More" button
  const SectionWithLink = ({ children, linkTo, linkText = "View More" }) => (
    <div className="mb-24">
      {children}
      <motion.div 
        className="flex justify-center mt-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.5 }}
      >
        <Button asChild variant="outline" className="group px-6 py-6 text-base font-medium rounded-full hover:scale-105 transition-all duration-300">
          <Link to={linkTo}>
            {linkText}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </Button>
      </motion.div>
    </div>
  );

  return (
    <div className="min-h-screen">
      <NavBar />
      <HeroSection />
      
      <div className="container mx-auto px-4">
        <SectionWithLink linkTo="/about" linkText="Learn More About Us">
          <AboutSection />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/about" linkText="Explore Our Strengths">
          <KeyStrengths />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/case-studies" linkText="See All Clients">
          <Clients />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/technology" linkText="Discover Our Technology">
          <Technology />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/features" linkText="Explore Features">
          <FeaturesBenefits />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/how-it-works" linkText="See How It Works">
          <HowItWorks />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/sectors" linkText="View All Industries">
          <Industries />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/case-studies" linkText="Browse Case Studies">
          <CaseStudies />
        </SectionWithLink>
        
        <SectionWithLink linkTo="/blog" linkText="Read More Articles">
          <Blog />
        </SectionWithLink>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Newsletter />
        </motion.div>
        
        <SectionWithLink linkTo="/contact" linkText="Get In Touch">
          <ContactForm />
        </SectionWithLink>
      </div>
      
      <Footer />
    </div>
  );
};

export default Index;

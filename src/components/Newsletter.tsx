
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, ArrowRight, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast({
        title: "Email is required",
        description: "Please enter your email address.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Check if email already exists in subscribers
      const { data: existingSubscriber, error: checkError } = await supabase
        .from('subscribers')
        .select('*')
        .eq('email', email)
        .single();
      
      if (checkError && checkError.code !== 'PGRST116') { // PGRST116 is "not found" which is expected
        throw checkError;
      }
      
      // If email already exists
      if (existingSubscriber) {
        if (existingSubscriber.confirmed) {
          toast({
            title: "Already subscribed",
            description: "This email is already subscribed to our newsletter.",
            duration: 5000,
          });
        } else {
          toast({
            title: "Subscription pending",
            description: "This email is already in our database but not confirmed yet.",
            duration: 5000,
          });
        }
        setEmail("");
        setIsSubmitting(false);
        return;
      }
      
      // Generate a confirmation token (simplified for demo)
      const confirmationToken = Math.random().toString(36).substring(2, 15);
      
      // Save to Supabase
      const { data, error } = await supabase
        .from('subscribers')
        .insert([
          { 
            email,
            confirmation_token: confirmationToken,
            confirmed: false // Initially not confirmed
          }
        ]);
      
      if (error) throw error;
      
      setIsSubscribed(true);
      setEmail("");
      
      toast({
        title: "Subscription successful!",
        description: "You've been added to our newsletter.",
        duration: 5000,
      });
      
      // Reset subscription state after a delay
      setTimeout(() => {
        setIsSubscribed(false);
      }, 3000);
    } catch (error) {
      console.error('Error subscribing to newsletter:', error);
      toast({
        title: "Error",
        description: "There was a problem with your subscription. Please try again.",
        variant: "destructive",
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute left-0 bottom-0 w-64 h-64 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl"></div>
      <div className="absolute right-0 top-0 w-64 h-64 bg-blue-400/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
            className="glass-card p-8 md:p-12"
          >
            <div className="text-center mb-8">
              <span className="inline-block p-3 rounded-full bg-primary/10 text-primary mb-4">
                <Mail className="w-6 h-6" />
              </span>
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900 dark:text-white">
                Stay Updated with Industry Insights
              </h2>
              <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                Subscribe to receive industry insights and updates from Tensor Dynamics.
              </p>
            </div>
            
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-grow py-6"
                  disabled={isSubmitting || isSubscribed}
                />
                
                <Button 
                  type="submit"
                  className="animated-btn"
                  disabled={isSubmitting || isSubscribed}
                >
                  {isSubmitting ? (
                    <div className="flex items-center">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      <span>Subscribing...</span>
                    </div>
                  ) : isSubscribed ? (
                    <div className="flex items-center">
                      <CheckCircle className="mr-2" size={18} />
                      <span>Subscribed</span>
                    </div>
                  ) : (
                    <div className="flex items-center">
                      <span>Subscribe</span>
                      <ArrowRight className="ml-2" size={18} />
                    </div>
                  )}
                </Button>
              </div>
              
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4 text-center">
                By subscribing, you agree to our Privacy Policy and consent to receive relevant content from us.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

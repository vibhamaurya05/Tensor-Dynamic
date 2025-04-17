
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Legal = () => {
  return (
    <PageLayout 
      title="Legal Information" 
      subtitle="Privacy Policy, Terms of Service, and Legal Documents"
    >
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <Tabs defaultValue="privacy" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="privacy">Privacy Policy</TabsTrigger>
              <TabsTrigger value="terms">Terms of Service</TabsTrigger>
            </TabsList>
            
            <TabsContent value="privacy" className="space-y-6">
              <h2 className="text-2xl font-bold">Privacy Policy</h2>
              <p className="text-muted-foreground">Last updated: June 1, 2023</p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Introduction</h3>
                <p>
                  At Tensor Dynamics, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
                </p>
                
                <h3 className="text-xl font-semibold">2. Information We Collect</h3>
                <p>
                  We may collect personal information that you voluntarily provide to us when you express interest in obtaining information about us or our products and services, when you participate in activities on our services, or otherwise when you contact us.
                </p>
                
                <h3 className="text-xl font-semibold">3. How We Use Your Information</h3>
                <p>
                  We use personal information collected via our services for a variety of business purposes described below. We process your personal information for these purposes in reliance on our legitimate business interests, in order to enter into or perform a contract with you, with your consent, and/or for compliance with our legal obligations.
                </p>
                
                <h3 className="text-xl font-semibold">4. Disclosure of Your Information</h3>
                <p>
                  We may share information we have collected about you in certain situations. Your information may be disclosed as follows:
                </p>
                
                <h3 className="text-xl font-semibold">5. Security of Your Information</h3>
                <p>
                  We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.
                </p>
              </div>
            </TabsContent>
            
            <TabsContent value="terms" className="space-y-6">
              <h2 className="text-2xl font-bold">Terms of Service</h2>
              <p className="text-muted-foreground">Last updated: June 1, 2023</p>
              
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">1. Agreement to Terms</h3>
                <p>
                  By accessing our website and services, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing our services.
                </p>
                
                <h3 className="text-xl font-semibold">2. Use License</h3>
                <p>
                  Permission is granted to temporarily download one copy of the materials on Tensor Dynamics's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title.
                </p>
                
                <h3 className="text-xl font-semibold">3. Disclaimer</h3>
                <p>
                  The materials on Tensor Dynamics's website are provided on an 'as is' basis. Tensor Dynamics makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
                </p>
                
                <h3 className="text-xl font-semibold">4. Limitations</h3>
                <p>
                  In no event shall Tensor Dynamics or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Tensor Dynamics's website, even if Tensor Dynamics or a Tensor Dynamics authorized representative has been notified orally or in writing of the possibility of such damage.
                </p>
                
                <h3 className="text-xl font-semibold">5. Governing Law</h3>
                <p>
                  These terms and conditions are governed by and construed in accordance with the laws and you irrevocably submit to the exclusive jurisdiction of the courts in that location.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>
    </PageLayout>
  );
};

export default Legal;

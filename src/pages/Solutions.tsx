
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Solutions = () => {
  const solutions = [
    {
      title: "Enterprise Analytics",
      description: "Comprehensive analytics solutions for large organizations with complex data needs",
      features: ["Advanced data visualization", "Predictive analytics", "Custom dashboards", "Integration with existing systems"],
      image: "/placeholder.svg"
    },
    {
      title: "Small Business Intelligence",
      description: "Affordable and scalable analytics tailored for small and growing businesses",
      features: ["User-friendly interface", "Quick implementation", "Essential metrics tracking", "Cost-effective pricing"],
      image: "/placeholder.svg"
    },
    {
      title: "Industry-Specific Solutions",
      description: "Specialized analytics packages designed for specific industry requirements",
      features: ["Regulatory compliance", "Industry benchmarking", "Specialized metrics", "Best practices implementation"],
      image: "/placeholder.svg"
    },
    {
      title: "Custom Development",
      description: "Bespoke solutions built according to your unique business requirements",
      features: ["Requirements analysis", "Custom development", "Integration services", "Ongoing support"],
      image: "/placeholder.svg"
    }
  ];

  return (
    <PageLayout 
      title="Our Solutions" 
      subtitle="Comprehensive analytics and intelligence offerings for your business"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {solutions.map((solution, index) => (
            <motion.div
              key={solution.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-full h-48 bg-gray-100 dark:bg-gray-800 rounded-t-lg overflow-hidden mb-4">
                    <img src={solution.image} alt={solution.title} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle>{solution.title}</CardTitle>
                  <CardDescription>{solution.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {solution.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Link to="/contact">
                    <Button variant="outline" className="w-full group">
                      Learn more
                      <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Solutions;

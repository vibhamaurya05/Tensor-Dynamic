
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      title: "TensorVision",
      description: "Advanced data visualization platform for complex datasets",
      features: [
        "Interactive dashboards",
        "Multiple chart types",
        "Real-time data streaming",
        "Export capabilities"
      ],
      badge: "Popular",
      image: "/placeholder.svg"
    },
    {
      title: "PredictIQ",
      description: "Predictive analytics tool using machine learning algorithms",
      features: [
        "Trend forecasting",
        "Anomaly detection",
        "Scenario modeling",
        "Automated insights"
      ],
      badge: "New",
      image: "/placeholder.svg"
    },
    {
      title: "DataConnect",
      description: "Integration platform connecting multiple data sources",
      features: [
        "200+ pre-built connectors",
        "Automated ETL processes",
        "Data cleaning tools",
        "Scheduled sync options"
      ],
      badge: null,
      image: "/placeholder.svg"
    },
    {
      title: "InsightOS",
      description: "Complete business intelligence operating system",
      features: [
        "User role management",
        "Collaborative features",
        "Customizable workflows",
        "Enterprise security"
      ],
      badge: "Enterprise",
      image: "/placeholder.svg"
    }
  ];

  return (
    <PageLayout 
      title="Our Products" 
      subtitle="Cutting-edge tools and platforms for data analysis and business intelligence"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-lg transition-all duration-300">
                <div className="overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <CardTitle>{product.title}</CardTitle>
                    {product.badge && (
                      <Badge variant="secondary">{product.badge}</Badge>
                    )}
                  </div>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {product.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="flex gap-2">
                  <Button asChild variant="outline" className="w-1/2">
                    <Link to="/how-it-works">Learn More</Link>
                  </Button>
                  <Button asChild className="w-1/2">
                    <Link to="/contact">Request Demo</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default Products;

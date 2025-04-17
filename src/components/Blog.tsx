
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { fetchLatestBlogs } from "@/utils/blogUtils";
import { toast } from "@/components/ui/use-toast";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image: string;
  category_id: string | null;
  categoryName: string;
  authorName?: string;
  created_at: string;
  published_at?: string;
}

const Blog = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { posts, error: fetchError } = await fetchLatestBlogs(3);
        
        if (fetchError) {
          setError("Failed to load blog posts");
          toast({
            title: "Error loading blog posts",
            description: "Please try again later",
            variant: "destructive",
          });
        } else {
          // Use type assertion to ensure posts match the BlogPost interface
          setBlogPosts(posts as BlogPost[]);
        }
      } catch (error: any) {
        console.error("Error fetching blog posts:", error);
        setError(error.message || "Failed to load blog posts");
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  return (
    <section id="blog" className="py-24 bg-gray-50 dark:bg-gray-800/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <span className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium tracking-wide mb-3">
              Insights & Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900 dark:text-white">
              Blog & Insights
            </h2>
          </motion.div>
        </div>

        {loading ? (
          <div className="flex justify-center items-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          </div>
        ) : error ? (
          <div className="text-center py-12">
            <p className="text-red-500 mb-4">{error}</p>
            <Button onClick={() => fetchLatestBlogs(3)} variant="outline">
              Try Again
            </Button>
          </div>
        ) : blogPosts.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available yet.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-100px" }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <div className="relative h-48 overflow-hidden image-hover-zoom">
                  <img 
                    src={post.featured_image} 
                    alt={post.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-black/70 text-white rounded-full text-xs font-medium">
                      {post.categoryName}
                    </span>
                  </div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                    {new Date(post.published_at || post.created_at).toLocaleDateString()}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{post.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 flex-grow">{post.excerpt}</p>
                  
                  <Button 
                    variant="ghost" 
                    className="mt-auto group justify-start px-0 hover:bg-transparent"
                    asChild
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <span className="text-primary">Read full article</span>
                      <ArrowRight size={16} className="ml-2 text-primary transition-transform duration-300 group-hover:translate-x-2" />
                    </Link>
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
        
        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="px-8" asChild>
            <Link to="/blog">
              View all articles
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Blog;

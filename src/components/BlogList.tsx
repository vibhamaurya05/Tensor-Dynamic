
import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { searchBlogs } from "@/utils/blogUtils";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";
import { ArrowRight, Search, RefreshCw, Calendar, User, Tag, AlertTriangle } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

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

interface Category {
  id: string;
  name: string;
  slug: string;
}

const BlogList = () => {
  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [totalPosts, setTotalPosts] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 9;
  
  // Get category from URL if present
  useEffect(() => {
    const categoryId = searchParams.get("category");
    if (categoryId) {
      setSelectedCategory(categoryId);
    }
  }, [searchParams]);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        
        const { data, error } = await supabase
          .from("categories")
          .select("id, name, slug")
          .order("name");
          
        if (error) throw error;
        
        setCategories(data || []);
      } catch (error: any) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    
    fetchCategories();
  }, []);
  
  // Fetch blog posts based on filters and pagination
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const { posts, error, count } = await searchBlogs(
          searchQuery,
          selectedCategory,
          'published',
          postsPerPage,
          currentPage
        );
        
        if (error) {
          setError("Failed to load blog posts");
        } else {
          setBlogPosts(posts as BlogPost[]);
          setTotalPosts(count || 0);
        }
      } catch (error: any) {
        console.error("Error fetching blog posts:", error);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchPosts();
  }, [searchQuery, selectedCategory, currentPage]);
  
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setCurrentPage(1);
  };
  
  const handleCategorySelect = (categoryId: string | null) => {
    setSelectedCategory(categoryId);
    setCurrentPage(1);
    
    // Update URL if category is selected
    if (categoryId) {
      setSearchParams({ category: categoryId });
    } else {
      setSearchParams({});
    }
  };
  
  // Calculate pagination
  const totalPages = Math.ceil(totalPosts / postsPerPage);
  
  // Generate page numbers array
  const getPageNumbers = () => {
    const pageNumbers = [];
    const maxVisiblePages = 5;
    
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) {
        pageNumbers.push(i);
      }
    } else {
      if (currentPage <= 3) {
        for (let i = 1; i <= 5; i++) {
          pageNumbers.push(i);
        }
      } else if (currentPage >= totalPages - 2) {
        for (let i = totalPages - 4; i <= totalPages; i++) {
          pageNumbers.push(i);
        }
      } else {
        for (let i = currentPage - 2; i <= currentPage + 2; i++) {
          pageNumbers.push(i);
        }
      }
    }
    
    return pageNumbers;
  };

  return (
    <div>
      {/* Search and Filter Section */}
      <div className="mb-8 bg-gray-50 dark:bg-gray-800/50 rounded-xl p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="md:col-span-2">
            <form onSubmit={handleSearch} className="relative">
              <Input
                placeholder="Search blog posts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Button type="submit" className="sr-only">Search</Button>
            </form>
          </div>
          
          <div>
            <Tabs 
              value={selectedCategory || "all"}
              onValueChange={(value) => handleCategorySelect(value === "all" ? null : value)}
              className="w-full"
            >
              <TabsList className="w-full">
                <TabsTrigger value="all" className="flex-1">All</TabsTrigger>
                {loadingCategories ? (
                  <div className="flex-1 px-4 py-2 text-center">Loading...</div>
                ) : (
                  <div className="overflow-x-auto flex">
                    {categories.slice(0, 2).map((category) => (
                      <TabsTrigger key={category.id} value={category.id} className="flex-1">
                        {category.name}
                      </TabsTrigger>
                    ))}
                  </div>
                )}
              </TabsList>
            </Tabs>
          </div>
        </div>
        
        {/* Additional categories as badges */}
        {!loadingCategories && categories.length > 2 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {categories.slice(2).map((category) => (
              <Badge 
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className="cursor-pointer"
                onClick={() => handleCategorySelect(
                  selectedCategory === category.id ? null : category.id
                )}
              >
                {category.name}
              </Badge>
            ))}
          </div>
        )}
      </div>
      
      {/* Blog Posts Grid */}
      {loading ? (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(6)].map((_, index) => (
            <div key={index} className="flex flex-col space-y-3">
              <Skeleton className="h-[200px] w-full rounded-lg" />
              <Skeleton className="h-4 w-3/4" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-2/3" />
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-center py-16">
          <AlertTriangle className="mx-auto h-12 w-12 text-amber-500 mb-4" />
          <h3 className="text-xl font-bold mb-2">Error Loading Blog Posts</h3>
          <p className="text-muted-foreground mb-6">{error}</p>
          <Button 
            onClick={() => window.location.reload()}
            variant="outline"
          >
            <RefreshCw className="mr-2 h-4 w-4" />
            Reload Page
          </Button>
        </div>
      ) : blogPosts.length === 0 ? (
        <div className="text-center py-16">
          <h3 className="text-xl font-bold mb-2">No Blog Posts Found</h3>
          <p className="text-muted-foreground mb-6">
            {searchQuery || selectedCategory
              ? "Try adjusting your search or filters"
              : "Check back soon for new content"}
          </p>
          {(searchQuery || selectedCategory) && (
            <Button 
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory(null);
                setSearchParams({});
              }}
              variant="outline"
            >
              Clear Filters
            </Button>
          )}
        </div>
      ) : (
        <>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="glass-card overflow-hidden group h-full flex flex-col"
              >
                <Link to={`/blog/${post.slug}`} className="block overflow-hidden h-48">
                  <img 
                    src={post.featured_image || "https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </Link>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <div className="flex items-center mr-4">
                      <Calendar className="h-3 w-3 mr-1" />
                      <span>{new Date(post.published_at || post.created_at).toLocaleDateString()}</span>
                    </div>
                    
                    {post.categoryName && (
                      <Badge variant="secondary" className="font-normal">
                        {post.categoryName}
                      </Badge>
                    )}
                  </div>
                  
                  <Link to={`/blog/${post.slug}`}>
                    <h3 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground mb-6 flex-grow line-clamp-3">
                    {post.excerpt}
                  </p>
                  
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
          
          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center mt-12">
              <div className="flex space-x-2">
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                  disabled={currentPage === 1}
                  size="sm"
                >
                  Previous
                </Button>
                
                {getPageNumbers().map(pageNumber => (
                  <Button
                    key={pageNumber}
                    variant={currentPage === pageNumber ? "default" : "outline"}
                    onClick={() => setCurrentPage(pageNumber)}
                    size="sm"
                  >
                    {pageNumber}
                  </Button>
                ))}
                
                <Button
                  variant="outline"
                  onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                  disabled={currentPage === totalPages}
                  size="sm"
                >
                  Next
                </Button>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default BlogList;

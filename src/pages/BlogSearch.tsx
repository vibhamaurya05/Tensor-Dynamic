
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchBlogs } from "@/utils/blogUtils";
import { supabase } from "@/integrations/supabase/client";
import { 
  Card, 
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Search, Calendar, Tag, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  featured_image: string;
  category_id: string | null;
  created_at: string;
  categoryName?: string;
}

interface Category {
  id: string;
  name: string;
  slug: string;
}

const BlogSearch = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(searchParams.get("category") || undefined);
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);

  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const { data, error } = await supabase
          .from('categories')
          .select('id, name, slug')
          .order('name');
          
        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
      } finally {
        setLoadingCategories(false);
      }
    };
    
    fetchCategories();
  }, []);

  // Search for blogs based on the search parameters
  useEffect(() => {
    const fetchBlogs = async () => {
      setLoading(true);
      const { posts, error } = await searchBlogs(
        searchParams.get("q") || "",
        searchParams.get("category") || undefined
      );
      
      if (!error) {
        setPosts(posts);
      }
      setLoading(false);
    };
    
    fetchBlogs();
  }, [searchParams]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    
    const params: Record<string, string> = {};
    
    if (searchQuery) {
      params.q = searchQuery;
    }
    
    if (selectedCategory) {
      params.category = selectedCategory;
    }
    
    setSearchParams(params);
  };

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory(undefined);
    setSearchParams({});
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8">Blog Search</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar with search filters */}
        <div className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Search & Filter</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSearch} className="space-y-4">
                <div className="space-y-2">
                  <label htmlFor="search" className="text-sm font-medium">
                    Search
                  </label>
                  <div className="relative">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="search"
                      placeholder="Search blogs..."
                      className="pl-8"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="category" className="text-sm font-medium">
                    Category
                  </label>
                  <Select
                    value={selectedCategory}
                    onValueChange={setSelectedCategory}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="All Categories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="">All Categories</SelectItem>
                      {loadingCategories ? (
                        <SelectItem value="" disabled>Loading categories...</SelectItem>
                      ) : (
                        categories.map((category) => (
                          <SelectItem key={category.id} value={category.id}>
                            {category.name}
                          </SelectItem>
                        ))
                      )}
                    </SelectContent>
                  </Select>
                </div>
                
                <div className="pt-4 flex flex-col gap-2">
                  <Button type="submit" className="w-full">
                    <Search className="mr-2 h-4 w-4" />
                    Search
                  </Button>
                  <Button 
                    type="button" 
                    variant="outline" 
                    className="w-full"
                    onClick={clearFilters}
                  >
                    Clear Filters
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
        
        {/* Blog post results */}
        <div className="lg:col-span-3">
          <Card>
            <CardHeader>
              <CardTitle>
                {searchParams.size > 0 
                  ? `Search Results (${posts.length})` 
                  : "Latest Blog Posts"}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex justify-center py-16">
                  <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : posts.length === 0 ? (
                <div className="text-center py-16 text-muted-foreground">
                  <p>No blog posts found</p>
                  {searchParams.size > 0 && (
                    <Button 
                      variant="outline" 
                      className="mt-4"
                      onClick={clearFilters}
                    >
                      Clear Filters
                    </Button>
                  )}
                </div>
              ) : (
                <div className="space-y-6">
                  {posts.map((post) => (
                    <article key={post.id} className="flex flex-col md:flex-row gap-6 pb-6">
                      <div className="md:w-1/3">
                        <Link to={`/blog/${post.slug}`}>
                          <img 
                            src={post.featured_image} 
                            alt={post.title} 
                            className="w-full h-48 object-cover rounded-md"
                          />
                        </Link>
                      </div>
                      <div className="md:w-2/3 flex flex-col">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(post.created_at).toLocaleDateString()}</span>
                          {post.categoryName && (
                            <>
                              <span>•</span>
                              <Tag className="h-3 w-3" />
                              <span>{post.categoryName}</span>
                            </>
                          )}
                        </div>
                        <h2 className="text-xl font-bold mb-2">
                          <Link to={`/blog/${post.slug}`} className="hover:text-primary transition-colors">
                            {post.title}
                          </Link>
                        </h2>
                        <p className="text-muted-foreground mb-4 flex-grow">
                          {post.excerpt}
                        </p>
                        <div>
                          <Button variant="ghost" asChild>
                            <Link to={`/blog/${post.slug}`}>
                              Read More
                            </Link>
                          </Button>
                        </div>
                      </div>
                      <Separator className="mt-6 md:hidden" />
                    </article>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default BlogSearch;


import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { 
  FilePenLine, 
  FileText, 
  Plus, 
  Search, 
  Eye, 
  Pencil, 
  Trash2, 
  RefreshCw,
  FileCheck,
  Clock,
  Filter,
  AlertTriangle
} from "lucide-react";

interface BlogPost {
  id: string;
  title: string;
  slug: string;
  status: "published" | "draft";
  created_at: string;
  updated_at: string;
  author_id: string;
  category_id: string | null;
  view_count?: number;
  authorName?: string;
  categoryName?: string;
}

export const BlogManagement = () => {
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchBlogPosts();
  }, []);

  const fetchBlogPosts = async () => {
    try {
      setLoading(true);
      setError(null);
      
      // Fetch posts from Supabase
      const { data: posts, error: postsError } = await supabase
        .from("posts")
        .select(`
          id, 
          title, 
          slug, 
          status, 
          created_at, 
          updated_at, 
          author_id,
          category_id
        `);
      
      if (postsError) throw postsError;
      
      // Fetch author information
      const { data: profiles, error: profilesError } = await supabase
        .from("profiles")
        .select("id, username");
        
      if (profilesError) throw profilesError;
      
      // Fetch category information
      const { data: categories, error: categoriesError } = await supabase
        .from("categories")
        .select("id, name");
        
      if (categoriesError) throw categoriesError;
      
      // Map author and category names to posts
      const enrichedPosts = posts.map(post => {
        const author = profiles.find(p => p.id === post.author_id);
        const category = post.category_id ? categories.find(c => c.id === post.category_id) : null;
        
        return {
          ...post,
          // Ensure post.status is properly cast to the expected union type
          status: (post.status === "published" || post.status === "draft") 
            ? post.status as "published" | "draft"
            : "draft", // Default to draft if invalid status
          authorName: author?.username || "Unknown author",
          categoryName: category?.name || "Uncategorized",
          view_count: 0
        };
      });
      
      setBlogPosts(enrichedPosts);
    } catch (error: any) {
      console.error("Error fetching blog posts:", error);
      setError("Failed to load blog posts");
      toast({
        title: "Error",
        description: "Failed to load blog posts",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = blogPosts.filter(post => {
    // Filter by search query
    const matchesSearch = 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.authorName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.categoryName?.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Filter by tab
    if (activeTab === "all") return matchesSearch;
    if (activeTab === "published") return matchesSearch && post.status === "published";
    if (activeTab === "drafts") return matchesSearch && post.status === "draft";
    
    return matchesSearch;
  });

  const handleDelete = async (id: string) => {
    try {
      const { error } = await supabase
        .from("posts")
        .delete()
        .eq("id", id);
        
      if (error) throw error;
      
      // Update state
      setBlogPosts(prev => prev.filter(post => post.id !== id));
      
      toast({
        title: "Post deleted",
        description: "The blog post has been deleted successfully."
      });
    } catch (error) {
      console.error("Error deleting post:", error);
      toast({
        title: "Error",
        description: "Failed to delete blog post",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Blog Management</h1>
        <Button onClick={() => navigate("/admin-panel/blogs/new")}>
          <Plus className="mr-2 h-4 w-4" />
          New Blog Post
        </Button>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle>All Blog Posts</CardTitle>
              <CardDescription>
                Manage your website's blog content
              </CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative w-full">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search posts..."
                  className="pl-8 w-[250px]"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </CardHeader>
        
        <CardContent className="p-0">
          <Tabs 
            defaultValue="all" 
            className="w-full"
            value={activeTab}
            onValueChange={setActiveTab}
          >
            <div className="px-6 pb-3">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="all">All Posts</TabsTrigger>
                <TabsTrigger value="published">Published</TabsTrigger>
                <TabsTrigger value="drafts">Drafts</TabsTrigger>
              </TabsList>
            </div>
            
            {loading ? (
              <div className="flex justify-center py-16">
                <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
              </div>
            ) : error ? (
              <div className="flex flex-col items-center py-16 gap-4">
                <AlertTriangle className="h-12 w-12 text-amber-500" />
                <p className="text-muted-foreground text-center max-w-md">{error}</p>
                <Button onClick={fetchBlogPosts}>
                  <RefreshCw className="mr-2 h-4 w-4" />
                  Try Again
                </Button>
              </div>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Author</TableHead>
                    <TableHead>Category</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Published</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredPosts.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                        {searchQuery ? "No matching blog posts found" : "No blog posts found"}
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredPosts.map((post) => (
                      <TableRow key={post.id}>
                        <TableCell className="font-medium max-w-[250px] truncate">
                          {post.title}
                        </TableCell>
                        <TableCell>{post.authorName}</TableCell>
                        <TableCell>{post.categoryName}</TableCell>
                        <TableCell>
                          <Badge variant={post.status === "published" ? "default" : "outline"}>
                            {post.status === "published" ? (
                              <FileCheck className="mr-1 h-3 w-3" />
                            ) : (
                              <Clock className="mr-1 h-3 w-3" />
                            )}
                            {post.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {new Date(post.created_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            {post.status === "published" && (
                              <Button variant="outline" size="sm" asChild>
                                <Link to={`/blog/${post.slug}`} target="_blank">
                                  <Eye className="h-4 w-4" />
                                </Link>
                              </Button>
                            )}
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => navigate(`/admin-panel/blogs/edit/${post.id}`)}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => handleDelete(post.id)}
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            )}
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};


import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getBlogBySlug, renderTipTapContent } from "@/utils/blogUtils";
import { 
  Calendar, 
  User, 
  Tag, 
  ArrowLeft, 
  RefreshCw, 
  AlertTriangle 
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

interface BlogPostData {
  id: string;
  title: string;
  content: any;
  excerpt?: string;
  slug: string;
  featured_image?: string;
  created_at: string;
  updated_at: string;
  published_at?: string;
  category?: {
    id: string;
    name: string;
    slug: string;
  };
  author?: {
    id: string;
    username?: string;
    avatar_url?: string;
  };
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPostData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchBlogPost = async () => {
      if (!slug) {
        setError("Blog post not found");
        setLoading(false);
        return;
      }
      
      setLoading(true);
      setError(null);
      
      try {
        const { post, error } = await getBlogBySlug(slug);
        
        if (error) {
          console.error("Error fetching blog post:", error);
          setError(error.message || "Failed to load blog post");
        } else if (!post) {
          setError("Blog post not found");
        } else {
          setPost(post);
        }
      } catch (err) {
        console.error("Unexpected error:", err);
        setError("An unexpected error occurred");
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlogPost();
  }, [slug]);

  // Function to render the content from TipTap JSON content
  const renderContent = () => {
    if (!post?.content) return null;
    
    // Convert TipTap JSON content to HTML
    const htmlContent = renderTipTapContent(post.content);
    
    // Return the rendered HTML content
    return (
      <div className="prose prose-lg max-w-none dark:prose-invert">
        <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
      </div>
    );
  };

  if (loading) {
    return (
      <div className="container mx-auto px-4 py-16 flex justify-center">
        <RefreshCw className="h-12 w-12 animate-spin text-primary" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <AlertTriangle className="h-16 w-16 text-amber-500 mx-auto mb-4" />
          <h1 className="text-2xl font-bold mb-4">
            {error || "Blog post not found"}
          </h1>
          <p className="text-muted-foreground mb-8">
            The blog post you're looking for couldn't be found or is no longer available.
          </p>
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <Link to="/blog" className="text-primary hover:underline inline-flex items-center">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Blog
          </Link>
        </div>
        
        {/* Featured Image */}
        {post.featured_image && (
          <div className="mb-8">
            <img 
              src={post.featured_image} 
              alt={post.title} 
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>
        )}
        
        {/* Post Header */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            <div className="flex items-center">
              <Calendar className="h-4 w-4 mr-2" />
              <span>
                {new Date(post.published_at || post.created_at).toLocaleDateString()}
              </span>
            </div>
            
            {post.author?.username && (
              <div className="flex items-center">
                <User className="h-4 w-4 mr-2" />
                <span>{post.author.username}</span>
              </div>
            )}
            
            {post.category?.name && (
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                <span>{post.category.name}</span>
              </div>
            )}
          </div>
        </div>
        
        <Separator className="my-8" />
        
        {/* Post Content */}
        <div className="mb-12">
          {post.excerpt && (
            <div className="text-xl text-muted-foreground mb-8">
              {post.excerpt}
            </div>
          )}
          
          {renderContent()}
        </div>
        
        <Separator className="my-8" />
        
        {/* Post Footer */}
        <div className="flex justify-between items-center">
          <div>
            {post.category?.name && (
              <Link 
                to={`/blog?category=${post.category.id}`}
                className="inline-flex items-center text-primary hover:underline"
              >
                <Tag className="mr-2 h-4 w-4" />
                More in {post.category.name}
              </Link>
            )}
          </div>
          
          <Button asChild>
            <Link to="/blog">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Blog
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;

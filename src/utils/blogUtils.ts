
import { supabase } from "@/integrations/supabase/client";

export const fetchLatestBlogs = async (limit = 3) => {
  try {
    // Fetch published posts from Supabase, limited to the latest 3 (or specified limit)
    const { data: posts, error: postsError } = await supabase
      .from("posts")
      .select(`
        id, 
        title, 
        excerpt, 
        slug, 
        featured_image,
        category_id,
        created_at,
        published_at,
        author_id
      `)
      .eq('status', 'published')
      .order('created_at', { ascending: false })
      .limit(limit);
    
    if (postsError) {
      console.error("Error fetching blog posts:", postsError);
      return { posts: [], error: postsError };
    }
    
    if (!posts || posts.length === 0) {
      return { posts: [], error: null };
    }
    
    // Fetch categories for category names
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("id, name");
      
    if (categoriesError) {
      console.error("Error fetching categories:", categoriesError);
      return { posts, error: null }; // Still return posts even if categories fail
    }
    
    // Fetch authors information
    const { data: authors, error: authorsError } = await supabase
      .from("profiles")
      .select("id, username");
    
    if (authorsError) {
      console.error("Error fetching authors:", authorsError);
    }
    
    // Map category names and author names to posts
    const enrichedPosts = posts.map(post => {
      const category = post.category_id ? categories?.find(c => c.id === post.category_id) : null;
      const author = post.author_id ? authors?.find(a => a.id === post.author_id) : null;
      
      return {
        ...post,
        categoryName: category?.name || "Uncategorized",
        authorName: author?.username || "Unknown Author",
        // Use a default image if none is provided
        featured_image: post.featured_image || "https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
      };
    });
    
    return { posts: enrichedPosts, error: null };
  } catch (error) {
    console.error("Error fetching blog posts:", error);
    return { posts: [], error };
  }
};

export const searchBlogs = async (
  searchQuery: string, 
  categoryId?: string,
  status = 'published',
  limit = 10,
  page = 1
) => {
  try {
    const pageSize = limit;
    const offset = (page - 1) * pageSize;
    
    let query = supabase
      .from("posts")
      .select(`
        id, 
        title, 
        excerpt, 
        slug, 
        featured_image,
        category_id,
        created_at,
        published_at,
        author_id,
        status
      `, { count: 'exact' })
      .order('created_at', { ascending: false });

    // Apply status filter (default to published)
    query = query.eq('status', status);
    
    // Apply category filter if provided
    if (categoryId) {
      query = query.eq('category_id', categoryId);
    }
    
    // Apply search filter if provided
    if (searchQuery) {
      query = query.or(`title.ilike.%${searchQuery}%,excerpt.ilike.%${searchQuery}%,seo_keywords.ilike.%${searchQuery}%`);
    }
    
    // Apply pagination
    query = query.range(offset, offset + pageSize - 1);
    
    const { data: posts, error: postsError, count } = await query;
    
    if (postsError) {
      console.error("Error searching blog posts:", postsError);
      return { posts: [], error: postsError, count: 0 };
    }
    
    if (!posts || posts.length === 0) {
      return { posts: [], error: null, count: 0 };
    }
    
    // Fetch categories for category names
    const { data: categories, error: categoriesError } = await supabase
      .from("categories")
      .select("id, name");
      
    if (categoriesError) {
      console.error("Error fetching categories:", categoriesError);
      return { posts, error: null, count }; // Still return posts even if categories fail
    }
    
    // Fetch authors information
    const { data: authors, error: authorsError } = await supabase
      .from("profiles")
      .select("id, username");
    
    if (authorsError) {
      console.error("Error fetching authors:", authorsError);
    }
    
    // Map category names and author names to posts
    const enrichedPosts = posts.map(post => {
      const category = post.category_id ? categories?.find(c => c.id === post.category_id) : null;
      const author = post.author_id ? authors?.find(a => a.id === post.author_id) : null;
      
      return {
        ...post,
        categoryName: category?.name || "Uncategorized",
        authorName: author?.username || "Unknown Author",
        // Use a default image if none is provided
        featured_image: post.featured_image || "https://images.unsplash.com/photo-1596367407372-96cb88503db6?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3"
      };
    });
    
    return { posts: enrichedPosts, error: null, count };
  } catch (error) {
    console.error("Error searching blog posts:", error);
    return { posts: [], error, count: 0 };
  }
};

export const getBlogBySlug = async (slug: string) => {
  try {
    // First check if the slug exists
    if (!slug) {
      return { post: null, error: new Error("Blog slug is required") };
    }
    
    const { data: post, error } = await supabase
      .from("posts")
      .select(`
        id,
        title,
        content,
        excerpt,
        slug,
        featured_image,
        created_at,
        updated_at,
        published_at,
        category_id,
        author_id,
        status,
        seo_title,
        seo_description,
        seo_keywords
      `)
      .eq('slug', slug)
      .eq('status', 'published')
      .maybeSingle();

    if (error) {
      console.error("Error fetching blog post:", error);
      return { post: null, error };
    }
    
    if (!post) {
      return { post: null, error: new Error("Blog post not found") };
    }

    // Fetch category and author details
    const [categoryResponse, authorResponse] = await Promise.all([
      supabase
        .from("categories")
        .select("id, name, slug")
        .eq("id", post.category_id || '')
        .maybeSingle(),
      supabase
        .from("profiles")
        .select("id, username, avatar_url")
        .eq("id", post.author_id || '')
        .maybeSingle()
    ]);

    return {
      post: {
        ...post,
        category: categoryResponse.data || null,
        author: authorResponse.data || null,
      },
      error: null,
    };
  } catch (error) {
    console.error("Error fetching blog post:", error);
    return { post: null, error };
  }
};

// Function to handle TipTap JSON content
export const renderTipTapContent = (content: any) => {
  if (!content) return '';
  
  try {
    // If content is already a string, return it
    if (typeof content === 'string') {
      return content;
    }
    
    // If content is TipTap JSON structure
    if (typeof content === 'object') {
      // Simple conversion of TipTap JSON to HTML (basic implementation)
      // This is a simplified version, a proper parser would be more complex
      let html = '';
      
      // Process nodes based on their type
      const processNode = (node: any) => {
        if (!node || !node.type) return '';
        
        let nodeHtml = '';
        
        switch (node.type) {
          case 'doc':
            nodeHtml = node.content ? node.content.map(processNode).join('') : '';
            break;
          case 'paragraph':
            nodeHtml = `<p>${node.content ? node.content.map(processNode).join('') : ''}</p>`;
            break;
          case 'heading':
            const level = node.attrs?.level || 1;
            nodeHtml = `<h${level}>${node.content ? node.content.map(processNode).join('') : ''}</h${level}>`;
            break;
          case 'text':
            let textContent = node.text || '';
            if (node.marks && node.marks.length > 0) {
              for (const mark of node.marks) {
                switch (mark.type) {
                  case 'bold':
                    textContent = `<strong>${textContent}</strong>`;
                    break;
                  case 'italic':
                    textContent = `<em>${textContent}</em>`;
                    break;
                  case 'underline':
                    textContent = `<u>${textContent}</u>`;
                    break;
                  case 'link':
                    textContent = `<a href="${mark.attrs?.href || '#'}">${textContent}</a>`;
                    break;
                  default:
                    break;
                }
              }
            }
            nodeHtml = textContent;
            break;
          case 'bulletList':
            nodeHtml = `<ul>${node.content ? node.content.map(processNode).join('') : ''}</ul>`;
            break;
          case 'orderedList':
            nodeHtml = `<ol>${node.content ? node.content.map(processNode).join('') : ''}</ol>`;
            break;
          case 'listItem':
            nodeHtml = `<li>${node.content ? node.content.map(processNode).join('') : ''}</li>`;
            break;
          case 'image':
            nodeHtml = `<img src="${node.attrs?.src || ''}" alt="${node.attrs?.alt || ''}" />`;
            break;
          default:
            nodeHtml = node.content ? node.content.map(processNode).join('') : '';
        }
        
        return nodeHtml;
      };
      
      if (content.type === 'doc' && content.content) {
        html = content.content.map(processNode).join('');
      }
      
      return html;
    }
    
    return '';
  } catch (error) {
    console.error('Error rendering TipTap content:', error);
    return '<p>Error rendering content</p>';
  }
};

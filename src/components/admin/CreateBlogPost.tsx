
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/components/ui/use-toast";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Tabs, 
  TabsList, 
  TabsTrigger, 
  TabsContent 
} from "@/components/ui/tabs";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { 
  Save, 
  ArrowLeft, 
  FileText, 
  EyeIcon,
  Bold,
  Italic,
  AlignLeft,
  AlignCenter,
  AlignRight,
  RefreshCw,
  ImageIcon,
  Underline as UnderlineIcon,
  Heading1 as Heading1Icon,
  Heading2 as Heading2Icon,
  List as ListIcon,
  ListOrdered as ListOrderedIcon,
  Link as LinkIcon
} from "lucide-react";

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import TiptapImage from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import Color from '@tiptap/extension-color';
import TextStyle from '@tiptap/extension-text-style';
import { 
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const formSchema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  slug: z.string().min(1, { message: "Slug is required" }),
  excerpt: z.string().min(1, { message: "Excerpt is required" }),
  content: z.string().min(1, { message: "Content is required" }),
  category_id: z.string().optional(),
  status: z.enum(["published", "draft"], {
    required_error: "Please select a status",
  }),
  featured_image: z.string().optional(),
  seo_title: z.string().optional(),
  seo_description: z.string().optional(),
  seo_keywords: z.string().optional(),
});

interface Category {
  id: string;
  name: string;
}

const MenuBar = ({ editor }: { editor: any }) => {
  if (!editor) {
    return null;
  }

  const colorOptions = [
    { name: 'Black', value: '#000000' },
    { name: 'Gray', value: '#6b7280' },
    { name: 'Red', value: '#ef4444' },
    { name: 'Orange', value: '#f97316' },
    { name: 'Amber', value: '#f59e0b' },
    { name: 'Yellow', value: '#eab308' },
    { name: 'Lime', value: '#84cc16' },
    { name: 'Green', value: '#22c55e' },
    { name: 'Emerald', value: '#10b981' },
    { name: 'Teal', value: '#14b8a6' },
    { name: 'Cyan', value: '#06b6d4' },
    { name: 'Sky', value: '#0ea5e9' },
    { name: 'Blue', value: '#3b82f6' },
    { name: 'Indigo', value: '#6366f1' },
    { name: 'Violet', value: '#8b5cf6' },
    { name: 'Purple', value: '#a855f7' },
    { name: 'Fuchsia', value: '#d946ef' },
    { name: 'Pink', value: '#ec4899' },
    { name: 'Rose', value: '#f43f5e' },
  ];

  const addImage = () => {
    const url = window.prompt('URL');
    
    if (url) {
      editor.chain().focus().setImage({ src: url }).run();
    }
  };

  const setLink = () => {
    const previousUrl = editor.getAttributes('link').href;
    const url = window.prompt('URL', previousUrl);
    
    if (url === null) {
      return;
    }
    
    if (url === '') {
      editor.chain().focus().extendMarkRange('link').unsetLink().run();
      return;
    }
    
    editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  };

  return (
    <div className="border rounded-t-md p-2 flex flex-wrap gap-1 bg-muted/30">
      <Button
        type="button"
        variant={editor.isActive('bold') ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleBold().run()}
      >
        <Bold className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('italic') ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleItalic().run()}
      >
        <Italic className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('underline') ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleUnderline().run()}
      >
        <UnderlineIcon className="h-4 w-4" />
      </Button>
      
      <Popover>
        <PopoverTrigger asChild>
          <Button type="button" variant="outline" size="icon">
            <span className="w-4 h-4 rounded-full border" style={{ backgroundColor: editor.getAttributes('textStyle').color || '#000000' }} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-64">
          <div className="grid grid-cols-5 gap-2">
            {colorOptions.map((color) => (
              <button
                key={color.value}
                onClick={() => editor.chain().focus().setColor(color.value).run()}
                className="w-8 h-8 rounded-full"
                style={{ backgroundColor: color.value }}
                title={color.name}
                type="button"
              />
            ))}
          </div>
        </PopoverContent>
      </Popover>
      
      <Button
        type="button"
        variant={editor.isActive('heading', { level: 1 }) ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
      >
        <Heading1Icon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('heading', { level: 2 }) ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
      >
        <Heading2Icon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('bulletList') ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleBulletList().run()}
      >
        <ListIcon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('orderedList') ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
      >
        <ListOrderedIcon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive('link') ? 'default' : 'outline'}
        size="icon"
        onClick={setLink}
      >
        <LinkIcon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant="outline"
        size="icon"
        onClick={addImage}
      >
        <ImageIcon className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive({ textAlign: 'left' }) ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().setTextAlign('left').run()}
      >
        <AlignLeft className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive({ textAlign: 'center' }) ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().setTextAlign('center').run()}
      >
        <AlignCenter className="h-4 w-4" />
      </Button>
      
      <Button
        type="button"
        variant={editor.isActive({ textAlign: 'right' }) ? 'default' : 'outline'}
        size="icon"
        onClick={() => editor.chain().focus().setTextAlign('right').run()}
      >
        <AlignRight className="h-4 w-4" />
      </Button>
    </div>
  );
};

export const CreateBlogPost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const [loadingCategories, setLoadingCategories] = useState(true);
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      TiptapImage,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
    ],
    content: '',
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      slug: "",
      excerpt: "",
      content: "",
      category_id: "",
      status: "draft",
      featured_image: "",
      seo_title: "",
      seo_description: "",
      seo_keywords: "",
    },
  });

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        setLoadingCategories(true);
        const { data, error } = await supabase
          .from('categories')
          .select('id, name');
          
        if (error) throw error;
        setCategories(data || []);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast({
          title: "Error",
          description: "Failed to load categories",
          variant: "destructive",
        });
      } finally {
        setLoadingCategories(false);
      }
    };
    
    fetchCategories();
  }, [toast]);

  useEffect(() => {
    if (editor) {
      editor.on('update', () => {
        const html = editor.getHTML();
        form.setValue('content', html);
      });
    }
  }, [editor, form]);

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setIsSubmitting(true);
      
      const { data: { user } } = await supabase.auth.getUser();
      
      if (!user) {
        throw new Error("You must be logged in to create a post");
      }
      
      const postData = {
        title: values.title,
        slug: values.slug,
        excerpt: values.excerpt,
        content: editor?.getJSON() || {},
        category_id: values.category_id || null,
        status: values.status,
        featured_image: values.featured_image || null,
        author_id: user.id,
        seo_title: values.seo_title || null,
        seo_description: values.seo_description || null,
        seo_keywords: values.seo_keywords || null,
        published_at: values.status === 'published' ? new Date().toISOString() : null,
      };
      
      const { data, error } = await supabase
        .from('posts')
        .insert(postData)
        .select()
        .single();
        
      if (error) throw error;
      
      toast({
        title: "Success",
        description: "Blog post created successfully",
      });
      
      navigate("/admin-panel/blogs");
    } catch (error: any) {
      console.error("Error creating blog post:", error);
      toast({
        title: "Error",
        description: error.message || "Failed to create blog post",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const generateSlug = () => {
    const title = form.getValues("title");
    if (title) {
      const slug = title
        .toLowerCase()
        .replace(/[^a-z0-9\s]/g, "")
        .replace(/\s+/g, "-");
      form.setValue("slug", slug);
    }
  };

  const getEditorContent = () => {
    if (!editor) return "<p>Nothing to preview</p>";
    return editor.getHTML();
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="icon" 
            onClick={() => navigate("/admin-panel/blogs")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <h1 className="text-3xl font-bold tracking-tight">Create Blog Post</h1>
        </div>
      </div>
      
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Content</CardTitle>
                  <CardDescription>The main content of your blog post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="Enter blog post title" 
                            {...field} 
                            onBlur={(e) => {
                              field.onBlur();
                              if (!form.getValues("slug")) {
                                generateSlug();
                              }
                            }}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <div className="flex gap-4">
                    <FormField
                      control={form.control}
                      name="slug"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel>Slug</FormLabel>
                          <div className="flex gap-2">
                            <FormControl>
                              <Input 
                                placeholder="enter-post-slug" 
                                {...field} 
                              />
                            </FormControl>
                            <Button 
                              type="button" 
                              variant="outline" 
                              onClick={generateSlug}
                            >
                              Generate
                            </Button>
                          </div>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  
                  <FormField
                    control={form.control}
                    name="excerpt"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Excerpt</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Brief summary of the post" 
                            className="min-h-[80px]"
                            {...field} 
                          />
                        </FormControl>
                        <FormDescription>
                          A short description that appears in blog listings
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Main Content</CardTitle>
                  <CardDescription>Write the body of your post</CardDescription>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="write" className="w-full">
                    <TabsList className="mb-4">
                      <TabsTrigger value="write">
                        <FileText className="h-4 w-4 mr-2" />
                        Write
                      </TabsTrigger>
                      <TabsTrigger value="preview">
                        <EyeIcon className="h-4 w-4 mr-2" />
                        Preview
                      </TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="write">
                      <FormField
                        control={form.control}
                        name="content"
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <div>
                                <MenuBar editor={editor} />
                                <EditorContent 
                                  editor={editor} 
                                  className="min-h-[400px] p-4 border rounded-b-md bg-background"
                                />
                                <input type="hidden" {...field} />
                              </div>
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </TabsContent>
                    
                    <TabsContent value="preview">
                      <div className="border rounded-md p-4 min-h-[400px] prose prose-sm md:prose-base max-w-none">
                        {form.getValues("content") ? (
                          <div dangerouslySetInnerHTML={{ __html: getEditorContent() }} />
                        ) : (
                          <p className="text-muted-foreground text-center py-8">
                            Nothing to preview yet. Write some content first.
                          </p>
                        )}
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>SEO</CardTitle>
                  <CardDescription>Search engine optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="seo_title"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>SEO Title</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="SEO Title (optional)" 
                            {...field} 
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormDescription>
                          Recommended length: 50-60 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="seo_description"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Meta Description</FormLabel>
                        <FormControl>
                          <Textarea 
                            placeholder="Meta description (optional)" 
                            className="min-h-[80px]"
                            {...field} 
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormDescription>
                          Recommended length: 150-160 characters
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="seo_keywords"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Keywords</FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="keyword1, keyword2, keyword3 (optional)" 
                            {...field} 
                            value={field.value || ""}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Publishing</CardTitle>
                  <CardDescription>Publication settings</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Status</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="published">Published</SelectItem>
                            <SelectItem value="draft">Draft</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormDescription>
                          Draft posts are only visible to administrators
                        </FormDescription>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  
                  <FormField
                    control={form.control}
                    name="category_id"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Category</FormLabel>
                        <Select 
                          onValueChange={field.onChange} 
                          defaultValue={field.value}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select category" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {loadingCategories ? (
                              <SelectItem value="Loading categories" disabled>Loading categories...</SelectItem>
                            ) : categories.length === 0 ? (
                              <SelectItem value="No categories found" disabled>No categories found</SelectItem>
                            ) : (
                              categories.map(category => (
                                <SelectItem key={category.id} value={category.id}>
                                  {category.name}
                                </SelectItem>
                              ))
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button 
                    type="submit" 
                    className="w-full" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Saving...
                      </>
                    ) : (
                      <>
                        <Save className="mr-2 h-4 w-4" />
                        Save Post
                      </>
                    )}
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Featured Image</CardTitle>
                  <CardDescription>Add a main image to your post</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <FormField
                    control={form.control}
                    name="featured_image"
                    render={({ field }) => (
                      <FormItem>
                        <div className="border-2 border-dashed rounded-md p-6 flex flex-col items-center">
                          {field.value ? (
                            <div className="relative w-full">
                              <img 
                                src={field.value} 
                                alt="Featured" 
                                className="w-full h-auto rounded-md"
                              />
                              <Button
                                type="button"
                                variant="destructive"
                                size="sm"
                                className="absolute top-2 right-2"
                                onClick={() => form.setValue("featured_image", "")}
                              >
                                Remove
                              </Button>
                            </div>
                          ) : (
                            <>
                              <ImageIcon className="h-10 w-10 text-muted-foreground mb-2" />
                              <div className="text-center space-y-2">
                                <div className="text-sm text-muted-foreground">
                                  Enter image URL below
                                </div>
                                <Input
                                  placeholder="https://example.com/image.jpg"
                                  value={field.value || ""}
                                  onChange={(e) => field.onChange(e.target.value)}
                                  className="max-w-[250px] mx-auto"
                                />
                              </div>
                            </>
                          )}
                        </div>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
};

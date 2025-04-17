# Tensor Dynamics - Modern Business Website

This is a comprehensive documentation for the Tensor Dynamics website, built with React, TypeScript, Tailwind CSS, and Shadcn UI components.

## Table of Contents

1. [Project Structure & Component Paths](#1-project-structure--component-paths)
2. [Page Structure & Customization](#2-page-structure--customization)
3. [Form Structure & API Calls](#3-form-structure--api-calls)
4. [Header & Footer Structure](#4-header--footer-structure)
5. [API Structure & Customization](#5-api-structure--customization)
6. [Backend Files & Customization](#6-backend-files--customization)
7. [Database Setup & Schema Details](#7-database-setup--schema-details)
8. [Import/Export Structure](#8-importexport-structure)
9. [Routes & Navigation Structure](#9-routes--navigation-structure)
10. [Contact Us Form - Submission Details & Customization](#10-contact-us-form---submission-details--customization)
11. [Blog System & CMS Customization](#11-blog-system--cms-customization)
12. [Switching to MySQL/PostgreSQL - Setup Guide](#12-switching-to-mysqlpostgresql---setup-guide)
13. [Project Setup - Step-by-Step Guide](#13-project-setup---step-by-step-guide)
14. [Customization & Error Handling](#14-customization--error-handling)
15. [FAQ & Troubleshooting](#15-faq--troubleshooting)

## 1. Project Structure & Component Paths

### Component Structure Overview

The project is organized with a component-based architecture following modern React practices. Below is a comprehensive listing of the component paths with descriptions of their purposes and customization options.

#### Core UI Components

- **`/src/components/ui/`**: Contains reusable UI components based on the Shadcn UI library
  - `button.tsx`: Customizable button component with various variants
  - `card.tsx`: Card component for containing content
  - `toast.tsx`: Toast notification component
  - `dialog.tsx`: Modal dialog component
  - And many more base UI components...

#### Navigation Components

- **`/src/components/NavBarWithDropdowns.tsx`**: Main navigation bar with dropdown menus
  - **Description**: A responsive navigation component featuring animated dropdowns
  - **Customization**: Modify the `navItems` array to add/remove navigation links and dropdowns
  - **Usage**: Imported and used in `App.tsx` for site-wide navigation

- **`/src/components/NavBar.tsx`**: Simple navigation component used on some pages
  - **Description**: A simpler alternative navigation component
  - **Customization**: Edit the component to modify navigation links

#### Layout Components

- **`/src/components/PageLayout.tsx`**: Standard page layout wrapper
  - **Description**: Provides consistent layout structure for pages
  - **Customization**: Modify padding, margins, and container styles
  - **Usage**: Wrap page content with this component for consistent layout

- **`/src/components/Footer.tsx`**: Site footer component
  - **Description**: Contains footer links, copyright info, and social media icons
  - **Customization**: Update links, copyright text, and social media handles

#### Home Page Components

- **`/src/components/HeroSection.tsx`**: Hero section for the home page
  - **Description**: Large banner section with call-to-action buttons
  - **Customization**: Update headline, description, images, and button text

- **`/src/components/AboutSection.tsx`**: Company overview section
  - **Description**: Brief about section with company description
  - **Customization**: Update text content and images

- **`/src/components/KeyStrengths.tsx`**: Feature highlights component
  - **Description**: Grid layout of company strengths or key features
  - **Customization**: Modify items in the strengths array

#### Feature Components

- **`/src/components/Features.tsx`**: Features showcase component
  - **Description**: Detailed feature showcase with images and descriptions
  - **Customization**: Update the features data array with new features

- **`/src/components/FeaturesBenefits.tsx`**: Feature benefits component
  - **Description**: Highlights benefits of product/service features
  - **Customization**: Modify the benefits array

#### Content Components

- **`/src/components/Blog.tsx`**: Blog posts preview component
  - **Description**: Grid of blog post previews
  - **Customization**: Adjust layout, post count, and display options

- **`/src/components/CaseStudies.tsx`**: Case studies showcase
  - **Description**: Displays customer case studies with results
  - **Customization**: Update case studies data in the component

- **`/src/components/FAQ.tsx`**: Frequently asked questions component
  - **Description**: Accordion-style FAQ section
  - **Customization**: Update questions and answers in the FAQ array

#### Form Components

- **`/src/components/ContactForm.tsx`**: Contact form component
  - **Description**: Form for user inquiries with validation
  - **Customization**: Modify form fields, validation rules, and submission handling
  - **Interaction**: Submits data to Supabase contacts table

- **`/src/components/Newsletter.tsx`**: Newsletter subscription form
  - **Description**: Email subscription form
  - **Customization**: Update form design and submission handling
  - **Interaction**: Submits to Supabase subscribers table

#### Admin Components

- **`/src/components/admin/`**: Admin dashboard components
  - `Overview.tsx`: Dashboard overview with metrics
  - `BlogManagement.tsx`: Blog post management interface
  - `ContactLeads.tsx`: Contact form submissions management
  - `UserManagement.tsx`: User management interface
  - `Newsletter.tsx`: Newsletter subscribers management
  - `AccountSettings.tsx`: User account settings

### How to Customize Components

To customize any component:

1. **UI Components**: Extend Shadcn UI components by modifying variants in the component files
   
   ```tsx
   // Example: Customizing Button component
   // src/components/ui/button.tsx
   export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(...)
   ```

2. **Content Components**: Update the data arrays within each component
   
   ```tsx
   // Example: Updating features in FeaturesBenefits.tsx
   const features = [
     {
       title: "New Feature Title",
       description: "Updated feature description",
       icon: Zap,
     },
     // Add more features...
   ];
   ```

3. **Layout Components**: Adjust container widths, padding, and responsive behavior
   
   ```tsx
   // Example: Adjusting PageLayout.tsx
   <div className="container mx-auto px-4 md:px-6 lg:px-8">
     {children}
   </div>
   ```

4. **Style Customization**: Most components use Tailwind CSS classes which can be modified directly
   
   ```tsx
   // Example: Changing color scheme
   <div className="bg-primary text-white hover:bg-primary/90">...</div>
   ```

## 2. Page Structure & Customization

### Pages Overview

The project follows a standardized page structure with React Router for navigation. Below is a list of all pages with details on their purpose and customization options.

#### Main Pages

- **`/src/pages/Index.tsx`**
  - **Description**: Home page with hero section, about section, and feature highlights
  - **Customization**: Update component imports and layout
  - **SEO**: Update meta tags in the HTML head

- **`/src/pages/About.tsx`**
  - **Description**: Company information, team, mission and vision
  - **Customization**: Modify content sections and team information

- **`/src/pages/Technology.tsx`**
  - **Description**: Detailed information about the technology used
  - **Customization**: Update tech specs and feature descriptions

- **`/src/pages/Features.tsx`**
  - **Description**: Comprehensive list of product/service features
  - **Customization**: Update feature components and descriptions

- **`/src/pages/HowItWorksPage.tsx`**
  - **Description**: Step-by-step explanation of how the product/service works
  - **Customization**: Modify step components and process descriptions

- **`/src/pages/Sectors.tsx`**
  - **Description**: Industry-specific information and solutions
  - **Customization**: Update industry sectors and specific solutions

- **`/src/pages/Solutions.tsx`**
  - **Description**: Detailed solutions offered by the company
  - **Customization**: Update solution descriptions and images

- **`/src/pages/Products.tsx`**
  - **Description**: Product catalog or list
  - **Customization**: Update product information, images, and pricing

#### Blog Pages

- **`/src/pages/BlogPage.tsx`**
  - **Description**: Blog listing page with filtering options
  - **Customization**: Adjust post per page, layout, and filtering options

- **`/src/pages/BlogPost.tsx`**
  - **Description**: Individual blog post page with dynamic content
  - **Customization**: Modify post layout, author info display, and related posts

#### Support Pages

- **`/src/pages/ContactPage.tsx`**
  - **Description**: Contact form and company information
  - **Customization**: Update contact details and form fields

- **`/src/pages/Legal.tsx`**
  - **Description**: Legal information, privacy policy, and terms of service
  - **Customization**: Update legal text and sections

#### Admin Pages

- **`/src/pages/AdminLogin.tsx`**
  - **Description**: Admin authentication page
  - **Customization**: Modify login form and authentication methods

- **`/src/pages/AdminDashboard.tsx`**
  - **Description**: Admin dashboard with various management sections
  - **Customization**: Update dashboard components and permissions

### Customizing Page Content

Pages can be customized in several ways:

1. **Component Composition**: Pages are built by composing smaller components. Add, remove, or rearrange components to change page structure.

   ```tsx
   // Example: Customizing Index.tsx
   const Index = () => {
     return (
       <div>
         <HeroSection />
         <AboutSection />
         {/* Add or remove components here */}
         <NewComponent />
         <Footer />
       </div>
     );
   };
   ```

2. **Page-Specific Props**: Pass custom props to components to modify their behavior on specific pages

   ```tsx
   // Example: Customizing component behavior on a specific page
   <HeroSection 
     title="Custom Title for This Page" 
     showCta={false} 
   />
   ```

3. **Page Layouts**: Most pages use the `PageLayout` component which can be customized with props

   ```tsx
   // Example: Customizing page layout
   <PageLayout 
     title="Custom Page Title"
     subtitle="Custom subtitle for this page"
     showBreadcrumbs={true}
     showNewsletter={false}
   >
     {/* Page content */}
   </PageLayout>
   ```

### SEO Customization

SEO meta tags can be customized in the main `index.html` file for static content, or dynamically per page:

```tsx
// Example: Adding page-specific meta tags
import { Helmet } from 'react-helmet';

const ProductPage = () => {
  return (
    <>
      <Helmet>
        <title>Product Name - Tensor Dynamics</title>
        <meta name="description" content="Product description for SEO" />
        <meta property="og:title" content="Product Name" />
        <meta property="og:description" content="Product description for social sharing" />
        <meta property="og:image" content="/images/product-og-image.jpg" />
      </Helmet>
      {/* Page content */}
    </>
  );
};
```

## 3. Form Structure & API Calls

### Form Components Overview

The project includes several form components that interact with backend APIs. Here's a detailed breakdown of each form and its customization options.

#### Contact Form

- **Path**: `/src/components/ContactForm.tsx`
- **Description**: Main contact form for user inquiries
- **Form Fields**:
  - Name (required)
  - Email (required with validation)
  - Subject (required)
  - Message (required)
- **API Integration**: Submits to Supabase contacts table

To customize the form fields:

```tsx
// Example: Adding a phone number field to ContactForm
<div className="grid gap-4">
  {/* Existing fields */}
  <div className="space-y-2">
    <Label htmlFor="phone">Phone Number</Label>
    <Input
      id="phone"
      name="phone"
      type="tel"
      placeholder="Your phone number"
      value={formData.phone}
      onChange={handleChange}
    />
  </div>
  {/* Other fields */}
</div>
```

To modify form validation:

```tsx
// Example: Adding validation for a new field
const validateForm = () => {
  const errors: FormErrors = {};
  
  // Existing validation rules...
  
  // New validation rule
  if (!formData.phone) {
    errors.phone = "Phone number is required";
  } else if (!/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
  
  return errors;
};
```

#### Newsletter Subscription Form

- **Path**: `/src/components/Newsletter.tsx`
- **Description**: Email subscription form for newsletter
- **Form Fields**:
  - Email (required with validation)
- **API Integration**: Submits to Supabase subscribers table

To customize the newsletter form:

```tsx
// Example: Adding name field to Newsletter form
<form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
  <div className="flex-1">
    <Input
      type="text"
      placeholder="Your Name"
      value={name}
      onChange={(e) => setName(e.target.value)}
      className="w-full"
    />
  </div>
  <div className="flex-1">
    <Input
      type="email"
      placeholder="Your Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      className="w-full"
    />
  </div>
  <Button type="submit">Subscribe</Button>
</form>
```

#### Admin Login Form

- **Path**: `/src/pages/AdminLogin.tsx`
- **Description**: Authentication form for admin users
- **Form Fields**:
  - Email (required with validation)
  - Password (required)
- **API Integration**: Uses Supabase authentication

To customize authentication behavior:

```tsx
// Example: Adding "Remember Me" functionality to login
<div className="flex items-center space-x-2">
  <Checkbox id="remember" checked={rememberMe} onCheckedChange={setRememberMe} />
  <label htmlFor="remember" className="text-sm text-muted-foreground cursor-pointer">
    Remember me
  </label>
</div>

// In the handleLogin function:
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
      options: {
        remember: rememberMe // Use the remember me value
      }
    });
    
    // Rest of the function...
  } catch (error) {
    // Error handling...
  }
};
```

### API Calls and Customization

The forms in this project use the Supabase client for API calls. Here's how to customize the API calls:

#### Contact Form Submission

```tsx
// Example: Customizing contact form submission
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate form
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }
  
  setSubmitting(true);
  
  try {
    // Custom data transformation before submission
    const formPayload = {
      ...formData,
      source: 'website_contact_form',
      tags: ['website', 'contact'],
      // Add any additional fields
    };
    
    const { error } = await supabase
      .from('contacts')
      .insert([formPayload]);
    
    if (error) throw error;
    
    // Success handling
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Clear form or redirect
    resetForm();
    
  } catch (error) {
    // Error handling
    console.error("Error submitting form:", error);
    toast({
      variant: "destructive",
      title: "Submission failed",
      description: "Please try again later.",
    });
  } finally {
    setSubmitting(false);
  }
};
```

#### Newsletter Subscription

```tsx
// Example: Customizing newsletter subscription with double opt-in
const handleSubscribe = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate email
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    setError("Please enter a valid email address");
    return;
  }
  
  setLoading(true);
  
  try {
    // Generate a confirmation token
    const confirmationToken = Math.random().toString(36).substring(2, 15);
    
    const { error } = await supabase
      .from('subscribers')
      .insert([
        { 
          email, 
          name, // If you added a name field
          confirmed: false,
          confirmation_token: confirmationToken 
        }
      ]);
    
    if (error) throw error;
    
    // Here you would typically send a confirmation email with the token
    // This would be handled by a Supabase Edge Function or external email service
    
    toast({
      title: "Almost there!",
      description: "Please check your email to confirm your subscription.",
    });
    
    setEmail("");
    setName("");
    
  } catch (error) {
    console.error("Error subscribing:", error);
    toast({
      variant: "destructive",
      title: "Subscription failed",
      description: "Please try again later.",
    });
  } finally {
    setLoading(false);
  }
};
```

## 4. Header & Footer Structure

### Header Component

The main header component is implemented as `NavBarWithDropdowns.tsx` in the project:

- **Path**: `/src/components/NavBarWithDropdowns.tsx`
- **Description**: Responsive navigation bar with dropdown menus, logo, and theme toggle
- **Features**:
  - Mobile-responsive design with hamburger menu
  - Multi-level dropdown navigation
  - Smooth animations with Framer Motion
  - Theme toggle (light/dark mode)
  - Transparent to solid background on scroll

#### Customizing the Header

1. **Modifying Navigation Items**:

The navigation structure is defined in the `navItems` array in `NavBarWithDropdowns.tsx`:

```tsx
// Example: Customizing navigation links
const navItems: NavItem[] = [
  { 
    name: "Home", 
    href: "/", 
    icon: Home 
  },
  { 
    name: "About", 
    href: "/about", 
    icon: User 
  },
  { 
    name: "Services", // New navigation item
    href: "/services", 
    icon: Briefcase,
    dropdown: [
      { name: "Consulting", href: "/services/consulting" },
      { name: "Development", href: "/services/development" },
      { name: "Training", href: "/services/training" },
    ]
  },
  // Other navigation items...
];
```

2. **Customizing Logo**:

```tsx
// Example: Replacing the text logo with an image logo
<Link to="/" className="flex items-center">
  <img 
    src="/path/to/logo.svg" 
    alt="Tensor Dynamics" 
    className="h-8 w-auto" 
  />
</Link>
```

3. **Customizing Header Styling**:

```tsx
// Example: Modifying header background, shadow, and animation
<header
  className={cn(
    "fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out",
    isScrolled
      ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg py-2 shadow-lg"
      : "bg-transparent py-6"
  )}
>
  {/* Header content */}
</header>
```

4. **Adding Extra Header Features**:

```tsx
// Example: Adding a search button to the header
<div className="hidden md:flex items-center space-x-4">
  <ThemeToggle />
  
  {/* Add search button */}
  <Button variant="ghost" size="icon" onClick={() => setSearchOpen(true)}>
    <Search className="h-5 w-5" />
  </Button>
  
  {/* Optional: Add a search modal */}
  {searchOpen && (
    <SearchModal onClose={() => setSearchOpen(false)} />
  )}
</div>
```

### Footer Component

- **Path**: `/src/components/Footer.tsx`
- **Description**: Site-wide footer with multiple columns, social links, and copyright information
- **Features**:
  - Multi-column layout with links
  - Social media icons
  - Newsletter subscription form
  - Copyright information
  - Responsive design

#### Customizing the Footer

1. **Modifying Footer Links**:

```tsx
// Example: Updating footer links
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
  <div className="space-y-4">
    <h3 className="text-lg font-medium">Company</h3>
    <ul className="space-y-2">
      <li><Link to="/about">About Us</Link></li>
      <li><Link to="/careers">Careers</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      {/* Add new links */}
      <li><Link to="/partners">Partners</Link></li>
      <li><Link to="/investors">Investors</Link></li>
    </ul>
  </div>
  
  {/* Other footer columns */}
</div>
```

2. **Customizing Social Media Links**:

```tsx
// Example: Updating social media links
<div className="flex space-x-4 mt-4">
  <a href="https://twitter.com/tensordynamics" target="_blank" rel="noopener noreferrer" 
     className="text-gray-400 hover:text-primary">
    <Twitter size={20} />
  </a>
  <a href="https://linkedin.com/company/tensordynamics" target="_blank" rel="noopener noreferrer"
     className="text-gray-400 hover:text-primary">
    <Linkedin size={20} />
  </a>
  {/* Add new social links */}
  <a href="https://youtube.com/tensordynamics" target="_blank" rel="noopener noreferrer"
     className="text-gray-400 hover:text-primary">
    <Youtube size={20} />
  </a>
</div>
```

3. **Modifying Copyright Text**:

```tsx
// Example: Updating copyright information
<div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-8 text-sm text-gray-500 dark:text-gray-400">
  <p>© {new Date().getFullYear()} Tensor Dynamics Inc. All rights reserved.</p>
  <div className="mt-2 flex space-x-4">
    <Link to="/legal/privacy">Privacy Policy</Link>
    <Link to="/legal/terms">Terms of Service</Link>
    <Link to="/legal/cookies">Cookie Policy</Link>
  </div>
</div>
```

4. **Adding Footer Features**:

```tsx
// Example: Adding a language selector to the footer
<div className="mt-4">
  <Select defaultValue="en" onValueChange={handleLanguageChange}>
    <SelectTrigger className="w-[180px]">
      <SelectValue placeholder="Select Language" />
    </SelectTrigger>
    <SelectContent>
      <SelectItem value="en">English</SelectItem>
      <SelectItem value="es">Español</SelectItem>
      <SelectItem value="fr">Français</SelectItem>
      <SelectItem value="de">Deutsch</SelectItem>
    </SelectContent>
  </Select>
</div>
```

## 5. API Structure & Customization

### API Overview

This project uses Supabase as the backend, which provides a PostgreSQL database and authentication services. The main API integration is through the Supabase client.

#### Core API Integration

- **Client Configuration**: `/src/integrations/supabase/client.ts`
  - Contains the Supabase client setup
  - Includes helper functions for common operations

```typescript
// Example: src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bgsnxjdcmzezvvkzhddi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "your-key-here";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);

// Helper functions
export const createUser = async (email: string, password: string, role: 'admin' | 'editor') => {
  // Implementation...
};
```

#### API Endpoints

Although the project doesn't use traditional REST API routes like in Next.js, here's how data is accessed through Supabase:

1. **Blogs API**:
   - Read blog posts: `supabase.from('posts').select('*')`
   - Create blog post: `supabase.from('posts').insert([data])`
   - Update blog post: `supabase.from('posts').update(data).eq('id', postId)`
   - Delete blog post: `supabase.from('posts').delete().eq('id', postId)`

2. **Contact Form API**:
   - Submit contact form: `supabase.from('contacts').insert([formData])`

3. **Newsletter API**:
   - Subscribe: `supabase.from('subscribers').insert([{ email, confirmed: false }])`

4. **Authentication API**:
   - Sign in: `supabase.auth.signInWithPassword({ email, password })`
   - Sign out: `supabase.auth.signOut()`
   - Get user: `supabase.auth.getUser()`

### Customizing API Calls

To customize the API integration:

1. **Adding Custom Helper Functions**:

```typescript
// Example: Adding custom API helpers to the Supabase client file
// src/integrations/supabase/client.ts

// Get published blog posts with category and author info
export const getPublishedPosts = async () => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:category_id(name, slug),
      author:author_id(username, avatar_url)
    `)
    .eq('status', 'published')
    .order('published_at', { ascending: false });
    
  if (error) throw error;
  return data;
};

// Get featured blog posts
export const getFeaturedPosts = async (limit = 3) => {
  const { data, error } = await supabase
    .from('posts')
    .select(`
      *,
      category:category_id(name, slug),
      author:author_id(username, avatar_url)
    `)
    .eq('status', 'published')
    .not('featured_image', 'is', null)
    .order('published_at', { ascending: false })
    .limit(limit);
    
  if (error) throw error;
  return data;
};
```

2. **Creating Custom React Query Hooks**:

```typescript
// Example: Creating a custom React Query hook for posts
// src/hooks/usePosts.ts
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';

export const usePosts = (options = {}) => {
  return useQuery({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select('*')
        .order('created_at', { ascending: false });
        
      if (error) throw error;
      return data;
    },
    ...options,
  });
};

export const usePost = (slug: string) => {
  return useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          category:category_id(name, slug),
          author:author_id(username, avatar_url)
        `)
        .eq('slug', slug)
        .single();
        
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
};

export const useCreatePost = () => {
  const queryClient = useQueryClient();
  
  return useMutation({
    mutationFn: async (newPost) => {
      const { data, error } = await supabase
        .from('posts')
        .insert([newPost])
        .select()
        .single();
        
      if (error) throw error;
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['posts'] });
    },
  });
};
```

3. **Implementing Real-time Subscriptions**:

```typescript
// Example: Setting up real-time subscriptions
// src/hooks/useRealtimeData.ts
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

export const useRealtimeData = (table: string, filter?: Record<string, any>) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Initial fetch
    const fetchData = async () => {
      try {
        setLoading(true);
        let query = supabase.from(table).select('*');
        
        // Apply filters if provided
        if (filter) {
          Object.entries(filter).forEach(([key, value]) => {
            query = query.eq(key, value);
          });
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        setData(data);
      } catch (err) {
        setError(err);
        console.error(`Error fetching ${table}:`, err);
      } finally {
        setLoading(false);
      }
    };
    
    fetchData();
    
    // Set up real-time subscription
    const subscription = supabase
      .channel(`${table}-changes`)
      .on('postgres_changes', { event: '*', schema: 'public', table }, (payload) => {
        switch (payload.eventType) {
          case 'INSERT':
            setData(prev => [...prev, payload.new]);
            break;
          case 'UPDATE':
            setData(prev => prev.map(item => item.id === payload.new.id ? payload.new : item));
            break;
          case 'DELETE':
            setData(prev => prev.filter(item => item.id !== payload.old.id));
            break;
        }
      })
      .subscribe();
      
    return () => {
      subscription.unsubscribe();
    };
  }, [table, JSON.stringify(filter)]);
  
  return { data, loading, error };
};
```

## 6. Backend Files & Customization

### Backend Structure Overview

The project uses Supabase as the backend service, which provides authentication, database, and storage capabilities. Here's a breakdown of the backend structure and customization options.

#### Supabase Integration Files

- **`/src/integrations/supabase/client.ts`**: Main Supabase client configuration
- **`/src/integrations/supabase/types.ts`**: TypeScript types for Supabase tables

### Database Connection

The database connection is handled through the Supabase client:

```typescript
// src/integrations/supabase/client.ts
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://bgsnxjdcmzezvvkzhddi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "your-key-here";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);
```

To modify the database connection:

1. Update the `SUPABASE_URL` and `SUPABASE_PUBLISHABLE_KEY` values for a different Supabase project
2. For local development, you can use environment variables:

```typescript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || "https://bgsnxjdcmzezvvkzhddi.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || "your-key-here";
```

### Authentication Service

Authentication is implemented using Supabase Auth:

```typescript
// Example authentication functions

// Sign up a new user
export const signUp = async (email: string, password: string) => {
  return await supabase.auth.signUp({
    email,
    password,
  });
};

// Sign in an existing user
export const signIn = async (email: string, password: string) => {
  return await supabase.auth.signInWithPassword({
    email,
    password,
  });
};

// Sign out the current user
export const signOut = async () => {
  return await supabase.auth.signOut();
};

// Get the current user session
export const getSession = async () => {
  return await supabase.auth.getSession();
};
```

To modify authentication behavior:

```typescript
// Example: Adding social login
export const signInWithGoogle = async () => {
  return await supabase.auth.signInWithOAuth({
    provider: 'google',
  });
};

// Example: Password reset
export const resetPassword = async (email: string) => {
  return await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: 'https://yourdomain.com/reset-password',
  });
};
```

### Row Level Security (RLS) Policies

Supabase uses PostgreSQL's Row Level Security (RLS) for data access control. These policies are defined in the Supabase dashboard, not in the client-side code.

Example RLS policies for a `posts` table:

```sql
-- Allow anyone to read published posts
CREATE POLICY "Public can view published posts" 
ON posts FOR SELECT 
USING (status = 'published');

-- Allow authenticated users to create posts
CREATE POLICY "Authenticated users can create posts" 
ON posts FOR INSERT 
TO authenticated 
WITH CHECK (auth.uid() = author_id);

-- Allow authors to update their own posts
CREATE POLICY "Authors can update their own posts" 
ON posts FOR UPDATE 
TO authenticated 
USING (auth.uid() = author_id);

-- Allow authors to delete their own posts
CREATE POLICY "Authors can delete their own posts" 
ON posts FOR DELETE 
TO authenticated 
USING (auth.uid() = author_id);
```

### Environment Variables Configuration

Environment variables can be configured for local development in a `.env` file:

```
VITE_SUPABASE_URL=https://your-project-id.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
VITE_API_URL=https://api.yourdomain.com
```

For production, set these variables in your hosting provider's environment settings.

## 7. Database Setup & Schema Details

### Database Overview

This project uses Supabase with PostgreSQL as the database. Below is a detailed overview of the database schema and setup process.

### Database Schema

The database consists of the following tables:

#### 1. profiles

Stores user profile information linked to Supabase Auth.

```sql
CREATE TABLE public.profiles (
  id UUID NOT NULL PRIMARY KEY REFERENCES auth.users,
  username TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  role USER-DEFINED NOT NULL DEFAULT 'editor'::user_role
);
```

#### 2. posts

Stores blog posts.

```sql
CREATE TABLE public.posts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  excerpt TEXT,
  featured_image TEXT,
  og_image TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  status TEXT NOT NULL DEFAULT 'draft'::text,
  author_id UUID NOT NULL REFERENCES public.profiles(id),
  category_id UUID REFERENCES public.categories(id),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 3. categories

Stores blog post categories.

```sql
CREATE TABLE public.categories (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 4. tags

Stores tags for blog posts.

```sql
CREATE TABLE public.tags (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 5. post_tags

Junction table for many-to-many relationship between posts and tags.

```sql
CREATE TABLE public.post_tags (
  post_id UUID NOT NULL REFERENCES public.posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES public.tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);
```

#### 6. contacts

Stores contact form submissions.

```sql
CREATE TABLE public.contacts (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending'::text,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

#### 7. subscribers

Stores newsletter subscribers.

```sql
CREATE TABLE public.subscribers (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  confirmation_token TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);
```

### Setting Up the Database

#### Using Supabase UI

1. Create a Supabase account at [supabase.com](https://supabase.com)
2. Create a new project
3. Go to the SQL Editor in the Supabase dashboard
4. Run the SQL scripts to create the tables and relationships
5. Set up Row Level Security (RLS) policies for each table

#### Using Supabase CLI

1. Install the Supabase CLI:
   ```bash
   npm install -g supabase
   ```

2. Initialize Supabase in your project:
   ```bash
   supabase init
   ```

3. Start a local Supabase instance:
   ```bash
   supabase start
   ```

4. Create migration files:
   ```bash
   supabase migration new create_initial_schema
   ```

5. Add your SQL to the migration file in `supabase/migrations/`

6. Apply migrations:
   ```bash
   supabase db push
   ```

### Switching to a Different Database

While Supabase uses PostgreSQL, you can switch to a self-hosted PostgreSQL or MySQL instance:

#### Option 1: Self-hosted PostgreSQL

1. Set up a PostgreSQL server (AWS RDS, DigitalOcean, etc.)
2. Create the database schema using the SQL scripts
3. Use a PostgreSQL client library like `pg` or `postgres` in Node.js:

```typescript
// Example: Direct PostgreSQL connection
import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.PGUSER,
  host: process.env.PGHOST,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: parseInt(process.env.PGPORT || '5432')
});

export const query = (text, params) => pool.query(text, params);
```

#### Option 2: MySQL

1. Set up a MySQL server
2. Convert the PostgreSQL schema to MySQL syntax
3. Use a MySQL client library like `mysql2` in Node.js:

```typescript
// Example: MySQL connection
import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export const query = async (sql, params) => {
  const [rows] = await pool.execute(sql, params);
  return rows;
};
```

### PostgreSQL to MySQL Schema Conversion

Here's a simplified example of converting the PostgreSQL schema to MySQL:

```sql
-- MySQL version of posts table
CREATE TABLE posts (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  title TEXT NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content JSON NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  og_image TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  status VARCHAR(50) NOT NULL DEFAULT 'draft',
  author_id CHAR(36) NOT NULL,
  category_id CHAR(36),
  published_at DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES profiles(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);
```

Key differences to consider when migrating from PostgreSQL to MySQL:

1. Replace `UUID` with `CHAR(36)` and use MySQL's `UUID()` function
2. Replace `TIMESTAMP WITH TIME ZONE` with `DATETIME`
3. Replace `JSONB` with `JSON`
4. Use `ON UPDATE CURRENT_TIMESTAMP` for automatic updates
5. MySQL doesn't support custom types (USER-DEFINED), so use `ENUM` or `VARCHAR`

## 8. Import/Export Structure

### Import Structure Overview

The project follows a well-organized import structure to maintain code readability and modularity. Here's a breakdown of the import patterns used throughout the project:

#### Component Imports

```typescript
// Import UI components from shadcn/ui
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// Import custom components
import NavBarWithDropdowns from "@/components/NavBarWithDropdowns";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
```

#### Utility and Hook Imports

```typescript
// Import utilities
import { cn } from "@/lib/utils";

// Import hooks
import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useQuery, useMutation } from "@tanstack/react-query";
```

#### Integration Imports

```typescript
// Import Supabase client
import { supabase } from "@/integrations/supabase/client";

// Import types
import type { Database } from "@/integrations/supabase/types";
```

#### Icon and Animation Imports

```typescript
// Import Lucide icons
import { ChevronDown, Home, User, Settings, LogOut } from "lucide-react";

// Import Framer Motion
import { motion, AnimatePresence } from "framer-motion";
```

### Export Patterns

The project uses both default and named exports:

```typescript
// Default export (one per file)
const ComponentName = () => {
  // Component implementation
};

export default ComponentName;

// Named exports (multiple per file)
export const utilityFunction = () => {
  // Function implementation
};

export interface ComponentProps {
  // Props definition
}
```

### Import Path Aliases

The project uses TypeScript path aliases to simplify imports:

```typescript
// tsconfig.json
{
  "compilerOptions": {
    "paths": {
      "@/*": ["./src/*"]
    }
  }
}

// vite.config.ts
export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
```

### Common Import Paths

Here's a list of common import paths used in the project:

#### Component Imports

- UI Components: `@/components/ui/[component-name]`
- Layout Components: `@/components/[component-name]`
- Page Components: `@/pages/[page-name]`
- Admin Components: `@/components/admin/[component-name]`

#### Utility Imports

- Utility Functions: `@/lib/utils`
- Types: `@/types/*`
- Constants: `@/constants/*`

#### Integration Imports

- Supabase Client: `@/integrations/supabase/client`
- Supabase Types: `@/integrations/supabase/types`

### Adding New Import Paths

To add new import paths:

1. Create the new directory or file
2. Use the established import pattern
3. Update path aliases in `tsconfig.json` if needed
4. Update Vite aliases in `vite.config.ts` if needed

### Special Import Configurations

Some modules require special import configurations:

#### CSS/SCSS Imports

```typescript
// Global styles
import '@/index.css';

// Component-specific styles
import '@/styles/specific-component.css';
```

#### Image/Asset Imports

```typescript
// Static image imports
import logo from '@/assets/logo.svg';

// Dynamic image imports (for Vite)
const imagePath = new URL('@/assets/image.jpg', import.meta.url).href;
```

#### Environment Variable Imports

```typescript
// Environment variables with Vite
const apiKey = import.meta.env.VITE_API_KEY;
```

## 9. Routes & Navigation Structure

### Routing System Overview

The project uses React Router (v6) for client-side routing. The routing configuration is centralized in the `App.tsx` file, with additional nested routes in the admin dashboard.

### Main Routes Configuration

```tsx
// src/App.tsx
const AppRoutes = () => {
  return (
    <>
      <NavBarWithDropdowns />
      <ScrollToTop />
      <PageTransition>
        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/features" element={<Features />} />
          <Route path="/how-it-works" element={<HowItWorksPage />} />
          <Route path="/sectors" element={<Sectors />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/achievements" element={<AchievementsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/solutions" element={<Solutions />} />
          <Route path="/products" element={<Products />} />

          {/* Admin Routes */}
          <Route path="/admin-login" element={<AdminLogin />} />
          <Route path="/admin-panel" element={<Navigate to="/admin-panel/dashboard" replace />} />
          <Route path="/admin-panel/*" element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } />
          
          {/* 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </PageTransition>
    </>
  );
};
```

### Nested Routes (Admin Dashboard)

```tsx
// src/pages/AdminDashboard.tsx
const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <AdminSidebar />
      <div className="admin-content">
        <Routes>
          <Route path="/dashboard" element={<Overview />} />
          <Route path="/blog" element={<BlogManagement />} />
          <Route path="/blog/new" element={<CreateBlogPost />} />
          <Route path="/blog/edit/:id" element={<EditBlogPost />} />
          <Route path="/contacts" element={<ContactLeads />} />
          <Route path="/newsletter" element={<Newsletter />} />
          <Route path="/users" element={<UserManagement />} />
          <Route path="/account" element={<AccountSettings />} />
          <Route path="*" element={<Navigate to="/admin-panel/dashboard" replace />} />
        </Routes>
      </div>
    </div>
  );
};
```

### Protected Routes

The project uses a `ProtectedRoute` component to secure admin routes:

```tsx
// Protected Route Component
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const [session, setSession] = useState<Session | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSession = async () => {
      const { data } = await supabase.auth.getSession();
      setSession(data.session);
      setLoading(false);
    };

    getSession();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setSession(session);
      }
    );

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!session) {
    return <Navigate to="/admin-login" />;
  }

  return <>{children}</>;
};
```

### Route Transitions

The project uses Framer Motion for smooth page transitions:

```tsx
// Page transition component
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};
```

### Navigation Components

The project has several navigation components:

1. `NavBarWithDropdowns`: Main navigation with dropdowns
2. `AdminSidebar`: Sidebar navigation for admin panel

### Adding New Routes

To add a new route:

1. Create the new page component in `/src/pages/`
2. Import the component in `App.tsx`
3. Add the route to the `Routes` component

```tsx
// Example: Adding a new FAQ page
import FAQPage from "./pages/FAQPage";

// In the Routes component
<Route path="/faq" element={<FAQPage />} />
```

### Navigation Links

Navigation links in `NavBarWithDropdowns` are configured through the `navItems` array:

```tsx
const navItems: NavItem[] = [
  { 
    name: "Home", 
    href: "/", 
    icon: Home 
  },
  { 
    name: "About", 
    href: "/about", 
    icon: User 
  },
  { 
    name: "Products & Tech", 
    href: "/products", 
    icon: Server,
    dropdown: [
      { name: "Technology", href: "/technology" },
      { name: "Products", href: "/products" },
      { name: "Features", href: "/features" },
      { name: "How It Works", href: "/how-it-works" },
    ]
  },
  // Other navigation items...
];
```

### Dynamic Routes

The project uses URL parameters for dynamic routes:

```tsx
// Blog post route with dynamic slug parameter
<Route path="/blog/:slug" element={<BlogPost />} />

// In the BlogPost component
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { slug } = useParams();
  
  // Fetch post data using the slug parameter
  const { data: post, isLoading, error } = useQuery({
    queryKey: ['post', slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('posts')
        .select(`
          *,
          category:category_id(name, slug),
          author:author_id(username, avatar_url)
        `)
        .eq('slug', slug)
        .single();
        
      if (error) throw error;
      return data;
    },
    enabled: !!slug,
  });
  
  // Render post content
};
```

## 10. Contact Us Form - Submission Details & Customization

### Contact Form Overview

The contact form allows visitors to send inquiries that are stored in the Supabase database.

#### Form Location

- **Component Path**: `/src/components/ContactForm.tsx`
- **Used in**: `/src/pages/ContactPage.tsx`
- **Database Table**: `contacts`

### Form Structure

The contact form has the following fields:

1. **Name**: Full name of the inquirer (required)
2. **Email**: Email address for replies (required with validation)
3. **Subject**: Topic of the inquiry (required)
4. **Message**: Detailed message (required)

```tsx
// Basic structure of ContactForm.tsx
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { supabase } from "@/integrations/supabase/client";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [formErrors, setFormErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const { toast } = useToast();

  // Form handling logic...

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
    </form>
  );
};
```

### Form Submission Process

The form submits data to the Supabase `contacts` table:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validate the form
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }
  
  setSubmitting(true);
  
  try {
    // Submit to Supabase
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
          status: 'pending' // Default status for new submissions
        }
      ]);
    
    if (error) throw error;
    
    // Show success message
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
    });
    
    // Reset the form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: ""
    });
    setFormErrors({});
    
  } catch (error) {
    console.error("Error submitting form:", error);
    toast({
      variant: "destructive",
      title: "Submission failed",
      description: "Please try again later.",
    });
  } finally {
    setSubmitting(false);
  }
};
```

### Form Validation

The form includes client-side validation:

```tsx
const validateForm = () => {
  const errors: FormErrors = {};
  
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }
  
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  if (!formData.subject.trim()) {
    errors.subject = "Subject is required";
  }
  
  if (!formData.message.trim()) {
    errors.message = "Message is required";
  } else if (formData.message.trim().length < 10) {
    errors.message = "Message must be at least 10 characters";
  }
  
  return errors;
};
```

### Customizing the Contact Form

#### 1. Adding New Fields

To add new fields to the contact form:

```tsx
// Step 1: Update the FormData interface
interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  phone: string; // New field
  company: string; // New field
}

// Step 2: Update the initial state
const [formData, setFormData] = useState<FormData>({
  name: "",
  email: "",
  subject: "",
  message: "",
  phone: "", // New field
  company: "" // New field
});

// Step 3: Add the new form fields in the JSX
<div className="space-y-2">
  <Label htmlFor="phone">Phone Number</Label>
  <Input
    id="phone"
    name="phone"
    type="tel"
    placeholder="Your phone number"
    value={formData.phone}
    onChange={handleChange}
    className={formErrors.phone ? "border-red-500" : ""}
  />
  {formErrors.phone && (
    <p className="text-sm text-red-500">{formErrors.phone}</p>
  )}
</div>

<div className="space-y-2">
  <Label htmlFor="company">Company</Label>
  <Input
    id="company"
    name="company"
    type="text"
    placeholder="Your company name"
    value={formData.company}
    onChange={handleChange}
    className={formErrors.company ? "border-red-500" : ""}
  />
  {formErrors.company && (
    <p className="text-sm text-red-500">{formErrors.company}</p>
  )}
</div>

// Step 4: Update the validation function
const validateForm = () => {
  const errors: FormErrors = {};
  
  // Existing validation rules...
  
  // Add validation for new fields if needed
  if (formData.phone && !/^\d{10}$/.test(formData.phone)) {
    errors.phone = "Please enter a valid 10-digit phone number";
  }
  
  return errors;
};

// Step 5: Update the Supabase insert operation
const { error } = await supabase
  .from('contacts')
  .insert([
    {
      name: formData.name,
      email: formData.email,
      subject: formData.subject,
      message: formData.message,
      phone: formData.phone, // New field
      company: formData.company, // New field
      status: 'pending'
    }
  ]);
```

#### 2. Updating the Database Schema

Don't forget to update the Supabase database schema to include the new fields:

```sql
-- Add new columns to the contacts table
ALTER TABLE public.contacts 
ADD COLUMN phone TEXT,
ADD COLUMN company TEXT;
```

#### 3. Customizing Form Layout

To change the form layout:

```tsx
// Example: Changing to a two-column layout
<form onSubmit={handleSubmit} className="space-y-6">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    <div className="space-y-2">
      <Label htmlFor="name">Name</Label>
      {/* Name input */}
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="email">Email</Label>
      {/* Email input */}
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="phone">Phone</Label>
      {/* Phone input */}
    </div>
    
    <div className="space-y-2">
      <Label htmlFor="company">Company</Label>
      {/* Company input */}
    </div>
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="subject">Subject</Label>
    {/* Subject input */}
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="message">Message</Label>
    {/* Message textarea */}
  </div>
  
  <Button type="submit" disabled={submitting}>
    {submitting ? "Sending..." : "Send Message"}
  </Button>
</form>
```

#### 4. Adding File Attachments

To allow file attachments:

```tsx
// Step 1: Update the FormData interface
interface FormData {
  // Existing fields...
  file: File | null;
}

// Step 2: Update the initial state
const [formData, setFormData] = useState<FormData>({
  // Existing fields...
  file: null
});

// Step 3: Add file input handling
const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  if (e.target.files && e.target.files[0]) {
    setFormData({
      ...formData,
      file: e.target.files[0]
    });
  }
};

// Step 4: Add the file input field
<div className="space-y-2">
  <Label htmlFor="file">Attachment</Label>
  <Input
    id="file"
    type="file"
    onChange={handleFileChange}
    className={formErrors.file ? "border-red-500" : ""}
  />
  {formErrors.file && (
    <p className="text-sm text-red-500">{formErrors.file}</p>
  )}
</div>

// Step 5: Update the form submission to handle the file
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  // Validation...
  
  setSubmitting(true);
  
  try {
    // Upload file to storage if present
    let fileUrl = null;
    
    if (formData.file) {
      const fileName = `${Date.now()}_${formData.file.name}`;
      
      const { data: fileData, error: fileError } = await supabase.storage
        .from('contact_attachments')
        .upload(fileName, formData.file);
      
      if (fileError) throw fileError;
      
      fileUrl = supabase.storage.from('contact_attachments').getPublicUrl(fileName).data.publicUrl;
    }
    
    // Insert contact form data with file URL
    const { error } = await supabase
      .from('contacts')
      .insert([
        {
          // Existing fields...
          attachment_url: fileUrl
        }
      ]);
    
    // Rest of the function...
  } catch (error) {
    // Error handling...
  }
};
```

#### 5. Adding reCAPTCHA

To add Google reCAPTCHA protection:

```tsx
// Step 1: Install reCAPTCHA
// npm install react-google-recaptcha

// Step 2: Import and use the component
import ReCAPTCHA from "react-google-recaptcha";

const ContactForm = () => {
  // Existing state...
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  
  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };
  
  const validateForm = () => {
    const errors: FormErrors = {};
    
    // Existing validation...
    
    if (!recaptchaToken) {
      errors.recaptcha = "Please complete the reCAPTCHA";
    }
    
    return errors;
  };
  
  // In the form JSX
  <div className="mt-4">
    <ReCAPTCHA
      sitekey="your-recaptcha-site-key"
      onChange={handleRecaptchaChange}
    />
    {formErrors.recaptcha && (
      <p className="text-sm text-red-500 mt-1">{formErrors.recaptcha}</p>
    )}
  </div>
  
  // In the form submission
  // Include the recaptchaToken in your server verification
};
```

## 11. Blog System & CMS Customization

### Blog System Overview

The blog system in this project uses Supabase as the backend for storing and retrieving blog posts. The content is stored in a structured format using JSON for maximum flexibility.

### Blog Data Structure

Blog posts are stored in the `posts` table with the following structure:

- `id`: Unique identifier (UUID)
- `title`: Post title
- `slug`: URL-friendly title for routing
- `content`: Post content in JSON format
- `excerpt`: Short summary for previews
- `featured_image`: Featured image URL
- `og_image`: Open Graph image URL for social sharing
- `seo_title`: SEO-optimized title
- `seo_description`: SEO meta description
- `seo_keywords`: SEO keywords
- `status`: Publication status ('draft', 'published')
- `author_id`: Reference to user profile
- `category_id`: Reference to category
- `published_at`: Publication timestamp
- `created_at`: Creation timestamp
- `updated_at`: Last update timestamp

### Blog Components

1. **Blog Listing Page**: `/src/pages/BlogPage.tsx`
   - Displays a list of published blog posts
   - Includes filtering and pagination

2. **Single Blog Post Page**: `/src/pages/BlogPost.tsx`
   - Displays a single blog post using the URL slug
   - Includes author info, publication date, and related posts

3. **Blog Management**: `/src/components/admin/BlogManagement.tsx`
   - Admin interface for managing blog posts
   - Lists all posts with status, edit and delete options

4. **Blog Post Editor**: `/src/components/admin/CreateBlogPost.tsx` and `/src/components/admin/EditBlogPost.tsx`
   - Rich text editor for creating and editing posts
   - Metadata fields for SEO and social sharing

### Post Content Editor

The blog system uses Tiptap as the rich text editor:

```tsx
// Example of the TipTap editor implementation
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Underline from '@tiptap/extension-underline';
import Link from '@tiptap/extension-link';
import Image from '@tiptap/extension-image';
import TextAlign from '@tiptap/extension-text-align';
import TextStyle from '@tiptap/extension-text-style';
import Color from '@tiptap/extension-color';

const BlogEditor = ({ content, onChange }) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link.configure({
        openOnClick: false,
      }),
      Image,
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      TextStyle,
      Color,
    ],
    content: content,
    onUpdate: ({ editor }) => {
      onChange(editor.getJSON());
    },
  });
  
  return (
    <div className="blog-editor">
      <div className="editor-toolbar">
        {/* Toolbar buttons */}
      </div>
      <EditorContent editor={editor} />
    </div>
  );
};
```

### Blog Post Retrieval

The blog system retrieves posts using the Supabase client:

```tsx
// Example of fetching blog posts
const fetchPosts = async ({ pageParam = 0 }) => {
  const PAGE_SIZE = 10;
  
  const { data, error, count } = await supabase
    .from('posts')
    .select(`
      *,
      author:profiles(*),
      category:categories(*)
    `, { count: 'exact' })
    .eq('status', 'published')
    .order('published_at', { ascending: false })
    .range(pageParam * PAGE_SIZE, (pageParam + 1) * PAGE_SIZE - 1);
  
  if (error) throw error;
  
  return {
    posts: data,
    totalCount: count || 0,
    nextPage: data.length === PAGE_SIZE ? pageParam + 1 : undefined,
  };
};

// Using React Query for data fetching
const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
  queryKey: ['published-posts'],
  queryFn: fetchPosts,
  getNextPageParam: (lastPage) => lastPage.nextPage,
});
```

### Customizing the Blog System

#### 1. Switching to a Different Editor

To replace Tiptap with a different editor like Quill:

```tsx
// Step 1: Install Quill
// npm install react-quill

// Step 2: Create a new QuillEditor component
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const QuillEditor = ({ content, onChange }) => {
  const modules = {
    toolbar: [
      [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
      ['bold', 'italic', 'underline', 'strike'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],
      [{ 'color': [] }, { 'background': [] }],
      ['link', 'image'],
      ['clean']
    ],
  };
  
  return (
    <ReactQuill
      theme="snow"
      value={content}
      onChange={onChange}
      modules={modules}
      className="h-96"
    />
  );
};

// Step 3: Replace the TipTap editor with Quill in your component
// In CreateBlogPost.tsx and EditBlogPost.tsx
import QuillEditor from '@/components/QuillEditor';

// Replace
<BlogEditor content={postData.content} onChange={handleContentChange} />

// With
<QuillEditor 
  content={typeof postData.content === 'object' ? JSON.stringify(postData.content) : postData.content} 
  onChange={(value) => handleContentChange(value)} 
/>

// Step 4: Update content handling functions
const handleContentChange = (value) => {
  setPostData({
    ...postData,
    content: value
  });
};

// Also update the Supabase save function to handle the new format
```

#### 2. Implementing Categories and Tags

To enhance the categorization system:

```tsx
// Step 1: Create a CategorySelector component
const CategorySelector = ({ value, onChange }) => {
  const { data: categories, isLoading } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('categories')
        .select('*')
        .order('name');
        
      if (error) throw error;
      return data;
    }
  });
  
  if (isLoading) return <div>Loading categories...</div>;
  
  return (
    <Select value={value} onValueChange={onChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="">No category</SelectItem>
        {categories?.map((category) => (
          <SelectItem key={category.id} value={category.id}>
            {category.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

// Step 2: Create a TagSelector component with multi-select
const TagSelector = ({ selectedTags, onChange }) => {
  const { data: tags, isLoading } = useQuery({
    queryKey: ['tags'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('tags')
        .select('*')
        .order('name');
        
      if (error) throw error;
      return data;
    }
  });
  
  if (isLoading) return <div>Loading tags...</div>;
  
  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2 mb-2">
        {selectedTags.map((tagId) => {
          const tag = tags?.find(t => t.id === tagId);
          return tag ? (
            <Badge key={tag.id} variant="outline" className="flex items-center gap-1">
              {tag.name}
              <Button
                size="sm"
                variant="ghost"
                className="h-4 w-4 p-0 hover:bg-transparent"
                onClick={() => {
                  onChange(selectedTags.filter(id => id !== tag.id));
                }}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ) : null;
        })}
      </div>
      <Select
        onValueChange={(value) => {
          if (!selectedTags.includes(value)) {
            onChange([...selectedTags, value]);
          }
        }}
      >
        <SelectTrigger>
          <SelectValue placeholder="Add tags" />
        </SelectTrigger>
        <SelectContent>
          {tags?.map((tag) => (
            <SelectItem key={tag.id} value={tag.id}>
              {tag.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
};

// Step 3: Use these components in the blog editor
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
  <div className="space-y-2">
    <Label htmlFor="category">Category</Label>
    <CategorySelector
      value={postData.category_id || ""}
      onChange={(value) => {
        setPostData({
          ...postData,
          category_id: value || null
        });
      }}
    />
  </div>
  
  <div className="space-y-2">
    <Label htmlFor="tags">Tags</Label>
    <TagSelector
      selectedTags={selectedTags}
      onChange={setSelectedTags}
    />
  </div>
</div>

// Step 4: Handle saving tags relationship in the post save function
const savePost = async () => {
  // First save the post
  const { data: post, error: postError } = await supabase
    .from('posts')
    .insert([postData])
    .select()
    .single();
  
  if (postError) throw postError;
  
  // Then save the tags relationships
  if (selectedTags.length > 0) {
    const tagRelationships = selectedTags.map(tagId => ({
      post_id: post.id,
      tag_id: tagId
    }));
    
    const { error: tagError } = await supabase
      .from('post_tags')
      .insert(tagRelationships);
      
    if (tagError) throw tagError;
  }
  
  return post;
};
```

#### 3. Implementing a Custom Content Format

To implement a custom content structure:

```tsx
// Example: Creating a structured content format with sections
interface Section {
  type: 'text' | 'image' | 'quote' | 'code' | 'video';
  content: any;
  metadata?: Record<string, any>;
}

interface PostContent {
  sections: Section[];
  version: string;
}

// Custom editor that handles structured content
const StructuredEditor = ({ content, onChange }) => {
  const [sections, setSections] = useState<Section[]>(
    content?.sections || [{ type: 'text', content: '' }]
  );
  
  const addSection = (type: Section['type']) => {
    const newSection: Section = { type, content: '' };
    setSections([...sections, newSection]);
    onChange({ sections: [...sections, newSection], version: '1.0' });
  };
  
  const updateSection = (index: number, updatedSection: Section) => {
    const updatedSections = [...sections];
    updatedSections[index] = updatedSection;
    setSections(updatedSections);
    onChange({ sections: updatedSections, version: '1.0' });
  };
  
  const removeSection = (index: number) => {
    const updatedSections = sections.filter((_, i) => i !== index);
    setSections(updatedSections);
    onChange({ sections: updatedSections, version: '1.0' });
  };
  
  return (
    <div className="structured-editor">
      {sections.map((section, index) => (
        <div key={index} className="section-wrapper">
          <div className="section-tools">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => removeSection(index)}
            >
              <Trash className="h-4 w-4" />
            </Button>
          </div>
          
          {section.type === 'text' && (
            <TipTap
              content={section.content}
              onChange={(value) => updateSection(index, { ...section, content: value })}
            />
          )}
          
          {section.type === 'image' && (
            <ImageUploader
              value={section.content}
              onChange={(url) => updateSection(index, { ...section, content: url })}
            />
          )}
          
          {/* Add other section type editors */}
        </div>
      ))}
      
      <div className="add-section">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">Add Section</Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem onClick={() => addSection('text')}>
              Text
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addSection('image')}>
              Image
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addSection('quote')}>
              Quote
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addSection('code')}>
              Code
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => addSection('video')}>
              Video
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};
```

#### 4. Switching to a Headless CMS

To integrate with a headless CMS like Strapi:

```tsx
// Step 1: Install the Strapi SDK
// npm install @strapi/sdk

// Step 2: Create a Strapi client
// src/integrations/strapi/client.ts
import { Strapi } from '@strapi/sdk';

const STRAPI_URL = import.meta.env.VITE_STRAPI_URL || 'http://localhost:1337';
const STRAPI_TOKEN = import.meta.env.VITE_STRAPI_API_TOKEN;

export const strapi = new Strapi({
  url: STRAPI_URL,
  axiosOptions: {
    headers: {
      Authorization: `Bearer ${STRAPI_TOKEN}`,
    },
  },
});

// Helper functions
export const getPosts = async (params = {}) => {
  return await strapi.find('api::post.post', {
    populate: ['author', 'category', 'tags', 'featuredImage'],
    ...params,
  });
};

export const getPost = async (slug) => {
  return await strapi.findOne('api::post.post', slug, {
    populate: ['author', 'category', 'tags', 'featuredImage'],
  });
};

// Step 3: Update the blog components to use Strapi instead of Supabase
// In BlogPage.tsx
import { getPosts } from '@/integrations/strapi/client';

const BlogPage = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ['blog-posts'],
    queryFn: () => getPosts({ sort: ['publishedAt:desc'] })
  });
  
  // Rest of the component...
};

// Step 4: Update the admin components for Strapi
// This would involve using the Strapi admin UI directly or building
// a custom admin interface that uses the Strapi API
```

## 12. Switching to MySQL/PostgreSQL - Setup Guide

### Overview

This project currently uses Supabase with PostgreSQL as the backend. If you want to switch to a self-hosted MySQL or PostgreSQL database, follow this guide.

### PostgreSQL Setup

#### 1. Setting Up a PostgreSQL Server

You can set up PostgreSQL in several ways:

- **Local Installation**: Install PostgreSQL on your local machine
- **Cloud Provider**: Set up PostgreSQL on AWS RDS, DigitalOcean, or Google Cloud
- **Docker**: Run PostgreSQL in a Docker container

Example Docker setup:

```bash
# Run PostgreSQL in Docker
docker run --name tensor-dynamics-db -e POSTGRES_PASSWORD=yourpassword -p 5432:5432 -d postgres:14
```

#### 2. Database Schema Setup

Create the database schema using the following SQL script:

```sql
-- Create the database
CREATE DATABASE tensor_dynamics;

-- Connect to the database
\c tensor_dynamics

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'editor');

-- Create the profiles table
CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  username TEXT,
  avatar_url TEXT,
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  role user_role NOT NULL DEFAULT 'editor'
);

-- Create the categories table
CREATE TABLE categories (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create the tags table
CREATE TABLE tags (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create the posts table
CREATE TABLE posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  slug TEXT NOT NULL UNIQUE,
  content JSONB NOT NULL DEFAULT '{}'::jsonb,
  excerpt TEXT,
  featured_image TEXT,
  og_image TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  status TEXT NOT NULL DEFAULT 'draft',
  author_id UUID NOT NULL REFERENCES profiles(id),
  category_id UUID REFERENCES categories(id),
  published_at TIMESTAMP WITH TIME ZONE,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create the post_tags junction table
CREATE TABLE post_tags (
  post_id UUID NOT NULL REFERENCES posts(id) ON DELETE CASCADE,
  tag_id UUID NOT NULL REFERENCES tags(id) ON DELETE CASCADE,
  PRIMARY KEY (post_id, tag_id)
);

-- Create the contacts table
CREATE TABLE contacts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create the subscribers table
CREATE TABLE subscribers (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  confirmation_token TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create update_timestamp function
CREATE OR REPLACE FUNCTION update_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at timestamps
CREATE TRIGGER update_profiles_timestamp
BEFORE UPDATE ON profiles
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_categories_timestamp
BEFORE UPDATE ON categories
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_tags_timestamp
BEFORE UPDATE ON tags
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_posts_timestamp
BEFORE UPDATE ON posts
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_contacts_timestamp
BEFORE UPDATE ON contacts
FOR EACH ROW EXECUTE FUNCTION update_timestamp();

CREATE TRIGGER update_subscribers_timestamp
BEFORE UPDATE ON subscribers
FOR EACH ROW EXECUTE FUNCTION update_timestamp();
```

#### 3. Database Connection Setup

Install the PostgreSQL client for Node.js:

```bash
npm install pg
```

Create a database connection file:

```typescript
// src/lib/db.ts
import { Pool } from 'pg';

const pool = new Pool({
  user: import.meta.env.VITE_PGUSER || 'postgres',
  host: import.meta.env.VITE_PGHOST || 'localhost',
  database: import.meta.env.VITE_PGDATABASE || 'tensor_dynamics',
  password: import.meta.env.VITE_PGPASSWORD || 'yourpassword',
  port: parseInt(import.meta.env.VITE_PGPORT || '5432')
});

export const query = async (text: string, params?: any[]) => {
  try {
    const result = await pool.query(text, params);
    return result;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};
```

#### 4. Creating API Services

Create service files for each entity:

```typescript
// src/services/posts.ts
import { query } from '@/lib/db';

export interface Post {
  id: string;
  title: string;
  slug: string;
  content: any;
  excerpt: string | null;
  featured_image: string | null;
  status: string;
  author_id: string;
  category_id: string | null;
  published_at: string | null;
  created_at: string;
  updated_at: string;
}

export const getPosts = async () => {
  const result = await query(`
    SELECT p.*, 
           c.name as category_name, 
           c.slug as category_slug,
           pr.username as author_name,
           pr.avatar_url as author_avatar
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN profiles pr ON p.author_id = pr.id
    WHERE p.status = 'published'
    ORDER BY p.published_at DESC
  `);
  
  return result.rows;
};

export const getPostBySlug = async (slug: string) => {
  const result = await query(`
    SELECT p.*, 
           c.name as category_name, 
           c.slug as category_slug,
           pr.username as author_name,
           pr.avatar_url as author_avatar
    FROM posts p
    LEFT JOIN categories c ON p.category_id = c.id
    LEFT JOIN profiles pr ON p.author_id = pr.id
    WHERE p.slug = $1
  `, [slug]);
  
  return result.rows[0] || null;
};

export const createPost = async (post: Omit<Post, 'id' | 'created_at' | 'updated_at'>) => {
  const result = await query(`
    INSERT INTO posts 
    (title, slug, content, excerpt, featured_image, status, author_id, category_id, published_at)
    VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)
    RETURNING *
  `, [
    post.title,
    post.slug,
    post.content,
    post.excerpt,
    post.featured_image,
    post.status,
    post.author_id,
    post.category_id,
    post.published_at
  ]);
  
  return result.rows[0];
};

// Add other CRUD operations...
```

#### 5. Creating API Endpoints

If you want to create a backend API, you can use Express.js:

```bash
npm install express cors body-parser
```

Create an API server:

```typescript
// src/server/index.ts
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import * as postsService from './services/posts';
import * as categoriesService from './services/categories';
// Import other services...

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(bodyParser.json());

// Posts API
app.get('/api/posts', async (req, res) => {
  try {
    const posts = await postsService.getPosts();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch posts' });
  }
});

app.get('/api/posts/:slug', async (req, res) => {
  try {
    const post = await postsService.getPostBySlug(req.params.slug);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch post' });
  }
});

app.post('/api/posts', async (req, res) => {
  try {
    const post = await postsService.createPost(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create post' });
  }
});

// Add other API endpoints...

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
```

#### 6. Updating Frontend Services

Update your frontend API services to use the new endpoints:

```typescript
// src/services/api.ts
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';

export const fetchPosts = async () => {
  const response = await fetch(`${API_URL}/posts`);
  if (!response.ok) {
    throw new Error('Failed to fetch posts');
  }
  return await response.json();
};

export const fetchPostBySlug = async (slug: string) => {
  const response = await fetch(`${API_URL}/posts/${slug}`);
  if (!response.ok) {
    throw new Error('Failed to fetch post');
  }
  return await response.json();
};

export const createPost = async (post: any) => {
  const response = await fetch(`${API_URL}/posts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(post),
  });
  
  if (!response.ok) {
    throw new Error('Failed to create post');
  }
  
  return await response.json();
};

// Add other API functions...
```

### MySQL Setup

#### 1. Setting Up a MySQL Server

You can set up MySQL in several ways:

- **Local Installation**: Install MySQL on your local machine
- **Cloud Provider**: Set up MySQL on AWS RDS, DigitalOcean, or Google Cloud
- **Docker**: Run MySQL in a Docker container

Example Docker setup:

```bash
# Run MySQL in Docker
docker run --name tensor-dynamics-mysql -e MYSQL_ROOT_PASSWORD=yourpassword -e MYSQL_DATABASE=tensor_dynamics -p 3306:3306 -d mysql:8.0
```

#### 2. Database Schema Setup

Create the database schema using the following SQL script:

```sql
-- Create the database
CREATE DATABASE IF NOT EXISTS tensor_dynamics;

-- Use the database
USE tensor_dynamics;

-- Create the profiles table
CREATE TABLE profiles (
  id CHAR(36) NOT NULL PRIMARY KEY,
  username VARCHAR(255),
  avatar_url TEXT,
  role ENUM('admin', 'editor') NOT NULL DEFAULT 'editor',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the categories table
CREATE TABLE categories (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  description TEXT,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the tags table
CREATE TABLE tags (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the posts table
CREATE TABLE posts (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  slug VARCHAR(255) NOT NULL UNIQUE,
  content JSON NOT NULL,
  excerpt TEXT,
  featured_image TEXT,
  og_image TEXT,
  seo_title TEXT,
  seo_description TEXT,
  seo_keywords TEXT,
  status VARCHAR(50) NOT NULL DEFAULT 'draft',
  author_id CHAR(36) NOT NULL,
  category_id CHAR(36),
  published_at DATETIME,
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES profiles(id),
  FOREIGN KEY (category_id) REFERENCES categories(id)
);

-- Create the post_tags junction table
CREATE TABLE post_tags (
  post_id CHAR(36) NOT NULL,
  tag_id CHAR(36) NOT NULL,
  PRIMARY KEY (post_id, tag_id),
  FOREIGN KEY (post_id) REFERENCES posts(id) ON DELETE CASCADE,
  FOREIGN KEY (tag_id) REFERENCES tags(id) ON DELETE CASCADE
);

-- Create the contacts table
CREATE TABLE contacts (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  subject VARCHAR(255) NOT NULL,
  message TEXT NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create the subscribers table
CREATE TABLE subscribers (
  id CHAR(36) NOT NULL DEFAULT (UUID()) PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE,
  confirmed BOOLEAN NOT NULL DEFAULT false,
  confirmation_token VARCHAR(255),
  created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
```

#### 3. Database Connection Setup

Install the MySQL client for Node.js:

```bash
npm install mysql2
```

Create a database connection file:

```typescript
// src/lib/db.ts
import mysql from 'mysql2/promise';

const createPool = () => {
  return mysql.createPool({
    host: import.meta.env.VITE_MYSQL_HOST || 'localhost',
    user: import.meta.env.VITE_MYSQL_USER || 'root',
    password: import.meta.env.VITE_MYSQL_PASSWORD || 'yourpassword',
    database: import.meta.env.VITE_MYSQL_DATABASE || 'tensor_dynamics',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
  });
};

const pool = createPool();

export const query = async (sql: string, params?: any[]) => {
  try {
    const [rows] = await pool.execute(sql, params || []);
    return rows;
  } catch (error) {
    console.error('Database query error:', error);
    throw error;
  }
};
```

#### 4. Updating Services and API Endpoints

Follow the same approach as with PostgreSQL, but adapt the SQL queries for MySQL syntax.

## 13. Project Setup - Step-by-Step Guide

### Environment Setup

#### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

#### Step 1: Clone the Repository

```bash
git clone https://github.com/raiyansiddz/Tensor-Website.git
cd Tensor-Website
```

#### Step 2: Install Dependencies

```bash
npm install
# or with yarn
yarn install
```

#### Step 3: Create Environment Variables

Create a `.env` file in the root of the project:

```
# Supabase Configuration
VITE_SUPABASE_URL=https://bgsnxjdcmzezvvkzhddi.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key

# Other Environment Variables
VITE_APP_NAME=Tensor Dynamics
VITE_API_URL=http://localhost:3000
```

#### Step 4: Start the Development Server

```bash
npm run dev
# or with yarn
yarn dev
```

This will start the development server at `http://localhost:8080`.

### Building for Production

#### Step 1: Create a Production Build

```bash
npm run build
# or with yarn
yarn build
```

This will create a production-ready build in the `dist` directory.

#### Step 2: Preview the Production Build

```bash
npm run preview
# or with yarn
yarn preview
```

This will serve the production build locally for preview.

### Deployment Options

#### Option 1: Deploying to Vercel

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Configure environment variables in the Vercel dashboard
4. Deploy

#### Option 2: Deploying to Netlify

1. Push your code to a GitHub repository
2. Connect the repository to Netlify
3. Configure environment variables in the Netlify dashboard
4. Set the build command to `npm run build`
5. Set the publish directory to `dist`
6. Deploy

#### Option 3: Manual Deployment

1. Build the project: `npm run build`
2. Copy the contents of the `dist` directory to your web server
3. Configure your web server to serve the files and handle client-side routing

### Environment Variable Configuration

#### Development Environment

For local development, create a `.env.development` file:

```
VITE_SUPABASE_URL=https://bgsnxjdcmzezvvkzhddi.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_API_URL=http://localhost:8080
```

#### Production Environment

For production, create a `.env.production` file:

```
VITE_SUPABASE_URL=https://bgsnxjdcmzezvvkzhddi.supabase.co
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
VITE_API_URL=https://api.yourdomain.com
```

### Updating Dependencies

To update project dependencies:

```bash
# Check for outdated packages
npm outdated

# Update packages
npm update

# Update to latest major versions (be careful with breaking changes)
npx npm-check-updates -u
npm install
```

## 14. Customization & Error Handling

### Common Customization Points

#### 1. Theme Customization

The project uses Tailwind CSS for styling. You can customize the theme in the `tailwind.config.js` file:

```javascript
// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
	],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: 0 },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: 0 },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
```

To change the color scheme, you can modify the CSS variables in `src/index.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 222.2 84% 4.9%;
    --card: 0 0% 100%;
    --card-foreground: 222.2 84% 4.9%;
    --popover: 0 0% 100%;
    --popover-foreground: 222.2 84% 4.9%;
    --primary: 221.2 83.2% 53.3%;
    --primary-foreground: 210 40% 98%;
    --secondary: 210 40% 96.1%;
    --secondary-foreground: 222.2 47.4% 11.2%;
    --muted: 210 40% 96.1%;
    --muted-foreground: 215.4 16.3% 46.9%;
    --accent: 210 40% 96.1%;
    --accent-foreground: 222.2 47.4% 11.2%;
    --destructive: 0 84.2% 60.2%;
    --destructive-foreground: 210 40% 98%;
    --border: 214.3 31.8% 91.4%;
    --input: 214.3 31.8% 91.4%;
    --ring: 221.2 83.2% 53.3%;
    --radius: 0.5rem;
  }

  .dark {
    --background: 222.2 84% 4.9%;
    --foreground: 210 40% 98%;
    --card: 222.2 84% 4.9%;
    --card-foreground: 210 40% 98%;
    --popover: 222.2 84% 4.9%;
    --popover-foreground: 210 40% 98%;
    --primary: 217.2 91.2% 59.8%;
    --primary-foreground: 222.2 47.4% 11.2%;
    --secondary: 217.2 32.6% 17.5%;
    --secondary-foreground: 210 40% 98%;
    --muted: 217.2 32.6% 17.5%;
    --muted-foreground: 215 20.2% 65.1%;
    --accent: 217.2 32.6% 17.5%;
    --accent-foreground: 210 40% 98%;
    --destructive: 0 62.8% 30.6%;
    --destructive-foreground: 210 40% 98%;
    --border: 217.2 32.6% 17.5%;
    --input: 217.2 32.6% 17.5%;
    --ring: 224.3 76.3% 48%;
  }
}
```

#### 2. Layout Customization

To modify the overall layout:

1. Edit the `PageLayout.tsx` component
2. Adjust the container widths, padding, and margins
3. Update the header and footer components

#### 3. Adding New Pages

To add a new page:

1. Create a new file in the `/src/pages/` directory
2. Import necessary components
3. Add the page to the routes in `App.tsx`

Example new page:

```tsx
// src/pages/TeamPage.tsx
import PageLayout from "@/components/PageLayout";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const TeamPage = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "CEO",
      bio: "Experienced leader with a passion for innovation.",
      image: "/path/to/john.jpg"
    },
    // More team members...
  ];

  return (
    <PageLayout 
      title="Our Team" 
      subtitle="Meet the people behind Tensor Dynamics"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <div className="rounded-full overflow-hidden w-32 h-32 mx-auto mb-4">
                    <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                  </div>
                  <CardTitle className="text-center">{member.name}</CardTitle>
                  <p className="text-center text-muted-foreground">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p>{member.bio}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </PageLayout>
  );
};

export default TeamPage;
```

Then add it to `App.tsx`:

```tsx
// In App.tsx
import TeamPage from "./pages/TeamPage";

// In the Routes component
<Route path="/team" element={<TeamPage />} />
```

#### 4. Adding New Components

To create a new component:

1. Create a new file in the `/src/components/` directory
2. Import necessary dependencies
3. Define the component with props interface
4. Export the component

Example new component:

```tsx
// src/components/Testimonial.tsx
import { motion } from "framer-motion";
import { Star } from "lucide-react";

interface TestimonialProps {
  quote: string;
  author: string;
  company: string;
  rating: number;
}

const Testimonial = ({ quote, author, company, rating }: TestimonialProps) => {
  return (
    <motion.div
      className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 ${
              i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
            }`}
          />
        ))}
      </div>
      <p className="text-lg italic mb-4">{quote}</p>
      <div className="font-medium">
        <p className="text-primary">{author}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
      </div>
    </motion.div>
  );
};

export default Testimonial;
```

### Common Error Handling Patterns

#### 1. Form Validation Errors

```tsx
// Example of form validation with error handling
const [formData, setFormData] = useState({ /* form fields */ });
const [formErrors, setFormErrors] = useState<Record<string, string>>({});

const validateForm = () => {
  const errors: Record<string, string> = {};
  
  // Validation rules
  if (!formData.name.trim()) {
    errors.name = "Name is required";
  }
  
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }
  
  // More validation rules...
  
  return errors;
};

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();
  
  const errors = validateForm();
  if (Object.keys(errors).length > 0) {
    setFormErrors(errors);
    return;
  }
  
  // Form is valid, proceed with submission
  // ...
};
```

#### 2. API Request Errors

```tsx
// Example of API request with error handling
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState<string | null>(null);
const { toast } = useToast();

const fetchData = async () => {
  setIsLoading(true);
  setError(null);
  
  try {
    const { data, error } = await supabase.from('table').select('*');
    
    if (error) throw error;
    
    return data;
    
  } catch (err: any) {
    setError(err.message || "An error occurred");
    toast({
      variant: "destructive",
      title: "Error",
      description: err.message || "Failed to fetch data",
    });
    return null;
    
  } finally {
    setIsLoading(false);
  }
};
```

#### 3. Authentication Errors

```tsx
// Example of authentication error handling
const handleLogin = async (e: React.FormEvent) => {
  e.preventDefault();
  setLoading(true);
  setError(null);
  
  try {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    
    if (error) throw error;
    
    if (data?.user) {
      toast({
        title: "Login successful",
        description: "Redirecting to dashboard...",
      });
      navigate("/admin-panel/dashboard");
    }
    
  } catch (error: any) {
    let errorMessage = "Login failed";
    
    // Handle specific error cases
    if (error.message.includes("Invalid login credentials")) {
      errorMessage = "Invalid email or password";
    } else if (error.message.includes("rate limited")) {
      errorMessage = "Too many login attempts. Please try again later.";
    }
    
    setError(errorMessage);
    console.error("Login error:", error);
    
  } finally {
    setLoading(false);
  }
};
```

#### 4. Route Error Handling

```tsx
// Example of route error boundary
import { ErrorBoundary } from "react-error-boundary";

const ErrorFallback = ({ error, resetErrorBoundary }) => {
  return (
    <div className="text-center py-16">
      <h2 className="text-2xl font-bold text-red-600 mb-4">Something went wrong</h2>
      <p className="text-gray-600 mb-4">{error.message}</p>
      <Button onClick={resetErrorBoundary}>Try again</Button>
    </div>
  );
};

// In the route configuration
<ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => navigate('/')}>
  <Routes>
    {/* Route definitions */}
  </Routes>
</ErrorBoundary>
```

### Common Error Logs and Solutions

#### 1. Supabase Authentication Errors

| Error | Solution |
|-------|----------|
| "Invalid login credentials" | Check if the email and password are correct. Ensure the user exists in the Supabase auth system. |
| "Email not confirmed" | The user needs to confirm their email. Resend the confirmation email or enable auto-confirm in the Supabase dashboard. |
| "New user signup disabled" | Enable signups in the Supabase authentication settings. |

#### 2. Database Query Errors

| Error | Solution |
|-------|----------|
| "Foreign key constraint violation" | Check that referenced records exist before creating relationships. |
| "Unique constraint violation" | Ensure the value being inserted is unique (e.g., slug, email). |
| "Permission denied" | Check the Row Level Security (RLS) policies for the table. Ensure the user has the necessary permissions. |

#### 3. Build and Deployment Errors

| Error | Solution |
|-------|----------|
| "Module not found" | Check import paths and ensure the module is installed. |
| "Type error" | Fix TypeScript type issues or add proper type definitions. |
| "Environment variable not found" | Ensure all required environment variables are set in the deployment platform. |

## 15. FAQ & Troubleshooting

### Frequently Asked Questions

#### 1. How do I add a new page?

To add a new page:

1. Create a new file in the `/src/pages/` directory
2. Import necessary components and hooks
3. Add the page to the routes in `App.tsx`

#### 2. How do I customize the navigation menu?

Edit the `navItems` array in `NavBarWithDropdowns.tsx` to add, remove, or modify navigation links and dropdowns.

#### 3. How do I change the color scheme?

Modify the CSS variables in `src/index.css` to change the color scheme. You can also update the Tailwind configuration in `tailwind.config.js`.

#### 4. How do I add authentication to a new route?

Wrap the route with the `ProtectedRoute` component in `App.tsx`:

```tsx
<Route path="/secure-page" element={
  <ProtectedRoute>
    <SecurePage />
  </ProtectedRoute>
} />
```

#### 5. How do I add new admin panel features?

1. Create a new component in the `/src/components/admin/` directory
2. Add a new route to the admin dashboard in `AdminDashboard.tsx`
3. Add a link to the new feature in the admin sidebar

### Common Issues and Solutions

#### 1. Pages not loading or blank screen

**Issue**: The application shows a blank screen or pages fail to load.

**Solution**:
- Check for JavaScript errors in the browser console
- Ensure all routes are correctly defined in `App.tsx`
- Verify that the components being imported exist and are exported correctly
- Check for missing dependencies in `package.json`

#### 2. Authentication issues

**Issue**: Users cannot log in or protected routes are inaccessible.

**Solution**:
- Check the Supabase configuration in `.env` files
- Verify the authentication flow in `AdminLogin.tsx`
- Ensure the `ProtectedRoute` component is working correctly
- Check browser console for authentication errors

#### 3. Styling inconsistencies

**Issue**: Styles look different in development and production.

**Solution**:
- Ensure Tailwind CSS is properly configured
- Check for conflicting CSS rules
- Verify that all style dependencies are installed
- Use browser developer tools to inspect the applied styles

#### 4. Form submission errors

**Issue**: Forms do not submit or show errors.

**Solution**:
- Check form validation logic
- Verify the Supabase connection and permissions
- Ensure all required form fields are included
- Check for JavaScript errors in the console

#### 5. Image loading issues

**Issue**: Images fail to load or appear broken.

**Solution**:
- Verify the image paths are correct
- Check if images exist in the specified location
- Ensure the `public` directory is correctly set up
- Test different image formats (JPG, PNG, WebP)

#### 6. Slow performance

**Issue**: The application is slow or unresponsive.

**Solution**:
- Check for unnecessary re-renders using React DevTools
- Optimize large components with memoization (`useMemo`, `useCallback`)
- Implement pagination for large data sets
- Use code splitting with dynamic imports

#### 7. Mobile responsiveness issues

**Issue**: The application doesn't look good on mobile devices.

**Solution**:
- Use responsive Tailwind classes (e.g., `md:`, `lg:`)
- Test on various device sizes using browser developer tools
- Implement mobile-specific components or styles when necessary
- Ensure the viewport meta tag is correctly set in `index.html`

### Getting Help

If you encounter issues not covered in this documentation:

1. Check the error message in the browser console
2. Search for the error message online
3. Check the documentation for the specific library or component
4. Ask for help in the project's issue tracker or community forums

## Conclusion

This documentation provides a comprehensive guide to the Tensor Dynamics website project. It covers all aspects of the project structure, customization options, and troubleshooting guidelines. By following the instructions in this document, you should be able to maintain, extend, and customize the project to meet your specific requirements.

For further assistance, please contact the project maintainers or refer to the official documentation of the libraries and frameworks used in this project.

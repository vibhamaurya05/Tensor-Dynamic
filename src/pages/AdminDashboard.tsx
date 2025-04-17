
import { useState, useEffect, Suspense } from "react";
import { Routes, Route, useNavigate, useLocation, Link, Navigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { 
  LayoutDashboard, 
  Users, 
  BookOpenText, 
  Mail, 
  Settings, 
  Menu, 
  LogOut, 
  ChevronDown, 
  ChevronRight,
  BarChart3,
  FileText,
  UserPlus,
  Bell,
  Search,
  CircleUser
} from "lucide-react";

// UI Components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { useToast } from "@/components/ui/use-toast";

// Admin Dashboard Pages
import { Overview } from "../components/admin/Overview";
import { UserManagement } from "../components/admin/UserManagement";
import { BlogManagement } from "../components/admin/BlogManagement";
import { CreateBlogPost } from "../components/admin/CreateBlogPost";
import { EditBlogPost } from "../components/admin/EditBlogPost";
import { ContactLeads } from "../components/admin/ContactLeads";
import { Newsletter } from "../components/admin/Newsletter";
import { AccountSettings } from "../components/admin/AccountSettings";

const AdminDashboard = () => {
  const [userRole, setUserRole] = useState<string | null>(null);
  const [userName, setUserName] = useState<string | null>(null);
  const [userEmail, setUserEmail] = useState<string | null>(null);
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();
  const { toast } = useToast();

  useEffect(() => {
    const getUserProfile = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        
        if (user) {
          setUserEmail(user.email);
          
          const { data: profile } = await supabase
            .from('profiles')
            .select('role, username')
            .eq('id', user.id)
            .single();
            
          if (profile) {
            setUserRole(profile.role);
            setUserName(profile.username || "Admin User");
          }
        }
      } catch (error) {
        console.error('Error fetching user role:', error);
        toast({
          title: "Error",
          description: "Failed to load user profile",
          variant: "destructive"
        });
      } finally {
        setLoading(false);
      }
    };

    getUserProfile();
  }, [toast]);

  const handleSignOut = async () => {
    try {
      await supabase.auth.signOut();
      navigate("/admin-login");
    } catch (error) {
      console.error("Error signing out:", error);
      toast({
        title: "Error",
        description: "Failed to sign out",
        variant: "destructive"
      });
    }
  };

  const isActive = (path: string) => {
    return location.pathname === `/admin-panel${path}` 
      || location.pathname.startsWith(`/admin-panel${path}/`);
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-background">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full"></div>
          <p className="text-muted-foreground">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex h-screen bg-muted/30 overflow-hidden">
      {/* Sidebar */}
      <motion.aside 
        className={`bg-card border-r shadow-sm ${sidebarOpen ? 'w-64' : 'w-20'} transition-all duration-300 ease-in-out flex flex-col h-full`}
        initial={{ x: -20, opacity: 0.8 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-4 flex justify-between items-center border-b">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="flex items-center"
          >
            {sidebarOpen ? (
              <h2 className="text-xl font-bold">Admin Panel</h2>
            ) : (
              <h2 className="text-xl font-bold">AP</h2>
            )}
          </motion.div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-label={sidebarOpen ? "Close sidebar" : "Open sidebar"}
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>

        <div className="overflow-y-auto py-4 flex flex-col h-full justify-between">
          <nav className="px-2 space-y-1">
            <div className="space-y-1">
              <Link to="/admin-panel/dashboard">
                <Button
                  variant={isActive("/dashboard") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <LayoutDashboard className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Dashboard</span>}
                </Button>
              </Link>
              
              <Link to="/admin-panel/users">
                <Button
                  variant={isActive("/users") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <Users className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Users</span>}
                </Button>
              </Link>
              
              <Link to="/admin-panel/blogs">
                <Button
                  variant={isActive("/blogs") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <BookOpenText className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Blog Posts</span>}
                </Button>
              </Link>
              
              <Link to="/admin-panel/contacts">
                <Button
                  variant={isActive("/contacts") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <Mail className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Contact Leads</span>}
                </Button>
              </Link>
              
              <Link to="/admin-panel/newsletter">
                <Button
                  variant={isActive("/newsletter") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <FileText className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Newsletter</span>}
                </Button>
              </Link>
              
              <Link to="/admin-panel/settings">
                <Button
                  variant={isActive("/settings") ? "secondary" : "ghost"}
                  className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
                >
                  <Settings className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
                  {sidebarOpen && <span>Settings</span>}
                </Button>
              </Link>
            </div>
          </nav>
          
          <div className="px-3 mt-6">
            <Button
              variant="outline"
              className={`w-full justify-start ${!sidebarOpen && 'justify-center'}`}
              onClick={handleSignOut}
            >
              <LogOut className={`h-5 w-5 ${!sidebarOpen ? 'mr-0' : 'mr-2'}`} />
              {sidebarOpen && <span>Sign out</span>}
            </Button>
          </div>
        </div>
      </motion.aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col h-full overflow-hidden">
        {/* Top Navigation */}
        <header className="bg-card border-b px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="relative w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-8 bg-muted/40 border-none focus:ring-1"
              />
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 bg-destructive text-destructive-foreground text-xs rounded-full w-4 h-4 flex items-center justify-center">
                3
              </span>
            </Button>
            
            <Separator orientation="vertical" className="h-8" />
            
            <div className="flex items-center gap-2">
              <Avatar className="h-8 w-8">
                <AvatarImage src="" alt={userName || ""} />
                <AvatarFallback className="bg-primary text-primary-foreground">
                  {userName?.substring(0, 2).toUpperCase() || userEmail?.substring(0, 2).toUpperCase()}
                </AvatarFallback>
              </Avatar>
              {userRole && (
                <div className="flex flex-col text-sm">
                  <span className="font-medium">{userName || userEmail}</span>
                  <span className="text-xs text-muted-foreground capitalize">{userRole}</span>
                </div>
              )}
            </div>
          </div>
        </header>
        
        {/* Dashboard Content */}
        <main className="flex-1 overflow-y-auto p-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="h-full"
          >
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                <Route path="/dashboard" element={<Overview />} />
                <Route path="/users" element={<UserManagement />} />
                <Route path="/blogs" element={<BlogManagement />} />
                <Route path="/blogs/new" element={<CreateBlogPost />} />
                <Route path="/blogs/edit/:id" element={<EditBlogPost />} />
                <Route path="/contacts" element={<ContactLeads />} />
                <Route path="/newsletter" element={<Newsletter />} />
                <Route path="/settings" element={<AccountSettings />} />
                <Route path="*" element={<Navigate to="/admin-panel/dashboard" replace />} />
              </Routes>
            </Suspense>
          </motion.div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;

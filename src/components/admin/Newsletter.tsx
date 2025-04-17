
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  MailPlus, 
  Search, 
  RefreshCw,
  Send,
  Users,
  Mail,
  Filter,
  EyeIcon,
  Pencil,
  Trash2,
  ArrowUpRight
} from "lucide-react";

interface Subscriber {
  id: string;
  email: string;
  subscribed_at: string;
  confirmed: boolean;
  last_email_sent: string | null;
  status: "active" | "unsubscribed";
}

interface Campaign {
  id: string;
  subject: string;
  content: string;
  sent_at: string | null;
  status: "draft" | "sent" | "scheduled";
  recipients_count: number;
  open_rate: number | null;
  click_rate: number | null;
}

export const Newsletter = () => {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("subscribers");
  const navigate = useNavigate();
  const { toast } = useToast();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      
      // Fetch subscribers from Supabase - using "subscribers" table instead of "newsletter_subscribers"
      const { data: subscribersData, error: subscribersError } = await supabase
        .from("subscribers")
        .select("*");
      
      if (subscribersError) throw subscribersError;
      
      if (subscribersData) {
        // Map the data to match our Subscriber interface
        const formattedSubscribers: Subscriber[] = subscribersData.map(sub => ({
          id: sub.id,
          email: sub.email,
          subscribed_at: sub.created_at,
          confirmed: sub.confirmed || false,
          last_email_sent: null,
          status: sub.confirmed ? "active" : "unsubscribed"
        }));
        
        setSubscribers(formattedSubscribers);
      } else {
        setSubscribers([]);
      }
      
      // For campaigns, we don't actually have this table in the schema yet
      // So we'll just set an empty array for now
      setCampaigns([]);
      
    } catch (error) {
      console.error("Error fetching newsletter data:", error);
      toast({
        title: "Error",
        description: "Failed to load newsletter data",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredSubscribers = subscribers.filter(subscriber => 
    subscriber.email.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Newsletter Management</h1>
        <div className="flex gap-2">
          <Button onClick={() => setActiveTab("new-campaign")}>
            <MailPlus className="mr-2 h-4 w-4" />
            New Campaign
          </Button>
        </div>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="subscribers">
            <Users className="mr-2 h-4 w-4" />
            Subscribers
          </TabsTrigger>
          <TabsTrigger value="campaigns">
            <Mail className="mr-2 h-4 w-4" />
            Campaigns
          </TabsTrigger>
          <TabsTrigger value="new-campaign">
            <MailPlus className="mr-2 h-4 w-4" />
            New Campaign
          </TabsTrigger>
        </TabsList>
        
        {/* Subscribers Tab */}
        <TabsContent value="subscribers" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Email Subscribers</CardTitle>
                  <CardDescription>
                    Manage your newsletter subscribers
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative w-full">
                    <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input
                      placeholder="Search subscribers..."
                      className="pl-8 w-[250px]"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </div>
                  <Button variant="outline" size="icon" onClick={fetchData}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Email</TableHead>
                    <TableHead>Subscribed On</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Last Email</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-8">
                        <div className="flex justify-center items-center">
                          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : filteredSubscribers.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={5} className="text-center py-10 text-muted-foreground">
                        No subscribers found
                      </TableCell>
                    </TableRow>
                  ) : (
                    filteredSubscribers.map((subscriber) => (
                      <TableRow key={subscriber.id}>
                        <TableCell className="font-medium">
                          {subscriber.email}
                        </TableCell>
                        <TableCell>
                          {new Date(subscriber.subscribed_at).toLocaleDateString()}
                        </TableCell>
                        <TableCell>
                          <Badge variant={subscriber.status === "active" ? "default" : "outline"}>
                            {subscriber.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {subscriber.last_email_sent 
                            ? new Date(subscriber.last_email_sent).toLocaleDateString() 
                            : "Never"
                          }
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => {
                                // Delete subscriber functionality
                              }}
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
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* Campaigns Tab */}
        <TabsContent value="campaigns" className="space-y-4">
          <Card>
            <CardHeader className="pb-3">
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>Email Campaigns</CardTitle>
                  <CardDescription>
                    Manage your newsletter campaigns
                  </CardDescription>
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="outline" size="icon" onClick={fetchData}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Subject</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Sent Date</TableHead>
                    <TableHead>Recipients</TableHead>
                    <TableHead>Open Rate</TableHead>
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {loading ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-8">
                        <div className="flex justify-center items-center">
                          <RefreshCw className="h-6 w-6 animate-spin text-muted-foreground" />
                        </div>
                      </TableCell>
                    </TableRow>
                  ) : campaigns.length === 0 ? (
                    <TableRow>
                      <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                        No campaigns found
                      </TableCell>
                    </TableRow>
                  ) : (
                    campaigns.map((campaign) => (
                      <TableRow key={campaign.id}>
                        <TableCell className="font-medium">
                          {campaign.subject}
                        </TableCell>
                        <TableCell>
                          <Badge 
                            variant={
                              campaign.status === "sent" 
                                ? "default" 
                                : campaign.status === "scheduled" 
                                  ? "secondary" 
                                  : "outline"
                            }
                          >
                            {campaign.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          {campaign.sent_at 
                            ? new Date(campaign.sent_at).toLocaleDateString() 
                            : "Not sent yet"
                          }
                        </TableCell>
                        <TableCell>{campaign.recipients_count}</TableCell>
                        <TableCell>
                          {campaign.open_rate !== null 
                            ? `${campaign.open_rate}%` 
                            : "-"
                          }
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex justify-end gap-2">
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                // View campaign
                              }}
                            >
                              <EyeIcon className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="outline" 
                              size="sm"
                              onClick={() => {
                                // Edit campaign
                              }}
                            >
                              <Pencil className="h-4 w-4" />
                            </Button>
                            <Button 
                              variant="destructive" 
                              size="sm"
                              onClick={() => {
                                // Delete campaign
                              }}
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
            </CardContent>
          </Card>
        </TabsContent>
        
        {/* New Campaign Tab */}
        <TabsContent value="new-campaign" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Create New Email Campaign</CardTitle>
              <CardDescription>
                Compose a newsletter to send to your subscribers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject Line
                </label>
                <Input
                  id="subject"
                  placeholder="Enter email subject..."
                />
              </div>
              
              <div className="space-y-2">
                <label className="text-sm font-medium">
                  Email Content
                </label>
                <Tabs defaultValue="write" className="w-full">
                  <TabsList className="mb-4">
                    <TabsTrigger value="write">Write</TabsTrigger>
                    <TabsTrigger value="preview">Preview</TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="write">
                    <Textarea
                      placeholder="Compose your newsletter content..."
                      className="min-h-[300px]"
                    />
                  </TabsContent>
                  
                  <TabsContent value="preview">
                    <div className="border rounded-md p-4 min-h-[300px]">
                      <p className="text-muted-foreground text-center py-8">
                        Preview will appear here...
                      </p>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
              
              <div className="flex items-center space-x-2 pt-4">
                <Checkbox id="test-send" />
                <label
                  htmlFor="test-send"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Send a test email to myself first
                </label>
              </div>
              
              <div className="flex justify-end space-x-2 pt-4">
                <Button 
                  variant="outline"
                  onClick={() => setActiveTab("campaigns")}
                >
                  Cancel
                </Button>
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Send Campaign
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

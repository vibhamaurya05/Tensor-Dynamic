
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { 
  Search, 
  Mail, 
  Phone, 
  Calendar, 
  MessageSquare, 
  Check, 
  X, 
  Filter,
  RefreshCw,
  Trash2,
  ExternalLink,
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

interface ContactLead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  status: 'new' | 'contacted' | 'closed';
  created_at: string;
  company?: string;
}

export const ContactLeads = () => {
  const [contacts, setContacts] = useState<ContactLead[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<ContactLead | null>(null);
  const [modalOpen, setModalOpen] = useState(false);
  const { toast } = useToast();

  // Fetch contacts from Supabase
  useEffect(() => {
    fetchContacts();
  }, []);

  const fetchContacts = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('contacts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Convert the status field to ensure it matches our ContactLead type
      const typedContacts = (data || []).map(contact => ({
        ...contact,
        // Make sure status is one of the allowed values, default to 'new' if not
        status: (contact.status === 'new' || contact.status === 'contacted' || contact.status === 'closed') 
          ? contact.status as 'new' | 'contacted' | 'closed'
          : 'new',
        // Since company doesn't exist in the database, create it from subject
        company: contact.subject
      })) as ContactLead[];
      
      setContacts(typedContacts);
    } catch (error) {
      console.error("Error fetching contacts:", error);
      toast({
        title: "Error",
        description: "Failed to load contact submissions",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const filteredContacts = contacts.filter(contact => {
    const query = searchQuery.toLowerCase();
    return contact.name.toLowerCase().includes(query) ||
           contact.email.toLowerCase().includes(query) ||
           contact.subject.toLowerCase().includes(query) ||
           (contact.company && contact.company.toLowerCase().includes(query));
  });

  const updateContactStatus = async (id: string, status: 'new' | 'contacted' | 'closed') => {
    try {
      const { error } = await supabase
        .from('contacts')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setContacts(prev => 
        prev.map(contact => 
          contact.id === id ? { ...contact, status } : contact
        )
      );
      
      toast({
        title: "Status updated",
        description: `Contact has been marked as ${status}`,
      });
    } catch (error) {
      console.error("Error updating contact status:", error);
      toast({
        title: "Error",
        description: "Failed to update contact status",
        variant: "destructive",
      });
    }
  };

  const deleteContact = async (id: string) => {
    try {
      const { error } = await supabase
        .from('contacts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Update local state
      setContacts(prev => prev.filter(contact => contact.id !== id));
      
      toast({
        title: "Contact deleted",
        description: "The contact has been permanently deleted",
      });
    } catch (error) {
      console.error("Error deleting contact:", error);
      toast({
        title: "Error",
        description: "Failed to delete contact",
        variant: "destructive",
      });
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new':
        return 'bg-blue-500 text-white';
      case 'contacted':
        return 'bg-yellow-500 text-white';
      case 'closed':
        return 'bg-green-500 text-white';
      default:
        return 'bg-gray-500 text-white';
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold tracking-tight">Contact Leads</h1>
        <div className="flex items-center gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search contacts..."
              className="pl-8 w-[250px]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button variant="outline" onClick={fetchContacts} disabled={loading}>
            <RefreshCw className={`mr-2 h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </Button>
        </div>
      </div>
      
      <Card>
        <CardHeader className="pb-3">
          <CardTitle>All Contacts</CardTitle>
          <CardDescription>
            Manage and respond to website contact form submissions
          </CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Contact</TableHead>
                <TableHead>Subject</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10">
                    <div className="flex justify-center">
                      <RefreshCw className="h-8 w-8 animate-spin text-muted-foreground" />
                    </div>
                  </TableCell>
                </TableRow>
              ) : filteredContacts.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-10 text-muted-foreground">
                    No contacts found
                  </TableCell>
                </TableRow>
              ) : (
                filteredContacts.map((contact) => (
                  <TableRow key={contact.id}>
                    <TableCell className="font-medium">
                      <div className="flex flex-col">
                        <span>{contact.name}</span>
                        {contact.company && (
                          <span className="text-xs text-muted-foreground">
                            {contact.company}
                          </span>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col">
                        <div className="flex items-center">
                          <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                          <span className="text-sm">{contact.email}</span>
                        </div>
                        {contact.phone && (
                          <div className="flex items-center mt-1">
                            <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                            <span className="text-sm">{contact.phone}</span>
                          </div>
                        )}
                      </div>
                    </TableCell>
                    <TableCell>
                      <span className="font-medium">{contact.subject}</span>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center">
                        <Calendar className="h-3 w-3 mr-1 text-muted-foreground" />
                        <span className="text-sm">
                          {new Date(contact.created_at).toLocaleDateString()}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <Badge 
                        className={`${getStatusColor(contact.status)}`}
                        variant="outline"
                      >
                        {contact.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right">
                      <div className="flex justify-end gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSelectedContact(contact);
                            setModalOpen(true);
                          }}
                        >
                          <MessageSquare className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => updateContactStatus(contact.id, 'contacted')}
                          disabled={contact.status === 'contacted'}
                        >
                          <Check className="h-4 w-4" />
                        </Button>
                        <Button
                          variant="destructive"
                          size="sm"
                          onClick={() => deleteContact(contact.id)}
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
      
      {/* Contact Detail Modal */}
      <Dialog open={modalOpen} onOpenChange={setModalOpen}>
        <DialogContent className="sm:max-w-[600px]">
          <DialogHeader>
            <DialogTitle>Contact Message</DialogTitle>
            <DialogDescription>
              {selectedContact?.created_at && (
                <div className="flex items-center text-sm">
                  <Calendar className="h-3 w-3 mr-1" />
                  Received on {new Date(selectedContact.created_at).toLocaleString()}
                </div>
              )}
            </DialogDescription>
          </DialogHeader>
          
          {selectedContact && (
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">From</h3>
                  <p className="font-medium">{selectedContact.name}</p>
                  {selectedContact.company && (
                    <p className="text-sm text-muted-foreground">{selectedContact.company}</p>
                  )}
                </div>
                <div>
                  <h3 className="text-sm font-medium text-muted-foreground">Contact Info</h3>
                  <div className="flex items-center mt-1">
                    <Mail className="h-3 w-3 mr-1 text-muted-foreground" />
                    <a href={`mailto:${selectedContact.email}`} className="text-sm text-primary hover:underline">
                      {selectedContact.email}
                    </a>
                  </div>
                  {selectedContact.phone && (
                    <div className="flex items-center mt-1">
                      <Phone className="h-3 w-3 mr-1 text-muted-foreground" />
                      <a href={`tel:${selectedContact.phone}`} className="text-sm text-primary hover:underline">
                        {selectedContact.phone}
                      </a>
                    </div>
                  )}
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Subject</h3>
                <p className="font-medium">{selectedContact.subject}</p>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Message</h3>
                <div className="mt-1 p-3 bg-muted rounded-md whitespace-pre-wrap">
                  {selectedContact.message}
                </div>
              </div>
              
              <div className="pt-4 flex justify-between">
                <div className="space-x-2">
                  <Button 
                    variant="outline" 
                    onClick={() => updateContactStatus(selectedContact.id, 'new')}
                    disabled={selectedContact.status === 'new'}
                  >
                    Mark as New
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => updateContactStatus(selectedContact.id, 'contacted')}
                    disabled={selectedContact.status === 'contacted'}
                  >
                    Mark as Contacted
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => updateContactStatus(selectedContact.id, 'closed')}
                    disabled={selectedContact.status === 'closed'}
                  >
                    Mark as Closed
                  </Button>
                </div>
                <Button asChild>
                  <a href={`mailto:${selectedContact.email}?subject=RE: ${selectedContact.subject}`}>
                    <Mail className="mr-2 h-4 w-4" />
                    Reply via Email
                  </a>
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

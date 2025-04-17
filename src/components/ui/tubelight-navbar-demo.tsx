
import { Home, User, Briefcase, FileText, Zap, Layers, Compass, Book, MessageCircle, Shield, Lightbulb, Server } from 'lucide-react'
import { NavBar } from "@/components/ui/tubelight-navbar"

export function NavBarDemo() {
  const navItems = [
    { name: "Home", url: "/", icon: Home },
    { name: "About", url: "/about", icon: User },
    { name: "Technology", url: "/technology", icon: Zap },
    { name: "Features", url: "/features", icon: Layers },
    { name: "How It Works", url: "/how-it-works", icon: Compass },
    { name: "Sectors", url: "/sectors", icon: Briefcase },
    { name: "Solutions", url: "/solutions", icon: Lightbulb },
    { name: "Products", url: "/products", icon: Server },
    { name: "Case Studies", url: "/case-studies", icon: Book },
    { name: "Blog", url: "/blog", icon: FileText },
    { name: "Contact", url: "/contact", icon: MessageCircle }
  ]

  return <NavBar items={navItems} />
}

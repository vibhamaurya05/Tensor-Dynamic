import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Home, X, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      // Close mobile menu when scrolling
      if (mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Technology", href: "/technology" },
    { name: "Features", href: "/features" },
    { name: "How It Works", href: "/how-it-works", shortName: "How" },
    { name: "Solutions", href: "https://skycaster.in" },

    { name: "Sectors", href: "/sectors" },
    // { name: "Solutions", href: "https://skycaster.in" },
    { name: "Products", href: "https://skycaster.in" },
    { name: "Case Studies", href: "/case-studies", shortName: "Cases" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md py-2 shadow-md"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex-shrink-0"
          >
            <Link to="/" className="flex items-center">
              <img
                src="/TensorLogo.png"
                alt="TensorDynamics Logo"
                className={cn(
                  "hidden dark:block h-16 w-auto",
                  !isScrolled ? "brightness-150 " : "brightness-100"
                )}
              />
              <img
                src="/Tensor_Logo.png"
                alt="TensorDynamics Logo"
                className={cn(
                  "block dark:hidden h-16 w-auto",
                  !isScrolled ? "brightness-150 " : "brightness-100"
                )}
              />
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center">
            <nav className="relative z-10 mx-auto overflow-x-auto max-w-[calc(100vw-200px)]">
              <div className="flex items-center gap-1 bg-background/80 backdrop-blur-md border border-border/50 py-1 px-1 rounded-full shadow-sm">
                {navLinks.map((link, index) => {
                  const isActive = location.pathname === link.href;

                  return link.href.startsWith("https://") ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "relative cursor-pointer text-sm font-medium px-3 py-2 rounded-full transition-colors whitespace-nowrap",
                        "text-foreground/80 hover:text-primary"
                      )}
                    >
                      <span>{link.name}</span>
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "relative cursor-pointer text-sm font-medium px-3 py-2 rounded-full transition-colors whitespace-nowrap",
                        "text-foreground/80 hover:text-primary",
                        isActive && "text-primary"
                      )}
                    >
                      {link.name === "How It Works" ? (
                        <span className="hidden lg:inline">How It Works</span>
                      ) : link.shortName && window.innerWidth < 1024 ? (
                        <span>{link.shortName}</span>
                      ) : (
                        <span>{link.name}</span>
                      )}
                      {isActive && (
                        <motion.div
                          layoutId="navbar-indicator"
                          className="absolute inset-0 w-full bg-primary/10 rounded-full -z-10"
                          initial={false}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 30,
                          }}
                        />
                      )}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div className="ml-4">
              <ThemeToggle />
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-4"
          >
            <div className="bg-background/90 backdrop-blur-lg border border-border/50 rounded-3xl shadow-lg p-2">
              <div className="grid grid-cols-4 gap-2">
                {navLinks.slice(0, 4).map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className={cn(
                      "flex flex-col items-center p-3 rounded-2xl text-center",
                      location.pathname === link.href
                        ? "bg-primary/10 text-primary"
                        : "hover:bg-background/80 text-muted-foreground"
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name === "Home" ? (
                      <Home size={20} className="mb-1" />
                    ) : (
                      <div className="w-5 h-5 mb-1 flex items-center justify-center">
                        <span className="text-xs font-bold">
                          {link.name.charAt(0)}
                        </span>
                      </div>
                    )}
                    <span className="text-xs">{link.name}</span>
                  </Link>
                ))}
              </div>

              <div className="mt-2 max-h-[50vh] overflow-y-auto rounded-2xl">
                {navLinks.slice(4).map((link) =>
                  link.href.startsWith("https://") ? (
                    <a
                      key={link.name}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm",
                        "hover:bg-background/80 text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </a>
                  ) : (
                    <Link
                      key={link.name}
                      to={link.href}
                      className={cn(
                        "block px-4 py-3 rounded-xl text-sm",
                        location.pathname === link.href
                          ? "bg-primary/10 text-primary"
                          : "hover:bg-background/80 text-muted-foreground"
                      )}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )
                )}
              </div>

              <div className="mt-2">
                <Link to="/contact">
                  <Button
                    onClick={() => setMobileMenuOpen(false)}
                    className="w-full rounded-xl py-5"
                  >
                    Get in Touch
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;

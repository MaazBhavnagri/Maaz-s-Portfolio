import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            {/* Brand & Bio */}
            <div className="space-y-4">
              <button onClick={scrollToTop} className="text-xl font-bold bg-hero-gradient bg-clip-text text-transparent hover:opacity-80 transition-opacity">
                Maaz B.
              </button>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Engineer passionate about creating innovative web applications 
                and AI solutions that make a real difference.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Quick Links</h3>
              <div className="space-y-2">
                {[
                  { name: "About", href: "#about" },
                  { name: "Skills", href: "#skills" },
                  { name: "Projects", href: "#projects" },
                  { name: "Contact", href: "#contact" }
                ].map(link => (
                  <button 
                    key={link.name} 
                    onClick={() => {
                      const element = document.querySelector(link.href);
                      if (element) {
                        element.scrollIntoView({
                          behavior: "smooth"
                        });
                      }
                    }} 
                    className="block text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4">
              <h3 className="font-semibold text-foreground">Let's Connect</h3>
              <div className="flex space-x-2">
                <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <a href="https://github.com/MaazBhavnagri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                    <Github className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <a href="https://www.linkedin.com/in/maaz-bhavnagri-102a03325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <Linkedin className="h-4 w-4" />
                  </a>
                </Button>
                <Button asChild variant="ghost" size="icon" className="hover:text-primary hover:bg-primary/10">
                  <a href="/contact" aria-label="Email">
                    <Mail className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground text-sm">
                Available for internships and exciting projects
              </p>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-muted-foreground text-sm flex items-center">
                © {currentYear} Maaz Bhavnagri Mohammed Naeem. Made with{" "}
                <Heart className="h-4 w-4 mx-1 text-red-500 fill-current" />
                and lots of code.
              </p>
              
              <div className="flex items-center space-x-4 text-xs text-muted-foreground">
                <span>Built with React & Tailwind CSS</span>
                <span>•</span>
                <button onClick={scrollToTop} className="hover:text-primary transition-colors">
                  Back to Top ↑
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 
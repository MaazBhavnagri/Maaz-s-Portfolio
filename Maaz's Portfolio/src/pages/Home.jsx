import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";
import profilePicture from "@/assets/profile-picture.jpg";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden animate-fade-in">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-glow-pulse" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-glow-pulse"
        style={{
          animationDelay: "1s",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center space-y-8">
          {/* Profile Picture */}
          <div className="flex justify-center mb-8 animate-scale-in">
            <div className="relative">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-4 border-primary/20 shadow-glow hover:scale-105 transition-transform duration-300">
                {/* <img src={proflePicture} alt="Maaz Bhavnagri Mohammed Naeem" className="w-full h-full object-cover" /> */}
              </div>
              <div className="absolute inset-0 rounded-full bg-hero-gradient opacity-20 animate-pulse" />
            </div>
          </div>

          {/* Main Heading */}
          <div
            className="space-y-4 animate-slide-up"
            style={{ animationDelay: "0.2s" }}
          >
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold">
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Maaz Bhavnagri
              </span>
              <br />
              {/* <span className="text-foreground">Mohammed Naeem</span> */}
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-muted-foreground font-medium">
              Software Engineer | Web Developer | AIML Enthusiast
            </p>
          </div>

          {/* Description */}
          <p
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed animate-fade-in"
            style={{ animationDelay: "0.4s" }}
          >
            Passionate about building innovative web applications and AI
            solutions. Currently pursuing B.E. at LJIET University, actively
            seeking internships to contribute to cutting-edge projects.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link to="/contact">
              <Button
                size="lg"
                className="bg-hero-gradient hover:shadow-glow transition-all duration-300 group"
              >
                <Mail className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Get In Touch
              </Button>
            </Link>

            <a href="/maaz_resume.pdf" download style={{ textDecoration: "none" }}>
              <Button>
                <Download />
                Download Resume
              </Button>
            </a>
          </div>

          {/* Social Links */}
          <div
            className="flex items-center justify-center gap-4 pt-8 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <a href="https://github.com/MaazBhavnagri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              variant="ghost"
              size="icon"
              className="hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <a href="https://www.linkedin.com/in/maaz-bhavnagri-102a03325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Link to="/contact">
              <Button
                variant="ghost"
                size="icon"
                className="hover:text-primary hover:scale-110 transition-all duration-300"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </Button>
            </Link>
          </div>

          {/* Navigation hint */}
          <div className="pt-8 animate-bounce" style={{ animationDelay: "1s" }}>
            <Link
              to="/about"
              className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group"
            >
              <span className="text-sm mb-2 group-hover:text-primary">
                Explore more
              </span>
              <ArrowRight className="h-6 w-6" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

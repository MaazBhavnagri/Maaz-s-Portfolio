import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Mail, Github, Linkedin, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import profilePicture from "@/assets/Maaz_professional_photo.png";

export default function Home() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 300, damping: 24 } }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Background animated gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-blob-spin opacity-50 dark:opacity-40" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[30rem] h-[30rem] bg-accent/20 rounded-full blur-[120px] animate-blob-spin opacity-50 dark:opacity-40"
        style={{ animationDirection: "reverse", animationDuration: "25s" }}
      />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-background/0 via-background/80 to-background dark:via-background/90" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center space-y-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Profile Picture */}
          <motion.div variants={itemVariants} className="flex justify-center mb-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-hero-gradient rounded-full blur opacity-25 group-hover:opacity-60 transition duration-1000 group-hover:duration-200 animate-glow-pulse"></div>
              <div className="relative w-36 h-36 md:w-44 md:h-44 rounded-full overflow-hidden border-2 border-primary/30 shadow-elegant bg-background">
                <img src={profilePicture} alt="Maaz Bhavnagri" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              </div>
            </div>
          </motion.div>

          {/* Main Heading */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight">
              <span className="bg-hero-gradient bg-clip-text text-transparent text-glow">
                Maaz Bhavnagri
              </span>
            </h1>

            <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 font-medium tracking-wide flex items-center justify-center gap-2">
              <Terminal className="w-6 h-6 text-primary" />
              AI-Focused Full Stack Developer building intelligent, real-world systems
            </p>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed"
          >
            Passionate about building innovative web applications and AI solutions. Currently pursuing B.E. at LJIET University, actively seeking opportunities to contribute to cutting-edge projects.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <Link to="/contact">
              <Button size="lg" className="h-14 px-8 text-base bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-primary/50 transition-all duration-300 group rounded-full">
                <Mail className="mr-2 h-5 w-5 group-hover:-translate-y-1 transition-transform" />
                Let's Build Together
              </Button>
            </Link>

            <a href="/maaz_resume.pdf" download style={{ textDecoration: "none" }}>
              <Button size="lg" variant="outline" className="h-14 px-8 text-base glass-button rounded-full border-primary/20 hover:border-primary/50 group">
                <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4 pt-10">
            <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full glass-card hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <a href="https://github.com/MaazBhavnagri" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
            </Button>
            <Button asChild variant="ghost" size="icon" className="w-12 h-12 rounded-full glass-card hover:bg-primary/10 hover:text-primary transition-all duration-300">
              <a href="https://www.linkedin.com/in/maaz-bhavnagri-102a03325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </Button>
            <Link to="/contact">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full glass-card hover:bg-primary/10 hover:text-primary transition-all duration-300" aria-label="Email">
                <Mail className="h-6 w-6" />
              </Button>
            </Link>
          </motion.div>

          {/* Navigation hint */}
          <motion.div variants={itemVariants} className="pt-12">
            <Link to="/about" className="inline-flex flex-col items-center text-muted-foreground hover:text-primary transition-colors group animate-bounce">
              <span className="text-sm font-medium mb-3 tracking-widest uppercase opacity-70 group-hover:opacity-100 transition-opacity">
                Explore more
              </span>
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center group-hover:bg-primary/10 transition-colors">
                <ArrowRight className="h-5 w-5 rotate-90" />
              </div>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

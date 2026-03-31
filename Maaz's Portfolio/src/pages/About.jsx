import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Heart } from "lucide-react"
import { motion } from "framer-motion"

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-background">
      {/* Background animated elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              About <span className="bg-hero-gradient bg-clip-text text-transparent text-glow">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium leading-relaxed">
              AI-driven full stack developer focused on building intelligent systems and solving real-world problems
            </p>
          </motion.div>

          {/* Main Bio */}
          <motion.div variants={itemVariants} className="mb-14">
            <Card className="glass-card border-primary/20 shadow-elegant relative overflow-hidden group">
              <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <CardContent className="p-8 md:p-10 relative z-10 space-y-6">
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  I’m a full stack developer and AI enthusiast currently pursuing my B.E. at LJIET University, Ahmedabad (Class of 2027). I specialize in <strong className="bg-hero-gradient bg-clip-text text-transparent">building AI-powered applications</strong>, including computer vision systems, multi-agent AI platforms, and optimization-based simulations.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  My work goes beyond basic development — I focus on <strong className="bg-hero-gradient bg-clip-text text-transparent">designing complete systems</strong>, from backend architecture and APIs to intelligent models and user-facing interfaces. I enjoy solving complex problems using a combination of <strong className="text-foreground tracking-wide border-b border-primary/30">algorithms, machine learning, and practical product thinking</strong>.
                </p>
                <p className="text-lg text-foreground/90 leading-relaxed font-medium">
                  I’m actively seeking internship opportunities where I can contribute to <strong className="bg-hero-gradient bg-clip-text text-transparent">real-world projects</strong>, learn from experienced teams, and build impactful technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="h-full glass-card group hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-elegant relative overflow-hidden">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-primary-foreground group-hover:scale-110 text-primary transition-all duration-300 shadow-sm group-hover:shadow-glow">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Education</h3>
                  <p className="text-muted-foreground/90 font-medium leading-relaxed">
                    B.E. in Computer Engineering – LJIET University, Ahmedabad (2027)
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Goals */}
            <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="h-full glass-card group hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-elegant relative overflow-hidden">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-accent/20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-accent group-hover:text-accent-foreground group-hover:scale-110 text-accent-foreground transition-all duration-300 shadow-sm group-hover:shadow-[0_0_30px_hsl(var(--accent)/0.3)]">
                    <Target className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Goals</h3>
                  <p className="text-muted-foreground/90 font-medium leading-relaxed">
                    To become an AI-focused engineer building scalable, real-world intelligent systems that combine machine learning with strong backend architecture
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Passion */}
            <motion.div variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }}>
              <Card className="h-full glass-card group hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-elegant relative overflow-hidden">
                <CardContent className="p-8 text-center h-full flex flex-col justify-center">
                  <div className="w-16 h-16 bg-rose-500/10 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-rose-500 group-hover:text-white group-hover:scale-110 text-rose-500 transition-all duration-300 shadow-sm group-hover:shadow-[0_0_30px_rgba(244,63,94,0.3)]">
                    <Heart className="h-8 w-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 tracking-tight">Passion</h3>
                  <p className="text-muted-foreground/90 font-medium leading-relaxed">
                    Building AI-powered applications, simulation systems, and full-stack products that solve meaningful real-world problems
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Current Status */}
          <motion.div variants={itemVariants} className="mt-14 text-center">
            <Card className="inline-block glass-card border-primary/40 shadow-glow relative overflow-hidden group">
              <div className="absolute inset-0 bg-hero-gradient opacity-10 group-hover:opacity-20 transition-opacity duration-300" />
              <CardContent className="px-8 py-5 relative z-10">
                <p className="text-lg font-bold tracking-wide flex items-center gap-3">
                  <span className="text-2xl animate-bounce">🚀</span>
                  <span className="bg-hero-gradient bg-clip-text text-transparent drop-shadow-sm">
                    Actively seeking internship opportunities in AI / Full Stack Development
                  </span>
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
} 
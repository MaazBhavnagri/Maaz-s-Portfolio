import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"
import { Code2, BrainCircuit, Globe, Server, Database, LineChart, Braces, ShieldCheck } from "lucide-react"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "Java", "TypeScript", "HTML/CSS"],
    icon: Code2
  },
  {
    title: "AI & Computer Vision",
    skills: ["Machine Learning", "Scikit-learn", "MediaPipe", "TensorFlow", "OpenCV", "OpenAI API", "Gemini API", "OpenRouter API", "LangChain"],
    icon: BrainCircuit
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "Vite", "Tailwind CSS", "Radix UI", "Framer Motion", "Recharts", "Responsive Design"],
    icon: Globe
  },
  {
    title: "Backend & APIs",
    skills: ["Node.js", "Express", "Flask", "Django", "FastAPI", "ASP.NET Core MVC", "REST APIs"],
    icon: Server
  },
  {
    title: "Databases",
    skills: ["MongoDB", "PostgreSQL", "SQLAlchemy ORM", "ChromaDB (Vector DB)"],
    icon: Database
  },
  {
    title: "Algorithms & CS",
    skills: ["Greedy Algorithms", "Dynamic Programming", "Graph Algorithms", "Topological Sort", "CPM", "Priority Queues"],
    icon: Braces
  },
  {
    title: "Data & Simulation",
    skills: ["Pandas", "NumPy", "PyPDF2", "PdfPig", "Tkinter", "CustomTkinter", "Matplotlib"],
    icon: LineChart
  },
  {
    title: "Security & Tooling",
    skills: ["JWT Auth", "Flask-JWT-Extended", "bcrypt", "Git", "Uvicorn", "Flask-Migrate", "Pytest", "NPM Tooling"],
    icon: ShieldCheck
  }
]

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              Technical <span className="bg-hero-gradient bg-clip-text text-transparent text-glow">Arsenal</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 font-medium leading-relaxed max-w-2xl mx-auto">
              A comprehensive toolkit of languages, frameworks, and AI technologies I use to build scalable solutions.
            </p>
          </motion.div>

          {/* MERN Stack Highlight */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-16 text-center"
          >
            <Card className="inline-block glass-card shadow-elegant border-primary/20 hover:border-primary/50 hover:shadow-glow transition-all duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-4 bg-hero-gradient bg-clip-text text-transparent">Full Stack Expertise</h3>
                <div className="flex flex-wrap justify-center gap-3">
                  {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
                    <motion.div 
                      key={tech}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 + (index * 0.1) }}
                    >
                      <Badge className="bg-primary/90 hover:bg-primary text-primary-foreground text-sm px-4 py-1.5 shadow-md hover:scale-105 transition-transform">
                        {tech}
                      </Badge>
                    </motion.div>
                  ))}
                </div>
                <p className="text-sm text-foreground/60 mt-4 font-medium">
                  End-to-End MERN Stack Architecture
                </p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {skillCategories.map((category) => {
              const IconComponent = category.icon;
              return (
                <motion.div key={category.title} variants={itemVariants} whileHover={{ y: -5, scale: 1.02 }} className="h-full">
                  <Card className="h-full glass-card group hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-elegant relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
                    
                    <CardContent className="p-6 relative z-10">
                      {/* Category Icon & Title */}
                      <div className="flex flex-col items-center text-center mb-6">
                        <div className="p-4 rounded-2xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 mb-4 shadow-sm group-hover:shadow-glow">
                          <IconComponent className="w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors tracking-tight">
                          {category.title}
                        </h3>
                      </div>

                      {/* Skills List */}
                      <div className="flex flex-wrap gap-2 justify-center">
                        {category.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="secondary" 
                            className="bg-secondary/50 border border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default font-medium px-3 py-1"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
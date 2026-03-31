import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Hospital, Users, Activity, Mic, MessageSquare, Search, Factory, TrafficCone } from "lucide-react"
import { motion } from "framer-motion"

const projects = [
  {
    title: "Care Locator – Smart Hospital Finder",
    description: "A comprehensive healthcare platform that helps users find hospitals, book appointments, and manage medical records with AI-powered recommendations.",
    longDescription: "Care Locator is a full-stack healthcare application designed to streamline the process of finding and connecting with healthcare providers. The platform features a dual login system for both users and hospitals, intelligent hospital ranking based on user preferences and medical history, and a complete appointment management system.",
    techStack: ["React", "Vite", "Flask", "Machine Learning", "Python"],
    features: [
      "Hospital search with intelligent filtering",
      "Appointment booking system",
      "Medical report upload and management",
      "Personalized health suggestions",
      "Dual login system (User & Hospital)",
      "AI-based hospital ranking algorithm",
      "Session management and authentication"
    ],
    icon: Hospital,
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "SkillSync – AI-Powered Skill Analysis",
    description: "Real-time skill assessment platform using computer vision and machine learning to provide instant feedback on user performance and posture.",
    longDescription: "SkillSync leverages advanced computer vision technologies including MediaPipe for pose estimation and custom machine learning models for real-time performance analysis. Built entirely solo, this project demonstrates the integration of AI/ML with modern web technologies.",
    techStack: ["React", "Flask", "MediaPipe", "Scikit-learn", "Tailwind CSS"],
    features: [
      "Real-time pose estimation and feedback",
      "Machine learning model for posture classification",
      "Interactive user interface with animations",
      "Performance analytics and tracking",
      "Computer vision integration",
      "Responsive design with Tailwind CSS",
      "Real-time data processing"
    ],
    icon: Users,
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "FitForm AI – Real-Time AI Fitness Coach",
    description: "A real-time AI-powered fitness assistant that uses computer vision to analyze exercise form through webcam and provides instant feedback.",
    longDescription: "Analyzes exercise form through a webcam and provides instant feedback to improve posture and performance. The system calculates precise joint angles to offer real-time corrections.",
    techStack: ["React", "Tailwind CSS", "MediaPipe", "Flask"],
    features: [
      "Real-time pose detection using MediaPipe",
      "Instant feedback on exercise form",
      "Rep counting and posture correction",
      "Lightweight and optimized real-time processing",
      "Clean and responsive UI"
    ],
    icon: Activity,
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: true
  },
  {
    title: "IntervIO – AI Interview Practice Simulator",
    description: "An AI-powered interview simulator that generates role-based questions, analyzes user responses, and provides structured feedback.",
    longDescription: "Simulates real-world interview conditions with dynamically generated questions based on resumes and roles, evaluating answers across text and audio modalities.",
    techStack: ["ASP.NET Core MVC (C#)", "Razor Views", "Tailwind CSS", "Bootstrap", "OpenRouter API", "PdfPig", "Node.js"],
    features: [
      "Resume-based and role-based question generation",
      "AI evaluation of answers (text & audio support)",
      "Interview timer and simulation environment",
      "Performance tracking dashboard",
      "PDF resume parsing and analysis"
    ],
    icon: Mic,
    color: "text-cyan-500 dark:text-cyan-400",
    bgColor: "bg-cyan-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "AI Debate Platform (AI vs AI System)",
    description: "A multi-agent AI system where different AI models debate against each other on user-defined topics.",
    longDescription: "Generates structured arguments and counterarguments autonomously simulating reasoning from diverse perspectives via multiple LLMs.",
    techStack: ["React (UI)", "AI APIs (LLMs)"],
    features: [
      "AI vs AI debate system",
      "Topic-based argument generation",
      "Multi-turn reasoning simulation",
      "Comparative AI outputs"
    ],
    icon: MessageSquare,
    color: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "Content Gap Analyzer",
    description: "An AI-powered backend system that analyzes content from a user's website and competitors to identify missing topics.",
    longDescription: "Identifies keyword gaps and strategic improvements using semantic search and retrieval-augmented generation techniques over vectorized documents.",
    techStack: ["FastAPI", "OpenAI API", "LangChain", "ChromaDB", "PyPDF2"],
    features: [
      "Content ingestion (PDF/Text)",
      "Semantic chunking and embedding",
      "Vector search for similarity analysis",
      "AI-generated content recommendations"
    ],
    icon: Search,
    color: "text-violet-500 dark:text-violet-400",
    bgColor: "bg-violet-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "FactoryFlow – Manufacturing Workflow Optimizer",
    description: "A desktop-based algorithmic system that optimizes manufacturing workflows using graph algorithms and scheduling techniques.",
    longDescription: "Improves operational efficiency by applying Critical Path Method and greedy scheduling heuristics to dependent task graphs in factory settings.",
    techStack: ["Python", "CustomTkinter", "NetworkX", "Pandas", "Matplotlib", "Pillow", "Pytest"],
    features: [
      "Task dependency validation",
      "Critical Path Method (CPM)",
      "Greedy scheduling optimization",
      "Gantt chart visualization",
      "Performance comparison of schedules"
    ],
    icon: Factory,
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  },
  {
    title: "Smart Traffic Signal Optimizer",
    description: "A simulation-based system that dynamically optimizes traffic signal timing using greedy strategies and fairness algorithms.",
    longDescription: "Manages intersection wait times and ensures fairness while preserving the ability for emergency vehicles to forcibly override normal traffic light states.",
    techStack: ["Python", "Tkinter"],
    features: [
      "Real-time traffic simulation",
      "Greedy optimization strategy",
      "Fairness-based traffic control system",
      "Emergency vehicle priority override"
    ],
    icon: TrafficCone,
    color: "text-rose-500 dark:text-rose-400",
    bgColor: "bg-rose-500/10",
    github: "https://github.com/MaazBhavnagri",
    demo: "https://github.com/MaazBhavnagri",
    isLive: false
  }
]

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { type: "spring", stiffness: 200, damping: 20 } }
  };

  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-[20%] left-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-[20%] right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 tracking-tight">
              Featured <span className="bg-hero-gradient bg-clip-text text-transparent text-glow">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground/80 max-w-2xl mx-auto font-medium">
              Showcasing innovative solutions that combine modern web technologies with artificial intelligence, robust architectures, and algorithms.
            </p>
          </motion.div>

          {/* Projects */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="space-y-12"
          >
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <motion.div key={project.title} variants={itemVariants}>
                  <Card className="group glass-card hover:border-primary/40 transition-all duration-500 shadow-card hover:shadow-elegant relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    <div className="grid lg:grid-cols-3 gap-8 p-8 relative z-10">
                      {/* Project Icon & Title */}
                      <div className="lg:col-span-1 space-y-5">
                        <div className="flex items-center justify-between">
                          <div className={`w-16 h-16 ${project.bgColor} rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300 shadow-sm group-hover:shadow-glow`}>
                            <IconComponent className={`h-8 w-8 ${project.color}`} />
                          </div>
                          {project.isLive && (
                            <Badge className="bg-emerald-500/20 text-emerald-500 hover:bg-emerald-500/30 border-emerald-500/50 shadow-glow animate-pulse px-3 py-1 text-sm font-semibold">
                              🚀 Live
                            </Badge>
                          )}
                        </div>
                        
                        <div>
                          <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors tracking-tight">
                            {project.title}
                          </h3>
                          <p className="text-muted-foreground/90 leading-relaxed font-medium">
                            {project.description}
                          </p>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-3 pt-4">
                          <Button size="sm" variant="outline" className="group/btn glass-button border-card-foreground/10 hover:border-primary/50" asChild>
                            <a href={project.github} target="_blank" rel="noopener noreferrer">
                              <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 group-hover/btn:text-primary transition-transform" />
                              Code
                            </a>
                          </Button>
                          
                          <Button 
                            size="sm" 
                            className={`group/btn ${project.isLive ? 'bg-primary hover:bg-primary-glow shadow-glow text-primary-foreground border-transparent' : 'glass-button border-card-foreground/10 hover:border-primary/50 bg-primary/10 text-primary hover:text-primary-foreground'}`}
                            asChild
                          >
                            <a href={project.demo} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                              {project.isLive ? 'Live Demo' : 'Demo'}
                            </a>
                          </Button>
                        </div>
                      </div>

                      {/* Project Details */}
                      <div className="lg:col-span-2 space-y-6">
                        {/* Tech Stack */}
                        <div>
                          <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                            Technology Stack
                            <div className="h-[1px] flex-1 bg-border/50 ml-2"></div>
                          </h4>
                          <div className="flex flex-wrap gap-2">
                            {project.techStack.map((tech) => (
                              <Badge 
                                key={tech} 
                                className="bg-primary/10 text-primary hover:bg-primary hover:text-primary-foreground border-transparent transition-colors px-3 py-1 font-medium shadow-sm"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* Key Features */}
                        <div>
                          <h4 className="text-lg font-bold mb-3 flex items-center gap-2">
                            Key Features
                            <div className="h-[1px] flex-1 bg-border/50 ml-2"></div>
                          </h4>
                          <div className="grid sm:grid-cols-2 gap-3">
                            {project.features.map((feature) => (
                              <div 
                                key={feature} 
                                className="flex items-start space-x-3"
                              >
                                <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0 shadow-glow"></div>
                                <span className="text-sm text-muted-foreground/90 font-medium leading-relaxed">{feature}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Project Highlights */}
                        <div className="bg-black/5 dark:bg-white/5 rounded-xl p-4 border border-black/5 dark:border-white/5">
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.longDescription}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* More Projects CTA */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center mt-20"
          >
            <Card className="inline-block glass-card border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold mb-3 tracking-tight">Constantly Exploring</h3>
                <p className="text-muted-foreground/80 mb-6 font-medium max-w-md mx-auto">
                  I'm actively working on new AI solutions and full-stack projects to push technological bounds.
                </p>
                <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-elegant hover:shadow-glow transition-all duration-300 rounded-full group px-8" asChild>
                  <a href="https://github.com/MaazBhavnagri" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
                    Visit My GitHub
                  </a>
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
} 
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Hospital, Users } from "lucide-react"

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
    color: "text-blue-500",
    bgColor: "bg-blue-500/10",
    github: "#",
    demo: "#"
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
    color: "text-purple-500",
    bgColor: "bg-purple-500/10",
    github: "#",
    demo: "#"
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Featured <span className="bg-hero-gradient bg-clip-text text-transparent">Projects</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Showcasing innovative solutions that combine modern web technologies with artificial intelligence
            </p>
          </div>

          {/* Projects */}
          <div className="space-y-12">
            {projects.map((project, index) => {
              const IconComponent = project.icon;
              return (
                <Card 
                  key={project.title}
                  className="group hover:shadow-glow transition-all duration-300 animate-scale-in bg-card-gradient border-border/50"
                  style={{ animationDelay: `${index * 0.3 + 0.2}s` }}
                >
                  <div className="grid lg:grid-cols-3 gap-8 p-8">
                    {/* Project Icon & Title */}
                    <div className="lg:col-span-1 space-y-4">
                      <div className={`w-16 h-16 ${project.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform`}>
                        <IconComponent className={`h-8 w-8 ${project.color}`} />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed">
                          {project.description}
                        </p>
                      </div>
                      
                      {/* Action Buttons */}
                      <div className="flex gap-3 pt-4">
                        <Button size="sm" variant="outline" className="group/btn">
                          <Github className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Code
                        </Button>
                        <Button size="sm" className="bg-hero-gradient group/btn">
                          <ExternalLink className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
                          Demo
                        </Button>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="lg:col-span-2 space-y-6">
                      {/* Tech Stack */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Technology Stack</h4>
                        <div className="flex flex-wrap gap-2">
                          {project.techStack.map((tech, techIndex) => (
                            <Badge 
                              key={tech} 
                              className="bg-primary text-primary-foreground animate-fade-in"
                              style={{ animationDelay: `${index * 0.3 + techIndex * 0.1 + 0.4}s` }}
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      {/* Key Features */}
                      <div>
                        <h4 className="text-lg font-semibold mb-3">Key Features</h4>
                        <div className="grid md:grid-cols-2 gap-3">
                          {project.features.map((feature, featureIndex) => (
                            <div 
                              key={feature} 
                              className="flex items-start space-x-2 animate-slide-up"
                              style={{ animationDelay: `${index * 0.3 + featureIndex * 0.05 + 0.6}s` }}
                            >
                              <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-sm text-muted-foreground">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Project Highlights */}
                      <div className="bg-muted/30 rounded-lg p-4">
                        <h4 className="text-lg font-semibold mb-2">Project Highlights</h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {project.longDescription}
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* More Projects CTA */}
          <div className="text-center mt-16 animate-slide-up" style={{ animationDelay: "1s" }}>
            <Card className="inline-block bg-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3">More Projects Coming Soon</h3>
                <p className="text-muted-foreground mb-4">
                  I'm constantly working on new projects and exploring innovative technologies.
                </p>
                <Button variant="outline" className="border-primary/30 hover:border-primary">
                  <Github className="h-4 w-4 mr-2" />
                  View All on GitHub
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Globe, Brain, Code, Smartphone, Database, Zap } from "lucide-react"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Responsive, user-friendly websites using modern frameworks",
    features: ["React & Node.js", "Responsive Design", "Modern UI/UX", "Performance Optimized"],
    color: "text-blue-500",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Brain,
    title: "AI/ML Model Development",
    description: "Custom machine learning models with real-world applications",
    features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Deep Learning"],
    color: "text-purple-500",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web application development with modern tech stack",
    features: ["MERN Stack", "RESTful APIs", "Database Design", "Authentication"],
    color: "text-green-500",
    bgColor: "bg-green-500/10"
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Fast, reliable web apps that work offline and feel native",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
    color: "text-orange-500",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Efficient data management and analytics solutions",
    features: ["MongoDB", "Data Modeling", "Performance Optimization", "Analytics"],
    color: "text-red-500",
    bgColor: "bg-red-500/10"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your web applications and improve user experience",
    features: ["Code Optimization", "Bundle Analysis", "Caching Strategies", "Performance Monitoring"],
    color: "text-yellow-500",
    bgColor: "bg-yellow-500/10"
  }
]

export default function Services() {
  return (
    <div className="min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              My <span className="bg-hero-gradient bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with cutting-edge technology
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card-gradient border-border/50"
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  <CardHeader className="pb-4">
                    <div className={`w-12 h-12 ${service.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <IconComponent className={`h-6 w-6 ${service.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <Badge 
                          key={feature} 
                          variant="secondary" 
                          className="mr-2 mb-2 animate-fade-in"
                          style={{ animationDelay: `${index * 0.1 + featureIndex * 0.05 + 0.4}s` }}
                        >
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* CTA Section */}
          <div className="text-center animate-slide-up" style={{ animationDelay: "1s" }}>
            <Card className="inline-block bg-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
                <p className="text-muted-foreground mb-6 max-w-md">
                  Let's discuss how I can help bring your ideas to life with modern technology and innovative solutions.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-hero-gradient hover:shadow-glow transition-all duration-300">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"
import { Globe, Brain, Code, Smartphone, Database, Zap } from "lucide-react"
import { motion } from "framer-motion"
import { pageVariants, fadeUpVariants, scaleInVariants } from "@/lib/design-system"

const services = [
  {
    icon: Globe,
    title: "Web Design & Development",
    description: "Responsive, user-friendly websites using modern frameworks",
    features: ["React & Node.js", "Responsive Design", "Modern UI/UX", "Performance Optimized"],
    color: "text-blue-500 dark:text-blue-400",
    bgColor: "bg-blue-500/10"
  },
  {
    icon: Brain,
    title: "AI/ML Model Development",
    description: "Custom machine learning models with real-world applications",
    features: ["Computer Vision", "Natural Language Processing", "Predictive Analytics", "Deep Learning"],
    color: "text-purple-500 dark:text-purple-400",
    bgColor: "bg-purple-500/10"
  },
  {
    icon: Code,
    title: "Full Stack Development",
    description: "End-to-end web application development with modern tech stack",
    features: ["MERN Stack", "RESTful APIs", "Database Design", "Authentication"],
    color: "text-emerald-500 dark:text-emerald-400",
    bgColor: "bg-emerald-500/10"
  },
  {
    icon: Smartphone,
    title: "Progressive Web Apps",
    description: "Fast, reliable web apps that work offline and feel native",
    features: ["Offline Functionality", "Push Notifications", "App-like Experience", "Cross-platform"],
    color: "text-orange-500 dark:text-orange-400",
    bgColor: "bg-orange-500/10"
  },
  {
    icon: Database,
    title: "Database Solutions",
    description: "Efficient data management and analytics solutions",
    features: ["MongoDB", "Data Modeling", "Performance Optimization", "Analytics"],
    color: "text-rose-500 dark:text-rose-400",
    bgColor: "bg-rose-500/10"
  },
  {
    icon: Zap,
    title: "Performance Optimization",
    description: "Speed up your web applications and improve user experience",
    features: ["Code Optimization", "Bundle Analysis", "Caching Strategies", "Performance Monitoring"],
    color: "text-amber-500 dark:text-amber-400",
    bgColor: "bg-amber-500/10"
  }
]

export default function Services() {
  return (
    <div className="min-h-screen py-20 relative overflow-hidden bg-background">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">

          {/* ── Section Header ── */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight mb-4">
              My <span className="bg-hero-gradient bg-clip-text text-transparent text-glow">Services</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground/90 font-medium leading-relaxed max-w-2xl mx-auto">
              Comprehensive development services to bring your ideas to life with cutting-edge technology
            </p>
          </motion.div>

          {/* ── Services Grid ── */}
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="visible"
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14"
          >
            {services.map((service) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={scaleInVariants}
                  whileHover={{ y: -5, scale: 1.02 }}
                  className="h-full"
                >
                  <Card className="h-full glass-card group hover:border-primary/40 transition-all duration-300 shadow-card hover:shadow-elegant relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-28 h-28 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

                    <CardContent className="p-6 relative z-10 flex flex-col h-full">
                      {/* Icon */}
                      <div className={`w-12 h-12 ${service.bgColor} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                        <IconComponent className={`h-6 w-6 ${service.color}`} />
                      </div>

                      {/* Title */}
                      <h3 className="text-xl font-semibold tracking-tight mb-2 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>

                      {/* Description */}
                      <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed mb-5">
                        {service.description}
                      </p>

                      {/* Feature Badges */}
                      <div className="flex flex-wrap gap-2 mt-auto">
                        {service.features.map((feature) => (
                          <Badge
                            key={feature}
                            variant="secondary"
                            className="bg-secondary/50 border border-border/50 hover:bg-primary/20 hover:text-primary hover:border-primary/30 transition-all duration-200 cursor-default font-medium text-xs px-2.5 py-0.5"
                          >
                            {feature}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </motion.div>

          {/* ── CTA Section ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-center"
          >
            <Card className="inline-block glass-card border-primary/20 hover:border-primary/40 hover:shadow-glow transition-all duration-500 overflow-hidden relative group">
              <div className="absolute inset-0 bg-hero-gradient opacity-0 group-hover:opacity-5 transition-opacity duration-500" />
              <CardContent className="p-8 relative z-10">
                <h3 className="text-2xl font-bold tracking-tight mb-3">Ready to Start Your Project?</h3>
                <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed max-w-md mx-auto mb-6">
                  Let's discuss how I can help bring your ideas to life with modern technology and innovative solutions.
                </p>
                <Link to="/contact">
                  <Button size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground shadow-glow hover:shadow-elegant transition-all duration-300 rounded-full px-8">
                    Get In Touch
                  </Button>
                </Link>
              </CardContent>
            </Card>
          </motion.div>

        </div>
      </div>
    </div>
  )
}
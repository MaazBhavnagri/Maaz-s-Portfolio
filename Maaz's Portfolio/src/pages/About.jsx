import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Target, Heart } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen py-20 bg-muted/30 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              About <span className="bg-hero-gradient bg-clip-text text-transparent">Me</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Passionate software engineer with a vision to transform ideas into innovative digital solutions
            </p>
          </div>

          {/* Main Bio */}
          <div className="mb-12 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Card className="p-8 bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-300">
              <CardContent className="p-0">
                <p className="text-lg text-foreground/90 leading-relaxed">
                  I'm a software engineer currently pursuing my B.E. at LJIET University, Ahmedabad, 
                  graduating in 2027. I'm actively seeking internships and love building websites and AI models. 
                  My goal is to become a leading AIML developer, creating solutions that make a real difference 
                  in people's lives.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.4s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <GraduationCap className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Education</h3>
                <p className="text-muted-foreground">
                  <strong>B.E. – LJIET University</strong><br />
                  Ahmedabad, Class of 2027
                </p>
              </CardContent>
            </Card>

            {/* Goals */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.6s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Target className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Goals</h3>
                <p className="text-muted-foreground">
                  Become a leading AIML developer creating innovative solutions for real-world problems
                </p>
              </CardContent>
            </Card>

            {/* Passion */}
            <Card className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: "0.8s" }}>
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Passion</h3>
                <p className="text-muted-foreground">
                  Building websites and AI models that solve problems and create meaningful impact
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Current Status */}
          <div className="mt-12 text-center animate-fade-in" style={{ animationDelay: "1s" }}>
            <Card className="inline-block bg-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <p className="text-lg">
                  <span className="font-semibold text-primary">Currently:</span>{" "}
                  <span className="text-foreground">Actively seeking internship opportunities</span>
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
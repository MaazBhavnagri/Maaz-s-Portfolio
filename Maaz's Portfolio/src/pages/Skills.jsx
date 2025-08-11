import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "JavaScript", "TypeScript", "HTML/CSS"],
    icon: "💻"
  },
  {
    title: "AI/ML Technologies",
    skills: ["Machine Learning", "Scikit-learn", "MediaPipe", "TensorFlow"],
    icon: "🤖"
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Express", "MongoDB", "Flask"],
    icon: "🌐"
  },
  {
    title: "Tools & Frameworks",
    skills: ["Vite", "Tailwind CSS", "Git", "REST APIs", "Responsive Design"],
    icon: "🛠️"
  }
]

export default function Skills() {
  return (
    <div className="min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Technical <span className="bg-hero-gradient bg-clip-text text-transparent">Skills</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications and AI solutions
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skillCategories.map((category, index) => (
              <Card 
                key={category.title} 
                className="group hover:shadow-glow transition-all duration-300 hover:-translate-y-2 animate-scale-in bg-card-gradient border-border/50"
                style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
              >
                <CardContent className="p-6">
                  {/* Category Icon & Title */}
                  <div className="text-center mb-6">
                    <div className="text-4xl mb-3 animate-bounce" style={{ animationDelay: `${index * 0.1 + 0.4}s` }}>
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skill} 
                        variant="secondary" 
                        className="w-full justify-center py-2 text-sm hover:bg-primary/10 hover:text-primary transition-all duration-200 cursor-default animate-fade-in"
                        style={{ animationDelay: `${index * 0.1 + skillIndex * 0.05 + 0.6}s` }}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* MERN Stack Highlight */}
          <div className="mt-12 text-center animate-slide-up" style={{ animationDelay: "1s" }}>
            <Card className="inline-block bg-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-primary">Full Stack Expertise</h3>
                <div className="flex flex-wrap justify-center gap-2">
                  {["MongoDB", "Express", "React", "Node.js"].map((tech, index) => (
                    <Badge 
                      key={tech} 
                      className="bg-primary text-primary-foreground animate-scale-in"
                      style={{ animationDelay: `${index * 0.1 + 1.2}s` }}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground mt-3">
                  Complete MERN stack proficiency for end-to-end development
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
} 
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Github, Linkedin, Send } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen py-20 animate-fade-in">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16 animate-slide-up">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Get In{" "}
              <span className="bg-hero-gradient bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to discuss your next project? Let's connect and create
              something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card
              className="animate-slide-up bg-card-gradient border-border/50 shadow-card hover:shadow-elegant transition-all duration-300"
              style={{ animationDelay: "0.2s" }}
            >
              <CardHeader>
                <h2 className="text-2xl font-semibold">Send Me a Message</h2>
                <p className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="Your first name"
                      className="transition-all duration-200 focus:ring-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Your last name"
                      className="transition-all duration-200 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    className="transition-all duration-200 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="What's this about?"
                    className="transition-all duration-200 focus:ring-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project or how I can help you..."
                    rows={6}
                    className="transition-all duration-200 focus:ring-primary resize-none"
                  />
                </div>

                <Button
                  size="lg"
                  className="w-full bg-hero-gradient hover:shadow-glow transition-all duration-300 group"
                >
                  <Send className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  Send Message
                </Button>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="space-y-4">
                <Card
                  className="group hover:shadow-glow transition-all duration-300 animate-scale-in bg-card-gradient border-border/50"
                  style={{ animationDelay: "0.4s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Mail className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Email</h3>
                        <p className="text-muted-foreground">
                          bhavnagrimaaz@gmail.com
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="group hover:shadow-glow transition-all duration-300 animate-scale-in bg-card-gradient border-border/50"
                  style={{ animationDelay: "0.6s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <MapPin className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Location</h3>
                        <p className="text-muted-foreground">
                          Ahmedabad, Gujarat, India
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card
                  className="group hover:shadow-glow transition-all duration-300 animate-scale-in bg-card-gradient border-border/50"
                  style={{ animationDelay: "0.8s" }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Phone className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-semibold">Available</h3>
                        <p className="text-muted-foreground">
                          Mon - Fri, 9AM - 6PM
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Social Links */}
              <Card
                className="animate-slide-up bg-primary/5 border-primary/20 hover:shadow-glow transition-all duration-300"
                style={{ animationDelay: "1s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Connect With Me
                  </h3>
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:scale-110 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://github.com/MaazBhavnagri"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:scale-110 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="https://www.linkedin.com/in/maaz-bhavnagri-102a03325/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                      >
                        <Linkedin className="h-5 w-5" />
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:scale-110 transition-all duration-300"
                      asChild
                    >
                      <a
                        href="mailto:bhavnagrimaaz@gmail.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Email"
                      >
                        <Mail className="h-5 w-5" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Note */}
              <Card
                className="animate-fade-in bg-card-gradient border-border/50"
                style={{ animationDelay: "1.2s" }}
              >
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-2">Quick Note</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    I'm currently looking for internship opportunities and
                    exciting projects to work on. Whether you have a project in
                    mind or just want to connect, I'd love to hear from you!
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Users, Target, Award, ArrowRight } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Users,
      title: "Expert Team",
      description: "70+ experienced engineers and operators driving innovation in forging technology."
    },
    {
      icon: Target,
      title: "Precision Focus",
      description: "Committed to delivering exact specifications and superior quality in every project."
    },
    {
      icon: Award,
      title: "Industry Leader",
      description: "Leading Turkey's hot forging industry with cutting-edge technology and expertise."
    }
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <div>
            <div className="inline-flex items-center space-x-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 mb-6">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">About Our Company</span>
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Leading Turkey&#39;s
              <span className="block bg-gradient-forge bg-clip-text text-transparent">
                Forging Industry
              </span>
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Our experienced engineering and operator team of over 70 professionals, combined with 
              our innovative human resources perspective, high production capacity, and continuously 
              evolving technology, positions us as Turkey&#39;s leading hot forging product manufacturer.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              We are advancing towards becoming the industry leader with our manufacturing center&#39;s 
              experienced engineers and operators, innovative approach, and commitment to technological 
              advancement that grows stronger each year.
            </p>

            <Button variant="industrial" size="lg" className="group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Values Grid */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <Card key={index} className="border-0 bg-muted/50 hover:bg-muted transition-colors duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-forge rounded-lg flex items-center justify-center flex-shrink-0">
                      <value.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-forge bg-clip-text text-transparent mb-2">
              25+
            </div>
            <div className="text-muted-foreground font-medium">Years of Excellence</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-forge bg-clip-text text-transparent mb-2">
              70+
            </div>
            <div className="text-muted-foreground font-medium">Expert Engineers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-forge bg-clip-text text-transparent mb-2">
              1000+
            </div>
            <div className="text-muted-foreground font-medium">Projects Delivered</div>
          </div>
          <div className="text-center">
            <div className="text-3xl md:text-4xl font-bold bg-gradient-forge bg-clip-text text-transparent mb-2">
              50+
            </div>
            <div className="text-muted-foreground font-medium">Industries Served</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
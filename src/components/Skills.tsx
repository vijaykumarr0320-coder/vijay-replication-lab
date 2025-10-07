import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Palette, Settings, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "languages",
      icon: Code2,
      skills: ["C++", "Python", "Java"],
    },
    {
      title: "frontend",
      icon: Palette,
      skills: ["React.js", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "backend",
      icon: Settings,
      skills: ["Node.js", "Express.js", "Javascript"],
    },
    {
      title: "databases",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "Postman", "REST API's", "ThunderClient", "bruno"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-secondary/20">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-muted-foreground">Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card key={index} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Icon className="h-5 w-5 text-primary" />
                    <span className="capitalize">{category.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge 
                        key={skillIndex} 
                        variant="secondary"
                        className="bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

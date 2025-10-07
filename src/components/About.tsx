import { Card } from "@/components/ui/card";

const About = () => {
  const stats = [
    { value: "3+", label: "Projects" },
    { value: "9", label: "Languages" },
    { value: "1", label: "Years" },
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-muted-foreground">Get to know me better</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face"
                alt="About me"
                className="w-full h-full object-cover rounded-2xl shadow-xl"
              />
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-primary">Dedicated Problem Solver</h3>
            <p className="text-muted-foreground leading-relaxed">
              Computer science student skilled in C++, Python, and problem-solving, 
              with hands-on experience in building scalable projects and solving coding challenges.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Currently pursuing my Bachelor's degree at RV University (2024-2028), I specialize 
              in the MERN stack and am passionate about creating efficient, scalable solutions 
              that address real-world problems through innovative technology.
            </p>

            <div className="grid grid-cols-3 gap-4 pt-6">
              {stats.map((stat, index) => (
                <Card key={index} className="p-6 text-center bg-card hover:bg-secondary transition-colors">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

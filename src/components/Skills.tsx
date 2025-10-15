import { Code2, Palette, Settings, Database, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "💻 languages",
      icon: Code2,
      skills: ["C++", "Python", "JavaScript", "TypeScript", "Java"],
    },
    {
      title: "🎨 frontend",
      icon: Palette,
      skills: ["React", "HTML", "CSS", "Tailwind CSS"],
    },
    {
      title: "⚙️ backend",
      icon: Settings,
      skills: ["Node.js", "Express.js", "REST API Development", "JSON Data Handling", "Environment Variables (dotenv)"],
    },
    {
      title: "🗄️ databases",
      icon: Database,
      skills: ["MongoDB", "MySQL"],
    },
    {
      title: "🛠️ tools",
      icon: Wrench,
      skills: ["Git", "GitHub", "VS Code", "Linux", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Skills & Technologies
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Tools and technologies I work with</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={index} 
                className="glass-card p-6"
              >
                <h3 
                  className="flex items-center gap-2 text-lg mb-4 font-semibold"
                  style={{ 
                    color: 'var(--neon-cyan)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 rounded-full text-sm transition-all cursor-default hover:-translate-y-1"
                      style={{
                        background: 'rgba(0, 245, 255, 0.1)',
                        color: 'var(--neon-cyan)',
                        border: '1px solid rgba(0, 245, 255, 0.3)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--neon-cyan)';
                        e.currentTarget.style.color = 'var(--primary-bg)';
                        e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 245, 255, 0.5)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'rgba(0, 245, 255, 0.1)';
                        e.currentTarget.style.color = 'var(--neon-cyan)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;

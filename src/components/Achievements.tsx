import { Award, Trophy, Star, Medal } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Competitive Programming",
      description: "Solved 500+ problems across LeetCode, CodeChef, and Codeforces",
      year: "2024"
    },
    {
      icon: Award,
      title: "Hackathon Winner",
      description: "First place in University Hackathon for innovative web solution",
      year: "2024"
    },
    {
      icon: Star,
      title: "Academic Excellence",
      description: "Maintained 9+ CGPA throughout Bachelor's degree",
      year: "2024-Present"
    },
    {
      icon: Medal,
      title: "Open Source Contributor",
      description: "Active contributor to various open-source projects on GitHub",
      year: "2023-Present"
    }
  ];

  return (
    <section 
      id="achievements" 
      className="py-20 px-4"
      style={{ background: 'var(--primary-bg)' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Achievements & Awards
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Recognition and milestones in my journey
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all hover:-translate-y-2 group"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div className="flex items-start gap-4">
                <div 
                  className="p-3 rounded-lg transition-all group-hover:scale-110"
                  style={{ 
                    background: 'var(--secondary-bg)',
                    color: 'var(--accent-green)'
                  }}
                >
                  <achievement.icon size={28} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {achievement.title}
                    </h3>
                    <span 
                      className="text-sm font-medium px-3 py-1 rounded-full"
                      style={{ 
                        background: 'var(--secondary-bg)',
                        color: 'var(--accent-green)'
                      }}
                    >
                      {achievement.year}
                    </span>
                  </div>
                  <p 
                    className="leading-relaxed"
                    style={{ color: 'var(--text-secondary)' }}
                  >
                    {achievement.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Achievements;

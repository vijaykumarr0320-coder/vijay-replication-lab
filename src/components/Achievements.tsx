import { ExternalLink } from "lucide-react";

const Achievements = () => {
  const achievements = [
    {
      icon: "🏆",
      title: "Hackathon Finalist",
      description: "Reached the finals in multiple hackathons, demonstrating exceptional problem-solving skills and innovative thinking in competitive coding environments.",
      certificate: "https://drive.google.com/file/d/19tMNwnLR4DW3SUi1MJRBedfIwMnRztmq/view?usp=sharing",
    },
    {
      icon: "💻",
      title: "CodeVerse GDG RVU Challenge",
      description: "Participated in the CodeVerse GDG RVU Challenge, showcasing coding expertise and collaborative problem-solving abilities.",
      certificate: "https://drive.google.com/file/d/1896HTBghsNnYHjynyGydTBdwUgqkOHFq/view?usp=sharing",
    },
    {
      icon: "👥",
      title: "Coding Events Leadership",
      description: "Led and organized coding events, fostering a collaborative learning environment and mentoring fellow students in programming challenges.",
      certificate: "",
    },
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
                  className="text-4xl p-3 rounded-lg transition-all group-hover:scale-110"
                  style={{ 
                    background: 'var(--secondary-bg)',
                  }}
                >
                  {achievement.icon}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2 gap-3">
                    <h3 
                      className="text-xl font-bold"
                      style={{ fontFamily: 'var(--font-heading)' }}
                    >
                      {achievement.title}
                    </h3>
                    {achievement.certificate && (
                      <a
                        href={achievement.certificate}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full transition-all hover:scale-110 shrink-0"
                        style={{ 
                          background: 'var(--accent-green)',
                          color: 'var(--primary-bg)'
                        }}
                        title="View Certificate"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
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

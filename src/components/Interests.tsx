const Interests = () => {
  const interests = [
    {
      icon: "🚴",
      title: "Bike Riding",
      description: "Exploring new places and staying active through cycling adventures",
    },
    {
      icon: "📸",
      title: "Photography",
      description: "Capturing moments and exploring creative perspectives through photography",
    },
    {
      icon: "🛡️",
      title: "Ethical Hacking",
      description: "Learning cybersecurity principles and exploring system vulnerabilities ethically",
    },
    {
      icon: "🐧",
      title: "Linux Exploration",
      description: "Diving deep into Linux systems, command line tools, and open-source technologies",
    },
  ];

  return (
    <section 
      id="interests" 
      className="py-20 px-4"
      style={{ background: 'var(--secondary-bg)' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Interests & Hobbies
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Things I'm passionate about outside of coding
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {interests.map((interest, index) => (
            <div
              key={index}
              className="p-6 rounded-xl transition-all hover:-translate-y-2 group text-center"
              style={{ 
                background: 'var(--card-bg)',
                border: '1px solid rgba(255, 255, 255, 0.1)'
              }}
            >
              <div 
                className="text-5xl mb-4 transition-all group-hover:scale-110"
              >
                {interest.icon}
              </div>
              <h3 
                className="text-lg font-bold mb-2"
                style={{ 
                  fontFamily: 'var(--font-heading)',
                  color: 'var(--accent-blue)'
                }}
              >
                {interest.title}
              </h3>
              <p 
                className="text-sm leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                {interest.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Interests;

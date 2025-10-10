import { useState } from "react";
import { BookOpen } from "lucide-react";
import BooksModal from "./BooksModal";

const Interests = () => {
  const [isBooksModalOpen, setIsBooksModalOpen] = useState(false);

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
    {
      icon: "📚",
      title: "Reading Books",
      description: "Passionate about reading books on technology, self-improvement, and software engineering",
      hasExplore: true,
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
                className="text-sm leading-relaxed mb-4"
                style={{ color: 'var(--text-secondary)' }}
              >
                {interest.description}
              </p>
              
              {interest.hasExplore && (
                <button
                  onClick={() => setIsBooksModalOpen(true)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all hover:-translate-y-1 mt-2"
                  style={{
                    background: 'var(--accent-blue)',
                    color: 'var(--primary-bg)',
                    fontFamily: 'var(--font-heading)',
                  }}
                >
                  <BookOpen className="h-4 w-4" />
                  Explore Books
                </button>
              )}
            </div>
          ))}
        </div>
        
        <BooksModal 
          isOpen={isBooksModalOpen} 
          onClose={() => setIsBooksModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Interests;

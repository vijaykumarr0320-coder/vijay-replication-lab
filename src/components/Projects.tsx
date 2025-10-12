import { ExternalLink, Github } from "lucide-react";
import krivyaThumbnail from "@/assets/krivya-thumbnail.jpg";

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack",
      description: "A comprehensive environmental impact tracking app that helps users monitor their carbon footprint through daily activities and provides actionable insights for sustainable living.",
      image: "https://i.ibb.co/Sw4YRsHm/Ecotrack-tumbnail.png",
      tags: ["React", "Node.js", "MongoDB", "Express.js"],
      demo: "https://ecotrackcapstone.netlify.app/",
      github: "https://github.com/kalviumcommunity/S67_VijayKumar_Capstone_EcoTrack.git",
    },
    {
      title: "Krivya",
      description: "An AI-powered misinformation detection tool inspired by Arjuna and Krishna's strategy in the Mahabharata, designed to help users navigate the digital \"maze\" of misinformation. Krivya analyses content in real time, provides clear explanations for flagged information, and ensures user privacy through selective scanning.",
      image: krivyaThumbnail,
      tags: ["React", "Node.js", "Python", "FastAPI", "MongoDB", "RoBERTa"],
      demo: "https://askkrivyagenai.vercel.app/",
      github: "https://github.com/Vijay-kumar2006/CodeOfDuty-Krivya.git",
    },
    {
      title: "Lexolution",
      description: "An AI-powered language learning platform that adapts to individual learning styles and provides personalized vocabulary building exercises with real-time pronunciation feedback.",
      image: "/images/design-mode/2e94c944f19a408d1a8126c28fee4830.jpg",
      tags: ["Python", "Flask", "JavaScript", "MySQL"],
      demo: "",
      github: "https://github.com/Vijay-kumar2006/LexoLaw_CodeOfDuty.git",
    },
    {
      title: "JobGenie",
      description: "A smart job matching platform that uses machine learning to connect candidates with relevant opportunities based on skills, experience, and career preferences.",
      image: "/images/design-mode/0065c3fb3c6637d51f69a6e987d05450.jpg",
      tags: ["React", "Node.js", "MongoDB", "Python"],
      demo: "",
      github: "https://github.com/kalviumcommunity/Vijay-Jobgenie.git",
    },
  ];

  return (
    <section 
      id="projects" 
      className="py-20 px-4"
      style={{ background: 'var(--secondary-bg)' }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Featured Projects
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>Some of my recent work</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="rounded-xl overflow-hidden transition-all hover:-translate-y-3 group"
              style={{
                background: 'var(--card-bg)',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                boxShadow: 'var(--shadow-md)'
              }}
            >
              <div className="relative overflow-hidden h-48 flex items-center justify-center" style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="max-w-full max-h-full object-contain p-4 transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                >
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                      style={{ background: 'var(--accent-blue)' }}
                    >
                      <ExternalLink className="h-5 w-5" style={{ color: 'white' }} />
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'var(--accent-green)' }}
                  >
                    <Github className="h-5 w-5" style={{ color: 'var(--primary-bg)' }} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 
                  className="text-xl font-bold"
                  style={{ 
                    color: 'var(--accent-green)',
                    fontFamily: 'var(--font-heading)'
                  }}
                >
                  {project.title}
                </h3>
                <p 
                  className="leading-relaxed"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="px-3 py-1 rounded-full text-xs"
                      style={{
                        background: 'rgba(0, 255, 136, 0.1)',
                        color: 'var(--accent-green)',
                        border: '1px solid rgba(0, 255, 136, 0.3)'
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

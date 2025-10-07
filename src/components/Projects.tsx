import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "EcoTrack",
      description: "A comprehensive environmental tracking application built with MERN stack. Features real-time data visualization and analysis of environmental metrics.",
      image: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=800&h=500&fit=crop",
      tags: ["MongoDB", "Express.js", "React", "Node.js"],
      demo: "#",
      github: "#",
    },
    {
      title: "JobGenie",
      description: "AI-powered job matching platform that connects candidates with opportunities. Built with Node.js backend and modern frontend frameworks.",
      image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tags: ["Node.js", "Express.js", "MySQL", "REST API"],
      demo: "#",
      github: "#",
    },
    {
      title: "Portfolio Website",
      description: "Modern responsive portfolio website showcasing projects and skills. Built with React and Tailwind CSS for optimal performance.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tags: ["React", "Tailwind CSS", "TypeScript"],
      demo: "#",
      github: "#",
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
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: 'rgba(0, 0, 0, 0.8)' }}
                >
                  <a
                    href={project.demo}
                    className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:scale-110"
                    style={{ background: 'var(--accent-blue)' }}
                  >
                    <ExternalLink className="h-5 w-5" style={{ color: 'white' }} />
                  </a>
                  <a
                    href={project.github}
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

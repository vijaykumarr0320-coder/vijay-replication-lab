import { Link } from "react-router-dom";
import { User, Code, Briefcase, Mail, Download, ArrowRight } from "lucide-react";
import { useState } from "react";

const Home = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  const sections = [
    {
      title: "About Me",
      icon: User,
      description: "Learn more about my journey, education, and passion for technology. Discover my background as a Computer Science student at RV University and my dedication to solving real-world problems.",
      link: "/about",
      gradient: "from-blue-500 to-cyan-400",
      accentColor: "var(--accent-blue)",
    },
    {
      title: "Skills",
      icon: Code,
      description: "Explore my technical expertise across multiple domains - from C++, Python, and Java to the full MERN stack. See the tools and technologies I use to build scalable solutions.",
      link: "/skills",
      gradient: "from-green-500 to-emerald-400",
      accentColor: "var(--accent-green)",
    },
    {
      title: "Projects",
      icon: Briefcase,
      description: "View my portfolio of projects including EcoTrack and JobGenie. Each project demonstrates my ability to build full-stack applications with modern technologies and best practices.",
      link: "/projects",
      gradient: "from-purple-500 to-pink-400",
      accentColor: "#9b59b6",
    },
    {
      title: "Contact",
      icon: Mail,
      description: "Let's connect! Whether you have a project in mind, want to collaborate, or just want to say hello, I'm always open to new opportunities and conversations.",
      link: "/contact",
      gradient: "from-orange-500 to-red-400",
      accentColor: "#e74c3c",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center pt-16 px-4 relative"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 50%)'
        }}
      >
        <div className="container mx-auto">
          <div className="text-center space-y-8 max-w-4xl mx-auto">
            <div className="space-y-6">
              <h1 
                className="text-5xl md:text-7xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Welcome to My <span className="gradient-text">Portfolio</span>
              </h1>
              <p 
                className="text-xl md:text-2xl leading-relaxed"
                style={{ color: 'var(--text-secondary)' }}
              >
                Aspiring Backend Engineer with a strong foundation in C++ and Python, 
                complemented by hands-on experience in Node.js and Express.js.
              </p>
              <p 
                className="text-lg leading-relaxed max-w-3xl mx-auto"
                style={{ color: 'var(--text-muted)' }}
              >
                Successfully developed scalable projects like EcoTrack and JobGenie, demonstrating 
                proficiency in backend development and database management with MongoDB and MySQL.
                Currently pursuing Computer Science at RV University (2024-2028).
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center">
              <a 
                href="/Vijay_Kumar_R.pdf"
                download="Vijay_Kumar_R.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all hover:-translate-y-1"
                style={{
                  background: 'var(--gradient-primary)',
                  color: 'var(--primary-bg)',
                  fontFamily: 'var(--font-heading)',
                  boxShadow: '0 0 20px rgba(0, 212, 255, 0.3)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = 'var(--shadow-glow)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 0 20px rgba(0, 212, 255, 0.3)';
                }}
              >
                <Download className="h-5 w-5" />
                Download Resume
              </a>
              <Link 
                to="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-medium transition-all hover:-translate-y-1"
                style={{
                  background: 'transparent',
                  color: 'var(--text-primary)',
                  border: '2px solid var(--accent-blue)',
                  fontFamily: 'var(--font-heading)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = 'var(--accent-blue)';
                  e.currentTarget.style.color = 'var(--primary-bg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = 'transparent';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
              >
                <Mail className="h-5 w-5" />
                Get In Touch
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Cards Section */}
      <section className="py-20 px-4" style={{ background: 'var(--secondary-bg)' }}>
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 
              className="text-4xl md:text-5xl font-bold mb-4"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Explore My <span className="gradient-text">Journey</span>
            </h2>
            <p 
              className="text-lg"
              style={{ color: 'var(--text-secondary)' }}
            >
              Hover over each section to learn more about what I do
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {sections.map((section, index) => {
              const Icon = section.icon;
              const isHovered = hoveredCard === index;
              
              return (
                <Link
                  key={index}
                  to={section.link}
                  className="relative p-8 rounded-2xl transition-all duration-300 group"
                  style={{
                    background: isHovered ? 'var(--card-bg)' : 'rgba(30, 30, 30, 0.5)',
                    border: `2px solid ${isHovered ? section.accentColor : 'rgba(255, 255, 255, 0.1)'}`,
                    transform: isHovered ? 'translateY(-8px)' : 'translateY(0)',
                    boxShadow: isHovered ? `0 20px 40px rgba(0, 0, 0, 0.3)` : 'var(--shadow-md)'
                  }}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <div className="space-y-4">
                    <div 
                      className="w-16 h-16 rounded-xl flex items-center justify-center transition-all duration-300"
                      style={{
                        background: isHovered ? section.accentColor : 'rgba(255, 255, 255, 0.05)',
                        boxShadow: isHovered ? `0 0 30px ${section.accentColor}40` : 'none'
                      }}
                    >
                      <Icon 
                        className="h-8 w-8 transition-all duration-300" 
                        style={{ 
                          color: isHovered ? 'var(--primary-bg)' : section.accentColor 
                        }} 
                      />
                    </div>

                    <h3 
                      className="text-2xl font-bold transition-colors duration-300"
                      style={{ 
                        fontFamily: 'var(--font-heading)',
                        color: isHovered ? section.accentColor : 'var(--text-primary)'
                      }}
                    >
                      {section.title}
                    </h3>

                    <p 
                      className="leading-relaxed transition-colors duration-300"
                      style={{ 
                        color: isHovered ? 'var(--text-secondary)' : 'var(--text-muted)' 
                      }}
                    >
                      {section.description}
                    </p>

                    <div 
                      className="inline-flex items-center gap-2 font-medium transition-all duration-300"
                      style={{ 
                        color: section.accentColor,
                        transform: isHovered ? 'translateX(8px)' : 'translateX(0)'
                      }}
                    >
                      Learn More
                      <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>

                  {/* Animated gradient border effect */}
                  <div 
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `linear-gradient(135deg, ${section.accentColor}20, transparent)`,
                    }}
                  />
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Stats Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { value: "3+", label: "Projects Completed" },
              { value: "9", label: "Technologies" },
              { value: "1", label: "Years Experience" },
              { value: "100%", label: "Dedication" },
            ].map((stat, index) => (
              <div 
                key={index}
                className="p-6 text-center rounded-xl transition-all hover:-translate-y-2"
                style={{
                  background: 'var(--card-bg)',
                  border: '1px solid rgba(255, 255, 255, 0.1)'
                }}
              >
                <div 
                  className="text-4xl font-bold mb-2 gradient-text"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  {stat.value}
                </div>
                <div 
                  className="text-sm uppercase tracking-wider"
                  style={{ color: 'var(--text-secondary)' }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
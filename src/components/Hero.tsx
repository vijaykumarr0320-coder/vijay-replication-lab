import { Download, Mail, ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="min-h-screen flex items-center justify-center pt-16 px-4 relative"
      style={{
        background: 'radial-gradient(ellipse at center, rgba(0, 212, 255, 0.05) 0%, transparent 50%)'
      }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-4">
              <h1 
                className="text-5xl md:text-6xl font-bold"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Hi, I'm <span className="gradient-text">Your Name</span>
              </h1>
              <h2 
                className="text-2xl md:text-3xl font-semibold"
                style={{ 
                  color: 'var(--accent-blue)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                Aspiring Backend Engineer with C++
              </h2>
              <p 
                className="leading-relaxed text-lg"
                style={{ color: 'var(--text-secondary)' }}
              >
                Aspiring Backend Engineer with a strong foundation in C++ and Python, 
                complemented by hands-on experience in Node.js and Express.js. Successfully 
                developed scalable projects like EcoTrack and JobGenie, demonstrating 
                proficiency in backend development and database management with MongoDB and MySQL.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4">
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-1"
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
              </button>
              <button 
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-1"
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
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96 rounded-3xl overflow-hidden" style={{ boxShadow: 'var(--shadow-lg)' }}>
              <div 
                className="absolute inset-0 z-10"
                style={{ background: 'var(--gradient-secondary)' }}
              />
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
          style={{ animation: 'bounce 2s infinite' }}
        >
          <ChevronDown className="h-6 w-6" style={{ color: 'var(--accent-blue)' }} />
        </div>
      </div>
    </section>
  );
};

export default Hero;

import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      <footer 
        className="py-8 px-4 border-t"
        style={{ 
          background: 'var(--primary-bg)',
          borderColor: 'rgba(255, 255, 255, 0.1)'
        }}
      >
        <div className="container mx-auto text-center">
          <p style={{ color: 'var(--text-secondary)' }}>
            © 2025 Your Name. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => item.href.slice(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b" style={{ 
      background: 'rgba(10, 10, 10, 0.95)',
      borderColor: 'rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="text-xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
            Your Name
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className={`text-sm font-medium transition-all relative ${
                  activeSection === item.href.slice(1)
                    ? "after:w-full"
                    : "after:w-0"
                }`}
                style={{
                  color: activeSection === item.href.slice(1) ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  if (activeSection !== item.href.slice(1)) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {item.name}
                <span 
                  className="absolute bottom-[-4px] left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: activeSection === item.href.slice(1) ? '100%' : '0',
                    background: 'var(--gradient-primary)'
                  }}
                />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t" style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(item.href);
                }}
                className="block py-2 text-sm font-medium transition-colors"
                style={{
                  color: activeSection === item.href.slice(1) ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {item.name}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-lg border-b" style={{ 
      background: 'rgba(10, 10, 10, 0.95)',
      borderColor: 'rgba(255, 255, 255, 0.1)'
    }}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-xl font-bold gradient-text" style={{ fontFamily: 'var(--font-heading)' }}>
            Your Name
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-sm font-medium transition-all relative"
                style={{
                  color: isActive(item.path) ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--accent-blue)';
                }}
                onMouseLeave={(e) => {
                  if (!isActive(item.path)) {
                    e.currentTarget.style.color = 'var(--text-secondary)';
                  }
                }}
              >
                {item.name}
                <span 
                  className="absolute bottom-[-4px] left-0 h-[2px] transition-all duration-300"
                  style={{
                    width: isActive(item.path) ? '100%' : '0',
                    background: 'var(--gradient-primary)'
                  }}
                />
              </Link>
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
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sm font-medium transition-colors"
                style={{
                  color: isActive(item.path) ? 'var(--accent-blue)' : 'var(--text-secondary)',
                  fontFamily: 'var(--font-heading)'
                }}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

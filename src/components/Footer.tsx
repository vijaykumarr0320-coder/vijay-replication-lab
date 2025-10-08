import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Skills", path: "/skills" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  const socialLinks = [
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Mail, href: "mailto:your.email@example.com", label: "Email" },
  ];

  return (
    <footer 
      className="py-12 px-4 border-t"
      style={{ 
        background: 'var(--secondary-bg)',
        borderColor: 'rgba(255, 255, 255, 0.1)'
      }}
    >
      <div className="container mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 
              className="text-2xl font-bold gradient-text"
              style={{ fontFamily: 'var(--font-heading)' }}
            >
              Your Name
            </h3>
            <p 
              className="text-sm leading-relaxed"
              style={{ color: 'var(--text-secondary)' }}
            >
              Aspiring Backend Engineer passionate about building scalable solutions 
              and driving innovation through code.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-semibold"
              style={{ 
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors hover:text-accent-blue"
                    style={{ color: 'var(--text-secondary)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = 'var(--text-secondary)';
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 
              className="text-lg font-semibold"
              style={{ 
                color: 'var(--accent-green)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Connect With Me
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                    style={{
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'var(--accent-blue)';
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                  >
                    <Icon className="h-4 w-4" style={{ color: 'var(--text-primary)' }} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div 
          className="pt-8 border-t text-center"
          style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
        >
          <p 
            className="text-sm flex items-center justify-center gap-2"
            style={{ color: 'var(--text-muted)' }}
          >
            © {currentYear} Your Name. Made with 
            <Heart className="h-4 w-4" style={{ color: 'var(--accent-blue)' }} fill="currentColor" />
            and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
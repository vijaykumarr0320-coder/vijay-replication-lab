import { Mail, MapPin, Phone, Github, Linkedin, Send } from "lucide-react";
import { toast } from "sonner";
import { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "b32c7d1d-ebdd-42a0-b282-78e52101e8bb",
          ...formData
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert(
          "Thank you for your message! I will get back to you soon.\n\nNote: If this is urgent, you can also email me directly at vijaykumar.vk3105@gmail.com"
        );
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    { icon: Mail, label: "Email", value: "vijaykumar.vk3105@gmail.com" },
    { icon: Phone, label: "Phone", value: "+91 6364449593" },
    { icon: MapPin, label: "Location", value: "Bangalore, India" },
  ];

  const socialLinks = [
    { icon: Github, label: "GitHub", href: "https://github.com/Vijay-kumar2006" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/vijay-kumar-r-866213319/" },
  ];

  return (
    <section 
      id="contact" 
      className="py-20 px-4"
      style={{ background: 'var(--secondary-bg)' }}
    >
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: 'var(--font-heading)' }}
          >
            Get In Touch
          </h2>
          <p style={{ color: 'var(--text-secondary)' }}>
            Feel free to reach out for collaborations or just a friendly chat
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 
              className="text-2xl font-bold mb-2"
              style={{ 
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Contact Information
            </h3>
            <p 
              className="mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              You can reach me through any of these channels
            </p>

            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div key={index} className="flex items-start gap-4">
                    <div 
                      className="p-2 rounded-lg"
                      style={{ background: 'rgba(0, 212, 255, 0.1)' }}
                    >
                      <Icon className="h-5 w-5" style={{ color: 'var(--accent-blue)' }} />
                    </div>
                    <div>
                      <p 
                        className="font-medium"
                        style={{ fontFamily: 'var(--font-heading)' }}
                      >
                        {item.label}
                      </p>
                      <p style={{ color: 'var(--text-secondary)' }}>{item.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div>
              <p 
                className="font-medium mb-4"
                style={{ fontFamily: 'var(--font-heading)' }}
              >
                Connect with me
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:-translate-y-1"
                      style={{
                        background: 'var(--card-bg)',
                        border: '2px solid rgba(255, 255, 255, 0.1)',
                        color: 'var(--text-secondary)'
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = 'var(--accent-blue)';
                        e.currentTarget.style.color = 'var(--primary-bg)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = 'var(--card-bg)';
                        e.currentTarget.style.color = 'var(--text-secondary)';
                      }}
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div 
            className="p-8 rounded-xl"
            style={{
              background: 'var(--card-bg)',
              border: '1px solid rgba(255, 255, 255, 0.1)'
            }}
          >
            <h3 
              className="text-2xl font-bold mb-2"
              style={{ 
                color: 'var(--accent-blue)',
                fontFamily: 'var(--font-heading)'
              }}
            >
              Send a Message
            </h3>
            <p 
              className="mb-6"
              style={{ color: 'var(--text-secondary)' }}
            >
              I'll get back to you as soon as possible
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none"
                    style={{
                      background: 'var(--primary-bg)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    required
                  />
                </div>
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-sm font-medium mb-2"
                    style={{ fontFamily: 'var(--font-heading)' }}
                  >
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none"
                    style={{
                      background: 'var(--primary-bg)',
                      border: '2px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--text-primary)',
                      fontFamily: 'var(--font-body)'
                    }}
                    onFocus={(e) => {
                      e.currentTarget.style.borderColor = 'var(--accent-blue)';
                    }}
                    onBlur={(e) => {
                      e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                    }}
                    required
                  />
                </div>
              </div>

              <div>
                <label 
                  htmlFor="subject" 
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Subject
                </label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none"
                  style={{
                    background: 'var(--primary-bg)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  required
                />
              </div>

              <div>
                <label 
                  htmlFor="message" 
                  className="block text-sm font-medium mb-2"
                  style={{ fontFamily: 'var(--font-heading)' }}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl transition-all focus:outline-none resize-none"
                  style={{
                    background: 'var(--primary-bg)',
                    border: '2px solid rgba(255, 255, 255, 0.1)',
                    color: 'var(--text-primary)',
                    fontFamily: 'var(--font-body)'
                  }}
                  onFocus={(e) => {
                    e.currentTarget.style.borderColor = 'var(--accent-blue)';
                  }}
                  onBlur={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                  }}
                  required
                />
              </div>

              <button 
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-medium transition-all hover:-translate-y-1"
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
                <Send className="h-5 w-5" />
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown, Download } from 'lucide-react';

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/20 rounded-full blur-[128px] animate-glow-pulse" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/20 rounded-full blur-[128px] animate-glow-pulse" style={{ animationDelay: '1.5s' }} />

      <div className="container mx-auto px-6 relative z-10">
        <div
          className={`max-w-4xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <p className="font-mono text-primary text-sm md:text-base mb-4 animate-slide-up stagger-1">
            Hi, my name is
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-slide-up stagger-2">
            <span className="text-foreground">Harsh Kesharwani.</span>
          </h1>

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-muted-foreground mb-6 animate-slide-up stagger-3">
            I build things for the web.
          </h2>

          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mb-8 leading-relaxed animate-slide-up stagger-4">
            Full Stack Developer with{' '}
            <span className="text-primary">2 years of experience</span> in
            building scalable web and mobile applications. Proficient in{' '}
            <span className="text-primary">React, Vue.js, React Native</span>,
            and backend technologies, I specialize in delivering seamless user
            experiences and strong application performance.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 animate-slide-up stagger-5">
            <a
              href="#contact"
              className="group px-6 py-3 bg-transparent border-2 border-primary text-primary font-mono 
                         rounded-lg hover:bg-primary/10 transition-all duration-300 glow-box
                         flex items-center gap-2"
            >
              Get In Touch
              <span className="group-hover:translate-x-1 transition-transform">→</span>
            </a>
            <a
              href="/Harsh_Kesharwani_Resume.pdf"
              download="Harsh_Kesharwani_Resume.pdf"
              className="group px-6 py-3 bg-primary text-primary-foreground font-mono rounded-lg 
                         hover:bg-primary/90 transition-all duration-300 flex items-center gap-2
                         shadow-lg shadow-primary/25"
            >
              <Download size={18} className="group-hover:animate-bounce" />
              Download Resume
            </a>
            <a
              href="#experience"
              className="px-6 py-3 bg-secondary/50 text-foreground font-mono rounded-lg 
                         hover:bg-secondary transition-all duration-300 flex items-center gap-2"
            >
              View My Work
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-6 animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <a
              href="mailto:Harshkesharwani2580@gmail.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={22} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={22} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={22} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ChevronDown size={32} />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;

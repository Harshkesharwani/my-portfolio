import { Github, Linkedin, Mail, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-border/30">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center gap-4">
          {/* Social Links */}
          <div className="flex items-center gap-6">
            <a
              href="mailto:Harshkesharwani2580@gmail.com"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary hover:-translate-y-1 transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>

          {/* Attribution */}
          <p className="text-muted-foreground text-sm font-mono text-center">
            Designed & Built by{' '}
            <span className="text-primary hover:underline">Harsh Kesharwani</span>
          </p>
          
          <p className="text-muted-foreground/50 text-xs flex items-center gap-1">
            Made with <Heart size={12} className="text-destructive" /> in India
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

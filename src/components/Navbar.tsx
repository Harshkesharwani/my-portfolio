import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#education', label: 'Education' },
  { href: '#contact', label: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/50'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            &lt;HK /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Harsh_Kesharwani_Resume.pdf"
              download="Harsh_Kesharwani_Resume.pdf"
              className="px-4 py-2 border border-primary text-primary font-mono text-sm rounded 
                         hover:bg-primary/10 transition-all duration-300 glow-box"
            >
              Resume
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-foreground hover:text-primary transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50">
            <div className="flex flex-col items-center gap-6 py-8">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link font-mono text-sm"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary mr-1">0{index + 1}.</span>
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

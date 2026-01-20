import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import ThemeToggle from './ThemeToggle';

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
      <div className="container mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <a
            href="#"
            className="font-mono text-lg sm:text-xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            &lt;HK /&gt;
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-4 xl:gap-6">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                className="nav-link font-mono text-xs xl:text-sm whitespace-nowrap"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <span className="text-primary mr-1">0{index + 1}.</span>
                {link.label}
              </a>
            ))}
            <a
              href="/Harsh_Kesharwani_Resume.pdf"
              download="Harsh_Kesharwani_Resume.pdf"
              className="px-3 xl:px-4 py-2 border border-primary text-primary font-mono text-xs xl:text-sm rounded 
                         hover:bg-primary/10 transition-all duration-300 glow-box whitespace-nowrap"
            >
              Resume
            </a>
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2 sm:gap-3">
            <ThemeToggle />
            <button
              className="text-foreground hover:text-primary transition-colors p-1"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-border/50 shadow-lg">
            <div className="flex flex-col items-center gap-4 py-6 px-4">
              {navLinks.map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="nav-link font-mono text-sm py-2 w-full text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span className="text-primary mr-1">0{index + 1}.</span>
                  {link.label}
                </a>
              ))}
              <a
                href="/Harsh_Kesharwani_Resume.pdf"
                download="Harsh_Kesharwani_Resume.pdf"
                className="px-6 py-2 border border-primary text-primary font-mono text-sm rounded 
                           hover:bg-primary/10 transition-all duration-300 glow-box mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Resume
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

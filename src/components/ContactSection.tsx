import { useEffect, useRef, useState } from 'react';
import { Mail, Phone, MapPin, Send, Github, Linkedin } from 'lucide-react';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[128px]" />
      
      <div className="container mx-auto px-6">
        <div
          className={`max-w-2xl mx-auto text-center transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <span className="font-mono text-primary text-sm">05. What's Next?</span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg mb-12 max-w-lg mx-auto">
            I'm currently looking for new opportunities. Whether you have a question or just want to 
            say hi, I'll try my best to get back to you!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <a
              href="mailto:Harshkesharwani2580@gmail.com"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 
                         border-2 border-primary text-primary font-mono rounded-lg 
                         hover:bg-primary/10 transition-all duration-300 glow-box"
            >
              <Mail size={20} />
              Say Hello
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </div>

          {/* Contact Cards */}
          <div className="grid sm:grid-cols-3 gap-4 text-left">
            <a
              href="mailto:Harshkesharwani2580@gmail.com"
              className="glass-card-hover rounded-xl p-6 group"
            >
              <Mail className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-1">Email</p>
              <p className="text-foreground text-sm font-medium truncate">Harshkesharwani2580@gmail.com</p>
            </a>
            
            <a
              href="tel:+917999232409"
              className="glass-card-hover rounded-xl p-6 group"
            >
              <Phone className="w-6 h-6 text-primary mb-3 group-hover:scale-110 transition-transform" />
              <p className="text-sm text-muted-foreground mb-1">Phone</p>
              <p className="text-foreground font-medium">+91 7999232409</p>
            </a>
            
            <div className="glass-card rounded-xl p-6">
              <MapPin className="w-6 h-6 text-primary mb-3" />
              <p className="text-sm text-muted-foreground mb-1">Location</p>
              <p className="text-foreground font-medium">Champa, Chhattisgarh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

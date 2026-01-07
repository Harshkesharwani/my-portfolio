import { useEffect, useRef, useState } from 'react';
import { GraduationCap, Award, Calendar, MapPin } from 'lucide-react';

const EducationSection = () => {
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
    <section id="education" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">04.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Education</h2>
            <div className="h-px flex-1 bg-border/50 max-w-md" />
          </div>

          <div className="max-w-2xl mx-auto">
            <div className="glass-card-hover rounded-2xl p-8 relative overflow-hidden group">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:scale-125 transition-transform duration-700" />
              
              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-1">
                      Bachelor of Technology (B.Tech)
                    </h3>
                    <p className="text-primary font-medium">Computer Science and Engineering</p>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin size={16} className="text-primary" />
                    <span>Bhilai Institute of Technology, Raipur</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar size={16} className="text-primary" />
                    <span>Graduated: 2024</span>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl">
                  <Award className="w-6 h-6 text-primary" />
                  <div>
                    <p className="text-sm text-muted-foreground">Academic Performance</p>
                    <p className="text-2xl font-bold text-gradient">81.9%</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional achievements */}
            <div className="mt-8 grid sm:grid-cols-3 gap-4">
              {[
                { label: 'Years of Study', value: '4' },
                { label: 'Projects Completed', value: '10+' },
                { label: 'Certifications', value: '5+' },
              ].map((stat, index) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center group hover:border-primary/50 transition-all duration-300"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <p className="text-3xl font-bold text-gradient mb-1 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;

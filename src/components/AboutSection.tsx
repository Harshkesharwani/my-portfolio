import { useEffect, useRef, useState } from 'react';
import { Code2, Palette, Rocket, Users } from 'lucide-react';

const highlights = [
  {
    icon: Code2,
    title: 'Full-Stack Dev',
    description: 'End-to-end solutions with modern JavaScript frameworks',
  },
  {
    icon: Palette,
    title: 'UI/UX Focus',
    description: 'Creating intuitive, user-centric interfaces',
  },
  {
    icon: Rocket,
    title: 'Performance',
    description: 'Optimizing for speed and scalability',
  },
  {
    icon: Users,
    title: 'Team Player',
    description: 'Collaborative development and mentoring',
  },
];

const AboutSection = () => {
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
    <section id="about" ref={sectionRef} className="py-24 relative">
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">01.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">About Me</h2>
            <div className="h-px flex-1 bg-border/50 max-w-md" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-muted-foreground text-lg leading-relaxed">
                I'm a passionate Full Stack Developer with a strong foundation in both front-end and 
                back-end technologies. My journey in web development started during my B.Tech in 
                Computer Science, and I've been building amazing digital experiences ever since.
              </p>
              
              <p className="text-muted-foreground text-lg leading-relaxed">
                Currently at <span className="text-primary font-medium">Divyal Technology</span>, 
                I work on developing dynamic features using Vue.js, engineering complex JavaScript 
                logic, and building robust RESTful APIs with Python. I've contributed to projects 
                like Invoice Ninja, PMD, and EMS, delivering end-to-end solutions.
              </p>

              <p className="text-muted-foreground text-lg leading-relaxed">
                I specialize in translating design concepts into fully functional systems, ensuring 
                cross-platform compatibility, efficient data handling, and reliable backend integration.
              </p>

              <div className="pt-4">
                <h3 className="font-mono text-primary text-sm mb-4">Technologies I work with:</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {['JavaScript (ES6+)', 'React.js', 'Vue.js', 'React Native', 'Python', 'RESTful APIs', 'Git', 'Linux/Servers'].map(
                    (tech, index) => (
                      <div
                        key={tech}
                        className="flex items-center gap-2 text-muted-foreground text-sm"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <span className="text-primary">▹</span>
                        {tech}
                      </div>
                    )
                  )}
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="glass-card-hover rounded-xl p-6 group"
                  style={{ animationDelay: `${index * 0.15}s` }}
                >
                  <item.icon className="w-10 h-10 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

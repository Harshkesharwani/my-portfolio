import { useEffect, useRef, useState } from 'react';

const skillCategories = [
  {
    title: 'Frontend',
    skills: ['React.js', 'Vue.js', 'React Native', 'JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'Tailwind CSS'],
  },
  {
    title: 'Backend',
    skills: ['Python', 'RESTful APIs', 'Node.js', 'CRUD Operations', 'API Integration'],
  },
  {
    title: 'Tools & DevOps',
    skills: ['Git', 'Linux Servers', 'Deployment', 'Code Review'],
  },
  {
    title: 'Soft Skills',
    skills: ['Problem-Solving', 'Analytical Thinking', 'Team Collaboration', 'Time Management', 'Adaptability', 'Mentoring'],
  },
];

const SkillsSection = () => {
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
    <section id="skills" ref={sectionRef} className="py-24 relative">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[128px] animate-glow-pulse" />
      
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">03.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Skills & Technologies</h2>
            <div className="h-px flex-1 bg-border/50 max-w-md" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <div
                key={category.title}
                className="glass-card-hover rounded-xl p-6"
                style={{ animationDelay: `${categoryIndex * 0.15}s` }}
              >
                <h3 className="font-mono text-primary text-sm font-medium mb-6 flex items-center gap-2">
                  <span className="w-8 h-px bg-primary" />
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skill}
                      className="skill-tag"
                      style={{
                        animationDelay: `${(categoryIndex * 0.15) + (skillIndex * 0.05)}s`,
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Animated Skill Bars */}
          <div className="mt-16 max-w-3xl">
            <h3 className="font-mono text-primary text-sm font-medium mb-8">Proficiency Levels</h3>
            <div className="space-y-6">
              {[
                { name: 'JavaScript / TypeScript', level: 90 },
                { name: 'React / Vue.js', level: 85 },
                { name: 'React Native', level: 75 },
                { name: 'Python / Backend', level: 50 },
                { name: 'DevOps / Deployment', level: 30 },
              ].map((skill, index) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-foreground text-sm">{skill.name}</span>
                    <span className="font-mono text-primary text-sm">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-secondary rounded-full overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000 ease-out"
                      style={{
                        width: isVisible ? `${skill.level}%` : '0%',
                        background: 'linear-gradient(90deg, hsl(var(--primary)), hsl(var(--accent)))',
                        transitionDelay: `${index * 0.15}s`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;

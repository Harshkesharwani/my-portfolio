import { useEffect, useRef, useState } from 'react';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const experiences = [
  {
    title: 'Front-End Developer (Full Stack Contributor)',
    company: 'Divyal Technology',
    period: 'July 2024 – December 2025',
    location: 'Full-time',
    highlights: [
      'Developed and implemented a dynamic calendar feature using Vue.js, enabling users to efficiently schedule, manage, and track events.',
      'Engineered complex JavaScript logic to support recurring events, time zone conversions, validations, and real-time updates.',
      'Designed, integrated, and enhanced RESTful APIs, contributing to backend development using Python.',
      'Worked on Invoice Ninja, adding searchable dropdowns with filter functionality and fixing CSS issues.',
      'Contributed to PMD by developing Vue.js UI modules and implementing backend CRUD operations.',
      'Built complete modules for EMS, developing the UI with full functionality and creating/modifying APIs.',
      'Deployed applications on Linux-based servers, handling environment setup and production releases.',
      'Conducted code reviews and mentored junior developers, promoting best practices.',
    ],
  },
  {
    title: 'Front-End Developer Intern',
    company: 'Rail World, Raipur',
    period: 'May 2023 – June 2024',
    location: 'Internship',
    highlights: [
      'SAFAR – CAB SERVICE: Developed responsive cab service web and mobile application using React.js and React Native.',
      'Implemented real-time data updates using web sockets and Apache Kafka to track live ride status.',
      'Integrated RESTful APIs to fetch and display live data, enabling smooth booking and user interactions.',
      'Built reusable UI components to improve code maintainability and development speed.',
      'Optimized application performance for faster load times and smoother navigation.',
      'Debugged and resolved functional and UI issues across web and mobile platforms.',
    ],
  },
];

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative">
      <div className="absolute top-1/2 -left-64 w-96 h-96 bg-accent/10 rounded-full blur-[128px] animate-glow-pulse" />
      
      <div className="container mx-auto px-6">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <div className="flex items-center gap-4 mb-12">
            <span className="font-mono text-primary">02.</span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground">Where I've Worked</h2>
            <div className="h-px flex-1 bg-border/50 max-w-md" />
          </div>

          <div className="grid lg:grid-cols-[200px_1fr] gap-8">
            {/* Tabs */}
            <div className="flex lg:flex-col overflow-x-auto lg:overflow-visible border-b lg:border-b-0 lg:border-l border-border/50">
              {experiences.map((exp, index) => (
                <button
                  key={exp.company}
                  onClick={() => setActiveIndex(index)}
                  className={`px-6 py-4 text-left font-mono text-sm whitespace-nowrap transition-all duration-300 relative
                    ${activeIndex === index 
                      ? 'text-primary bg-primary/5' 
                      : 'text-muted-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                >
                  {activeIndex === index && (
                    <span className="absolute left-0 lg:left-0 bottom-0 lg:top-0 w-full lg:w-0.5 h-0.5 lg:h-full bg-primary" />
                  )}
                  {exp.company}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="min-h-[400px]">
              {experiences.map((exp, index) => (
                <div
                  key={exp.company}
                  className={`transition-all duration-500 ${
                    activeIndex === index 
                      ? 'opacity-100 translate-x-0' 
                      : 'opacity-0 translate-x-4 absolute'
                  }`}
                  style={{ display: activeIndex === index ? 'block' : 'none' }}
                >
                  <h3 className="text-xl font-semibold text-foreground mb-1">
                    {exp.title}
                    <span className="text-primary"> @ {exp.company}</span>
                  </h3>

                  <div className="flex flex-wrap gap-4 text-muted-foreground text-sm font-mono mb-6">
                    <span className="flex items-center gap-1">
                      <Calendar size={14} className="text-primary" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin size={14} className="text-primary" />
                      {exp.location}
                    </span>
                  </div>

                  <ul className="space-y-4">
                    {exp.highlights.map((highlight, i) => (
                      <li key={i} className="flex gap-3 text-muted-foreground">
                        <span className="text-primary mt-1.5 shrink-0">▹</span>
                        <span className="leading-relaxed">{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;

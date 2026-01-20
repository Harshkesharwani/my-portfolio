import { motion } from 'framer-motion';
import { ExternalLink, Code, Filter, Calendar, BarChart3, Settings } from 'lucide-react';

const projects = [
  {
    title: "PMD",
    subtitle: "Project Management Dashboard",
    description: "Designed and developed user-friendly UI/UX for a project management dashboard with real-time data display.",
    features: [
      "Integrated RESTful APIs to display real-time project, task, and user data",
      "Modified and optimized APIs to improve frontend data handling",
      "Used Git for version control, branch management, and code collaboration",
      "Deployed frontend updates to production server and ensured smooth releases"
    ],
    skills: ["Vue.js", "Python", "REST APIs", "Git"],
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "EMS",
    subtitle: "Event Management System",
    description: "Developed a complete module from scratch, starting from UI sketches to production deployment.",
    features: [
      "Built fully responsive user interface for cross-device compatibility",
      "Implemented advanced search functionality for efficient data filtering",
      "Designed custom responsive calendar with single-date, date-range, and Ctrl-key multi-date selection",
      "Developed and modified Laravel APIs (GET, POST) for dynamic data handling"
    ],
    skills: ["Vue.js", "Laravel", "REST APIs", "Custom Calendar"],
    icon: Calendar,
    gradient: "from-orange-500 to-red-500"
  },
  {
    title: "SAFAR",
    subtitle: "Cab Service Web & Mobile App",
    description: "Developed a responsive cab service web and mobile application ensuring consistent user experience across platforms.",
    features: [
      "Implemented real-time data updates using web sockets and Apache Kafka",
      "Integrated RESTful APIs for live ride status and dynamic data changes",
      "Built reusable UI components to improve code maintainability",
      "Optimized application performance for faster load times"
    ],
    skills: ["React.js", "React Native", "Laravel", "WebSockets"],
    icon: Filter,
    gradient: "from-blue-500 to-cyan-500"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const
    }
  }
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 px-6 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-32 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-64 h-64 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            <span className="text-glow">Projects</span>
          </h2>
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <Code className="w-5 h-5" />
            <span className="font-mono text-sm">Divyal Technology</span>
          </div>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Key projects I've contributed to, focusing on UI enhancement, API integration, and performance optimization
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              variants={cardVariants}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full border border-white/10 hover:border-primary/30 transition-colors duration-300">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-20`}>
                    <project.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="p-2 rounded-lg bg-white/5">
                    <ExternalLink className="w-4 h-4 text-muted-foreground" />
                  </div>
                </div>

                {/* Title */}
                <h3 className={`text-xl font-display font-bold mb-1 bg-gradient-to-r ${project.gradient} bg-clip-text text-transparent`}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-3 font-mono">
                  {project.subtitle}
                </p>

                {/* Description */}
                <p className="text-foreground/80 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <ul className="space-y-2 mb-6">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start gap-2 text-sm text-muted-foreground"
                    >
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.gradient} mt-1.5 flex-shrink-0`} />
                      {feature}
                    </li>
                  ))}
                </ul>

                {/* Skills tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-2 py-1 text-xs font-mono rounded-full bg-white/5 text-muted-foreground border border-white/10"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom decoration */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
            <Settings className="w-4 h-4 text-primary animate-spin-slow" />
            <span className="text-sm text-muted-foreground font-mono">
              Continuously learning & building
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

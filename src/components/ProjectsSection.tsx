import { motion } from 'framer-motion';
import { ExternalLink, Code, Filter, Calendar, BarChart3, Settings } from 'lucide-react';

const projects = [
  {
    title: "Invoice Ninja",
    subtitle: "Functional Enhancements",
    description: "Modified and enhanced existing functionalities of the Invoice Ninja system to improve usability and performance.",
    features: [
      "Implemented advanced dropdown filters for faster and more accurate data selection",
      "Optimized UI components for better user experience and smoother workflows",
      "Worked closely with APIs to ensure correct data binding and reliable responses"
    ],
    skills: ["UI Enhancement", "Dropdown Filters", "API Integration", "Frontend Optimization"],
    icon: Filter,
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    title: "PMD",
    subtitle: "Project Management Dashboard",
    description: "Integrated multiple APIs to display project-specific data dynamically based on user requirements.",
    features: [
      "Enhanced complex UI by restructuring layouts and improving component interactions",
      "Improved application functionality by refining API responses and handling edge cases",
      "Ensured accurate data rendering, filtering, and real-time updates across dashboard views"
    ],
    skills: ["API Integration", "Complex UI Handling", "Data Visualization", "Performance Optimization"],
    icon: BarChart3,
    gradient: "from-purple-500 to-pink-500"
  },
  {
    title: "EMS",
    subtitle: "Event Management System",
    description: "Integrated backend APIs to fetch and display event data according to user-defined criteria.",
    features: [
      "Enhanced complex UI components to improve usability and overall system performance",
      "Designed and implemented a custom date picker with date range selection",
      "Optimized API data handling to ensure consistent and accurate responses"
    ],
    skills: ["Custom Components", "Date Range Picker", "API Optimization", "UI/UX Enhancement"],
    icon: Calendar,
    gradient: "from-orange-500 to-red-500"
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

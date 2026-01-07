import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        duration: 0.6, 
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;

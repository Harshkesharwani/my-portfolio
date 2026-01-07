import { Helmet } from 'react-helmet-async';
import { AnimatePresence } from 'framer-motion';
import ParticleBackground from '@/components/ParticleBackground';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import EducationSection from '@/components/EducationSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import SectionWrapper from '@/components/SectionWrapper';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Harsh Kesharwani | Full Stack Developer</title>
        <meta
          name="description"
          content="Full Stack Developer with 2 years of experience in React, Vue.js, React Native, and Python. Building scalable web and mobile applications."
        />
        <meta
          name="keywords"
          content="Harsh Kesharwani, Full Stack Developer, React Developer, Vue.js, React Native, Python, Web Developer, Portfolio"
        />
        <meta property="og:title" content="Harsh Kesharwani | Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer specializing in React, Vue.js, and modern web technologies."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://harshkesharwani.dev" />
      </Helmet>

      <div className="min-h-screen relative">
        <ParticleBackground />
        <Navbar />
        <AnimatePresence>
          <main>
            <HeroSection />
            <SectionWrapper>
              <AboutSection />
            </SectionWrapper>
            <SectionWrapper>
              <ExperienceSection />
            </SectionWrapper>
            <SectionWrapper>
              <ProjectsSection />
            </SectionWrapper>
            <SectionWrapper>
              <SkillsSection />
            </SectionWrapper>
            <SectionWrapper>
              <EducationSection />
            </SectionWrapper>
            <SectionWrapper>
              <ContactSection />
            </SectionWrapper>
          </main>
        </AnimatePresence>
        <Footer />
      </div>
    </>
  );
};

export default Index;

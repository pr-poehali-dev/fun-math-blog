import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import GamesSection from '@/components/GamesSection';
import FactsContestsSection from '@/components/FactsContestsSection';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-muted">
      <Navigation onNavigate={scrollToSection} />
      <HeroSection onNavigate={scrollToSection} />
      <GamesSection />
      <FactsContestsSection />
    </div>
  );
}

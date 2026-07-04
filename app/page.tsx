import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturesSection from '@/components/FeaturesSection';
import StatsGrid from '@/components/StatsGrid';
import TerminalPanel from '@/components/TerminalPanel';
import PhilosophySection from '@/components/PhilosophySection';
import CTASection from '@/components/CTASection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-void">
      <Navbar />
      <Hero />
      <FeaturesSection />
      <StatsGrid />
      <TerminalPanel />
      <PhilosophySection />
      <CTASection />
      <Footer />
    </main>
  );
}

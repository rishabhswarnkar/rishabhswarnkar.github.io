import Hero from '@/components/Hero';
import TrustedLogos from '@/components/TrustedLogos';
import ProblemSolution from '@/components/ProblemSolution';
import FeatureGrid from '@/components/FeatureGrid';
import ROICalculator from '@/components/ROICalculator';
import Testimonial from '@/components/Testimonial';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TrustedLogos />
      <ProblemSolution />
      <FeatureGrid />
      <ROICalculator />
      <Testimonial />
      <CTA />
      <Footer />
    </main>
  );
}

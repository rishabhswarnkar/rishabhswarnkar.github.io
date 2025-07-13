import { Quote } from 'lucide-react';

export default function Testimonial() {
  return (
    <section className="py-20 bg-navy">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-gold" />
        </div>
        
        <blockquote className="text-2xl md:text-3xl font-medium text-white mb-8 leading-relaxed">
          &ldquo;BuilderEdge transformed our warranty process from a cost center into a revenue generator. 
          We&apos;re seeing a 40% increase in upgrade sales during warranty interactions.&rdquo;
        </blockquote>
        
        <div className="flex items-center justify-center gap-4">
          <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center">
            <span className="text-navy font-bold text-xl">JS</span>
          </div>
          <div className="text-left">
            <div className="text-white font-semibold">John Smith</div>
            <div className="text-gold">Division Sales VP</div>
            <div className="text-white/70 text-sm">Example Builder</div>
          </div>
        </div>
      </div>
    </section>
  );
}
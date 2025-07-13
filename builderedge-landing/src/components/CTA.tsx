import { Calendar } from 'lucide-react';

export default function CTA() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-navy mb-6">
          Ready to Transform Your Warranty Operations?
        </h2>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          See how BuilderEdge can turn warranty costs into upgrade revenue for your business.
        </p>
        
        <button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 rounded-lg flex items-center gap-2 mx-auto transition-all duration-200 transform hover:scale-105">
          <Calendar className="w-5 h-5" />
          Book a 15-min Demo
        </button>
      </div>
    </section>
  );
}
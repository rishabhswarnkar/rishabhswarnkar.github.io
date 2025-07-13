'use client';

import { ArrowRight, Download } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-navy to-navy/90 overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-black/20 z-0"></div>
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
      }}></div>
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          Turn Warranty Costs into{' '}
          <span className="text-gold">Upgrade Revenue</span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
          Enterprise SaaS that combines warranty management and upgrade-sales automation for large U.S. homebuilders.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="bg-gold hover:bg-gold/90 text-navy font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-200 transform hover:scale-105">
            Request Demo
            <ArrowRight className="w-5 h-5" />
          </button>
          
          <button className="border-2 border-white text-white hover:bg-white hover:text-navy font-semibold px-8 py-4 rounded-lg flex items-center gap-2 transition-all duration-200">
            <Download className="w-5 h-5" />
            Download One-Pager
          </button>
        </div>
      </div>
    </section>
  );
}
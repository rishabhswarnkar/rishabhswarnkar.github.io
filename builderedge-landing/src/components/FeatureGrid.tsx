import { Shield, Calendar, Brain, Monitor } from 'lucide-react';

export default function FeatureGrid() {
  const features = [
    {
      icon: Shield,
      title: 'WarrantyPro',
      description: 'Intelligent ticket intake and SLA dashboard with automated routing and real-time tracking.',
      color: 'bg-blue-50 border-blue-200 text-blue-700'
    },
    {
      icon: Calendar,
      title: 'Trade Scheduler',
      description: 'Coming soon: Automated scheduling and coordination for warranty trade partners.',
      color: 'bg-purple-50 border-purple-200 text-purple-700',
      comingSoon: true
    },
    {
      icon: Brain,
      title: 'OptionOptimizer',
      description: 'AI-powered upgrade engine that recommends relevant options during warranty interactions.',
      color: 'bg-green-50 border-green-200 text-green-700'
    },
    {
      icon: Monitor,
      title: 'Live SLA Widget',
      description: 'Sales enablement tool with real-time SLA status and customer communication.',
      color: 'bg-orange-50 border-orange-200 text-orange-700'
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            Powerful Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive tools to transform your warranty operations into revenue opportunities
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl border-2 ${feature.color} hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-lg ${feature.color.replace('50', '100')} flex-shrink-0`}>
                  <feature.icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className="text-xl font-semibold">{feature.title}</h3>
                    {feature.comingSoon && (
                      <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
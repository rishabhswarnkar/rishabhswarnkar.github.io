import { AlertTriangle, DollarSign, Users, CheckCircle, Zap, Shield } from 'lucide-react';

export default function ProblemSolution() {
  const problems = [
    {
      icon: AlertTriangle,
      title: 'Warranty Chaos',
      description: 'Disorganized ticket intake, missed SLAs, and escalating costs'
    },
    {
      icon: DollarSign,
      title: 'Upgrade Revenue Leakage',
      description: 'Lost opportunities during warranty interactions with buyers'
    },
    {
      icon: Users,
      title: 'Buyer Anxiety',
      description: 'Poor customer experience during warranty processes'
    }
  ];

  const solutions = [
    {
      icon: CheckCircle,
      title: 'Streamlined WarrantyPro',
      description: 'Automated ticket intake with intelligent routing and SLA tracking'
    },
    {
      icon: Zap,
      title: 'AI-Powered OptionOptimizer',
      description: 'Smart upgrade recommendations during warranty interactions'
    },
    {
      icon: Shield,
      title: 'Enhanced Customer Experience',
      description: 'Seamless warranty-to-upgrade journey with real-time communication'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-navy mb-4">
            From Problems to Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We transform warranty challenges into revenue opportunities
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Problems Column */}
          <div>
            <h3 className="text-2xl font-semibold text-red-600 mb-8 flex items-center gap-2">
              <AlertTriangle className="w-6 h-6" />
              Key Challenges
            </h3>
            <div className="space-y-6">
              {problems.map((problem, index) => (
                <div key={index} className="flex gap-4 p-6 bg-red-50 rounded-lg border border-red-100">
                  <problem.icon className="w-6 h-6 text-red-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-red-700 mb-2">{problem.title}</h4>
                    <p className="text-red-600">{problem.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-2xl font-semibold text-green-600 mb-8 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              BuilderEdge Solutions
            </h3>
            <div className="space-y-6">
              {solutions.map((solution, index) => (
                <div key={index} className="flex gap-4 p-6 bg-green-50 rounded-lg border border-green-100">
                  <solution.icon className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-700 mb-2">{solution.title}</h4>
                    <p className="text-green-600">{solution.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
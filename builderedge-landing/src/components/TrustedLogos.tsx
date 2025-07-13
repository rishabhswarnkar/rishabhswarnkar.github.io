export default function TrustedLogos() {
  const logos = [
    { name: 'Lennar', placeholder: 'LENNAR' },
    { name: 'Toll Brothers', placeholder: 'TOLL BROTHERS' },
    { name: 'KB Home', placeholder: 'KB HOME' },
    { name: 'Kiper', placeholder: 'KIPER' },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-gray-600 mb-2">
            Trusted by Leading Homebuilders
          </h2>
          <p className="text-gray-500">
            Serving the largest U.S. homebuilding companies
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="w-32 h-16 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <span className="text-navy font-semibold text-sm text-center">
                {logo.placeholder}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
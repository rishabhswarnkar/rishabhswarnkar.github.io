export default function Footer() {
  const links = [
    { name: 'Product', href: '#' },
    { name: 'Pricing', href: '#' },
    { name: 'Docs', href: '#' },
    { name: 'Privacy', href: '#' },
    { name: 'Contact', href: '#' },
  ];

  return (
    <footer className="bg-navy text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-gold mb-2">BuilderEdge</h3>
            <p className="text-white/70">
              Transforming warranty costs into upgrade revenue
            </p>
          </div>
          
          <nav className="flex flex-wrap gap-6 mb-6 md:mb-0">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-white/70 hover:text-gold transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div className="border-t border-white/20 pt-8 mt-8 text-center">
          <p className="text-white/60">
            © 2025 BuilderEdge. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
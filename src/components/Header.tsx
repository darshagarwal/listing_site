import { useState } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { siteMetadata } from '../data/siteContent';

interface HeaderProps {
  currentPage?: string;
}

export default function Header({ currentPage = 'home' }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Properties to Let', href: '#properties' },
    { label: 'Landlord Services', href: '#landlords' },
    { label: 'Tenant Information', href: '#tenants' },
    { label: 'About Us', href: '#about' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="bg-slate-800 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-end items-center gap-6 text-sm">
            <a href={`tel:${siteMetadata.phone}`} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <Phone size={14} />
              <span>{siteMetadata.phone}</span>
            </a>
            <a href={`mailto:${siteMetadata.email}`} className="flex items-center gap-2 hover:text-slate-300 transition-colors">
              <Mail size={14} />
              <span className="hidden sm:inline">{siteMetadata.email}</span>
            </a>
          </div>
        </div>
      </div>

      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <a href="#home" className="flex items-center gap-3">
              <img src="/image.png" alt="IK Real Estate Agency" className="h-12 w-auto" />
            </a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-slate-600 hover:text-slate-900 font-medium transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="block py-2 text-slate-600 hover:text-slate-900 font-medium transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

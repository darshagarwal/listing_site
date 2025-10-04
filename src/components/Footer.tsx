import { Facebook, Twitter, Linkedin, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import { siteMetadata } from '../data/siteContent';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-xl font-bold mb-4">IK Real Estate Agency</h3>
            <p className="text-sm leading-relaxed mb-4">
              Independent letting and property management agent covering Oxford and surrounding areas.
              ARLA members with over 20 years combined experience.
            </p>
            <div className="flex gap-4">
              <a
                href={siteMetadata.social.facebook}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href={siteMetadata.social.twitter}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={20} />
              </a>
              <a
                href={siteMetadata.social.linkedin}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={siteMetadata.social.instagram}
                className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center hover:bg-slate-700 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact Information</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="flex-shrink-0 mt-0.5" />
                <div>
                  <p>{siteMetadata.address.line1}</p>
                  <p>{siteMetadata.address.line2}</p>
                  <p>{siteMetadata.address.line3}</p>
                  <p>{siteMetadata.address.city}, {siteMetadata.address.postcode}</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone size={18} className="flex-shrink-0" />
                <a href={`tel:${siteMetadata.phone}`} className="hover:text-white transition-colors">
                  {siteMetadata.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail size={18} className="flex-shrink-0" />
                <a href={`mailto:${siteMetadata.email}`} className="hover:text-white transition-colors">
                  {siteMetadata.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock size={18} className="flex-shrink-0" />
                <span>{siteMetadata.hours}</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#home" className="hover:text-white transition-colors">Home</a>
              </li>
              <li>
                <a href="#properties" className="hover:text-white transition-colors">Properties to Let</a>
              </li>
              <li>
                <a href="#landlords" className="hover:text-white transition-colors">Landlord Services</a>
              </li>
              <li>
                <a href="#tenants" className="hover:text-white transition-colors">Tenant Information</a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">About Us</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} IK Real Estate Agency. All rights reserved.</p>
          <p className="mt-2">
            Member of ARLA (Association of Residential Letting Agents)
          </p>
        </div>
      </div>
    </footer>
  );
}

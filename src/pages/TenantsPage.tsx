import { Search, Eye, FileText, Headphones } from 'lucide-react';
import { tenantContent } from '../data/siteContent';
import Button from '../components/Button';

export default function TenantsPage() {
  const sectionIcons = [Search, Eye, FileText, Headphones];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {tenantContent.heading}
          </h1>
          <p className="text-xl text-slate-300">
            Find your perfect rental property in Oxford
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            {tenantContent.intro}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          How It Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {tenantContent.sections.map((section, index) => {
            const Icon = sectionIcons[index];
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <span className="w-8 h-8 bg-slate-800 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <h3 className="text-xl font-bold text-slate-900">
                        {section.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-blue-50 rounded-xl p-8 md:p-12 mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            What We Offer Tenants
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Wide range of quality properties across Oxford and surrounding areas
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Professional and friendly service throughout your tenancy
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Clear and transparent application process
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Expert local knowledge to help you find the right area
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Prompt response to maintenance issues and queries
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0" />
              <p className="text-slate-700">
                Regular property updates matching your requirements
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-800 text-white rounded-xl p-12 text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Find Your New Home?
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Browse our current properties or register your requirements to be notified of new listings
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#properties" variant="secondary" size="lg">
              View Available Properties
            </Button>
            <Button href="#contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              Register Your Requirements
            </Button>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Have Questions?
          </h2>
          <p className="text-lg text-slate-700 text-center max-w-2xl mx-auto mb-8">
            Our experienced team is here to help. Get in touch today to discuss your rental requirements.
          </p>
          <div className="text-center">
            <Button href="#contact" variant="primary" size="lg">
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

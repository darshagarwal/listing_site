import { Building2, Wrench, Shield, TrendingUp, FileCheck, Users } from 'lucide-react';
import { landlordContent } from '../data/siteContent';
import Button from '../components/Button';

export default function LandlordsPage() {
  const serviceIcons = [Building2, Wrench, TrendingUp, Shield, FileCheck, Users];

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {landlordContent.heading}
          </h1>
          <p className="text-xl text-slate-300">
            Professional property management services in Oxford
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            {landlordContent.intro}
          </p>
        </div>

        <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {landlordContent.services.map((service, index) => {
            const Icon = serviceIcons[index];
            return (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Icon size={28} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="bg-slate-800 text-white rounded-xl p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Why Choose Chesterton Yeates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  Over 20 years combined experience in lettings
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  ARLA members ensuring professional standards
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  Extensive local knowledge of Oxfordshire
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  Personal, bespoke service tailored to you
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  Fully compliant with all current legislation
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0" />
                <p className="text-slate-200">
                  Landlords ourselves with real understanding
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="#contact" variant="secondary" size="lg">
                Request a Valuation
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-16 bg-white rounded-xl shadow-md p-8 md:p-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-6 text-center">
            Free Expert Valuation
          </h2>
          <p className="text-lg text-slate-700 leading-relaxed text-center max-w-3xl mx-auto mb-8">
            Book us to visit your property and have an expert valuation completely free.
            We'll provide professional advice on rental potential and help you understand the Oxford lettings market.
          </p>
          <div className="text-center">
            <Button href="#contact" variant="primary" size="lg">
              Book Your Free Valuation
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

import { ArrowLeft, MapPin, Bed, Bath, Home, CheckCircle, Mail, Phone, User } from 'lucide-react';
import { Property } from '../data/properties';
import Button from '../components/Button';
import { useState } from 'react';

interface PropertyDetailPageProps {
  property: Property;
  onBack: () => void;
}

export default function PropertyDetailPage({ property, onBack }: PropertyDetailPageProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Back to Properties</span>
          </button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                {property.address}
              </h1>
              <p className="text-2xl font-bold text-slate-900 mb-4">
                {property.priceDisplay}
              </p>
              <p className="text-slate-600 flex items-center gap-2">
                <MapPin size={18} />
                {property.location}
              </p>
            </div>

            <div className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center text-slate-500">
                <MapPin size={64} className="mx-auto mb-2 opacity-50" />
                <p>Map View</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-4">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="bg-slate-200 rounded-lg aspect-video flex items-center justify-center">
                  <Home size={32} className="text-slate-400" />
                </div>
              ))}
            </div>

            <div className="bg-white rounded-lg shadow-md p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Property Details</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Bed size={24} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Bedrooms</p>
                    <p className="font-semibold text-slate-900">{property.bedrooms}</p>
                  </div>
                </div>
                {property.bathrooms && (
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                      <Bath size={24} className="text-slate-600" />
                    </div>
                    <div>
                      <p className="text-sm text-slate-500">Bathrooms</p>
                      <p className="font-semibold text-slate-900">{property.bathrooms}</p>
                    </div>
                  </div>
                )}
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-100 rounded-lg flex items-center justify-center">
                    <Home size={24} className="text-slate-600" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Property Type</p>
                    <p className="font-semibold text-slate-900">{property.propertyType}</p>
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-200 pt-6">
                <h3 className="font-semibold text-slate-900 mb-3">Description</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  {property.description}
                </p>
                {property.details && (
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-3">Key Features</h3>
                    <ul className="space-y-2">
                      {property.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle size={18} className="text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-slate-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {property.details?.furnishing && (
                <div className="border-t border-slate-200 pt-6 mt-6">
                  <h3 className="font-semibold text-slate-900 mb-3">Additional Information</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="text-slate-500">Furnishing</p>
                      <p className="font-medium text-slate-900">{property.details.furnishing}</p>
                    </div>
                    {property.details.availableDate && (
                      <div>
                        <p className="text-slate-500">Available From</p>
                        <p className="font-medium text-slate-900">{property.details.availableDate}</p>
                      </div>
                    )}
                    {property.details.deposit && (
                      <div>
                        <p className="text-slate-500">Deposit</p>
                        <p className="font-medium text-slate-900">{property.details.deposit}</p>
                      </div>
                    )}
                    {property.details.councilTaxBand && (
                      <div>
                        <p className="text-slate-500">Council Tax Band</p>
                        <p className="font-medium text-slate-900">{property.details.councilTaxBand}</p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-24">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Request a Viewing</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="John Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-1">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-1">
                    Phone
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="07xxx xxx xxx"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="I would like to arrange a viewing..."
                  />
                </div>

                <Button type="submit" variant="primary" className="w-full">
                  Submit Enquiry
                </Button>
              </form>

              <div className="mt-6 pt-6 border-t border-slate-200">
                <p className="text-sm text-slate-600 mb-3">Or contact us directly:</p>
                <div className="space-y-2">
                  <a href="tel:01865338080" className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                    <Phone size={16} />
                    <span>01865 338080</span>
                  </a>
                  <a href="mailto:lettings@ikrealestate.co.uk" className="flex items-center gap-2 text-sm text-slate-700 hover:text-slate-900">
                    <Mail size={16} />
                    <span>lettings@ikrealestate.co.uk</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

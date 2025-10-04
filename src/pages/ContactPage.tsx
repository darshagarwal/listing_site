import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { siteMetadata, contactContent } from '../data/siteContent';
import Button from '../components/Button';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    contactMethod: 'Email',
    enquiryType: 'Renting',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your enquiry. We will be in touch shortly.');
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {contactContent.heading}
          </h1>
          <p className="text-xl text-slate-300">
            Get in touch with our experienced team
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Get in Touch
            </h2>

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-md p-8 space-y-6">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {contactContent.formFields.contactMethod.label}
                </label>
                <select
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.contactMethod}
                  onChange={(e) => setFormData({ ...formData, contactMethod: e.target.value })}
                >
                  {contactContent.formFields.contactMethod.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  {contactContent.formFields.enquiryType.label}
                </label>
                <select
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.enquiryType}
                  onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                >
                  {contactContent.formFields.enquiryType.options.map(option => (
                    <option key={option} value={option}>{option}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Additional Notes
                </label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </div>

              <p className="text-sm text-slate-600">
                {contactContent.privacyNotice}
              </p>

              <Button type="submit" variant="primary" size="lg" className="w-full">
                <Send size={20} className="mr-2" />
                Send Enquiry
              </Button>
            </form>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-slate-900 mb-6">
              Contact Information
            </h2>

            <div className="bg-white rounded-xl shadow-md p-8 space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Office Address</h3>
                  <p className="text-slate-700">
                    {siteMetadata.address.line1}<br />
                    {siteMetadata.address.line2}<br />
                    {siteMetadata.address.line3}<br />
                    {siteMetadata.address.city}, {siteMetadata.address.postcode}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Phone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Phone</h3>
                  <a
                    href={`tel:${siteMetadata.phone}`}
                    className="text-slate-700 hover:text-blue-600 transition-colors"
                  >
                    {siteMetadata.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Email</h3>
                  <a
                    href={`mailto:${siteMetadata.email}`}
                    className="text-slate-700 hover:text-blue-600 transition-colors break-all"
                  >
                    {siteMetadata.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-blue-600" />
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Opening Hours</h3>
                  <p className="text-slate-700">{siteMetadata.hours}</p>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-white rounded-xl shadow-md p-8">
              <h3 className="font-semibold text-slate-900 mb-4">Find Us</h3>
              <div className="aspect-video bg-slate-200 rounded-lg flex items-center justify-center">
                <MapPin size={48} className="text-slate-400" />
              </div>
              <p className="text-sm text-slate-600 mt-4">
                Located at Oxford Science Park, easily accessible from Oxford city centre and surrounding areas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

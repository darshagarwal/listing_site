import { Building2, Shield, TrendingUp, CheckCircle2, Quote } from 'lucide-react';
import { homeContent } from '../data/siteContent';
import { properties } from '../data/properties';
import PropertyCard from '../components/PropertyCard';
import Button from '../components/Button';

export default function HomePage() {
  const featuredProperties = properties.filter(p => p.featured).slice(0, 3);

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-800 via-slate-700 to-slate-900 text-white py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
              {homeContent.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-200 mb-8 leading-relaxed">
              {homeContent.hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button href="#properties" variant="secondary" size="lg">
                View Properties
              </Button>
              <Button href="#contact" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              Welcome to Chesterton Yeates
            </h2>
            <div className="text-lg text-slate-700 leading-relaxed space-y-4 text-left">
              {homeContent.welcome.text.split('\n\n').map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Why Choose Us?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.features.map((feature, index) => {
              const icons = [Building2, Shield, TrendingUp];
              const Icon = icons[index];

              return (
                <div key={index} className="bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-shadow duration-300">
                  <div className="w-14 h-14 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                    <Icon size={28} className="text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="properties" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                Featured Properties
              </h2>
              <p className="text-lg text-slate-600">
                Discover our handpicked selection of properties
              </p>
            </div>
            <Button href="#properties" variant="outline">
              View All Properties
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-slate-900 mb-12">
            Customer Testimonials
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {homeContent.testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white rounded-xl p-8 shadow-md relative">
                <Quote className="text-blue-600 opacity-20 absolute top-6 right-6" size={48} />
                <p className="text-slate-700 leading-relaxed mb-6 relative z-10">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center">
                    <span className="text-slate-600 font-semibold text-lg">
                      {testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {testimonial.author}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-slate-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Find Your Perfect Property?
          </h2>
          <p className="text-xl text-slate-300 mb-8 leading-relaxed">
            Get in touch with our experienced team today for expert advice and personalized service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button href="#contact" variant="secondary" size="lg">
              Contact Us Today
            </Button>
            <Button href="#about" variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-slate-900">
              Learn More About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

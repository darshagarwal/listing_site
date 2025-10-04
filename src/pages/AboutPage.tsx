import { Users, Award, Heart, CheckCircle2 } from 'lucide-react';
import { aboutContent } from '../data/siteContent';
import Button from '../components/Button';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-slate-50">
      <div className="bg-slate-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            {aboutContent.heading}
          </h1>
          <p className="text-xl text-slate-300">
            Meet the team behind Chesterton Yeates
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
          <p className="text-lg text-slate-700 leading-relaxed">
            {aboutContent.overview}
          </p>
        </div>

        <div className="mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {aboutContent.team.map((member, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-start gap-6">
                  <div className="w-20 h-20 bg-slate-200 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users size={36} className="text-slate-600" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-blue-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-slate-700 leading-relaxed">
                      {member.bio}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-8 md:p-12 mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">
            {aboutContent.values.heading}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {aboutContent.values.items.map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle2 size={24} className="text-blue-600 flex-shrink-0 mt-1" />
                <p className="text-lg text-slate-700 leading-relaxed">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              ARLA Members
            </h3>
            <p className="text-slate-600">
              Proud members of the Association of Residential Letting Agents
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              20+ Years Experience
            </h3>
            <p className="text-slate-600">
              Combined experience in the lettings industry
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-md p-8 text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Heart size={32} className="text-blue-600" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">
              Personal Service
            </h3>
            <p className="text-slate-600">
              Dedicated to providing bespoke, professional service
            </p>
          </div>
        </div>

        <div className="mt-16 bg-slate-800 text-white rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Us?
          </h2>
          <p className="text-xl text-slate-300 mb-8">
            Get in touch with our experienced team today
          </p>
          <Button href="#contact" variant="secondary" size="lg">
            Contact Us Today
          </Button>
        </div>
      </div>
    </div>
  );
}

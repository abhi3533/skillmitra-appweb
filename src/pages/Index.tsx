
import { Mail, Rocket, Target, Users, Calendar, Award, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ContactSection from '@/components/ContactSection';
import HiringSection from '@/components/HiringSection';

const Index = () => {
  const advantages = [
    {
      icon: Users,
      title: "Choose Your Trainer",
      description: "Students select trainers based on skill, reviews, and pricing"
    },
    {
      icon: Calendar,
      title: "Live 1-on-1 Classes",
      description: "Video sessions with no pre-recorded content"
    },
    {
      icon: Calendar,
      title: "Flexible Scheduling",
      description: "Convenient timing between trainer and student"
    },
    {
      icon: Award,
      title: "Verified Certification",
      description: "Issued only after mock interview + trainer approval"
    }
  ];

  const targets = [
    {
      icon: Rocket,
      title: "Phase 1 Launch",
      description: "July 2025",
      highlight: true
    },
    {
      icon: MapPin,
      title: "Initial Focus",
      description: "Andhra Pradesh & Telangana"
    },
    {
      icon: Users,
      title: "Trainer Onboarding",
      description: "500+ verified trainers by August"
    },
    {
      icon: Target,
      title: "Student Enrollments",
      description: "1,000+ by Q4 2025"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <Hero />
      
      {/* About Section */}
      <section className="py-16 px-4 max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">About SkillMitra</h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            SkillMitra is a dedicated learning platform built to connect students directly with professional 
            software trainers for personalized 1-on-1 training. Unlike traditional course platforms, 
            SkillMitra focuses entirely on <span className="font-semibold text-blue-600">live, individual sessions</span> — 
            making sure every learner gets the attention and mentoring they deserve.
          </p>
        </div>
      </section>

      {/* Advantages Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Platform Advantages</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {advantages.map((advantage, index) => (
              <FeatureCard 
                key={index}
                icon={advantage.icon}
                title={advantage.title}
                description={advantage.description}
              />
            ))}
          </div>
          <div className="mt-8 text-center">
            <Card className="max-w-2xl mx-auto border-blue-200 bg-blue-50">
              <CardContent className="p-6">
                <p className="text-blue-800 font-medium">
                  🔄 Referral program and trainer earnings system integrated<br />
                  🎯 Future phase includes job placement support
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Targets Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Our Targets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {targets.map((target, index) => (
              <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-transform hover:scale-105 ${target.highlight ? 'ring-2 ring-yellow-400' : ''}`}>
                <target.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                <h3 className="font-semibold text-lg mb-2">{target.title}</h3>
                <p className="text-blue-100">{target.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-blue-100 text-lg">
              Government partnership for employment-linked skill programs in Phase 2
            </p>
          </div>
        </div>
      </section>

      <HiringSection />
      <ContactSection />

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Globe className="h-5 w-5" />
            <a href="https://skillmitra.online" className="hover:text-blue-400 transition-colors">
              skillmitra.online
            </a>
          </div>
          <p className="text-gray-400">
            Platform under development – live soon!
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;

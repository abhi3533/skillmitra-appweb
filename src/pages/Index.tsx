
import { Mail, Rocket, Target, Users, Calendar, Award, MapPin, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Hero from '@/components/Hero';
import FeatureCard from '@/components/FeatureCard';
import ContactSection from '@/components/ContactSection';
import HiringSection from '@/components/HiringSection';
import ApplicationFormsSection from '@/components/ApplicationFormsSection';
import ChatSupport from '@/components/ChatSupport';

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
      description: "Aug 2025",
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
      <div className="w-full min-h-screen">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
          <Hero />
          
          {/* About Section */}
          <section className="my-12 md:my-20">
            <div className="text-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">About SkillMitra</h2>
              <p className="text-base md:text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
                SkillMitra is a dedicated learning platform built to connect students directly with professional 
                software trainers for personalized 1-on-1 training. Unlike traditional course platforms, 
                SkillMitra focuses entirely on <span className="font-semibold text-blue-600">live, individual sessions</span> — 
                making sure every learner gets the attention and mentoring they deserve.
              </p>
            </div>
          </section>

          {/* Why We're Different Section */}
          <section className="my-12 md:my-20 bg-white rounded-lg p-6 md:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-8">Why We're Different</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                <Card className="max-w-3xl mx-auto border-blue-200 bg-blue-50">
                  <CardContent className="p-6">
                    <p className="text-blue-800 text-base font-medium">
                      🔄 Referral program and trainer earnings system integrated<br />
                      🎯 Future phase includes job placement support
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* Our Targets Section */}
          <section className="my-12 md:my-20 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg p-6 md:p-12">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">Our Targets</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {targets.map((target, index) => (
                  <div key={index} className={`bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center transition-transform hover:scale-105 ${target.highlight ? 'ring-2 ring-yellow-400' : ''}`}>
                    <target.icon className="h-12 w-12 mx-auto mb-4 text-yellow-300" />
                    <h3 className="font-semibold text-lg mb-3">{target.title}</h3>
                    <p className="text-blue-100 text-base">{target.description}</p>
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

          <div className="my-12 md:my-20">
            <ApplicationFormsSection />
          </div>

          <div className="my-12 md:my-20">
            <HiringSection />
          </div>
          
          <div className="my-12 md:my-20">
            <ContactSection />
          </div>

          {/* Footer */}
          <footer className="my-12 md:my-20 bg-gray-900 text-white py-8 px-6 rounded-lg">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Globe className="h-5 w-5" />
                <a href="https://skillmitra.online" className="hover:text-blue-400 transition-colors text-base">
                  skillmitra.online
                </a>
              </div>
              <p className="text-gray-400 text-base">
                Platform under development – live soon!
              </p>
            </div>
          </footer>
        </div>
      </div>
      
      <ChatSupport />
    </div>
  );
};

export default Index;

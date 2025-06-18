
import { Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
      <div className="relative max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Rocket className="h-8 w-8 text-blue-600" />
          <span className="text-blue-600 font-semibold text-lg">Coming Soon</span>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SkillMitra
          </span>
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-700 mb-4 font-medium">
          India's First 1-on-1 Software Training Marketplace
        </p>
        
        <div className="flex items-center justify-center gap-1 mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-5 w-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-gray-600">Launching July 2025</span>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-blue-100">
            <p className="text-lg text-gray-700 leading-relaxed">
              Connect directly with professional software trainers for personalized 
              1-on-1 live training sessions. No pre-recorded content, just real mentorship 
              that gets you job-ready.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

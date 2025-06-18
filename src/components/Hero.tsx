
import { Rocket, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-12 md:py-20 px-4">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-indigo-600/10"></div>
      <div className="relative max-w-4xl mx-auto text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Rocket className="h-6 w-6 md:h-8 md:w-8 text-blue-600" />
          <span className="text-blue-600 font-semibold text-base md:text-lg">Coming Soon</span>
        </div>
        
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 md:mb-6 leading-tight">
          <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            SkillMitra
          </span>
        </h1>
        
        <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-3 md:mb-4 font-medium">
          India's First 1-on-1 Software Training Marketplace
        </p>
        
        <div className="flex items-center justify-center gap-1 mb-6 md:mb-8">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
          ))}
          <span className="ml-2 text-gray-600 text-sm md:text-base">Launching July 2025</span>
        </div>
        
        <div className="max-w-2xl mx-auto">
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 md:p-6 shadow-xl border border-blue-100">
            <p className="text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed">
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

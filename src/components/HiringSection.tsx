
import { MapPin, Mail } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HiringSection = () => {
  const positions = [
    {
      title: "Full Stack Developer",
      description: "React.js (Web) + Python (FastAPI)",
      details: "Firebase, Razorpay, Jitsi integration",
      salary: "₹15k–₹30k/month",
      note: "extendable based on performance",
      icon: "💻"
    },
    {
      title: "UI/UX Designer", 
      description: "Figma-based design for mobile & web",
      details: "",
      salary: "₹8k–₹15k/project",
      note: "2-week role",
      icon: "🎨"
    },
    {
      title: "QA Tester (Final Phase)",
      description: "Manual testing, Mobile & web testing",
      details: "",
      salary: "₹5k–₹8k",
      note: "2-week part-time",
      icon: "🧪"
    }
  ];

  return (
    <section className="py-8 px-4 bg-green-50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-[28px] font-bold text-gray-900 mb-3">We're Hiring</h2>
          <p className="text-green-700 font-medium text-base md:text-[18px] lg:text-[20px] mb-2">On-site tech talent in Karimnagar to build SkillMitra</p>
          <p className="text-gray-600 text-sm md:text-base lg:text-[18px]">A one-on-one live training platform</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-6 lg:gap-8 mb-8">
          {positions.map((position, index) => (
            <Card key={index} className="border-green-200 bg-white min-w-0 md:min-w-[300px]">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-4">
                  <span className="text-2xl md:text-3xl flex-shrink-0">{position.icon}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col gap-2 mb-3">
                      <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-gray-900 leading-tight">{position.title}</h3>
                      <span className="text-green-700 font-medium text-sm md:text-base">{position.salary}</span>
                    </div>
                    <p className="text-gray-700 text-sm md:text-base lg:text-[18px] mb-2 leading-relaxed">{position.description}</p>
                    {position.details && (
                      <p className="text-gray-600 text-xs md:text-sm mb-3 leading-relaxed">{position.details}</p>
                    )}
                    {position.note && (
                      <p className="text-green-600 text-xs md:text-sm font-medium">{position.note}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-5 md:p-6">
            <div className="text-center space-y-4">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="h-4 w-4 md:h-5 md:w-5 text-blue-600 flex-shrink-0" />
                <span className="text-sm md:text-base lg:text-[18px] font-medium">On-site roles in Karimnagar only</span>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-2 md:py-3">
                <a href="mailto:support@skillmitra.online" className="inline-flex items-center gap-2 text-sm md:text-base">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  Apply: support@skillmitra.online
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HiringSection;

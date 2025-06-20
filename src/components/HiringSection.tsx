
import { MapPin, Clock, Briefcase, Mail } from 'lucide-react';
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
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">We're Hiring</h2>
          <p className="text-green-700 font-medium text-sm mb-2">On-site tech talent in Karimnagar to build SkillMitra</p>
          <p className="text-gray-600 text-sm">A one-on-one live training platform</p>
        </div>
        
        <div className="space-y-4 mb-6">
          {positions.map((position, index) => (
            <Card key={index} className="border-green-200 bg-white">
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{position.icon}</span>
                  <div className="flex-1">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                      <span className="text-green-700 font-medium text-sm">{position.salary}</span>
                    </div>
                    <p className="text-gray-700 text-sm mb-1">{position.description}</p>
                    {position.details && (
                      <p className="text-gray-600 text-xs mb-2">{position.details}</p>
                    )}
                    {position.note && (
                      <p className="text-green-600 text-xs font-medium">{position.note}</p>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="border-blue-200 bg-blue-50">
          <CardContent className="p-4">
            <div className="text-center space-y-3">
              <div className="flex items-center justify-center gap-2 text-gray-700">
                <MapPin className="h-4 w-4 text-blue-600" />
                <span className="text-sm font-medium">On-site roles in Karimnagar only</span>
              </div>
              <Button asChild className="bg-blue-600 hover:bg-blue-700">
                <a href="mailto:support@skillmitra.online" className="inline-flex items-center gap-2">
                  <Mail className="h-4 w-4" />
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

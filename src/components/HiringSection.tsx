
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const HiringSection = () => {
  const positions = [
    "Full Stack Developer (Web & Mobile)",
    "UI/UX Designer", 
    "QA Tester (Final Phase)",
    "Project Coordinator / Intern"
  ];

  return (
    <section className="py-8 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">We're Hiring</h2>
          <p className="text-green-700 font-medium text-sm">Karimnagar Preferred</p>
        </div>
        
        <Card className="border-green-200 bg-white">
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center gap-2">
                  <Briefcase className="h-4 w-4 text-green-600" />
                  Open Positions
                </h3>
                <ul className="space-y-2">
                  {positions.map((position, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700 text-sm">{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-4 w-4 text-green-600" />
                  <span className="text-sm">On-site preferred</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-4 w-4 text-green-600" />
                  <span className="text-sm">Timeline: 2-month build sprint</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default HiringSection;

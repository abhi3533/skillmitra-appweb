
import { MapPin, Clock, Briefcase } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const HiringSection = () => {
  const positions = [
    "Full Stack Developer (Web & Mobile)",
    "UI/UX Designer",
    "QA Tester (Final Phase)",
    "Project Coordinator / Intern"
  ];

  return (
    <section className="py-16 px-4 bg-green-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">We're Hiring!</h2>
          <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2 text-lg">
            Karimnagar Preferred
          </Badge>
        </div>
        
        <Card className="border-green-200 bg-white">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                  <Briefcase className="h-5 w-5 text-green-600" />
                  Open Positions
                </h3>
                <ul className="space-y-3">
                  {positions.map((position, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                      <span className="text-gray-700">{position}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-700">
                  <MapPin className="h-5 w-5 text-green-600" />
                  <span>On-site preferred</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <Clock className="h-5 w-5 text-green-600" />
                  <span>Timeline: 2-month build sprint</span>
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


import { MapPin, Mail, Code, Palette, Smartphone, Server } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const HiringSection = () => {
  const positions = [
    {
      title: "Backend Developer (FastAPI)",
      salary: "₹25,000 – ₹40,000/month",
      experience: "2–4 years",
      icon: Server,
      responsibilities: [
        "Build backend systems using FastAPI (Python)",
        "Create secure APIs for login, trainer-student flow, bookings",
        "Handle database operations (MongoDB/PostgreSQL)",
        "Work closely with frontend and mobile teams",
        "Write scalable, tested, and clean code"
      ],
      skills: [
        "Proficient in Python and FastAPI",
        "REST APIs, JWT authentication",
        "Experience with Git, Postman, and database design",
        "Bonus: Docker, basic deployment experience"
      ]
    },
    {
      title: "Frontend Developer (React.js)",
      salary: "₹25,000 – ₹40,000/month",
      experience: "2–4 years",
      icon: Code,
      responsibilities: [
        "Build responsive web UI using React.js",
        "Convert Figma designs into functional pages",
        "Integrate APIs for login, dashboard, course flow",
        "Ensure mobile responsiveness and browser compatibility"
      ],
      skills: [
        "Strong in React.js, HTML, CSS, JavaScript",
        "Familiar with REST API integration and component structure",
        "Git version control, Tailwind CSS or Bootstrap preferred"
      ]
    },
    {
      title: "Mobile App Developer (Flutter)",
      salary: "₹20,000 – ₹35,000/month",
      experience: "2–3 years",
      icon: Smartphone,
      responsibilities: [
        "Develop the SkillMitra mobile app using Flutter",
        "Build login, dashboard, booking, and certificate features",
        "Integrate APIs and test on Android/iOS devices",
        "Work with team for app performance and design sync"
      ],
      skills: [
        "Flutter & Dart expertise",
        "REST API integration, Firebase basics",
        "App store deployment and testing"
      ]
    },
    {
      title: "UI/UX Designer",
      salary: "₹15,000 – ₹25,000/month",
      experience: "1.5–3 years",
      icon: Palette,
      responsibilities: [
        "Design responsive UI for web and mobile",
        "Create wireframes, mockups, and user flows in Figma",
        "Collaborate with devs for design handoff",
        "Ensure consistency in layout and experience"
      ],
      skills: [
        "Expert in Figma and design systems",
        "Knowledge of user-centered design",
        "Experience with EdTech or SaaS design is a bonus"
      ]
    }
  ];

  return (
    <section className="py-8 px-4 bg-green-50">
      <div className="max-w-[1200px] mx-auto px-5 md:px-20">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl lg:text-[28px] font-bold text-gray-900 mb-3">🚀 We're Hiring in Karimnagar – Join the SkillMitra Team!</h2>
          <p className="text-green-700 font-medium text-base md:text-[18px] lg:text-[20px] mb-2">
            SkillMitra is India's first platform where students can choose trainers like they choose food from Swiggy
          </p>
          <p className="text-gray-600 text-sm md:text-base lg:text-[18px] mb-4">
            Building from the heart of Telangana. Join us at our Karimnagar office.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-gray-700">
            <span className="bg-blue-100 px-3 py-1 rounded-full">📍 Work From Office</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">🧑‍💼 Long-term Role</span>
            <span className="bg-blue-100 px-3 py-1 rounded-full">📆 Based on Performance</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-6 lg:gap-8 mb-8">
          {positions.map((position, index) => (
            <Card key={index} className="border-green-200 bg-white">
              <CardContent className="p-5 md:p-6">
                <div className="flex items-start gap-4 mb-4">
                  <position.icon className="h-8 w-8 text-green-600 flex-shrink-0 mt-1" />
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg md:text-xl lg:text-[20px] font-semibold text-gray-900 leading-tight mb-2">
                      {position.title}
                    </h3>
                    <div className="flex flex-col gap-1 mb-3">
                      <span className="text-green-700 font-medium text-base">{position.salary}</span>
                      <span className="text-gray-600 text-sm">Experience: {position.experience}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Responsibilities:</h4>
                    <ul className="text-gray-700 text-xs space-y-1">
                      {position.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-green-600 mt-1">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2 text-sm">Skills Required:</h4>
                    <ul className="text-gray-700 text-xs space-y-1">
                      {position.skills.map((skill, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-600 mt-1">•</span>
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
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
              <p className="text-blue-800 text-sm md:text-base font-medium">
                Let's build something India has never seen before. 💙
              </p>
              <Button asChild className="bg-blue-600 hover:bg-blue-700 px-6 md:px-8 py-2 md:py-3">
                <a href="mailto:contact@skillmitra.online" className="inline-flex items-center gap-2 text-sm md:text-base">
                  <Mail className="h-4 w-4 md:h-5 md:w-5" />
                  Apply: contact@skillmitra.online
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

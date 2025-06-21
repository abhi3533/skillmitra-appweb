
import { Rss, Briefcase, ExternalLink } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const TechNewsJobsSection = () => {
  const [newsItems, setNewsItems] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Mock news data for now (RSS parsing would require a backend service)
  const mockNewsItems = [
    {
      title: "India's Tech Startup Ecosystem Sees Record Growth in 2024",
      source: "TechCrunch",
      time: "2 hours ago"
    },
    {
      title: "Major IT Companies Announce Hiring Plans for Fresh Graduates",
      source: "Inc42",
      time: "4 hours ago"
    },
    {
      title: "AI and Machine Learning Jobs See 300% Increase in Demand",
      source: "YourStory",
      time: "6 hours ago"
    },
    {
      title: "Software Developer Salaries Rise by 15% Across Tier-1 Cities",
      source: "Times of India",
      time: "8 hours ago"
    },
    {
      title: "Remote Work Policies Drive Tech Talent Migration to Smaller Cities",
      source: "Inc42",
      time: "10 hours ago"
    }
  ];

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setNewsItems(mockNewsItems);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const jobLinks = [
    {
      name: "LinkedIn IT Jobs",
      url: "https://www.linkedin.com/jobs/search/?keywords=Software&location=India",
      description: "Find software development roles"
    },
    {
      name: "Naukri.com Jobs",
      url: "https://www.naukri.com/software-developer-jobs",
      description: "Browse developer opportunities"
    }
  ];

  return (
    <section className="my-12 md:my-20">
      <div className="text-center mb-8">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="bg-green-100 text-green-600 text-xs font-medium px-2 py-1 rounded-full">
            Updated Live
          </span>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900">
          Live Tech News & IT Jobs
        </h2>
        <p className="text-gray-600 mt-2">Stay updated with the latest tech trends and job opportunities</p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Tech News Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Rss className="h-5 w-5 text-blue-600" />
            <h3 className="text-xl font-semibold text-gray-900">📰 Tech News</h3>
          </div>
          
          <Card className="h-96">
            <CardContent className="p-0">
              <div className="h-full overflow-y-auto">
                {loading ? (
                  <div className="p-6">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="mb-4 animate-pulse">
                        <div className="h-4 bg-gray-200 rounded mb-2"></div>
                        <div className="h-3 bg-gray-100 rounded w-1/3"></div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="divide-y divide-gray-100">
                    {newsItems.map((item, index) => (
                      <div key={index} className="p-4 hover:bg-gray-50 transition-colors cursor-pointer">
                        <h4 className="font-medium text-gray-900 text-sm leading-5 mb-2">
                          {item.title}
                        </h4>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span className="font-medium text-blue-600">{item.source}</span>
                          <span>{item.time}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* IT Jobs Section */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Briefcase className="h-5 w-5 text-green-600" />
            <h3 className="text-xl font-semibold text-gray-900">💼 IT Jobs</h3>
          </div>
          
          <Card className="h-96">
            <CardContent className="p-6">
              <div className="space-y-4">
                <div className="text-center mb-6">
                  <p className="text-gray-600 text-sm">
                    Explore thousands of IT job opportunities
                  </p>
                </div>
                
                {jobLinks.map((job, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 hover:border-blue-300 transition-colors">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{job.name}</h4>
                        <p className="text-sm text-gray-600">{job.description}</p>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        className="ml-4"
                        onClick={() => window.open(job.url, '_blank')}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
                
                <div className="mt-6 p-4 bg-blue-50 rounded-lg text-center">
                  <h4 className="font-semibold text-blue-900 mb-2">Looking for Training?</h4>
                  <p className="text-sm text-blue-700">
                    Get job-ready with our 1-on-1 software training launching July 2025!
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default TechNewsJobsSection;

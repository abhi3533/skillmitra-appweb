
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const ApplicationFormsSection = () => {
  return (
    <section className="my-12 md:my-20">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Join SkillMitra</h2>
        <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
          Whether you're an expert looking to teach or a student ready to learn, we're here to connect you.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-gray-900">📋 Become a Trainer</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Share your expertise and earn by teaching students in personalized 1-on-1 sessions.
              </p>
              <Link to="/trainer-application">
                <Button className="w-full bg-blue-600 hover:bg-blue-700">
                  Apply as Trainer
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <div className="flex justify-center">
          <Card className="w-full max-w-md">
            <CardHeader className="text-center">
              <CardTitle className="text-xl font-bold text-gray-900">🎓 Interested in Learning?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Tell us what you want to learn and we'll match you with the perfect trainer.
              </p>
              <Link to="/student-inquiry">
                <Button className="w-full bg-green-600 hover:bg-green-700">
                  Start Learning
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormsSection;


import React from 'react';
import TrainerApplicationForm from '@/components/TrainerApplicationForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainerApplicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <Link to="/">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-2">
              Become a Trainer
            </h1>
            <p className="text-lg md:text-xl text-gray-600 text-center">
              Join SkillMitra and start teaching students with personalized 1-on-1 sessions
            </p>
          </div>
          
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <TrainerApplicationForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrainerApplicationPage;

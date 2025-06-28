
import React from 'react';
import TrainerApplicationForm from '@/components/TrainerApplicationForm';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TrainerApplicationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-center text-gray-900 mb-2">
            Become a Trainer
          </h1>
          <p className="text-lg text-gray-600 text-center">
            Join SkillMitra and start teaching students with personalized 1-on-1 sessions
          </p>
        </div>
        
        <div className="flex justify-center">
          <TrainerApplicationForm />
        </div>
      </div>
    </div>
  );
};

export default TrainerApplicationPage;


import React from 'react';
import TrainerApplicationForm from './TrainerApplicationForm';
import StudentInquiryForm from './StudentInquiryForm';

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
          <TrainerApplicationForm />
        </div>
        <div className="flex justify-center">
          <StudentInquiryForm />
        </div>
      </div>
    </section>
  );
};

export default ApplicationFormsSection;


import React from 'react';

const TechNewsSection = () => {
  return (
    <section className="my-12 md:my-20">
      <div className="bg-white rounded-lg p-6 md:p-8 shadow-sm border border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            📡 Live Tech News & Jobs
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Stay updated with the latest Indian startup & IT headlines
          </p>
        </div>
        
        <div className="w-full">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200 shadow-inner">
            <iframe 
              src="https://rss.app/embed/v1/wall/ZeG2gxa5LMRZH8wY" 
              width="100%" 
              height="400" 
              frameBorder="0" 
              scrolling="yes"
              className="rounded-md"
              title="Live Tech News & Jobs Feed"
            />
          </div>
        </div>
        
        <div className="mt-4 text-center">
          <p className="text-xs text-gray-500">
            Updates automatically • Indian tech & startup focus
          </p>
        </div>
      </div>
    </section>
  );
};

export default TechNewsSection;

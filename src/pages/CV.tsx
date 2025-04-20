import React from 'react';

const CV: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Curriculum Vitae</h1>
        <div className="h-1 w-20 bg-gray-200"></div>
      </div>

      <div className="space-y-8">
        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Education</h2>
          <div className="space-y-4">
            {/* Education items will go here */}
          </div>
        </section>

        {/* Experience Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Professional Experience</h2>
          <div className="space-y-4">
            {/* Experience items will go here */}
          </div>
        </section>

        {/* Skills Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Skills</h2>
          <div className="space-y-4">
            {/* Skills items will go here */}
          </div>
        </section>

        {/* Publications Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Publications</h2>
          <div className="space-y-4">
            {/* Publication items will go here */}
          </div>
        </section>

        {/* Awards Section */}
        <section>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Awards & Honors</h2>
          <div className="space-y-4">
            {/* Award items will go here */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CV; 
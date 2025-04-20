import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Welcome</h1>
      <div className="prose prose-lg">
        <p className="text-gray-600 mb-4">
          Welcome to my personal website. Here you'll find information about my professional journey,
          research interests, hobbies, and thoughts through my blog.
        </p>
        <p className="text-gray-600">
          Feel free to explore the different sections using the navigation menu on the left.
        </p>
      </div>
    </div>
  );
};

export default Home; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Home from './pages/Home';
import Hobbies from './pages/Hobbies';
import Research from './pages/Research';
import Blog from './pages/Blog';
import CV from './pages/CV';

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex min-h-screen bg-white">
        <Sidebar />
        <main className="flex-1 p-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hobbies" element={<Hobbies />} />
            <Route path="/research" element={<Research />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/cv" element={<CV />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App; 
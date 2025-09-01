import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center flex-grow p-8 bg-gray-50">
      <h1 className="text-3xl font-bold mb-6">Welcome to Home Page</h1>
      <button
        onClick={() => navigate('/form')}
        className="px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Create Form
      </button>
    </div>
  );
};

export default HomePage;

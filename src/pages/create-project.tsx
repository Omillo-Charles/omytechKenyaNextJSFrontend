import React from 'react';
import { useLocation } from 'react-router-dom';
import { Users } from 'lucide-react';

const CreateProject = () => {
  const location = useLocation();
  const name = location.state?.name || 'Client';

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cyan-950 via-black to-purple-950 pt-20 px-4">
      <div className="bg-black/80 border border-cyan-900/30 shadow-2xl rounded-3xl p-10 max-w-lg w-full flex flex-col items-center text-center">
        <span className="w-20 h-20 flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 mb-6 shadow-lg">
          <Users className="w-10 h-10 text-white" />
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
          Welcome, {name}!
        </h1>
        <p className="text-lg text-cyan-100 mb-2">You&apos;re signed in as a valued client.</p>
        <p className="text-base text-gray-300 mb-2">Ready to start your next project with <span className="text-cyan-400 font-semibold">OMYTECH</span>?</p>
      </div>
    </div>
  );
};

export default CreateProject; 
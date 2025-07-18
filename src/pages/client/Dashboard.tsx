import React, { useEffect, useState } from 'react';
import { account } from '../../utils/appwrite';

const getInitials = (name: string) => name.split(' ').map(n => n[0]).join('').toUpperCase();

const ClientDashboard = () => {
  const [userName, setUserName] = useState<string>('');
  const [userEmail, setUserEmail] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    account.get()
      .then((user) => {
        setUserName(user.name);
        setUserEmail(user.email);
        setLoading(false);
      })
      .catch(() => {
        setUserName('');
        setUserEmail('');
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center bg-black text-white p-4 pt-24">
      {/* Profile Section */}
      <div className="w-full max-w-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8 bg-gray-900 rounded-lg shadow-lg p-6">
        <div className="flex items-center gap-4">
          <div className="w-16 h-16 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg">
            {/* Avatar Initials */}
            <span>{loading ? '?' : getInitials(userName || 'User')}</span>
          </div>
          <div>
            <div className="text-2xl font-extrabold flex items-center gap-2">
              <span className="animate-waving-hand text-2xl">👋</span>
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                {loading ? 'Loading...' : userName || 'User Name'}
              </span>
            </div>
            <div className="text-gray-400 text-sm mt-1">{loading ? '...' : userEmail || 'user@email.com'}</div>
          </div>
        </div>
        <a
          href="/client/create-project"
          className="px-5 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-full font-semibold shadow hover:opacity-90 transition-all text-sm flex items-center gap-2 mt-4 md:mt-0"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" /></svg>
          Create Project
        </a>
      </div>

      {/* Notifications */}
      <div className="w-full max-w-2xl bg-gray-900 rounded-lg shadow-lg p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-xl font-semibold text-cyan-400">Notifications</h2>
          <span className="text-xs text-gray-400">0 new</span>
        </div>
        <div className="text-gray-500 text-center">No notifications</div>
      </div>

      {/* Project List */}
      <div className="w-full max-w-2xl">
        <h2 className="text-2xl font-semibold mb-4 text-cyan-400">Your Projects</h2>
        <div className="text-center text-gray-400 py-12 text-lg">
          You have not created any projects yet.
        </div>
      </div>
      <style>{`
        @keyframes wave {
          0% { transform: rotate(0deg); }
          10% { transform: rotate(14deg); }
          20% { transform: rotate(-8deg); }
          30% { transform: rotate(14deg); }
          40% { transform: rotate(-4deg); }
          50% { transform: rotate(10deg); }
          60% { transform: rotate(0deg); }
          100% { transform: rotate(0deg); }
        }
        .animate-waving-hand {
          display: inline-block;
          animation: wave 1.8s infinite;
          transform-origin: 70% 70%;
        }
      `}</style>
    </div>
  );
};

export default ClientDashboard; 
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../utils/appwrite';

const ADMIN_EMAILS = [
  'fidelomillo812@gmail.com',
  'fidelomillo1@gmail.com',
  'omytechteam@gmail.com',
  'omytechkenya@gmail.com',
];

const AuthCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkSession = async () => {
      try {
        const user = await account.get();
        const email = user.email;
        if (ADMIN_EMAILS.includes(email)) {
          navigate('/dashboard/admin', { replace: true });
        } else {
          navigate('/create-project', { replace: true, state: { name: user.name || user.email } });
        }
      } catch (err) {
        navigate('/auth', { replace: true });
      }
    };
    checkSession();
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-6"></div>
        <h2 className="text-2xl font-bold">Signing you in...</h2>
        <p className="text-gray-400 mt-2">Please wait while we redirect you.</p>
      </div>
    </div>
  );
};

export default AuthCallback; 
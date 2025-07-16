import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { account } from '../utils/appwrite';
import type { OAuthProvider } from 'appwrite';

const ADMIN_EMAILS = [
  'fidelomillo812@gmail.com',
  'fidelomillo1@gmail.com',
  'omytechteam@gmail.com',
  'omytechkenya@gmail.com',
];

const Auth = () => {
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleOAuth = async (provider: string) => {
    setError('');
    setLoading(true);
    try {
      // Appwrite OAuth2
      const redirectUrl = window.location.origin + '/auth/callback';
      await account.createOAuth2Session(provider as OAuthProvider, redirectUrl, redirectUrl);
      // The user will be redirected, so no need to handle navigation here
    } catch (err: any) {
      setError(err?.message || err?.response?.message || 'OAuth failed');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-black text-white pt-20">
      <div className="bg-white/10 p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-cyan-400 text-center">
          Sign In
        </h1>
        <div className="mb-6">
          <div className="bg-gradient-to-r from-cyan-900/70 to-purple-900/70 border border-cyan-700/30 shadow-lg rounded-xl px-6 py-5 text-center flex flex-col items-center">
            <p className="text-cyan-200 text-base font-medium">
              Welcome to <span className="text-cyan-400 font-semibold">OMYTECH</span>!<br />
              <span className="text-gray-200">Sign up or sign in to access our digital services, launch your next project, collaborate with our team, or join our tech community.</span><br />
              <span className="text-purple-300">Whether you&apos;re a client, a creator, or a future innovator, your journey starts here.</span>
            </p>
          </div>
        </div>
        {error && <div className="text-red-400 text-sm mb-4">{error}</div>}
        <button
          className="w-full bg-white text-black py-3 rounded font-semibold flex items-center justify-center gap-2 mb-3 hover:bg-gray-100 transition"
          onClick={() => handleOAuth('google')}
          disabled={loading}
          type="button"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/4a/Logo_2013_Google.png" alt="Google" className="w-5 h-5" />
          Continue with Google
        </button>
        <button
          className="w-full bg-black border border-gray-700 text-white py-3 rounded font-semibold flex items-center justify-center gap-2 hover:bg-gray-900 transition"
          onClick={() => handleOAuth('github')}
          disabled={loading}
          type="button"
        >
          <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" alt="GitHub" className="w-5 h-5 bg-white rounded-full" />
          Continue with GitHub
        </button>
      </div>
    </div>
  );
};

export default Auth; 
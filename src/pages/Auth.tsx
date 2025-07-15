import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { account } from '../utils/appwrite';
import type { OAuthProvider } from 'appwrite';

const ADMIN_EMAILS = [
  'fidelomillo812@gmail.com',
  'fidelomillo1@gmail.com',
  'omytechteam@gmail.com',
  'omytechkenya@gmail.com',
];

const Auth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    try {
      if (isSignup) {
        // Sign up with Appwrite
        await account.create('unique()', email, password);
        // After signup, log in the user
        await account.createSession(email, password);
        sessionStorage.setItem('firstSignup', 'true');
        navigate('/create-project');
      } else {
        // Sign in with Appwrite
        await account.createSession(email, password);
        const isAdmin = ADMIN_EMAILS.includes(email);
        if (isAdmin) {
          navigate('/dashboard/admin');
        } else {
          const from = (location.state && (location.state as any).from) || '/dashboard/client';
          navigate(from);
        }
      }
      setLoading(false);
    } catch (err: any) {
      setError(err?.message || err?.response?.message || 'Authentication failed');
      setLoading(false);
    }
  };

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
          {isSignup ? 'Sign Up' : 'Sign In'}
        </h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            className="w-full p-3 rounded bg-black/40 border border-cyan-500/30 text-white"
            placeholder="Email"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            disabled={loading}
          />
          <input
            className="w-full p-3 rounded bg-black/40 border border-cyan-500/30 text-white"
            placeholder="Password"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            disabled={loading}
          />
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <button
            className="w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white py-3 rounded font-semibold mt-2"
            disabled={loading}
            type="submit"
          >
            {loading ? 'Loading...' : isSignup ? 'Sign Up' : 'Sign In'}
          </button>
        </form>
        <div className="flex justify-between items-center mt-4">
          <span className="text-gray-300 text-sm">
            {isSignup ? 'Already have an account?' : "Don't have an account?"}
          </span>
          <button
            className="text-cyan-400 underline text-sm"
            onClick={() => setIsSignup(s => !s)}
            disabled={loading}
          >
            {isSignup ? 'Sign In' : 'Sign Up'}
          </button>
        </div>
        <div className="my-6 flex items-center">
          <div className="flex-1 h-px bg-cyan-900" />
          <span className="mx-4 text-gray-400 text-sm">or</span>
          <div className="flex-1 h-px bg-cyan-900" />
        </div>
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
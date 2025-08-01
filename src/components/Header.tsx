import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogOut } from 'lucide-react';
import Logo from './Logo';
import { account } from '../utils/appwrite';

const ADMIN_EMAILS = [
  'omytechkenya@gmail.com',
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [user, setUser] = useState<null | { email: string; name: string }>(null);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Check if user is logged in
    account.get()
      .then(u => setUser({ email: u.email, name: u.name }))
      .catch(() => setUser(null));
  }, [location]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (showLogoutModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [showLogoutModal]);

  const handleLogout = async () => {
    setShowLogoutModal(true);
  };

  const confirmLogout = async () => {
    await account.deleteSession('current');
    setUser(null);
    setShowLogoutModal(false);
    navigate('/');
  };

  const cancelLogout = () => {
    setShowLogoutModal(false);
  };

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'About', path: '/about' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  // Determine dashboard link
  const isAdmin = user && ADMIN_EMAILS.includes(user.email);
  let dashboardPath = isAdmin ? '/dashboard/admin' : '/create-project';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-black/90 backdrop-blur-md border-b border-cyan-500/20' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <Logo className="group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-purple-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition-opacity duration-200"></div>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              OMYTECH
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative font-medium transition-all duration-200 hover:text-cyan-400 ${
                  isActive(item.path) 
                    ? 'text-cyan-400' 
                    : 'text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full"></div>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA/User Dropdown */}
          <div className="hidden lg:flex items-center relative">
            {user ? (
              <div className="flex items-center gap-3">
                {/* User Info Button */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full px-4 py-2">
                  <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-sm font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <span className="text-white font-medium text-sm">
                    {user.name || user.email.split('@')[0]}
                  </span>
                </div>
                
                {/* Action Buttons */}
                <div className="flex items-center gap-2">
                  <Link
                    to={dashboardPath}
                    className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-4 py-2 rounded-full font-semibold hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 text-sm"
                  >
                    {isAdmin ? 'Dashboard' : 'Projects'}
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="bg-red-500/10 border border-red-500/20 text-red-400 px-4 py-2 rounded-full font-semibold hover:bg-red-500/20 transition-all duration-200 text-sm flex items-center gap-2"
                  >
                    <LogOut className="w-4 h-4" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/auth"
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-xl hover:shadow-cyan-500/25 transform hover:scale-105 transition-all duration-200 font-semibold"
              >
                Get Started
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-white/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-white" />
            ) : (
              <Menu className="w-6 h-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden bg-black/95 backdrop-blur-md border-t border-cyan-500/20 max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`block px-4 py-3 rounded-lg font-medium transition-colors ${
                  isActive(item.path)
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-white hover:text-cyan-400 hover:bg-white/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            {user ? (
              <div className="space-y-4 mt-6">
                {/* User Info */}
                <div className="flex items-center gap-3 bg-gradient-to-r from-cyan-500/10 to-blue-600/10 border border-cyan-500/20 rounded-full px-4 py-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white text-lg font-bold">
                      {user.name ? user.name.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                    </span>
                  </div>
                  <div className="flex-1">
                    <p className="text-white font-semibold">
                      {user.name || user.email.split('@')[0]}
                    </p>
                    <p className="text-cyan-300 text-sm">
                      {user.email}
                    </p>
                  </div>
                </div>
                
                {/* Action Buttons */}
                <div className="space-y-3">
                  <Link
                    to={dashboardPath}
                    className="block w-full bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full font-semibold text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {isAdmin ? 'Dashboard' : 'My Projects'}
                  </Link>
                  <button
                    onClick={() => { handleLogout(); setIsMenuOpen(false); }}
                    className="w-full flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 px-6 py-3 rounded-full font-semibold"
                  >
                    <LogOut className="w-5 h-5" />
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <Link
                to="/auth"
                className="block mx-4 mt-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-3 rounded-full text-center font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </Link>
            )}
          </div>
        </div>
      )}

      {/* Logout Confirmation Modal */}
      {showLogoutModal && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black bg-opacity-60" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
          <div 
            className="bg-white text-black rounded-2xl shadow-2xl p-8 w-full max-w-sm text-center mx-4" 
            style={{ 
              position: 'fixed',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              maxHeight: '90vh',
              overflow: 'hidden'
            }}
          >
            <h2 className="text-2xl font-bold mb-4">Confirm Logout</h2>
            <p className="mb-6">Are you sure you want to log out?</p>
            <div className="flex justify-center gap-4">
              <button
                onClick={confirmLogout}
                className="bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:scale-105 transition-transform"
              >
                Yes, Log Out
              </button>
              <button
                onClick={cancelLogout}
                className="bg-gray-200 text-gray-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-300 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Services from './pages/Services';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import ServiceWebDevelopment from './pages/ServiceWebDevelopment';
import ServiceMobileAppDevelopment from './pages/ServiceMobileAppDevelopment';
import ServiceUIDesign from './pages/ServiceUIDesign';
import ServiceDigitalMarketing from './pages/ServiceDigitalMarketing';
import ServiceEcommerce from './pages/ServiceEcommerce';
import ServiceConsulting from './pages/ServiceConsulting';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';
import CookiePolicy from './pages/CookiePolicy';
import GDPRCompliance from './pages/GDPRCompliance';
import OMYBOT from './components/OMYBOT';
import Auth from './pages/Auth';
import AuthCallback from './pages/AuthCallback';
import AdminDashboardPage from './pages/dashboard/AdminDashboardPage';
import CreateProject from './pages/create-project';
import ClientCreateProject from './pages/client/CreateProject';
import ClientDashboard from './pages/client/Dashboard';
// Only import the new simple pages

// Component to handle scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top immediately when route changes
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  const location = useLocation();

  useEffect(() => {
    document.title = 'OMYTECH - Digital Innovation Agency';
  }, [location]);

  return (
    <div className="min-h-screen bg-black">
      <ScrollToTop />
      <Header />
      <main className="relative">
        <Routes>
          <Route path="/auth" element={<Auth />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
          <Route path="/admin/dashboard" element={<AdminDashboardPage />} />
          <Route path="/dashboard/admin" element={<AdminDashboardPage />} />
          <Route path="/create-project" element={<CreateProject />} />
          <Route path="/client/create-project" element={<ClientCreateProject />} />
          <Route path="/client/dashboard" element={<ClientDashboard />} />
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/services/web-development" element={<ServiceWebDevelopment />} />
          <Route path="/services/mobile-app-development" element={<ServiceMobileAppDevelopment />} />
          <Route path="/services/ui-ux-design" element={<ServiceUIDesign />} />
          <Route path="/services/digital-marketing" element={<ServiceDigitalMarketing />} />
          <Route path="/services/ecommerce" element={<ServiceEcommerce />} />
          <Route path="/services/consulting" element={<ServiceConsulting />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/gdpr-compliance" element={<GDPRCompliance />} />
        </Routes>
      </main>
      <Footer />
      <OMYBOT />
    </div>
  );
}

export default App;
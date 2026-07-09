import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import ITInfrastructure from './pages/ITInfrastructure';
import NetworkingSolutions from './pages/NetworkingSolutions';
import EducationAndRD from './pages/EducationAndRD';
import OneTrack from './pages/OneTrack';
import Contact from './pages/Contact';
import ServiceOrSolutionDetail from './pages/ServiceOrSolutionDetail';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [currentDetailId, setCurrentDetailId] = useState(null);
  const [fadeTrigger, setFadeTrigger] = useState(true);

  const handleNavigate = (page, detailId = null) => {
    // Start page transition fade-out
    setFadeTrigger(false);
    
    setTimeout(() => {
      setCurrentPage(page);
      setCurrentDetailId(detailId);
      setFadeTrigger(true);
      // Scroll to top of the page on route change
      window.scrollTo({ top: 0, behavior: 'instant' });
    }, 250);
  };

  // Sync address bar hashes or state with basic router logic if the user refreshes
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#/', '');
      if (!hash) {
        handleNavigate('home');
        return;
      }
      
      const parts = hash.split('/');
      const page = parts[0];
      const detailId = parts[1] || null;

      if (['home', 'about', 'it-infrastructure', 'networking-solutions', 'education-rd', 'onetrack', 'contact'].includes(page)) {
        handleNavigate(page);
      } else if (['service-detail', 'solution-detail', 'industry-detail'].includes(page) && detailId) {
        handleNavigate(page, detailId);
      } else {
        handleNavigate('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    
    // Initial hash routing check
    if (window.location.hash) {
      handleHashChange();
    }
    
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Update hash dynamically for nice URL indicators
  useEffect(() => {
    if (currentPage === 'home') {
      window.history.replaceState(null, '', ' ');
    } else if (currentDetailId) {
      window.history.replaceState(null, '', `#/${currentPage}/${currentDetailId}`);
    } else {
      window.history.replaceState(null, '', `#/${currentPage}`);
    }
  }, [currentPage, currentDetailId]);

  const renderActivePage = () => {
    switch (currentPage) {
      case 'home':
        return <Home onNavigate={handleNavigate} />;
      case 'about':
        return <AboutUs />;
      case 'it-infrastructure':
        return <ITInfrastructure />;
      case 'networking-solutions':
        return <NetworkingSolutions />;
      case 'education-rd':
        return <EducationAndRD />;
      case 'onetrack':
        return <OneTrack />;
      case 'contact':
        return <Contact />;
      case 'service-detail':
      case 'solution-detail':
      case 'industry-detail':
        return <ServiceOrSolutionDetail detailId={currentDetailId} />;
      default:
        return <Home onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-[#091E42] selection:bg-blue-600 selection:text-white antialiased">
      {/* Global Atlassian-inspired Header */}
      <Navbar onNavigate={handleNavigate} currentPage={currentPage} />

      {/* Main Content Area with transition container */}
      <main className={`flex-grow transition-opacity duration-300 ${fadeTrigger ? 'opacity-100' : 'opacity-0'}`}>
        {renderActivePage()}
      </main>

      {/* Global Corporate Footer */}
      <Footer onNavigate={handleNavigate} />
    </div>
  );
}

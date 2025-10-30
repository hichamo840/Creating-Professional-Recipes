import React, { useState } from 'react';
import Header, { Page } from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import AboutUsPage from './components/AboutUsPage';
import ContactUsPage from './components/ContactUsPage';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<Page>('dashboard');

  const renderPage = () => {
    switch (currentPage) {
      case 'about':
        return <AboutUsPage />;
      case 'contact':
        return <ContactUsPage />;
      case 'dashboard':
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white font-sans flex flex-col">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      <main className="container mx-auto px-6 pb-12 flex-grow">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
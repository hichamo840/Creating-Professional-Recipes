import React from 'react';

export type Page = 'dashboard' | 'about' | 'contact';

interface HeaderProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

const NavLink: React.FC<{
  page: Page;
  currentPage: Page;
  onNavigate: (page: Page) => void;
  children: React.ReactNode;
}> = ({ page, currentPage, onNavigate, children }) => {
  const isActive = currentPage === page;
  return (
    <button
      onClick={() => onNavigate(page)}
      aria-current={isActive ? 'page' : undefined}
      className={`px-4 py-2 rounded-md text-sm font-medium transition-colors duration-300 ${
        isActive
          ? 'text-white bg-slate-700/50'
          : 'text-slate-300 hover:bg-slate-700/50 hover:text-white'
      }`}
    >
      {children}
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  return (
    <header className="text-center py-8 px-6">
      <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
        Platform For Creating Professional Recipes
      </h1>
      <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
        Your central hub for accessing and managing all your AI-powered recipe and content creation tools.
      </p>

      <nav className="mt-8 flex justify-center" aria-label="Main navigation">
        <div className="flex space-x-2 bg-slate-800/50 border border-slate-700 rounded-lg p-1">
            <NavLink page="dashboard" currentPage={currentPage} onNavigate={onNavigate}>Dashboard</NavLink>
            <NavLink page="about" currentPage={currentPage} onNavigate={onNavigate}>About Us</NavLink>
            <NavLink page="contact" currentPage={currentPage} onNavigate={onNavigate}>Contact Us</NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-24 py-8 px-6 border-t border-slate-700/50">
      <div className="container mx-auto text-center">
        <p className="text-sm text-slate-500">
          &copy; {currentYear} Created by HZ. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
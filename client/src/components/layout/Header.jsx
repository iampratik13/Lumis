import React from 'react';

const Header = () => {
  return (
    <header className="bg-surface-container border-b border-outline-variant/30 flex justify-between items-center w-full px-6 h-16 fixed top-0 z-50">
      <div className="flex items-center gap-8">
        <span className="font-['Space_Grotesk'] font-bold text-xl text-primary-fixed-dim tracking-tight">MEP Clash AI</span>
        <div className="hidden md:flex items-center bg-surface-container-lowest rounded px-3 py-1.5 gap-2 border border-outline-variant/30">
          <span className="material-symbols-outlined text-on-surface-variant text-sm">search</span>
          <input className="bg-transparent border-none focus:ring-0 text-sm text-on-surface w-64 placeholder:text-slate-600 font-label" placeholder="Search Element ID (e.g. 14352)..." type="text" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <nav className="hidden md:flex gap-8 text-sm font-['Inter'] tracking-tight">
          <a className="text-primary-fixed-dim font-semibold border-b-2 border-primary-fixed-dim h-16 flex items-center" href="#">Clash Engine</a>
          <a className="text-on-surface-variant hover:text-white transition-colors h-16 flex items-center" href="#">Analytics</a>
          <a className="text-on-surface-variant hover:text-white transition-colors h-16 flex items-center" href="#">Project Settings</a>
        </nav>
        <button className="bg-primary hover:bg-blue-500 text-white font-bold py-2 px-5 rounded-lg text-sm transition-all active:scale-95 flex items-center gap-2 shadow-lg shadow-primary/20">
          Run AI Rerouting
        </button>
        <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white transition-colors">account_circle</span>
      </div>
    </header>
  );
};

export default Header;

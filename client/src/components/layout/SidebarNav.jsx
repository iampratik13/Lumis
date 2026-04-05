import React from 'react';

const SidebarNav = () => {
  return (
    <aside className="bg-surface-container-lowest flex flex-col h-full w-64 border-r border-outline-variant/30 shrink-0">
      <div className="p-6 border-b border-outline-variant/10">
        <h2 className="font-['Space_Grotesk'] uppercase tracking-widest text-[10px] text-slate-500 mb-1">Element Count</h2>
        <div className="font-headline text-2xl font-bold text-on-surface">14,352 <span className="text-xs font-normal text-slate-500">IDs</span></div>
        <p className="text-[9px] text-slate-600 mt-1 uppercase tracking-wider">Project Lead: Ar. Henderson</p>
      </div>
      <nav className="flex flex-col h-full py-4 overflow-y-auto">
        <a className="flex items-center gap-3 px-6 py-3.5 text-on-surface-variant hover:bg-surface-container-high hover:text-white transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-widest text-[10px]" href="#">
          <span className="material-symbols-outlined text-lg">upload_file</span>
          Project Input
        </a>
        <a className="flex items-center gap-3 px-6 py-3.5 bg-surface-container-high text-primary-fixed-dim border-r-4 border-primary transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-widest text-[10px]" href="#">
          <span className="material-symbols-outlined text-lg">precision_manufacturing</span>
          Clash Engine
        </a>
        <a className="flex items-center gap-3 px-6 py-3.5 text-on-surface-variant hover:bg-surface-container-high hover:text-white transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-widest text-[10px]" href="#">
          <span className="material-symbols-outlined text-lg">settings_applications</span>
          Rules
        </a>
        <a className="flex items-center gap-3 px-6 py-3.5 text-on-surface-variant hover:bg-surface-container-high hover:text-white transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-widest text-[10px]" href="#">
          <span className="material-symbols-outlined text-lg">alt_route</span>
          Rerouting
        </a>
        <a className="flex items-center gap-3 px-6 py-3.5 text-on-surface-variant hover:bg-surface-container-high hover:text-white transition-all duration-200 font-['Space_Grotesk'] uppercase tracking-widest text-[10px]" href="#">
          <span className="material-symbols-outlined text-lg">picture_as_pdf</span>
          Reports
        </a>
      </nav>
      <div className="mt-auto p-4 bg-surface-container mx-4 mb-4 rounded-xl border border-outline-variant/20">
        <div className="flex justify-between items-center mb-2">
          <span className="text-[9px] font-bold text-slate-500 uppercase tracking-widest">Processing .rvt</span>
          <span className="text-[10px] font-headline text-primary font-bold">85%</span>
        </div>
        <div className="w-full h-1 bg-surface-variant rounded-full overflow-hidden">
          <div className="h-full bg-primary w-[85%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
        </div>
        <p className="text-[9px] text-slate-600 mt-2 italic">Extracting geometric primitives...</p>
      </div>
    </aside>
  );
};

export default SidebarNav;

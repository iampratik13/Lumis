import React from 'react';

const SidebarAnalytics = () => {
  return (
    <aside className="w-80 bg-surface-container border-l border-outline-variant/30 flex flex-col shrink-0">
      <div className="p-8 border-b border-outline-variant/10">
        <h2 className="font-headline text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-8 uppercase">Real-Time Analytics</h2>
        <div className="relative w-48 h-48 mx-auto mb-10 flex items-center justify-center">
          <svg className="absolute inset-0 w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle cx="50" cy="50" fill="none" r="44" stroke="#10b981" strokeDasharray="276" strokeDashoffset="200" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="none" r="44" stroke="#3b82f6" strokeDasharray="276" strokeDashoffset="120" strokeWidth="12"></circle>
            <circle cx="50" cy="50" fill="none" r="44" stroke="#1e3a8a" strokeDasharray="276" strokeDashoffset="0" strokeWidth="12"></circle>
          </svg>
          <div className="text-center z-10">
            <span className="block font-headline text-4xl font-bold text-white">42</span>
            <span className="block text-[9px] text-slate-500 uppercase tracking-widest font-bold">Total Clashes</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-4 mb-10">
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high/40 border border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-[#1e3a8a] rounded-full"></div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Critical</div>
            </div>
            <div className="font-headline text-base font-bold text-white">18</div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high/40 border border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-[#3b82f6] rounded-full"></div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Major</div>
            </div>
            <div className="font-headline text-base font-bold text-white">14</div>
          </div>
          <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-high/40 border border-outline-variant/10">
            <div className="flex items-center gap-3">
              <div className="w-2 h-6 bg-[#10b981] rounded-full"></div>
              <div className="text-[10px] text-slate-400 uppercase font-bold tracking-wider">Minor</div>
            </div>
            <div className="font-headline text-base font-bold text-white">10</div>
          </div>
        </div>
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <span className="text-[10px] text-slate-500 uppercase font-bold tracking-[0.1em]">Resolution Progress</span>
            <span className="font-headline text-primary font-bold text-xl">64%</span>
          </div>
          <div className="w-full h-2 bg-surface-variant rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-primary to-blue-300 w-[64%] shadow-[0_0_15px_rgba(59,130,246,0.3)]"></div>
          </div>
          <p className="text-[9px] text-slate-600 italic leading-relaxed">27/42 clashes addressed by AI-generated rerouting recommendations</p>
        </div>
      </div>
      <div className="p-8">
        <h3 className="font-headline text-[10px] font-bold tracking-[0.2em] text-slate-500 mb-5 uppercase">System Legends (Revit)</h3>
        <div className="space-y-4">
          <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-sm bg-[#3b82f6] shadow-sm shadow-blue-500/20"></div>
            <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">Cold Water Supply (Blue)</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-sm bg-[#ef4444] shadow-sm shadow-red-500/20"></div>
            <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">Hot Water Return (Red)</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-sm bg-[#94a3b8] shadow-sm shadow-slate-500/20"></div>
            <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">Supply Air Ducting (Grey)</span>
          </div>
          <div className="flex items-center gap-4 group">
            <div className="w-4 h-4 rounded-sm bg-[#f59e0b] shadow-sm shadow-amber-500/20"></div>
            <span className="text-xs text-slate-300 font-medium group-hover:text-white transition-colors">Fire Protection (Amber)</span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SidebarAnalytics;

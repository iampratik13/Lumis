import React, { useState } from 'react';
import ModelScene from './ModelScene';

const Viewport = () => {
  const [displayMode, setDisplayMode] = useState('original');

  return (
    <section className="flex-1 relative bg-surface-container-lowest flex items-center justify-center">
      
      <div className="relative w-full h-full p-4">
        <div className="w-full h-full rounded-xl overflow-hidden border border-outline-variant/30 relative">
          <ModelScene displayMode={displayMode} />
          <div className="absolute inset-0 wireframe-shine pointer-events-none z-0"></div>
        </div>
      </div>

      <div className="absolute top-8 left-1/2 -translate-x-1/2 flex bg-surface-container-high rounded-full p-1 border border-outline-variant/40 shadow-2xl z-10 pointer-events-auto">
        <button 
          onClick={() => setDisplayMode('original')}
          className={`px-7 py-2 rounded-full text-xs font-bold transition-all ${displayMode === 'original' ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:text-white'}`}
        >
          ORIGINAL
        </button>
        <button 
          onClick={() => setDisplayMode('rerouted')}
          className={`px-7 py-2 rounded-full text-xs font-bold transition-all ${displayMode === 'rerouted' ? 'bg-primary text-white shadow-lg' : 'text-on-surface-variant hover:text-white'}`}
        >
          AI-REROUTED
        </button>
      </div>

      <div className="absolute bottom-8 left-8 flex flex-col gap-2 glass-hud p-2 rounded-xl border border-outline-variant/30 shadow-xl z-10 pointer-events-auto">
        <button className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">zoom_in</span></button>
        <button className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">zoom_out</span></button>
        <button className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">3d_rotation</span></button>
        <div className="h-px bg-outline-variant/20 mx-2"></div>
        <button className="p-2 hover:bg-white/10 rounded-lg text-on-surface-variant hover:text-white transition-colors"><span className="material-symbols-outlined text-xl">layers</span></button>
      </div>

      <div className="absolute top-8 right-8 w-64 glass-hud p-5 rounded-xl border border-outline-variant/30 shadow-xl z-10 pointer-events-auto">
        <h3 className="font-headline text-[10px] font-bold tracking-[0.2em] text-primary mb-4 flex items-center gap-2">
          <span className="material-symbols-outlined text-base">construction</span>
          CONSTRAINTS
        </h3>
        <div className="space-y-5">
          <div>
            <label className="block text-[10px] text-slate-500 uppercase font-semibold tracking-wider mb-1">Ceiling Void Limit</label>
            <div className="text-sm font-headline text-on-surface">600mm - 900mm</div>
          </div>
          <div>
            <label className="block text-[10px] text-slate-500 uppercase font-semibold tracking-wider mb-1">Gravity Drainage Slope</label>
            <div className="text-sm font-headline text-on-surface">1:100 (1.0%)</div>
          </div>
          <div className="h-px bg-outline-variant/10"></div>
          <div>
            <label className="block text-[10px] text-slate-500 uppercase font-semibold tracking-wider mb-1">Min Clearance Rule</label>
            <div className="flex items-center gap-2 mt-1">
              <input className="bg-surface-container-lowest border border-outline-variant/30 text-xs w-20 text-primary font-headline font-bold focus:ring-1 focus:ring-primary rounded p-1.5" type="text" defaultValue="150" />
              <span className="text-[10px] text-slate-500 uppercase">mm</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Viewport;

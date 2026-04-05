import React from 'react';

const ClashLedger = () => {
  return (
    <section className="h-72 bg-surface-container shrink-0 overflow-hidden flex flex-col border-t border-outline-variant/20">
      <div className="flex items-center justify-between px-8 py-4 border-b border-outline-variant/10 bg-surface-container-high/30">
        <h2 className="font-headline text-[10px] font-bold tracking-[0.2em] text-on-surface-variant flex items-center gap-2 uppercase">
          <span className="material-symbols-outlined text-base">list_alt</span>
          Clash Resolution Ledger
        </h2>
        <div className="flex gap-6">
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-secondary"></div><span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Hard Clash</span></div>
          <div className="flex items-center gap-2"><div className="w-2.5 h-2.5 rounded-full bg-tertiary"></div><span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Soft Clash</span></div>
        </div>
      </div>
      <div className="flex-1 overflow-auto">
        <table className="w-full text-left border-collapse">
          <thead className="sticky top-0 bg-surface-container z-10">
            <tr className="text-[10px] text-slate-500 uppercase tracking-widest border-b border-outline-variant/10">
              <th className="py-3 px-8 font-bold">Clash ID</th>
              <th className="py-3 px-4 font-bold">Element 1</th>
              <th className="py-3 px-4 font-bold">Element 2</th>
              <th className="py-3 px-4 font-bold">System Type</th>
              <th className="py-3 px-4 font-bold">Coordinates (XYZ)</th>
              <th className="py-3 px-4 font-bold">AI Suggested Fix</th>
              <th className="py-3 px-8 font-bold">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr className="hover:bg-primary/5 transition-colors cursor-pointer group">
              <td className="py-4 px-8 font-headline text-sm font-bold text-secondary">#C-8821</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Pipe: CHW-042</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Duct: SA-102-A</td>
              <td className="py-4 px-4"><span className="text-[9px] bg-primary/20 text-primary-fixed-dim px-2.5 py-1 rounded-full uppercase font-bold border border-primary/20">Pipe vs Duct</span></td>
              <td className="py-4 px-4 font-mono text-[10px] text-slate-500">14.2, 5.8, 2.45</td>
              <td className="py-4 px-4 text-xs font-medium text-primary-fixed-dim bg-primary/5 italic">+120mm Z-Offset</td>
              <td className="py-4 px-8"><span className="material-symbols-outlined text-secondary text-sm">warning</span></td>
            </tr>
            <tr className="bg-surface-container-low/50 hover:bg-primary/5 transition-colors cursor-pointer group">
              <td className="py-4 px-8 font-headline text-sm font-bold text-tertiary">#C-1024</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Pipe: HWS-11</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Beam: ST-902</td>
              <td className="py-4 px-4"><span className="text-[9px] bg-tertiary/20 text-tertiary px-2.5 py-1 rounded-full uppercase font-bold border border-tertiary/20">Pipe vs Struct</span></td>
              <td className="py-4 px-4 font-mono text-[10px] text-slate-500">22.1, 10.4, 3.12</td>
              <td className="py-4 px-4 text-xs font-medium text-primary-fixed-dim bg-primary/5 italic">-45mm Y-Shift</td>
              <td className="py-4 px-8"><span className="material-symbols-outlined text-on-surface-variant text-sm">pending</span></td>
            </tr>
            <tr className="hover:bg-primary/5 transition-colors cursor-pointer group">
              <td className="py-4 px-8 font-headline text-sm font-bold text-secondary">#C-8824</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Duct: EA-201</td>
              <td className="py-4 px-4 font-headline text-xs text-on-surface">Cable Tray: EL-04</td>
              <td className="py-4 px-4"><span className="text-[9px] bg-primary/20 text-primary-fixed-dim px-2.5 py-1 rounded-full uppercase font-bold border border-primary/20">Duct vs Elec</span></td>
              <td className="py-4 px-4 font-mono text-[10px] text-slate-500">12.8, 4.2, 2.75</td>
              <td className="py-4 px-4 text-xs font-medium text-primary-fixed-dim bg-primary/5 italic">Reroute via AI Path</td>
              <td className="py-4 px-8"><span className="material-symbols-outlined text-secondary text-sm">report</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ClashLedger;

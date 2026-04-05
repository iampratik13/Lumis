import React from 'react';

const MobileFooter = () => {
  return (
    <footer className="md:hidden fixed bottom-0 left-0 w-full bg-surface-container border-t border-outline-variant/30 flex justify-around py-4 px-4 z-50">
      <a className="flex flex-col items-center gap-1 text-primary" href="#">
        <span className="material-symbols-outlined">precision_manufacturing</span>
        <span className="text-[9px] font-bold uppercase tracking-tighter">Engine</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
        <span className="material-symbols-outlined">analytics</span>
        <span className="text-[9px] font-bold uppercase tracking-tighter">Stats</span>
      </a>
      <a className="flex flex-col items-center gap-1 text-on-surface-variant" href="#">
        <span className="material-symbols-outlined">settings</span>
        <span className="text-[9px] font-bold uppercase tracking-tighter">Rules</span>
      </a>
    </footer>
  );
};

export default MobileFooter;

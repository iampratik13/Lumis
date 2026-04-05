import React from 'react';
import Header from './components/layout/Header';
import SidebarNav from './components/layout/SidebarNav';
import SidebarAnalytics from './components/layout/SidebarAnalytics';
import MobileFooter from './components/layout/MobileFooter';
import Viewport from './components/dashboard/Viewport';
import ClashLedger from './components/dashboard/ClashLedger';

const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="flex h-screen pt-16 overflow-hidden">
        <SidebarNav />
        <main className="flex-1 flex flex-col bg-surface-dim relative overflow-hidden">
          <Viewport />
          <ClashLedger />
        </main>
        <SidebarAnalytics />
      </div>
      <MobileFooter />
    </>
  );
};

export default Dashboard;

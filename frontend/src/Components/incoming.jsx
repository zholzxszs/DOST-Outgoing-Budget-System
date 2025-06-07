import { useState } from 'react';
import Header from './header.jsx';  
import Sidebar from './sidebar.jsx'; 
import Incoming from './incomingDocuments.jsx'

function Dashboard() {
  return (
    <div className="h-screen bg-gray-100 flex flex-col">
      {/* Fixed Header */}
      <Header />

      {/* Sidebar and Main Content */}
      <div className="flex flex-1 pt-16 overflow-hidden">
        {/* Sidebar */}
        <aside className="">
          <Sidebar />
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-auto">
          <h2 className="text-2xl font-bold">Incoming Documents</h2>
          <Incoming />
        </main>
      </div>
    </div>
  );
}

export default Dashboard;
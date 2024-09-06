import React, { useState } from 'react';
import Tabs from './components/Tabs';
import Gallery from './components/Gallery';
import './App.css';

const App = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="flex min-h-screen">
      {/* Left Half (Empty but responsive for laptop) */}
      <div className="flex-1"></div>

      {/* Right Half - Widgets */}
      <div className="flex-1 p-8">
        {/* First section for the Tabs */}
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {/* Second section for the Gallery */}
        <Gallery />
      </div>
    </div>
  );
};

export default App;

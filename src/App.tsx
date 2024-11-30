import React, { useState } from 'react';
import { Toaster } from 'react-hot-toast';
import { motion } from 'framer-motion';
import { Code2 } from 'lucide-react';
import Navbar from './components/Navbar';
import CopyButton from './components/CopyButton';
import GameTable from './components/GameTable';
import LegacyVersions from './components/LegacyVersions';
import Support from './components/Support';

function App() {
  const [activeTab, setActiveTab] = useState('Home');
  const mainScript = 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub/main/Unihub%20V2.0.lua",true))()';

  const renderContent = () => {
    switch (activeTab) {
      case 'Supported Games':
        return <GameTable />;
      case 'Legacy Versions':
        return <LegacyVersions />;
      case 'Support':
        return <Support />;
      default:
        return (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="mb-8">
              <Code2 className="w-20 h-20 text-purple-400 mx-auto mb-4" />
              <h1 className="text-4xl font-bold text-white mb-4">Universal Hub</h1>
              <p className="text-gray-300 text-lg mb-6">
                A versatile Roblox script designed to work with a wide range of games. As of November 17, 2024, it works exceptionally well with Prison Life, Da Hood, Mic Up, And Murder Mystery 2. While the script is still under development, it provides robust functionality across supported games.
              </p>
              <div className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg mb-6 shadow-xl">
                <code className="text-sm text-gray-300 block mb-4">
                  {mainScript}
                </code>
                <CopyButton script={mainScript} />
              </div>
            </div>
          </motion.div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-gray-900 text-white">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgdmlld0JveD0iMCAwIDQwIDQwIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxjaXJjbGUgY3g9IjIwIiBjeT0iMjAiIHI9IjEiIGZpbGw9InJnYmEoMjU1LCAyNTUsIDI1NSwgMC4xKSIvPjwvZz48L3N2Zz4=')] opacity-20"></div>
      <div className="relative">
        <Navbar activeTab={activeTab} setActiveTab={setActiveTab} />
        <Toaster position="bottom-right" />
        <main className="container mx-auto px-4 pt-24 pb-12">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
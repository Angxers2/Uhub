import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = ({ activeTab, setActiveTab }: { 
  activeTab: string; 
  setActiveTab: (tab: string) => void 
}) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const tabs = ['Home', 'Supported Games', 'Legacy Versions', 'Support'];

  return (
    <nav className="bg-gray-900 fixed w-full z-50 top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="text-white font-bold text-xl">Universal Hub</div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`${
                    activeTab === tab
                      ? 'bg-purple-600 text-white'
                      : 'text-gray-300 hover:bg-purple-500 hover:text-white'
                  } px-3 py-2 rounded-md text-sm font-medium transition-colors`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => {
                  setActiveTab(tab);
                  setIsMenuOpen(false);
                }}
                className={`${
                  activeTab === tab
                    ? 'bg-purple-600 text-white'
                    : 'text-gray-300 hover:bg-purple-500 hover:text-white'
                } block px-3 py-2 rounded-md text-base font-medium w-full text-left`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
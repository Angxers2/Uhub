import React from 'react';
import CopyButton from './CopyButton';
import { motion } from 'framer-motion';

const versions = [
  {
    version: 'V1.5',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.5.lua",true))()',
  },
  {
    version: 'V1.6',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.6.lua",true))()',
  },
  {
    version: 'V1.7',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.7.lua",true))()',
  },
  {
    version: 'V1.7.1',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.7.1.lua",true))()',
  },
  {
    version: 'V1.8',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.8.lua",true))()',
  },
  {
    version: 'V1.9',
    script: 'loadstring(game:HttpGet("https://raw.githubusercontent.com/Angxers2/Unihub-Legacy-Versions/refs/heads/main/Unihub%20V1.9.lua",true))()',
  },
];

const LegacyVersions = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {versions.map((version, index) => (
        <motion.div
          key={version.version}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg shadow-xl"
        >
          <h3 className="text-xl font-bold text-purple-400 mb-4">
            {version.version}
          </h3>
          <div className="mb-4">
            <code className="text-sm text-gray-300 block bg-gray-800/80 p-3 rounded">
              {version.script}
            </code>
          </div>
          <CopyButton script={version.script} />
        </motion.div>
      ))}
    </div>
  );
};

export default LegacyVersions;
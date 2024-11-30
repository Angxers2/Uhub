import React from 'react';
import { Copy, Check } from 'lucide-react';
import { motion } from 'framer-motion';
import toast from 'react-hot-toast';

const CopyButton = ({ script }: { script: string }) => {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(script);
    toast.success('Script copied to clipboard!', {
      style: {
        background: '#4C1D95',
        color: '#fff',
      },
      iconTheme: {
        primary: '#fff',
        secondary: '#4C1D95',
      },
    });
  };

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleCopy}
      className="bg-purple-600 text-white px-4 py-2 rounded-md flex items-center gap-2 hover:bg-purple-700 transition-colors"
    >
      <Copy size={18} />
      Copy Script
    </motion.button>
  );
};

export default CopyButton;
import React from 'react';
import { ExternalLink, MessageSquare, FileText } from 'lucide-react';
import { motion } from 'framer-motion';

const Support = () => {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900 p-6 rounded-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <MessageSquare className="text-purple-400" size={24} />
          <h3 className="text-xl font-bold text-white">Discord Support</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Join our Discord community for direct support, updates, and discussions.
        </p>
        <a
          href="https://discord.gg/ZNfKFyuUEd"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Join Discord
          <ExternalLink size={18} />
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="bg-gray-900 p-6 rounded-lg"
      >
        <div className="flex items-center gap-3 mb-4">
          <FileText className="text-purple-400" size={24} />
          <h3 className="text-xl font-bold text-white">Feedback Form</h3>
        </div>
        <p className="text-gray-300 mb-4">
          Help us improve by submitting feedback, reporting bugs, or requesting features.
        </p>
        <a
          href="https://forms.gle/1shV2JBsZUu663ze6"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors"
        >
          Submit Feedback
          <ExternalLink size={18} />
        </a>
      </motion.div>
    </div>
  );
};

export default Support;
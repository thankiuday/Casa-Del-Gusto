import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Tabs = ({ tabs, className = '' }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={className}>
      <div className="flex flex-wrap gap-2 border-b border-gray-200 dark:border-gray-700 mb-6">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(index)}
            className={`
              relative px-6 py-3 font-medium transition-colors
              ${activeTab === index
                ? 'text-primary-500'
                : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200'
              }
            `}
          >
            {tab.label}
            {activeTab === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary-500"
                initial={false}
                transition={{ duration: 0.3 }}
              />
            )}
          </button>
        ))}
      </div>
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -10 }}
        transition={{ duration: 0.3 }}
      >
        {tabs[activeTab].content}
      </motion.div>
    </div>
  );
};

export default Tabs;

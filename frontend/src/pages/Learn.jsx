
import React, { useState } from 'react';

const Learn = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const renderContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <>
            <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">What is PCOD?</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Polycystic Ovarian Disease (PCOD) is a hormonal disorder common among women of reproductive age.
              It may cause infrequent or prolonged menstrual periods or excess androgen levels. Ovaries may
              develop small collections of fluid (follicles) and fail to regularly release eggs.
            </p>
          </>
        );
      case 'symptoms':
        return (
          <>
            <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Common Symptoms</h3>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 leading-relaxed">
              <li>Irregular periods</li>
              <li>Weight gain</li>
              <li>Acne and oily skin</li>
              <li>Hair thinning or loss</li>
              <li>Infertility or ovulation issues</li>
            </ul>
          </>
        );
      case 'causes':
        return (
          <>
            <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Causes of PCOD</h3>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              The exact cause is unknown, but factors include insulin resistance, inflammation, genetics, and
              hormonal imbalance (high levels of androgens).
            </p>
          </>
        );
      case 'faq':
        return (
          <>
            <h3 className="text-xl font-bold mb-2 text-purple-700 dark:text-purple-300">Frequently Asked Questions</h3>
            <p className="text-gray-700 dark:text-gray-300">
              <strong>Can PCOD be cured?</strong> While there's no cure, it can be managed with proper lifestyle changes, medication, and diet.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              <strong>Is PCOD the same as PCOS?</strong> They're similar but not exactly the same; PCOD is more common and less severe than PCOS.
            </p>
          </>
        );
      default:
        return null;
    }
  };

  const tabs = [
    { label: 'Overview', key: 'overview' },
    { label: 'Symptoms', key: 'symptoms' },
    { label: 'Causes', key: 'causes' },
    { label: 'FAQ', key: 'faq' }
  ];

  return (
    <div className="min-h-screen py-10 px-6 md:px-20 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-gray-900 dark:to-gray-800 text-gray-900 dark:text-gray-200">
      <h2 className="text-3xl font-bold text-center text-purple-800 dark:text-purple-300 mb-8">
        💡 Learn About PCOD
      </h2>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2 rounded-full font-medium transition shadow ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white shadow-lg'
                : 'bg-white dark:bg-gray-700 text-purple-600 dark:text-purple-300 hover:bg-purple-100 dark:hover:bg-gray-600'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 border border-purple-100 dark:border-gray-700">
        {renderContent()}
      </div>
    </div>
  );
};

export default Learn;



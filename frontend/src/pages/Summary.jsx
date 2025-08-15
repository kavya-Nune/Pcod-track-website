// src/pages/Summary.jsx
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Summary() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state || {};

  const { mood, symptoms } = data;

  return (
    <div className="min-h-screen bg-gradient-to-r from-purple-100 to-pink-100 py-10 px-6">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-xl p-8 text-center">
        <h1 className="text-3xl font-bold text-purple-700 mb-4">🎉 Entry Saved Successfully!</h1>
        <p className="text-gray-700 text-lg mb-6">Thank you for updating your wellness log today.</p>

        <div className="bg-gray-50 p-6 rounded-lg border border-purple-200 mb-6">
          <h2 className="text-2xl font-semibold text-purple-600 mb-4">📋 Today's Summary</h2>

          <div className="mb-4">
            <h3 className="text-lg font-semibold text-gray-800">Mood Selected:</h3>
            <p className="text-pink-600 text-lg">{mood || 'Not provided'}</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-800">Symptoms Selected:</h3>
            {symptoms && symptoms.length > 0 ? (
              <ul className="list-disc list-inside text-gray-700">
                {symptoms.map((symptom, index) => (
                  <li key={index}>{symptom}</li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-500">No symptoms selected.</p>
            )}
          </div>
        </div>

        <button
          onClick={() => navigate('/')}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-semibold hover:shadow-lg transition"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}

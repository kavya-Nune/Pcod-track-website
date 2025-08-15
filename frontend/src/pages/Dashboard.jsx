//Dashboard.jsx

/*import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [moodData, setMoodData] = useState([]);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const fetchMoods = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.get(`http://localhost:5000/api/moods/my/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setMoodData(sorted);

        if (res.data[0]?.user?.name) {
          setUserName(res.data[0].user.name);
        }
      } catch (err) {
        console.error('Error fetching mood data:', err);
      }
    };

    fetchMoods();
  }, []);

  const recentLogs = moodData.slice(0, 5);

  return (
    <div className="p-6 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold mb-6 text-purple-700">Welcome back, {userName}!</h2>

      
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-100 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Next Period</h4>
          <p>Due soon</p>
        </div>
        <div className="bg-blue-100 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Cycle Length</h4>
          <p>32 days</p>
        </div>
        <div className="bg-purple-100 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Medications</h4>
          <p>2</p>
        </div>
        <div className="bg-green-100 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Appointments</h4>
          <p>1</p>
        </div>
      </div>

      
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-700">📋 Recent Activity</h3>
        <ul className="space-y-3">
          {recentLogs.map((entry) => (
            <li
              key={entry._id}
              className="bg-white p-4 rounded shadow flex flex-col md:flex-row justify-between"
            >
              <div>
                <p className="font-medium">Symptoms logged for {new Date(entry.date).toDateString()}</p>
                <p className="text-sm text-gray-600">
                  Mood: {entry.mood} • Flow: {entry.periodFlow}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="bg-pink-50 p-4 rounded shadow border-l-4 border-pink-400">
        <h4 className="font-bold text-pink-700">💡 Today's Health Tip</h4>
        <p className="text-sm mt-1">
          Regular exercise can help manage PCOD symptoms by improving insulin sensitivity. Try incorporating 30 minutes of walking, yoga, or swimming daily.
        </p>
      </div>
    </div>
  );
}*/

import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Dashboard() {
  const [moodData, setMoodData] = useState([]);
  const [userName, setUserName] = useState('User');

  useEffect(() => {
    const fetchMoods = async () => {
      const token = localStorage.getItem('token');
      const userId = localStorage.getItem('userId');

      try {
        const res = await axios.get(`http://localhost:5000/api/moods/my/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const sorted = res.data.sort((a, b) => new Date(b.date) - new Date(a.date));
        setMoodData(sorted);

        if (res.data[0]?.user?.name) {
          setUserName(res.data[0].user.name);
        }
      } catch (err) {
        console.error('Error fetching mood data:', err);
      }
    };

    fetchMoods();
  }, []);

  const recentLogs = moodData.slice(0, 5);

  return (
    <div className="p-6 max-w-5xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen">
      <h2 className="text-2xl font-bold mb-6 text-purple-700 dark:text-purple-300">Welcome back, {userName}!</h2>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
        <div className="bg-pink-100 dark:bg-pink-200/20 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Next Period</h4>
          <p>Due soon</p>
        </div>
        <div className="bg-blue-100 dark:bg-blue-200/20 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Cycle Length</h4>
          <p>32 days</p>
        </div>
        <div className="bg-purple-100 dark:bg-purple-200/20 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Medications</h4>
          <p>2</p>
        </div>
        <div className="bg-green-100 dark:bg-green-200/20 p-4 rounded shadow text-center">
          <h4 className="font-semibold text-lg">Appointments</h4>
          <p>1</p>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-3 text-gray-700 dark:text-gray-300">📋 Recent Activity</h3>
        <ul className="space-y-3">
          {recentLogs.map((entry) => (
            <li
              key={entry._id}
              className="bg-white dark:bg-gray-800 p-4 rounded shadow flex flex-col md:flex-row justify-between"
            >
              <div>
                <p className="font-medium">Symptoms logged for {new Date(entry.date).toDateString()}</p>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mood: {entry.mood} • Flow: {entry.periodFlow}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      {/* Health Tip */}
      <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded shadow border-l-4 border-pink-400 dark:border-pink-600">
        <h4 className="font-bold text-pink-700 dark:text-pink-400">💡 Today's Health Tip</h4>
        <p className="text-sm mt-1 text-gray-700 dark:text-gray-300">
          Regular exercise can help manage PCOD symptoms by improving insulin sensitivity. Try incorporating 30 minutes of walking, yoga, or swimming daily.
        </p>
      </div>
    </div>
  );
}





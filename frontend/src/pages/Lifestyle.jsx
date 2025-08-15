
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Lifestyle = () => {
  const location = useLocation();
  const [activeTab, setActiveTab] = useState('daily');

  useEffect(() => {
    if (location.hash) {
      const hashTab = location.hash.replace('#', '');
      const validTabs = ['daily', 'diet', 'exercise', 'stress'];
      if (validTabs.includes(hashTab)) {
        setActiveTab(hashTab);
      }
    }
  }, [location]);

  const initialTasks = [
    { icon: '🤍', text: 'Drink 8 glasses of water', completed: false },
    { icon: '🧠', text: '30 minutes physical activity', completed: false },
    { icon: '🧘‍♀️', text: '10 minutes meditation', completed: false },
    { icon: '🌙', text: '7–8 hours quality sleep', completed: false },
    { icon: '🍎', text: '5 servings of vegetables', completed: false },
    { icon: '🎯', text: 'Take prescribed supplements', completed: false }
  ];

  const [tasks, setTasks] = useState(initialTasks);

  const toggleTask = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const completedCount = tasks.filter(task => task.completed).length;
  const progressPercent = (completedCount / tasks.length) * 100;

  return (
    <div className=" pt-20 p-4 md:p-8 max-w-6xl mx-auto bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-200 min-h-screen pb-12">
      <h1 className="text-3xl font-bold mb-2">Lifestyle Management</h1>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Comprehensive lifestyle strategies to help manage PCOD symptoms naturally.
      </p>

      <div className="flex gap-4 border-b pb-2 mb-6 overflow-x-auto">
        {['daily', 'diet', 'exercise', 'stress'].map(tab => (
          <button
            key={tab}
            className={`font-semibold px-4 py-1 rounded-lg whitespace-nowrap ${activeTab === tab ? 'bg-pink-600 text-white' : 'text-gray-500 dark:text-gray-300'
              }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab === 'daily' && 'Daily Tasks'}
            {tab === 'diet' && 'Diet Plans'}
            {tab === 'exercise' && 'Exercise'}
            {tab === 'stress' && 'Stress Management'}
          </button>
        ))}
      </div>

      {/* Daily Tasks */}
      {activeTab === 'daily' && (
        <div>
          <h2 className="text-xl font-semibold mb-2 text-pink-700">✅ Daily Wellness Checklist</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                onClick={() => toggleTask(index)}
                className={`cursor-pointer flex items-center justify-between p-4 rounded-lg shadow-sm text-sm font-medium transition ${task.completed ? 'bg-pink-200 border border-pink-400 text-pink-700' : 'bg-white text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                  }`}
              >
                <span className="flex items-center gap-2">{task.icon} {task.text}</span>
                {task.completed && <span className="text-pink-600 text-lg font-semibold">✔</span>}
              </div>
            ))}
          </div>

          <div className="mt-6 bg-pink-100 dark:bg-gray-800 p-4 rounded-lg">
            <div className="flex justify-between mb-1">
              <p className="font-semibold">Progress Today</p>
              <p className="text-pink-600 font-semibold">{completedCount}/{tasks.length} completed</p>
            </div>
            <div className="w-full bg-pink-200 h-2 rounded">
              <div
                className="bg-pink-600 h-2 rounded transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              ></div>
            </div>
          </div>
        </div>
      )}

      {/* Diet Plans */}
      {activeTab === 'diet' && (
        <div className="space-y-4">
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🍴 Low GI Diet</h3>
            <ul className="list-disc ml-5">
              <li>Quinoa, brown rice, oats</li>
              <li>Leafy greens, broccoli</li>
              <li>Lean proteins</li>
            </ul>
          </div>

          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🥗 Anti-Inflammatory Foods</h3>
            <ul className="list-disc ml-5">
              <li>Omega-3 rich fish</li>
              <li>Turmeric, ginger</li>
              <li>Colorful veggies</li>
            </ul>
          </div>
          <div className="bg-pink-50  dark:bg-gray-800 p-4 rounded">
            <h3 className="text-xl font-bold text-pink-700 mb-2">🌿 Herbal Support</h3>
            <p className="text-gray-600 mb-3">Certain herbs may support hormonal balance and reduce PCOD symptoms.</p>
            <h3 className="font-semibold">Include:</h3>
            <ul className="list-disc ml-5">
              <li>Spearmint tea (helps reduce androgens)</li>
              <li>Cinnamon (improves insulin sensitivity)</li>
              <li>Fenugreek seeds (may regulate blood sugar)</li>
              <li>Licorice root (supports hormonal balance)</li>
            </ul>
            <h3 className="font-semibold text-red-600">Avoid Excess:</h3>
            <ul className="list-disc ml-6 text-red-500">
              <li>Caffeinated beverages (can worsen anxiety)</li>
              <li>Artificial sweeteners</li>
            </ul>
          </div>

        </div>







      )}

      {/* Exercise */}
      {activeTab === 'exercise' && (
        <div className="space-y-4">
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🏃‍♀️ Cardio</h3>
            <ul className="list-disc ml-5">
              <li>Brisk Walking</li>
              <li>Cycling</li>
              <li>Swimming</li>
            </ul>
          </div>

          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🏋️ Strength Training</h3>
            <ul className="list-disc ml-5">
              <li>Squats</li>
              <li>Push-ups</li>
              <li>Planks</li>
            </ul>
          </div>
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h2 className="text-xl font-bold text-pink-700 mb-2">🧘 Mind-Body / Flexibility</h2>
            <ul className="list-disc ml-5">
              <li>Yoga</li>
              <li>Meditation</li>
              <li>Deep Breathing Exercise</li>
              <li>Tai Chi</li>
              <li>Progressive Muscle Relaxation</li>
            </ul>
          </div>
        </div>
      )}

      {/* Stress Management */}
      {activeTab === 'stress' && (
        <div className="space-y-4">
          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🧘‍♀️ Techniques</h3>
            <ul className="list-disc ml-5">
              <li>Deep Breathing</li>
              <li>Mindfulness Meditation</li>
              <li>Journaling</li>
            </ul>
          </div>

          <div className="bg-pink-50 dark:bg-gray-800 p-4 rounded">
            <h3 className="text-lg font-bold text-pink-700 mb-2">🛌 Sleep Hygiene</h3>
            <ul className="list-disc ml-5">
              <li>Consistent sleep schedule</li>
              <li>Reduce screen time before bed</li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Lifestyle;

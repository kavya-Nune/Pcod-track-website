import React, { useState } from 'react';
import axios from 'axios';

const symptomsList = [
  "Acne", "Hair Loss", "Weight Gain", "Mood Swings", "Fatigue",
  "Bloating", "Cramps", "Headache", "Anxiety", "Depression"
];

export default function Track() {
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
  const [mood, setMood] = useState('');
  const [periodFlow, setPeriodFlow] = useState('');
  const [notes, setNotes] = useState('');
  const [symptoms, setSymptoms] = useState(
    symptomsList.reduce((acc, curr) => ({ ...acc, [curr]: 0 }), {})
  );

  const handleSliderChange = (symptom, value) => {
    setSymptoms((prev) => ({ ...prev, [symptom]: parseInt(value) }));
  };

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");

    const formattedSymptoms = Object.entries(symptoms).map(([name, intensity]) => ({
      name,
      intensity
    }));

    try {
      await axios.post("http://localhost:5000/api/moods/", {
        date,
        mood,
        periodFlow,
        symptoms: formattedSymptoms,
        notes
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });

      alert("✅ Symptoms saved!");
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save symptoms.");
    }
  };

  return (
    <div className="min-h-screen p-6 text-gray-800 dark:text-gray-200 bg-white dark:bg-gray-900">
      <h1 className="text-3xl font-bold text-purple-700 dark:text-purple-300 mb-6">Track Your Symptoms</h1>

      {/* Date */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">📅 Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          className="border p-2 rounded w-full bg-white dark:bg-gray-800 dark:border-gray-600"
        />
      </div>

      {/* Period Flow */}
      <div className="mb-4">
        <label className="block mb-1 font-medium">🔥 Period Flow</label>
        <div className="flex gap-4 flex-wrap">
          {["None", "Light", "Medium", "Heavy"].map((flow) => (
            <button
              key={flow}
              className={`border rounded px-4 py-2 ${periodFlow === flow ? 'bg-pink-100 dark:bg-pink-600 dark:text-white border-pink-500' : 'bg-white dark:bg-gray-800 dark:border-gray-600'}`}
              onClick={() => setPeriodFlow(flow)}
            >
              {flow}
            </button>
          ))}
        </div>
      </div>

      {/* Symptoms */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-pink-600 mb-2">💗 Symptoms (0 = None, 5 = Severe)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {symptomsList.map((symptom) => (
            <div key={symptom}>
              <label className="block font-medium">{symptom}</label>
              <input
                type="range"
                min="0"
                max="5"
                value={symptoms[symptom]}
                onChange={(e) => handleSliderChange(symptom, e.target.value)}
                className="w-full"
              />
              <div className="text-sm text-gray-600 dark:text-gray-400">Intensity: {symptoms[symptom]}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Mood */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-purple-600 mb-2">🙂 Overall Mood</h2>
        <div className="flex gap-4 flex-wrap">
          {["Terrible", "Bad", "Okay", "Good", "Excellent"].map((m) => (
            <button
              key={m}
              className={`border rounded px-4 py-2 ${mood === m ? 'bg-purple-100 dark:bg-purple-600 dark:text-white border-purple-500' : 'bg-white dark:bg-gray-800 dark:border-gray-600'}`}
              onClick={() => setMood(m)}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {/* Notes */}
      <div className="mb-6">
        <label className="block mb-1 font-medium">📝 Additional Notes</label>
        <textarea
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
          rows={3}
          className="w-full border rounded p-2 bg-white dark:bg-gray-800 dark:border-gray-600"
          placeholder="Any additional notes about your day..."
        />
      </div>

      <button
        onClick={handleSubmit}
        className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
      >
        💾 Save Symptoms
      </button>
    </div>
  );
}



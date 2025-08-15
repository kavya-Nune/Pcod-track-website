import React, { useState } from 'react';

const questions = [
  { id: 1, question: "Do you have irregular periods?" },
  { id: 2, question: "Have you experienced sudden weight gain?" },
  { id: 3, question: "Do you have acne or oily skin?" },
  { id: 4, question: "Have you noticed excessive facial or body hair?" },
  { id: 5, question: "Do you experience mood swings frequently?" },
];

export default function Assessment() {
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleAnswerChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = () => {
    const allAnswered = questions.every((q) => answers[q.id] === "yes" || answers[q.id] === "no");

    if (!allAnswered) {
      alert("Please answer all questions before submitting.");
      return;
    }

    setSubmitted(true);
  };

  const score = Object.values(answers).filter(a => a === "yes").length;

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-100 to-purple-100 py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-center text-purple-800 mb-6">Symptom Assessment</h1>
        <p className="text-center text-gray-600 mb-8">
          Answer the following questions to assess if you're showing common signs of PCOD.
        </p>

        {!submitted ? (
          <div className="space-y-6">
            {questions.map((q) => (
              <div key={q.id}>
                <p className="font-medium mb-2">{q.question}</p>
                <div className="flex gap-4">
                  <label>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value="yes"
                      onChange={() => handleAnswerChange(q.id, "yes")}
                      className="mr-2"
                      checked={answers[q.id] === "yes"}
                    />
                    Yes
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value="no"
                      onChange={() => handleAnswerChange(q.id, "no")}
                      className="mr-2"
                      checked={answers[q.id] === "no"}
                    />
                    No
                  </label>
                </div>
              </div>
            ))}

            <button
              onClick={handleSubmit}
              className="mt-6 bg-purple-600 text-white py-2 px-6 rounded-full hover:bg-purple-700 transition"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="text-center mt-8">
            <h2 className="text-2xl font-semibold mb-4">Your Results</h2>
            {score >= 3 ? (
              <p className="text-red-600 font-medium">
                You may have symptoms of PCOD. Please consult a healthcare professional for a proper diagnosis.
              </p>
            ) : score === 0 ? (
              <p className="text-green-600 font-medium">
                You reported no symptoms of PCOD. Keep monitoring your health regularly.
              </p>
            ) : (
              <p className="text-yellow-600 font-medium">
                You reported mild symptoms. It's good to stay aware and consider tracking them over time.
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

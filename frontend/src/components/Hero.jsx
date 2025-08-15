// src/components/Hero.jsx
import { HashLink as Link } from 'react-router-hash-link';
import { Dumbbell, BookOpen, Utensils, ClipboardCheck } from 'lucide-react';

export default function Hero() {
  return (
    <section className="px-8 py-12 text-center bg-white dark:bg-gray-900 dark:text-gray-100">
      <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
        Take Control of <span className="text-purple">Your PCOD Journey</span>
      </h1>
      <p className="text-lg mb-6 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
        Understand your body, track your symptoms, and discover personalized wellness plans designed specifically for PCOD/PCOS management.
      </p>
      <div className="flex flex-col sm:flex-row justify-center gap-4 mb-10">
        <Link to="/assessment">
          <button className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-lg font-semibold">
            Take Symptom Quiz
          </button>
        </Link>

        <Link to="/learn">
          <button className="border border-purple-500 text-purple-600 dark:text-purple-300 px-6 py-2 rounded-lg font-semibold bg-white dark:bg-gray-800 hover:bg-purple-50 dark:hover:bg-gray-700 transition">
            Learn About PCOD
          </button>
        </Link>
      </div>

      <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight">
        Everything You Need for <span className="text-pink-600">PCOD Management</span>
      </h2>
      <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
        Comprehensive tools and resources designed specifically for women managing PCOD/PCOS
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center">
        <FeatureCard
          icon={<ClipboardCheck className="text-pink-500 w-8 h-8" />} 
          title="Symptom Assessment"
          description="Take our quiz to understand your PCOD symptoms and get personalized insights."
          link="/assessment"
          linkText="Take Quiz"
        />

        <FeatureCard
          icon={<BookOpen className="text-purple-600 w-8 h-8" />} 
          title="Learn About PCOD"
          description="Guides about PCOD/PCOS, symptoms, causes, and management."
          link="/learn"
          linkText="Learn More"
        />

        <FeatureCard
          icon={<Utensils className="text-orange-500 w-8 h-8" />} 
          title="Nutrition Plans"
          description="Explore PCOD-friendly meal plans and recipes."
          link="/lifestyle#diet"
          linkText="View Recipes"
        />

        <FeatureCard
          icon={<Dumbbell className="text-green-600 w-8 h-8" />} 
          title="Exercise Routines"
          description="Workout plans for PCOD management."
          link="/lifestyle#exercise"
          linkText="Get Active"
        />
      </div>
    </section>
  );
}

function FeatureCard({ title, description, icon, link, linkText }) {
  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md flex flex-col justify-between h-full text-left">
      <div>
        <div className="mb-4">{icon}</div>
        <h3 className="text-lg font-bold mb-2">{title}</h3>
        <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{description}</p>
      </div>
      <Link to={link} className="text-sm font-medium text-purple-600 dark:text-purple-300 hover:underline">
        {linkText}
      </Link>
    </div>
  );
}





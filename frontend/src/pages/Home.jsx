import React from 'react';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import Features from '../components/Features';
import About from '../components/About';
import CTA from '../components/Cta';

export default function Home() {
  return (
    <div className="bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 min-h-screen">
      <Hero />
      <Stats />
      <Features />
      <About />
      <CTA />
    </div>
  );
}


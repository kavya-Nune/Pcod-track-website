import React from 'react';
import { Mail, Phone, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-pink-50 dark:bg-gray-900 text-gray-700 dark:text-gray-300 px-6 py-10 mt-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        
        
        <div>
          <h2 className="flex items-center gap-2 font-bold text-xl text-pink-600">
            <span className="text-2xl">💖</span> PCOD Care
          </h2>
          <p className="mt-3 text-sm">
            Empowering women with tools to manage PCOD/PCOS naturally and confidently.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/learn" className="hover:underline">About PCOD</Link></li>
            <li><Link to="/track" className="hover:underline">Symptom Tracker</Link></li>
            <li><Link to="/community" className="hover:underline">Community</Link></li>
            <li><Link to="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><Link to="/recipes" className="hover:underline">Healthy Recipes</Link></li>
            <li><Link to="/exercise" className="hover:underline">Exercise Plans</Link></li>
            <li><Link to="/mindfulness" className="hover:underline">Mindfulness</Link></li>
            <li><Link to="/doctors" className="hover:underline">Find Doctors</Link></li>
          </ul>
        </div>

        
        <div>
          <h3 className="font-semibold mb-3">Contact</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Mail size={16} className="text-pink-600" />
              <a href="mailto:support@pcodcare.com">support@pcodcare.com</a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} className="text-pink-600" />
              <span>+91 98765 43210</span>
            </li>
          </ul>

          <div className="mt-4 flex gap-4 text-pink-600 text-xl">
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="YouTube"><Youtube size={20} /></a>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-300 dark:border-gray-700 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
        <p>© 2025 PCOD Care. All rights reserved.</p>
        <div className="space-x-4 mt-2 md:mt-0">
          <Link to="/privacy" className="hover:underline">Privacy Policy</Link>
          <Link to="/terms" className="hover:underline">Terms & Conditions</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;




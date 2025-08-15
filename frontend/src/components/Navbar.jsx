import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar({ darkMode, toggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center p-4 shadow bg-white dark:bg-gray-900 relative">
      <div className="text-pink-600 font-bold text-xl flex items-center">
        💖 PCOD Care
      </div>

      {/* Hamburger icon for mobile */}
      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex gap-4 items-center text-gray-700 dark:text-gray-200">
        <Link to="/">Home</Link>
        <Link to="/learn">Learn</Link>
        <Link to="/track">Track</Link>
        <Link to="/lifestyle">Lifestyle</Link>

        <Link to="/dashboard">
          <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:opacity-90">
            Dashboard
          </button>
        </Link>

        <button
          onClick={toggleTheme}
          className="ml-4 text-xl transition duration-300"
          title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        >
          {darkMode ? '☀️' : '🌙'}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-900 flex flex-col items-center space-y-4 py-4 text-gray-700 dark:text-gray-200 shadow-md md:hidden">
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/learn" onClick={() => setMenuOpen(false)}>Learn</Link>
          <Link to="/track" onClick={() => setMenuOpen(false)}>Track</Link>
          <Link to="/lifestyle" onClick={() => setMenuOpen(false)}>Lifestyle</Link>

          <Link to="/dashboard" onClick={() => setMenuOpen(false)}>
            <button className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded hover:opacity-90">
              Dashboard
            </button>
          </Link>

          <button
            onClick={() => {
              toggleTheme();
              setMenuOpen(false);
            }}
            className="text-xl transition duration-300"
            title={darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      )}
    </nav>
  );
}

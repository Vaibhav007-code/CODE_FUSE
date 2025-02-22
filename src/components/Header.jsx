import React, { useState } from 'react';
import logo from '../assets/logo.png';

const Header = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem('darkMode') === 'true'
  );

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem('darkMode', newMode);
    document.body.classList.toggle('dark-mode', newMode);
  };

  return (
    <header className="header">
      <nav className="nav-container">
        <div className="brand">
          <img src={logo} alt="Codefuse Logo" className="logo" />
          <h1>CODEFUSE</h1>
        </div>
        <button onClick={toggleDarkMode} className="dark-mode-btn">
          {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
        </button>
      </nav>
    </header>
  );
};

export default Header;

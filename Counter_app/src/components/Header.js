import React from 'react';

const Header = ({ toggleMode, isDarkMode }) => {
  return (
    <nav className={`navbar navbar-expand-lg bg-${isDarkMode ? "dark" : "light"}`}  style={{ color: isDarkMode ? "white" : "black" }}>
      <div className="container-fluid">
        <a className={`navbar-brand text-${isDarkMode ? 'light' : 'dark'}`} href="#">
          Counter App
        </a>
        <button
          className="btn btn-outline-${isDarkMode ? 'dark' : 'light'}`} "  id="darkModeToggle" style={{ color: isDarkMode ? "white" : "black" }}
          onClick={toggleMode}
          type="button"
        >
          Dark mode
        </button>
      </div>
    </nav>
  );
};

export default Header;

import React from 'react';
import './App.css';

function App() {
  const handleGetStarted = () => {
    alert('Welcome to Paradise Nursery! Explore our beautiful plants.');
  };

  return (
    <div className="landing-page">
      <div className="landing-content">
        <h1>Paradise Nursery</h1>

        <p>
          Bring Nature Home with Our Beautiful Collection
          of Indoor Plants.
        </p>

        <button
          className="get-started-btn"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

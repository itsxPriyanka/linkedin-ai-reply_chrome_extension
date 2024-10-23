import React, { useState, useEffect } from "react";
import Modal from "./components/modal"; // Ensure correct import path

const App: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Default to the local path
  let aiIconSrc = '/assets/AI.svg';  // Default path for local environment

  // Check if we are in a Chrome extension environment
  if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.getURL) {
    // Only use chrome.runtime.getURL in a Chrome extension environment
    aiIconSrc = chrome.runtime.getURL("assets/AI.svg");
  }

  // Handle keyboard accessibility for the AI icon
  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      setIsOpen(true);
    }
  };

  // UseEffect to reset modal state if needed in the future
  useEffect(() => {
    if (!isOpen) {
      // Perform any reset if necessary when modal closes
    }
  }, [isOpen]);

  return (
    <div className="app-container flex justify-center items-center h-screen">
      {/* Display AI icon and open modal on click or keyboard enter */}
      <img
        src={aiIconSrc} // Use chrome.runtime.getURL if in extension, otherwise local path
        alt="AI Icon"
        onClick={() => setIsOpen(true)} // Open modal on click
        onKeyPress={handleKeyPress} // Open modal on "Enter" key
        tabIndex={0} // Make the icon focusable
        className="cursor-pointer w-12 h-12" // Adjust width and height as needed
      />

      {/* Pass the isOpen and setIsOpen state to Modal */}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
};

export default App;

import React, { useState, useEffect } from "react";
import Modal from "./modal";  // Import your modal component

const Content: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [shouldShowIcon, setShouldShowIcon] = useState(false);

  // Check if running in a Chrome extension environment
  const aiIconSrc =
    typeof chrome !== 'undefined' && chrome.runtime ? chrome.runtime.getURL("assets/AI.svg") : '/assets/AI.svg';

  // Named functions for event listener cleanup
  const handleFocus = () => setShouldShowIcon(true);
  const handleBlur = () => setShouldShowIcon(false);

  useEffect(() => {
    const messageBox = document.querySelector(".msg-form__contenteditable");

    if (messageBox) {
      messageBox.addEventListener("focus", handleFocus);
      messageBox.addEventListener("blur", handleBlur);
    }

    // Cleanup event listeners when component unmounts
    return () => {
      if (messageBox) {
        messageBox.removeEventListener("focus", handleFocus);
        messageBox.removeEventListener("blur", handleBlur);
      }
    };
  }, []);

  const handleIconClick = () => {
    setIsOpen(true); // Open modal when icon is clicked
  };

  return (
    <>
      {shouldShowIcon && (
        <div className="fixed bottom-16 right-16 cursor-pointer z-50" onClick={handleIconClick}>
          <img src={aiIconSrc} alt="AI Icon" className="w-12 h-12 border-2 border-blue-500 p-2 rounded-full shadow-lg" />
        </div>
      )}
      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
    </>
  );
};

export default Content;

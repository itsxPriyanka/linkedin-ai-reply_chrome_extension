// Background script for handling messages from content scripts

// Listener for messages from content scripts
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.type === 'SHOW_MODAL') {
    // Logic to show the modal can go here if needed, but typically handled in the content script
    sendResponse({ status: 'modal_shown' });
  } else if (request.type === 'SHOW_ICON') {
    // Logic to show the AI icon
    console.log('Showing AI icon');
    // You can add any additional functionality related to showing the icon here
  } else if (request.type === 'HIDE_ICON') {
    // Logic to hide the AI icon
    console.log('Hiding AI icon');
    // You can add any additional functionality related to hiding the icon here
  }
  // You can handle other message types here
  return true; // Keep the message channel open for async response
});

// Optional: Add any event listeners for browser actions if needed
chrome.runtime.onInstalled.addListener(() => {
  console.log('Extension installed and ready to go!');
});

// Optional: If you need to listen for tab updates or specific events, you can add those here

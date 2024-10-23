// let iconVisible = false;

// // Function to insert AI icon into LinkedIn message box
// function insertAIIcon() {
//   const messageBox = document.querySelector('.msg-form__contenteditable');

//   if (!messageBox) return;

//   // Create the AI icon if it's not already present
//   if (!document.querySelector('.ai-icon')) {
//     const aiIcon = document.createElement('img');
//     aiIcon.src = chrome.runtime.getURL('assets/ai.svg');
//     aiIcon.classList.add('ai-icon');

//     // Style the AI icon
//     aiIcon.style.position = 'absolute';
//     aiIcon.style.cursor = 'pointer';
//     aiIcon.style.right = '10px';
//     aiIcon.style.top = '10px';

//     if (messageBox.parentElement) {
//       messageBox.parentElement.style.position = 'relative';
//       messageBox.parentElement.appendChild(aiIcon);
//     } else {
//       console.error('Parent element of the message box is not found.');
//     }

//     // Add click event listener to open the modal
//     aiIcon.addEventListener('click', () => {
//       chrome.runtime.sendMessage({ type: 'SHOW_MODAL' });
//     });
//   }

//   iconVisible = true;
// }

// // Function to hide AI icon
// function hideAIIcon() {
//   const aiIcon = document.querySelector('.ai-icon');
//   if (aiIcon) {
//     aiIcon.remove();
//     iconVisible = false;
//   }
// }

// // Handle focus event to show AI icon
// function handleFocus() {
//   if (!iconVisible) {
//     insertAIIcon();
//   }
// }

// // Handle blur event to hide AI icon
// function handleBlur(event) {
//   const messageBox = document.querySelector('.msg-form__contenteditable');
//   if (!messageBox.contains(event.relatedTarget)) {
//     hideAIIcon();
//   }
// }

// // Observe focus/blur events in the message box
// function observeMessageBox() {
//   const messageBox = document.querySelector('.msg-form__contenteditable');

//   if (messageBox) {
//     messageBox.addEventListener('focus', handleFocus);
//     messageBox.addEventListener('blur', handleBlur);
//   }
// }

// // MutationObserver to check for the LinkedIn message box
// const observer = new MutationObserver(() => {
//   const messageBox = document.querySelector('.msg-form__contenteditable');

//   if (messageBox) {
//     observeMessageBox();
//   }
// });

// // Start observing changes in the DOM to find the LinkedIn message box
// observer.observe(document.body, { childList: true, subtree: true });

// // Listen for messages to show modal
// chrome.runtime.onMessage.addListener((message) => {
//   if (message.type === 'SHOW_MODAL') {
//     const modal = document.createElement('div');
//     modal.id = 'ai-modal';

//     // Add modal content with Tailwind CSS classes
//     modal.innerHTML = `
//       <div class="fixed inset-0 flex items-center justify-center z-50">
//         <div class="bg-gray-100 p-6 rounded-lg shadow-xl max-w-md w-full">
//           <h2 class="text-xl font-semibold mb-4">Your Prompt</h2>
//           <textarea id="yourPrompt" class="border p-2 w-full rounded-md h-24 resize-none" placeholder="Enter your text here..."></textarea>
//           <button id="generateBtn" class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex items-center justify-center space-x-2">
//             <img src="${chrome.runtime.getURL('assets/vector.svg')}" class="w-5 h-5"/>
//             <span>Generate</span>
//           </button>

//           <div class="mt-4 flex flex-col space-y-2">
//             <div id="userInput" class="bg-gray-200 p-2 rounded-md"></div>
//             <div id="generatedResponse" class="bg-blue-200 p-2 rounded-md"></div>
//           </div>

//           <div class="flex justify-between space-x-2 mt-4">
//             <button id="insertBtn" class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center space-x-2">
//               <img src="${chrome.runtime.getURL('assets/insert.svg')}" class="w-4 h-4" />
//               <span>Insert</span>
//             </button>
//             <button id="regenerateBtn" class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 flex items-center space-x-2">
//               <img src="${chrome.runtime.getURL('assets/regenerate.svg')}" class="w-4 h-4" />
//               <span>Regenerate</span>
//             </button>
//           </div>
//         </div>
//       </div>
//     `;

//     document.body.appendChild(modal);

//     // Adjust modal height based on content
//     const userInput = document.getElementById('yourPrompt');
//     userInput.addEventListener('input', () => {
//       const modalContainer = modal.querySelector('.bg-gray-100');
//       modalContainer.style.height = `${userInput.scrollHeight + 200}px`; // Adjust as necessary
//     });

//     // Handle "Generate" button click
//     document.getElementById('generateBtn')?.addEventListener('click', () => {
//       const userInput = document.getElementById('yourPrompt');
//       if (userInput instanceof HTMLTextAreaElement) {
//         const userText = userInput.value;

//         // Display the user's input in the user input box
//         const userInputBox = document.getElementById('userInput');
//         if (userInputBox) {
//           userInputBox.textContent = userText;
//         }

//         // Simulate a generated response
//         const generatedResponseBox = document.getElementById('generatedResponse');
//         if (generatedResponseBox) {
//           generatedResponseBox.textContent = `This is a dummy generated response for: ${userText}`;
//         }
//       } else {
//         console.error('The input element was not found or is not a textarea.');
//       }
//     });

//     // Handle "Insert" button click
//     document.getElementById('insertBtn')?.addEventListener('click', () => {
//       const generatedResponseBox = document.getElementById('generatedResponse');
//       const messageBox = document.querySelector('.msg-form__contenteditable');

//       if (generatedResponseBox && messageBox && generatedResponseBox.textContent) {
//         messageBox.innerHTML = generatedResponseBox.textContent;
//         modal.remove(); // Close the modal
//         insertAIIcon(); // Re-insert the AI icon
//       } else {
//         console.error('Generated response or message box is missing.');
//       }
//     });

//     // Handle "Regenerate" button click
//     document.getElementById('regenerateBtn')?.addEventListener('click', () => {
//       const generatedResponseBox = document.getElementById('generatedResponse');
//       if (generatedResponseBox) {
//         generatedResponseBox.textContent = 'Regenerating response...';
//       }
//     });

//     // Close modal when clicked outside
//     modal.addEventListener('click', (e) => {
//       if (e.target === modal) {
//         modal.remove(); // Close modal if clicked outside of the content
//       }
//     });
//   }
// });


































































let iconVisible = false;

// Function to insert AI icon into LinkedIn message box
function insertAIIcon() {
  const messageBox = document.querySelector('.msg-form__contenteditable');

  if (!messageBox) return;

  // Create the AI icon if it's not already present
  if (!document.querySelector('.ai-icon')) {
    const aiIcon = document.createElement('img');
    aiIcon.src = chrome.runtime.getURL('assets/AI.svg');
    aiIcon.classList.add('ai-icon');

    // Style the AI icon
    aiIcon.style.position = 'absolute';
    aiIcon.style.cursor = 'pointer';
    aiIcon.style.right = '10px';
    aiIcon.style.top = '10px';

    if (messageBox.parentElement) {
      messageBox.parentElement.style.position = 'relative';
      messageBox.parentElement.appendChild(aiIcon);
    } else {
      console.error('Parent element of the message box is not found.');
    }

    // Add click event listener to open the modal
    aiIcon.addEventListener('click', () => {
      chrome.runtime.sendMessage({ type: 'SHOW_MODAL' });
    });
  }

  iconVisible = true;
}

// Function to hide AI icon
function hideAIIcon() {
  const aiIcon = document.querySelector('.ai-icon');
  if (aiIcon) {
    aiIcon.remove();
    iconVisible = false;
  }
}

// Handle focus event to show AI icon
function handleFocus() {
  if (!iconVisible) {
    insertAIIcon();
  }
}

// Handle blur event to hide AI icon
function handleBlur(event) {
  const messageBox = document.querySelector('.msg-form__contenteditable');
  if (!messageBox.contains(event.relatedTarget)) {
    hideAIIcon();
  }
}

// Observe focus/blur events in the message box
function observeMessageBox() {
  const messageBox = document.querySelector('.msg-form__contenteditable');

  if (messageBox) {
    messageBox.addEventListener('focus', handleFocus);
    messageBox.addEventListener('blur', handleBlur);
  }
}

// MutationObserver to check for the LinkedIn message box
const observer = new MutationObserver(() => {
  const messageBox = document.querySelector('.msg-form__contenteditable');

  if (messageBox) {
    observeMessageBox();
  }
});

// Start observing changes in the DOM to find the LinkedIn message box
observer.observe(document.body, { childList: true, subtree: true });

// Function to insert the React app into the LinkedIn page
const insertReactApp = () => {
  const appContainer = document.createElement("div");
  appContainer.id = "my-react-app"; // Unique ID for your app container
  document.body.appendChild(appContainer);
  
  // Create a style element for custom styles (optional)
  const styles = document.createElement("style");
  styles.textContent = `
    #my-react-app {
      position: fixed;
      bottom: 20px; /* Adjust as needed */
      right: 20px; /* Adjust as needed */
      z-index: 9999; /* Ensure it appears above other elements */
    }
  `;
  document.head.appendChild(styles);
  
  // Render your React app (assuming you're using ReactDOM)
  const appRoot = document.querySelector('#my-react-app');
  if (appRoot) {
    ReactDOM.render(React.createElement(App), appRoot); // Use React.createElement for compatibility
  }
};

// Listen for messages to show modal
chrome.runtime.onMessage.addListener((message) => {
  if (message.type === 'SHOW_MODAL') {
    const modal = document.createElement('div');
    modal.id = 'ai-modal';

    // Add modal content with Tailwind CSS classes
    modal.innerHTML = `
      <div class="fixed inset-0 flex items-center justify-center z-50">
        <div class="bg-gray-100 p-6 rounded-lg shadow-xl max-w-md w-full">
          <h2 class="text-xl font-semibold mb-4">Your Prompt</h2>
          <textarea id="yourPrompt" class="border p-2 w-full rounded-md h-24 resize-none" placeholder="Enter your text here..."></textarea>
          <button id="generateBtn" class="mt-4 w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 flex items-center justify-center space-x-2">
            <img src="${chrome.runtime.getURL('assets/Vector.svg')}" class="w-5 h-5"/>
            <span>Generate</span>
          </button>

          <div class="mt-4 flex flex-col space-y-2">
            <div id="userInput" class="bg-gray-200 p-2 rounded-md"></div>
            <div id="generatedResponse" class="bg-blue-200 p-2 rounded-md"></div>
          </div>

          <div class="flex justify-between space-x-2 mt-4">
            <button id="insertBtn" class="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600 flex items-center space-x-2">
              <img src="${chrome.runtime.getURL('assets/insert.svg')}" class="w-4 h-4" />
              <span>Insert</span>
            </button>
            <button id="regenerateBtn" class="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 flex items-center space-x-2">
              <img src="${chrome.runtime.getURL('assets/Regenerate.svg')}" class="w-4 h-4" />
              <span>Regenerate</span>
            </button>
          </div>
        </div>
      </div>
    `;

    document.body.appendChild(modal);

    // Adjust modal height based on content
    const userInput = document.getElementById('yourPrompt');
    userInput.addEventListener('input', () => {
      const modalContainer = modal.querySelector('.bg-gray-100');
      modalContainer.style.height = `${userInput.scrollHeight + 200}px`; // Adjust as necessary
    });

    // Handle "Generate" button click
    document.getElementById('generateBtn')?.addEventListener('click', () => {
      const userInput = document.getElementById('yourPrompt');
      if (userInput instanceof HTMLTextAreaElement) {
        const userText = userInput.value;

        // Display the user's input in the user input box
        const userInputBox = document.getElementById('userInput');
        if (userInputBox) {
          userInputBox.textContent = userText;
        }

        // Simulate a generated response
        const generatedResponseBox = document.getElementById('generatedResponse');
        if (generatedResponseBox) {
          generatedResponseBox.textContent = `This is a dummy generated response for: ${userText}`;
        }
      } else {
        console.error('The input element was not found or is not a textarea.');
      }
    });

    // Handle "Insert" button click
    document.getElementById('insertBtn')?.addEventListener('click', () => {
      const generatedResponseBox = document.getElementById('generatedResponse');
      const messageBox = document.querySelector('.msg-form__contenteditable');

      if (generatedResponseBox && messageBox && generatedResponseBox.textContent) {
        messageBox.innerHTML = generatedResponseBox.textContent;
        modal.remove(); // Close the modal
        insertAIIcon(); // Re-insert the AI icon
      } else {
        console.error('Generated response or message box is missing.');
      }
    });

    // Handle "Regenerate" button click
    document.getElementById('regenerateBtn')?.addEventListener('click', () => {
      const generatedResponseBox = document.getElementById('generatedResponse');
      if (generatedResponseBox) {
        generatedResponseBox.textContent = 'Regenerating response...';
      }
    });

    // Close modal when clicked outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove(); // Close modal if clicked outside of the content
      }
    });
  }
});

// Insert the React app
insertReactApp();

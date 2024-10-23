
// import React, { useState } from "react";

// interface ModalProps {
//   isOpen: boolean;
//   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
//   const [isGenerated, setIsGenerated] = useState(false);
//   const [userInput, setUserInput] = useState("");
//   const [response, setResponse] = useState(""); // Store generated response

//   const DUMMY_RESPONSE = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;

//   const closeModal = () => {
//     setIsOpen(false);
//     setIsGenerated(false);
//     setUserInput("");
//     setResponse("");
//   };

//   const handleGenerate = () => {
//     setResponse(DUMMY_RESPONSE);
//     setIsGenerated(true);
//   };

//   const handleInsert = () => {
//     const messageBox = document.querySelector(
//       ".msg-form__contenteditable"
//     ) as HTMLDivElement;

//     if (messageBox) {
//       messageBox.innerHTML = response;
//     }
//     closeModal();
//   };

//   const handleRegenerate = () => {
//     // Replace with actual regeneration logic
//     setResponse(DUMMY_RESPONSE + " (Regenerated)");
//   };

//   if (!isOpen) return null;

//   return (
//     <div
//       className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
//       onClick={closeModal}
//     >
//       <div
//         className="bg-white p-6 w-[40rem] rounded-lg shadow-lg"
//         onClick={(e) => e.stopPropagation()}
//       >
//         {!isGenerated ? (
//           <div className="flex flex-col items-center justify-center">
//             <input
//               type="text"
//               name="prompt"
//               placeholder="Your prompt"
//               value={userInput}
//               onChange={(e) => setUserInput(e.target.value)}
//               className="w-full mb-4 p-3 border border-gray-300 rounded-lg focus:outline-none"
//             />
//             <button
//               onClick={handleGenerate}
//               disabled={!userInput}
//               className={`w-full p-3 text-white rounded-lg ${userInput
//                   ? "bg-blue-500 hover:bg-blue-600"
//                   : "bg-blue-300 cursor-not-allowed"
//                 }`}
//             >
//               <img
//                 src="/assets/Vector.svg"
//                 alt="Generate"
//                 className="inline-block mr-2"
//               />
//               Generate
//             </button>
//           </div>
//         ) : (
//           <div className="flex flex-col items-center">
//             <div className="w-full text-left mb-2">
//               <p className="p-3 bg-gray-200 rounded-lg text-gray-700">
//                 {userInput}
//               </p>
//             </div>
//             <div className="w-full text-left">
//               <p className="p-3 bg-blue-100 rounded-lg text-blue-600">
//                 {response}
//               </p>
//             </div>
//             <div className="flex gap-4 mt-4 w-full">
//               <button
//                 onClick={handleInsert}
//                 className="flex items-center justify-center w-full p-3 bg-green-500 text-white rounded-lg hover:bg-green-600"
//               >
//                 <img
//                   src="/assets/insert.svg" // Correct path for insert icon
//                   alt="Insert"
//                   className="inline-block mr-2"
//                 />
//                 Insert
//               </button>
//               <button
//                 onClick={handleRegenerate}
//                 className="flex items-center justify-center w-full p-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//               >
//                 <img
//                   src="/assets/regenerate.svg" // Correct path for regenerate icon
//                   alt="Regenerate"
//                   className="inline-block mr-2"
//                 />
//                 Regenerate
//               </button>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Modal;































import React, { useState } from "react";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ isOpen, setIsOpen }) => {
  const [isGenerated, setIsGenerated] = useState(false);
  const [userInput, setUserInput] = useState("");
  const [response, setResponse] = useState(""); // Store generated response

  const DUMMY_RESPONSE = `Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.`;

  const closeModal = () => {
    setIsOpen(false);
    setIsGenerated(false);
    setUserInput("");
    setResponse("");
  };

  const handleGenerate = () => {
    setResponse(DUMMY_RESPONSE);
    setIsGenerated(true);
  };

  const handleInsert = () => {
    const messageBox = document.querySelector(
      ".msg-form__contenteditable"
    ) as HTMLDivElement;

    if (messageBox) {
      messageBox.innerHTML = response;
    }
    closeModal();
  };

  const handleRegenerate = () => {
    setResponse(DUMMY_RESPONSE + " (Regenerated)");
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50"
      onClick={closeModal}
    >
      <div
        className="bg-white p-6 w-[40rem] rounded-lg shadow-lg"
        onClick={(e) => e.stopPropagation()}
      >
        {!isGenerated ? (
          <div className="flex flex-col items-start justify-start gap-6">
            {/* "Your prompt" input box */}
            <input
              type="text"
              name="prompt"
              placeholder="Your prompt"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg focus:outline-none"
            />
            
            {/* "Generate" button */}
            <button
              onClick={handleGenerate}
              disabled={!userInput}
              className={`w-full p-4 text-white rounded-lg ${userInput
                ? "bg-blue-500 hover:bg-blue-600"
                : "bg-blue-300 cursor-not-allowed"
                }`}
            >
              <img
                src="/assets/Vector.svg"
                alt="Generate"
                className="inline-block ml-auto" // Align icon to the right
              />
              Generate
            </button>
          </div>
        ) : (
          <div className="flex flex-col items-start justify-start gap-6">
            {/* User input display */}
            <div className="w-full text-left mb-4">
              <p className="p-4 bg-gray-200 rounded-lg text-gray-700 flex justify-between items-center">
                {userInput}
                <img
                  src="/assets/Vector.svg"
                  alt="Input"
                  className="inline-block ml-auto" // Align icon to the right
                />
              </p>
            </div>

            {/* Response display */}
            <div className="w-full text-left mb-4">
              <p className="p-4 bg-blue-100 rounded-lg text-blue-600 flex justify-between items-center">
                {response}
                <img
                  src="/assets/Vector.svg"
                  alt="Response"
                  className="inline-block ml-auto" // Align icon to the right
                />
              </p>
            </div>

            {/* Insert & Regenerate buttons with visible space between them */}
            <div className="flex gap-6 w-full">
              <button
                onClick={handleInsert}
                className="flex items-center justify-center w-1/2 p-4 bg-gray-500 text-white rounded-lg hover:bg-gray-600"
              >
                <img
                  src="/assets/insert.svg"
                  alt="Insert"
                  className="inline-block ml-auto" // Align icon to the right
                />
                Insert
              </button>
              <button
                onClick={handleRegenerate}
                className="flex items-center justify-center w-1/2 p-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                <img
                  src="/assets/Regenerate.svg"
                  alt="Regenerate"
                  className="inline-block ml-auto" // Align icon to the right
                />
                Regenerate
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Modal;

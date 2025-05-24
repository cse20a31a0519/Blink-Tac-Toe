// import React, { useState } from 'react';

// const CategorySelection = ({
//   gameMode,
//   selectedCategories,
//   setSelectedCategories,
//   setCurrentScreen,
//   setUsedEmojis,
// }) => {
//   const [currentPlayerSelection, setCurrentPlayerSelection] = useState(1);
//   const [tempSelectedCategories, setTempSelectedCategories] = useState({
//     player1: null,
//     player2: null,
//   });

//   const emojiCategories = {
//     animals: ['🐶', '🐱', '🐵', '🐰'],
//     food: ['🍕', '🍟', '🍔', '🍩'],
//     sports: ['⚽', '🏀', '🏈', '🎾'],
//     nature: ['🌸', '🌳', '🌺', '🍀'],
//   };

//   const selectCategory = (category) => {
//     if (currentPlayerSelection === 1) {
//       setTempSelectedCategories((prev) => ({
//         ...prev,
//         player1: category,
//       }));

//       if (gameMode === 'players') {
//         setCurrentPlayerSelection(2);
//       } else if (gameMode === 'computer') {
//         const categories = Object.keys(emojiCategories);
//         const availableCategories = categories.filter((cat) => cat !== category);
//         const computerCategory =
//           availableCategories[Math.floor(Math.random() * availableCategories.length)];

//         const finalCategories = {
//           player1: category,
//           player2: computerCategory,
//         };

//         setTempSelectedCategories(finalCategories);
//         setSelectedCategories(finalCategories);
//         setUsedEmojis({ player1: [], player2: [] });
//         setCurrentScreen('game');
//       }
//     } else {
//       const finalCategories = {
//         ...tempSelectedCategories,
//         player2: category,
//       };

//       setTempSelectedCategories(finalCategories);
//       setSelectedCategories(finalCategories);
//       setUsedEmojis({ player1: [], player2: [] });
//       setCurrentScreen('game');
//     }
//   };

//   const playerName =
//     gameMode === 'computer' && currentPlayerSelection === 2
//       ? 'Computer'
//       : `Player ${currentPlayerSelection}`;
//   const isPlayer2 = currentPlayerSelection === 2;
//   const unavailableCategory = tempSelectedCategories.player1;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
//       <div className="max-w-2xl mx-auto">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-green-800 mb-2">
//             {playerName}, Choose Your Category
//           </h2>
//           <p className="text-green-600">Pick your emoji weapons!</p>
//           {isPlayer2 && (
//             <p className="text-sm text-gray-500 mt-2">
//               Player 1 chose: {tempSelectedCategories.player1}
//             </p>
//           )}
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           {Object.entries(emojiCategories).map(([category, emojis]) => {
//             const isUnavailable = isPlayer2 && category === unavailableCategory;
//             return (
//               <button
//                 key={category}
//                 onClick={() => !isUnavailable && selectCategory(category)}
//                 disabled={isUnavailable}
//                 className={`
//                   bg-white rounded-2xl p-6 shadow-lg transition-all transform
//                   ${
//                     isUnavailable
//                       ? 'opacity-50 cursor-not-allowed bg-gray-100'
//                       : 'hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-green-300'
//                   }
//                 `}
//               >
//                 <h3
//                   className={`text-xl font-semibold mb-4 capitalize ${
//                     isUnavailable ? 'text-gray-500' : 'text-green-800'
//                   }`}
//                 >
//                   {category} {isUnavailable && '(Taken)'}
//                 </h3>
//                 <div className="grid grid-cols-2 gap-2">
//                   {emojis.map((emoji, index) => (
//                     <div key={index} className="text-3xl">
//                       {emoji}
//                     </div>
//                   ))}
//                 </div>
//               </button>
//             );
//           })}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CategorySelection;
import React, { useState } from 'react';

const CategorySelection = ({
  gameMode,
  selectedCategories,
  setSelectedCategories,
  setCurrentScreen,
  setUsedEmojis,
}) => {
  const [currentPlayerSelection, setCurrentPlayerSelection] = useState(1);
  const [tempSelectedCategories, setTempSelectedCategories] = useState({
    player1: null,
    player2: null,
  });

  const emojiCategories = {
    animals: ['🐶', '🐱', '🐵', '🐰'],
    food: ['🍕', '🍟', '🍔', '🍩'],
    sports: ['⚽', '🏀', '🏈', '🎾'],
    nature: ['🌸', '🌳', '🌺', '🍀'],
  };

  const selectCategory = (category) => {
    if (currentPlayerSelection === 1) {
      setTempSelectedCategories((prev) => ({
        ...prev,
        player1: category,
      }));

      if (gameMode === 'players') {
        setCurrentPlayerSelection(2);
      } else if (gameMode === 'computer') {
        const categories = Object.keys(emojiCategories);
        const availableCategories = categories.filter((cat) => cat !== category);
        const computerCategory =
          availableCategories[Math.floor(Math.random() * availableCategories.length)];

        const finalCategories = {
          player1: category,
          player2: computerCategory,
        };

        setTempSelectedCategories(finalCategories);
        setSelectedCategories(finalCategories);
        setUsedEmojis({ player1: [], player2: [] });
        setCurrentScreen('game');
      }
    } else {
      const finalCategories = {
        ...tempSelectedCategories,
        player2: category,
      };

      setTempSelectedCategories(finalCategories);
      setSelectedCategories(finalCategories);
      setUsedEmojis({ player1: [], player2: [] });
      setCurrentScreen('game');
    }
  };

  const playerNames = ['Emoji Warrior 1', 'Emoji Warrior 2'];
  const playerName =
    gameMode === 'computer' && currentPlayerSelection === 2
      ? '🤖 Computer'
      : playerNames[currentPlayerSelection - 1];

  const isPlayer2 = currentPlayerSelection === 2;
  const unavailableCategory = tempSelectedCategories.player1;

  const handleBackToHome = () => {
    setCurrentScreen('home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6 relative">
      {/* ❌ Back Button */}
      <button
        onClick={handleBackToHome}
        className="absolute top-4 right-4 text-2xl text-red-500 hover:text-red-700"
        aria-label="Back to Home"
      >
        ❌
      </button>

      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-green-800 mb-2">
            {playerName}, Choose Your Category
          </h2>
          <p className="text-green-600">Pick your emoji weapons!</p>
          {isPlayer2 && (
            <p className="text-sm text-gray-500 mt-2">
              Emoji Warrior 1 chose: {tempSelectedCategories.player1}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-6">
          {Object.entries(emojiCategories).map(([category, emojis]) => {
            const isUnavailable = isPlayer2 && category === unavailableCategory;
            return (
              <button
                key={category}
                onClick={() => !isUnavailable && selectCategory(category)}
                disabled={isUnavailable}
                className={`bg-white rounded-2xl p-6 shadow-lg transition-all transform
                  ${
                    isUnavailable
                      ? 'opacity-50 cursor-not-allowed bg-gray-100'
                      : 'hover:shadow-xl hover:scale-105 border-2 border-transparent hover:border-green-300'
                  }`}
              >
                <h3
                  className={`text-xl font-semibold mb-4 capitalize ${
                    isUnavailable ? 'text-gray-500' : 'text-green-800'
                  }`}
                >
                  {category} {isUnavailable && '(Taken)'}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {emojis.map((emoji, index) => (
                    <div key={index} className="text-3xl">
                      {emoji}
                    </div>
                  ))}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default CategorySelection;

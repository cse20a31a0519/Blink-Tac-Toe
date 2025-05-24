// // import React from 'react';
// // import { Settings, Volume2, VolumeX, Play, Pause, RotateCcw } from 'lucide-react';

// // const GameScreen = ({
// //   board,
// //   currentPlayer,
// //   gameHistory,
// //   gameMode,
// //   selectedCategories,
// //   isPaused,
// //   setIsPaused,
// //   soundEnabled,
// //   setSoundEnabled,
// //   animatingCells,
// //   vanishingCells,
// //   handleCellClick,
// //   resetGame,
// //   setCurrentScreen,
// // }) => (
// //   <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
// //     <div className="flex justify-between items-center p-4">
// //       <button
// //         onClick={() => setCurrentScreen('settings')}
// //         className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
// //       >
// //         <Settings className="text-green-600" size={20} />
// //       </button>
// //       <h1 className="text-2xl font-bold text-green-800">Blink Tac Toe</h1>
// //       <div className="flex space-x-2">
// //         <button
// //           onClick={() => setSoundEnabled(!soundEnabled)}
// //           className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
// //             soundEnabled ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
// //           }`}
// //         >
// //           {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
// //         </button>
// //       </div>
// //     </div>
// //     <div className="text-center mb-6">
// //       <div className="bg-white rounded-2xl mx-4 p-4 shadow-lg">
// //         <div className="flex justify-center items-center space-x-4">
// //           <div
// //             className={`px-4 py-2 rounded-full ${
// //               currentPlayer === 1 ? 'bg-green-500 text-white' : 'bg-gray-100'
// //             }`}
// //           >
// //             Player 1: {selectedCategories.player1 || 'None'}
// //           </div>
// //           <div className="text-2xl">⚡</div>
// //           <div
// //             className={`px-4 py-2 rounded-full ${
// //               currentPlayer === 2 ? 'bg-blue-500 text-white' : 'bg-gray-100'
// //             }`}
// //           >
// //             {gameMode === 'computer' ? 'Computer' : 'Player 2'}: {selectedCategories.player2 || 'None'}
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //     <div className="flex justify-center space-x-4 mb-6">
// //       <button
// //         onClick={() => setIsPaused(!isPaused)}
// //         className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
// //           isPaused ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
// //         }`}
// //       >
// //         {isPaused ? <Play size={16} /> : <Pause size={16} />}
// //         <span>{isPaused ? 'Resume' : 'Pause'}</span>
// //       </button>
// //       <button
// //         onClick={resetGame}
// //         className="px-4 py-2 bg-red-500 text-white rounded-full flex items-center space-x-2 hover:bg-red-600 transition-all"
// //       >
// //         <RotateCcw size={16} />
// //         <span>Restart</span>
// //       </button>
// //     </div>
// //     <div className="max-w-sm mx-auto mb-8">
// //       <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl shadow-lg">
// //         {board.map((cell, index) => {
// //           const isAnimating = animatingCells.has(index);
// //           const isVanishing = vanishingCells.has(index);
// //           return (
// //             <button
// //               key={index}
// //               onClick={() => handleCellClick(index)}
// //               className={`
// //                 w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center text-3xl
// //                 transition-all transform hover:scale-105 hover:bg-green-100
// //                 ${isPaused ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
// //                 ${isAnimating ? 'animate-pulse bg-green-200' : ''}
// //                 ${isVanishing ? 'animate-ping bg-red-200' : ''}
// //               `}
// //               disabled={isPaused || cell || isAnimating}
// //             >
// //               <span
// //                 className={`
// //                   transition-all duration-300
// //                   ${isAnimating ? 'scale-150 opacity-80' : ''}
// //                   ${isVanishing ? 'scale-50 opacity-30' : ''}
// //                 `}
// //               >
// //                 {cell ? cell.emoji : ''}
// //               </span>
// //             </button>
// //           );
// //         })}
// //       </div>
// //     </div>
// //     <div className="max-w-md mx-auto">
// //       <div className="grid grid-cols-2 gap-4">
// //         <div className="bg-white rounded-xl p-4 shadow-md">
// //           <h3 className="font-semibold text-green-800 mb-2">Player 1</h3>
// //           <div className="flex space-x-1">
// //             {gameHistory.player1.map((emoji) => (
// //               <span key={emoji.id} className="text-2xl">
// //                 {emoji.emoji}
// //               </span>
// //             ))}
// //           </div>
// //           <div className="text-xs text-gray-500 mt-1">
// //             {3 - gameHistory.player1.length} slots left
// //           </div>
// //         </div>
// //         <div className="bg-white rounded-xl p-4 shadow-md">
// //           <h3 className="font-semibold text-blue-800 mb-2">
// //             {gameMode === 'computer' ? 'Computer' : 'Player 2'}
// //           </h3>
// //           <div className="flex space-x-1">
// //             {gameHistory.player2.map((emoji) => (
// //               <span key={emoji.id} className="text-2xl">
// //                 {emoji.emoji}
// //               </span>
// //             ))}
// //           </div>
// //           <div className="text-xs text-gray-500 mt-1">
// //             {3 - gameHistory.player2.length} slots left
// //           </div>
// //         </div>
// //       </div>
// //     </div>
// //   </div>
// // );

// // export default GameScreen;
// import React from 'react';
// import { Volume2, VolumeX, Music2, Music, Home, Play, Pause, RotateCcw } from 'lucide-react';

// const GameScreen = ({
//   board,
//   currentPlayer,
//   gameHistory,
//   gameMode,
//   selectedCategories,
//   isPaused,
//   setIsPaused,
//   soundEnabled,
//   setSoundEnabled,
//   musicEnabled,
//   setMusicEnabled,
//   animatingCells,
//   vanishingCells,
//   handleCellClick,
//   resetGame,
//   setCurrentScreen,
// }) => (
//   <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
//     {/* Top Bar */}
//     <div className="flex justify-between items-center p-4">
//       <div className="flex space-x-2">
//         {/* Sound Toggle */}
//         <button
//           onClick={() => setSoundEnabled(!soundEnabled)}
//           className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
//             soundEnabled ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
//           }`}
//         >
//           {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
//         </button>
//       </div>

//       {/* Title */}
//       <h1 className="text-2xl font-bold text-green-800">Blink Tac Toe</h1>

//       {/* Home Button */}
//       <button
//         onClick={() => setCurrentScreen('home')}
//         className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
//       >
//         <Home className="text-green-600" size={20} />
//       </button>
//     </div>

//     {/* Player Info */}
//     <div className="text-center mb-6">
//       <div className="bg-white rounded-2xl mx-4 p-4 shadow-lg">
//         <div className="flex justify-center items-center space-x-4">
//           <div className={`px-4 py-2 rounded-full ${currentPlayer === 1 ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>
//             Player 1: {selectedCategories.player1 || 'None'}
//           </div>
//           <div className="text-2xl">⚡</div>
//           <div className={`px-4 py-2 rounded-full ${currentPlayer === 2 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
//             {gameMode === 'computer' ? 'Computer' : 'Player 2'}: {selectedCategories.player2 || 'None'}
//           </div>
//         </div>
//       </div>
//     </div>

//     {/* Controls */}
//     <div className="flex justify-center space-x-4 mb-6">
//       <button
//         onClick={() => setIsPaused(!isPaused)}
//         className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
//           isPaused ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
//         }`}
//       >
//         {isPaused ? <Play size={16} /> : <Pause size={16} />}
//         <span>{isPaused ? 'Resume' : 'Pause'}</span>
//       </button>
//       <button
//         onClick={resetGame}
//         className="px-4 py-2 bg-red-500 text-white rounded-full flex items-center space-x-2 hover:bg-red-600 transition-all"
//       >
//         <RotateCcw size={16} />
//         <span>Restart</span>
//       </button>
//     </div>

//     {/* Game Board */}
//     <div className="max-w-sm mx-auto mb-8">
//       <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl shadow-lg">
//         {board.map((cell, index) => {
//           const isAnimating = animatingCells.has(index);
//           const isVanishing = vanishingCells.has(index);
//           return (
//             <button
//               key={index}
//               onClick={() => handleCellClick(index)}
//               className={`
//                 w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center text-3xl
//                 transition-all transform hover:scale-105 hover:bg-green-100
//                 ${isPaused ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
//                 ${isAnimating ? 'animate-pulse bg-green-200' : ''}
//                 ${isVanishing ? 'animate-ping bg-red-200' : ''}
//               `}
//               disabled={isPaused || cell || isAnimating}
//             >
//               <span
//                 className={`
//                   transition-all duration-300
//                   ${isAnimating ? 'scale-150 opacity-80' : ''}
//                   ${isVanishing ? 'scale-50 opacity-30' : ''}
//                 `}
//               >
//                 {cell ? cell.emoji : ''}
//               </span>
//             </button>
//           );
//         })}
//       </div>
//     </div>

//     {/* Game History */}
//     <div className="max-w-md mx-auto">
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h3 className="font-semibold text-green-800 mb-2">Player 1</h3>
//           <div className="flex space-x-1">
//             {gameHistory.player1.map((emoji) => (
//               <span key={emoji.id} className="text-2xl">
//                 {emoji.emoji}
//               </span>
//             ))}
//           </div>
//           <div className="text-xs text-gray-500 mt-1">{3 - gameHistory.player1.length} slots left</div>
//         </div>
//         <div className="bg-white rounded-xl p-4 shadow-md">
//           <h3 className="font-semibold text-blue-800 mb-2">
//             {gameMode === 'computer' ? 'Computer' : 'Player 2'}
//           </h3>
//           <div className="flex space-x-1">
//             {gameHistory.player2.map((emoji) => (
//               <span key={emoji.id} className="text-2xl">
//                 {emoji.emoji}
//               </span>
//             ))}
//           </div>
//           <div className="text-xs text-gray-500 mt-1">{3 - gameHistory.player2.length} slots left</div>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// export default GameScreen;
import React from 'react';
import { Volume2, VolumeX, Music2, Music, Home, Play, Pause, RotateCcw } from 'lucide-react';

const GameScreen = ({
  board,
  currentPlayer,
  gameHistory,
  gameMode,
  selectedCategories,
  isPaused,
  setIsPaused,
  soundEnabled,
  setSoundEnabled,
  musicEnabled,
  setMusicEnabled,
  animatingCells,
  vanishingCells,
  handleCellClick,
  resetGame,
  setCurrentScreen,
}) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
    {/* Top Bar */}
    <div className="flex justify-between items-center p-4">
      <div className="flex space-x-2">
        {/* Sound Toggle */}
        <button
          onClick={() => setSoundEnabled(!soundEnabled)}
          className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${
            soundEnabled ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-500'
          }`}
        >
          {soundEnabled ? <Volume2 size={20} /> : <VolumeX size={20} />}
        </button>
      </div>

      {/* Title */}
      <h1 className="text-2xl font-bold text-green-800">Blink Tac Toe</h1>

      {/* Home Button */}
      <button
        onClick={() => setCurrentScreen('home')}
        className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
      >
        <Home className="text-green-600" size={20} />
      </button>
    </div>

    {/* Player Info */}
    <div className="text-center mb-6">
      <div className="bg-white rounded-2xl mx-4 p-4 shadow-lg">
        <div className="flex justify-center items-center space-x-4">
          <div className={`px-4 py-2 rounded-full ${currentPlayer === 1 ? 'bg-green-500 text-white' : 'bg-gray-100'}`}>
            Emoji Warrior 1: {selectedCategories.player1 || 'None'}
          </div>
          <div className="text-2xl">⚡</div>
          <div className={`px-4 py-2 rounded-full ${currentPlayer === 2 ? 'bg-blue-500 text-white' : 'bg-gray-100'}`}>
            {gameMode === 'computer' ? 'Computer' : 'Emoji Warrior 2'}: {selectedCategories.player2 || 'None'}
          </div>
        </div>
      </div>
    </div>

    {/* Controls */}
    <div className="flex justify-center space-x-4 mb-6">
      <button
        onClick={() => setIsPaused(!isPaused)}
        className={`px-4 py-2 rounded-full flex items-center space-x-2 transition-all ${
          isPaused ? 'bg-green-500 text-white' : 'bg-gray-200 text-gray-700'
        }`}
      >
        {isPaused ? <Play size={16} /> : <Pause size={16} />}
        <span>{isPaused ? 'Resume' : 'Pause'}</span>
      </button>
      <button
        onClick={resetGame}
        className="px-4 py-2 bg-red-500 text-white rounded-full flex items-center space-x-2 hover:bg-red-600 transition-all"
      >
        <RotateCcw size={16} />
        <span>Restart</span>
      </button>
    </div>

    {/* Game Board */}
    <div className="max-w-sm mx-auto mb-8">
      <div className="grid grid-cols-3 gap-2 bg-white p-4 rounded-2xl shadow-lg">
        {board.map((cell, index) => {
          const isAnimating = animatingCells.has(index);
          const isVanishing = vanishingCells.has(index);
          return (
            <button
              key={index}
              onClick={() => handleCellClick(index)}
              className={`
                w-20 h-20 bg-green-50 rounded-xl flex items-center justify-center text-3xl
                transition-all transform hover:scale-105 hover:bg-green-100
                ${isPaused ? 'opacity-50 cursor-not-allowed' : 'hover:shadow-md'}
                ${isAnimating ? 'animate-pulse bg-green-200' : ''}
                ${isVanishing ? 'animate-ping bg-red-200' : ''}
              `}
              disabled={isPaused || cell || isAnimating}
            >
              <span
                className={`
                  transition-all duration-300
                  ${isAnimating ? 'scale-150 opacity-80' : ''}
                  ${isVanishing ? 'scale-50 opacity-30' : ''}
                `}
              >
                {cell ? cell.emoji : ''}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  </div>
);

export default GameScreen;

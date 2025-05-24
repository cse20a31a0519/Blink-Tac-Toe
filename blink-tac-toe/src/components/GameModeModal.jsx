import React from 'react';
import { X } from 'lucide-react';

const GameModeModal = ({ setCurrentScreen, setGameMode, resetGame }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-green-800">Choose Game Mode</h2>
        <button
          onClick={() => setCurrentScreen('home')}
          className="text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
      </div>
      <div className="space-y-4">
        <button
          onClick={() => {
            setGameMode('players');
            setCurrentScreen('categorySelection');
            resetGame();
          }}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
        >
          👥 2 Players
        </button>
        <button
          onClick={() => {
            setGameMode('computer');
            setCurrentScreen('categorySelection');
            resetGame();
          }}
          className="w-full bg-blue-500 hover:bg-blue-600 text-white py-4 rounded-xl font-semibold transition-all transform hover:scale-105"
        >
          🤖 vs Computer
        </button>
      </div>
    </div>
  </div>
);

export default GameModeModal;
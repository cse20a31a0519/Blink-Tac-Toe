import React from 'react';
import { Trophy } from 'lucide-react';

const WinModal = ({ winner, gameMode, resetGame, setWinner, setCurrentScreen }) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-3xl p-8 max-w-sm w-full mx-4 text-center">
      <div className="text-6xl mb-4">🎉</div>
      <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4" />
      <h2 className="text-3xl font-bold text-green-800 mb-2">
        {winner.winner === 1
          ? 'Player 1'
          : gameMode === 'computer'
          ? 'Computer'
          : 'Player 2'}{' '}
        Wins!
      </h2>
      <p className="text-green-600 mb-6">Amazing victory! 🎯</p>
      <div className="space-y-3">
        <button
          onClick={() => {
            resetGame();
            setWinner(null);
          }}
          className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-xl font-semibold transition-all"
        >
          🔄 New Game
        </button>
        <button
          onClick={() => {
            setCurrentScreen('home');
            setWinner(null);
            resetGame();
          }}
          className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-3 rounded-xl font-semibold transition-all"
        >
          🏠 Home
        </button>
      </div>
    </div>
  </div>
);

export default WinModal;
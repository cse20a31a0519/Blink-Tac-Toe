import React from 'react';
import { Home, Settings, HelpCircle, Play } from 'lucide-react';

const HomeScreen = ({ setCurrentScreen }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-200 via-white to-green-100 flex flex-col">
    {/* Header */}
    <div className="flex justify-between items-center px-6 py-4 shadow-md">
      <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
        <Home className="text-white" size={24} />
      </div>
      <h1 className="text-3xl font-bold text-green-800 tracking-wide">Blink Tac Toe</h1>
      <button
        onClick={() => setCurrentScreen('settings')}
        className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-transform duration-200 transform hover:scale-110 shadow-sm"
      >
        <Settings className="text-green-600" size={24} />
      </button>
    </div>

    {/* Main Content */}
    <div className="flex-1 flex flex-col items-center justify-center px-6 text-center space-y-10">
      <div>
        <h2 className="text-2xl font-semibold text-green-800 mb-2">Welcome to the Twist!</h2>
        <p className="text-green-700 max-w-md mx-auto">
          A twisted version of Tic Tac Toe where emojis blink and vanish!
        </p>
      </div>

      {/* Buttons */}
      {/* <div className="space-y-4">
        <button
          onClick={() => setCurrentScreen('gameMode')}
          className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3"
        >
          <Play size={26} />
          <span>Start Game</span>
        </button>
        <button
          onClick={() => setCurrentScreen('help')}
          className="bg-white hover:bg-green-50 text-green-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md flex items-center space-x-2"
        >
          <HelpCircle size={22} />
          <span>How to Play</span>
        </button>
      </div> */}
      {/* Buttons */}
<div className="flex flex-col items-center space-y-4">
  <button
    onClick={() => setCurrentScreen('gameMode')}
    className="bg-green-500 hover:bg-green-600 text-white px-10 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-lg flex items-center space-x-3"
  >
    <Play size={26} />
    <span>Start Game</span>
  </button>
  <button
    onClick={() => setCurrentScreen('help')}
    className="bg-white hover:bg-green-50 text-green-700 px-8 py-3 rounded-full font-semibold transition-all transform hover:scale-105 shadow-md flex items-center space-x-2"
  >
    <HelpCircle size={22} />
    <span>How to Play</span>
  </button>
</div>

    </div>
  </div>
);

export default HomeScreen;

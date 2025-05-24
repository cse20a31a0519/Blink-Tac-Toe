import React from 'react';
import { X, Zap } from 'lucide-react';

const HelpScreen = ({ setCurrentScreen }) => (
  <div className="min-h-screen bg-gradient-to-br from-green-50 to-white p-6">
    <div className="max-w-2xl mx-auto">
      <div className="flex items-center mb-6">
        <button
          onClick={() => setCurrentScreen('home')}
          className="mr-4 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center hover:bg-green-200 transition-all"
        >
          <X className="text-green-600" size={20} />
        </button>
        <h1 className="text-3xl font-bold text-green-800">How to Play</h1>
      </div>
      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-3 flex items-center">
            <Zap className="mr-2" size={20} />
            Game Rules
          </h3>
          <ul className="space-y-2 text-green-700">
            <li>• Play on a 3×3 grid like regular Tic Tac Toe</li>
            <li>• Each player can have only 3 emojis on board at once</li>
            <li>• When placing a 4th emoji, your oldest emoji vanishes!</li>
            <li>• You cannot place where your oldest emoji just vanished</li>
            <li>• Emojis cycle through your category without repeating</li>
            <li>• Win by getting 3 of your emojis in a row</li>
            <li>• No draws possible - keep playing until someone wins!</li>
          </ul>
        </div>
        <div className="bg-white rounded-2xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-green-800 mb-3">🎯 Strategy Tips</h3>
          <ul className="space-y-2 text-green-700">
            <li>• Remember which emoji will vanish next</li>
            <li>• Plan your moves considering the vanishing rule</li>
            <li>• Block your opponent while setting up your win</li>
            <li>• Use the FIFO (First In, First Out) rule to your advantage</li>
            <li>• Watch the emoji sequence to predict next moves</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default HelpScreen;
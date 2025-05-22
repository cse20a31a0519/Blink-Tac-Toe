import React from 'react';
import { RotateCcw } from 'lucide-react';
import GameBoard from './components/GameBoard';
import { useGameLogic } from './hooks/useGameLogic';
import { PLAYER_EMOJIS } from './utils/constants';

const App = () => {
  const {
    board,             
    currentPlayer,      
    playerHistory,      
    winner,             
    winningLine,        
    blockedCell,        
    makeMove,           
    resetGame           
  } = useGameLogic();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 p-4 flex items-center justify-center">
      <div className="max-w-md mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-white mb-4">
            🎮 Blink Tac Toe
          </h1>
          
          {/* Shows current player's turn (only if game not over) */}
          {!winner && (
            <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full border-2 transition-all ${
              currentPlayer === 1 
                ? 'border-yellow-400 bg-yellow-400 bg-opacity-20 text-yellow-300' 
                : 'border-pink-400 bg-pink-400 bg-opacity-20 text-pink-300'
            }`}>
              <div className="text-2xl animate-bounce">
                {PLAYER_EMOJIS[currentPlayer][0]}  
                {/* Shows first emoji from player's set */}
              </div>
              <span className="font-semibold">Player {currentPlayer}'s Turn</span>
            </div>
          )}
        </div>

        {/* GAME BOARD SECTION */}
        <div className="mb-6">
          <GameBoard
            board={board}                    
            winningLine={winningLine}        
            blockedCell={blockedCell}        
            winner={winner}                  
            onCellClick={makeMove}           
          />
        </div>

        {/* PLAYER HISTORY SECTION */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          {/* Player 1 History */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20">
            <h3 className="text-yellow-400 font-semibold mb-2 text-center">Player 1</h3>
            <div className="flex justify-center gap-2">
              {/* Show last 3 moves for Player 1 */}
              {playerHistory[1].slice(-3).map((move, i) => (
                <div key={i} className="text-2xl opacity-70">
                  {board.find(cell => cell && cell.id === move.id)?.emoji || '👻'}
                </div>
              ))}
              {playerHistory[1].length === 0 && (
                <div className="text-white text-opacity-40 text-sm">No moves yet</div>
              )}
            </div>
          </div>
          
          {/* Player 2 History */}
          <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20">
            <h3 className="text-pink-400 font-semibold mb-2 text-center">Player 2</h3>
            <div className="flex justify-center gap-2">
              {/* Show last 3 moves for Player 2 */}
              {playerHistory[2].slice(-3).map((move, i) => (
                <div key={i} className="text-2xl opacity-70">
                  {board.find(cell => cell && cell.id === move.id)?.emoji || '👻'}
                </div>
              ))}
              {playerHistory[2].length === 0 && (
                <div className="text-white text-opacity-40 text-sm">No moves yet</div>
              )}
            </div>
          </div>
        </div>
        {/* WINNER SECTION */}
        {winner && (
          <div className="text-center mb-6">
            <div className="bg-green-500 bg-opacity-20 border-2 border-green-400 rounded-xl p-6">
              <div className="text-4xl mb-2">🎉</div>
              <h2 className="text-2xl font-bold text-green-300 mb-2">
                Player {winner} Wins!
              </h2>
              <p className="text-green-200">Great game!</p>
            </div>
          </div>
        )}

        {/* GAME RULES SECTION */}
        <div className="bg-white bg-opacity-10 backdrop-blur-lg rounded-xl p-4 border border-white border-opacity-20 mb-6">
          <h3 className="text-white font-semibold mb-2 text-center">Quick Rules</h3>
          <div className="text-white text-opacity-80 text-sm space-y-1">
            <p>• Get 3 emojis in a row to win</p>
            <p>• Max 3 emojis per player on board</p>
            <p>• Oldest emoji vanishes when placing 4th</p>
            <p>• Can't place where emoji just vanished</p>
          </div>
        </div>

        {/* RESET BUTTON */}
        <div className="text-center">
          <button
            onClick={resetGame}              // Calls resetGame function from hook
            className="bg-gradient-to-r from-purple-500 to-pink-600 text-white font-bold py-3 px-6 rounded-xl hover:from-purple-600 hover:to-pink-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2 mx-auto"
          >
            <RotateCcw size={20} />
            New Game
          </button>
        </div>

      </div>
    </div>
  );
};

export default App;
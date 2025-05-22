import React from 'react';
import Cell from './Cell';
import { PLAYER_EMOJIS } from '../utils/constants';

const GameBoard = ({ 
  board, 
  winningLine, 
  blockedCell, 
  winner, 
  onCellClick 
}) => {
  return (
    <div className="bg-gradient-to-br from-[#0f172a] to-[#1e293b] rounded-3xl p-8 border border-slate-600 shadow-xl">
      <div className="grid grid-cols-3 gap-4">
        {board.map((cell, index) => (
          <Cell
            key={index}
            cell={cell}
            index={index}
            isWinning={winningLine.includes(index)}
            isBlocked={index === blockedCell}
            isGameOver={!!winner}
            onClick={onCellClick}
          />
        ))}
      </div>

      {blockedCell !== null && (
        <div className="text-center mt-4 text-red-400 text-sm italic">
          ❌ Cell blocked – can't place where emoji just vanished
        </div>
      )}
    </div>
  );
};


export default GameBoard;
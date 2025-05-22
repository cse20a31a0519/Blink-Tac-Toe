import React from 'react';

const Cell = ({ 
  cell, 
  index, 
  isWinning, 
  isBlocked, 
  isGameOver, 
  onClick 
}) => {
  const handleClick = () => {
    if (!isGameOver && !cell && !isBlocked) {
      onClick(index);
    }
  };

  return (
    <button
      onClick={handleClick}
      className={`
        aspect-square bg-white bg-opacity-10 border-2 border-white border-opacity-30 
        rounded-xl text-4xl transition-all transform hover:scale-105
        ${!isGameOver && !cell && !isBlocked 
          ? 'hover:bg-white hover:bg-opacity-20 hover:border-white hover:border-opacity-50 cursor-pointer' 
          : 'cursor-not-allowed opacity-70'
        }
        ${isWinning ? 'bg-green-400 bg-opacity-30 border-green-400 animate-pulse' : ''}
        ${isBlocked && !cell ? 'bg-red-400 bg-opacity-20 border-red-400' : ''}
      `}
      disabled={isGameOver || !!cell || isBlocked}
    >
      {cell && (
        <span className="inline-block">
          {cell.emoji}
        </span>
      )}
      {isBlocked && !cell && (
        <span className="text-red-400 opacity-60">❌</span>
      )}
    </button>
  );
};

export default Cell;
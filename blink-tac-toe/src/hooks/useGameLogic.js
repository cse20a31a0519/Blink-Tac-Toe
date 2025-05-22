import { useState } from 'react';
import { PLAYER_EMOJIS, WIN_PATTERNS, MAX_EMOJIS_PER_PLAYER, INITIAL_GAME_STATE } from '../utils/constants';

export const useGameLogic = () => {
  const [board, setBoard] = useState(INITIAL_GAME_STATE.board);
  const [currentPlayer, setCurrentPlayer] = useState(INITIAL_GAME_STATE.currentPlayer);
  const [playerHistory, setPlayerHistory] = useState(INITIAL_GAME_STATE.playerHistory);
  const [winner, setWinner] = useState(INITIAL_GAME_STATE.winner);
  const [winningLine, setWinningLine] = useState(INITIAL_GAME_STATE.winningLine);
  const [blockedCell, setBlockedCell] = useState(INITIAL_GAME_STATE.blockedCell);

  // Get random emoji for player
  const getRandomEmoji = (player) => {
    const emojis = PLAYER_EMOJIS[player];
    return emojis[Math.floor(Math.random() * emojis.length)];
  };

  // Check for winner
  const checkWinner = (boardState) => {
    for (let pattern of WIN_PATTERNS) {
      const [a, b, c] = pattern;
      if (boardState[a] && boardState[b] && boardState[c] && 
          boardState[a].player === boardState[b].player && 
          boardState[b].player === boardState[c].player) {
        return { winner: boardState[a].player, line: pattern };
      }
    }
    return null;
  };

  // Handle cell click
  const makeMove = (cellIndex) => {
    // Can't move if game over, cell occupied, or cell blocked
    if (board[cellIndex] || winner || cellIndex === blockedCell) return;
    
    const newBoard = [...board];
    const emoji = getRandomEmoji(currentPlayer);
    
    // Add new emoji to board
    newBoard[cellIndex] = { 
      emoji, 
      player: currentPlayer, 
      id: Date.now()
    };

    // Update player history
    const newHistory = { ...playerHistory };
    newHistory[currentPlayer].push({ cellIndex, id: Date.now() });

    // Handle vanishing rule (max 3 emojis per player)
    if (newHistory[currentPlayer].length > MAX_EMOJIS_PER_PLAYER) {
      const oldestMove = newHistory[currentPlayer].shift();
      newBoard[oldestMove.cellIndex] = null;
      setBlockedCell(oldestMove.cellIndex);
    } else {
      setBlockedCell(null);
    }

    setBoard(newBoard);
    setPlayerHistory(newHistory);

    // Check for winner
    const result = checkWinner(newBoard);
    if (result) {
      setWinner(result.winner);
      setWinningLine(result.line);
    } else {
      // Switch players
      setCurrentPlayer(currentPlayer === 1 ? 2 : 1);
    }
  };

  // Reset game
  const resetGame = () => {
    setBoard(INITIAL_GAME_STATE.board);
    setCurrentPlayer(INITIAL_GAME_STATE.currentPlayer);
    setPlayerHistory(INITIAL_GAME_STATE.playerHistory);
    setWinner(INITIAL_GAME_STATE.winner);
    setWinningLine(INITIAL_GAME_STATE.winningLine);
    setBlockedCell(INITIAL_GAME_STATE.blockedCell);
  };

  return {
    // State
    board,
    currentPlayer,
    playerHistory,
    winner,
    winningLine,
    blockedCell,
    // Actions
    makeMove,
    resetGame
  };
};
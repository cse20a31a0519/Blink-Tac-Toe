
import { useState, useEffect, useCallback } from 'react';
import useSoundEffects from './useSoundEffects';

const useGameLogic = () => {
  const [gameMode, setGameMode] = useState(null);
  const [board, setBoard] = useState(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [gameHistory, setGameHistory] = useState({ player1: [], player2: [] });
  const [winner, setWinner] = useState(null);
  const [isPaused, setIsPaused] = useState(false);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [animatingCells, setAnimatingCells] = useState(new Set());
  const [vanishingCells, setVanishingCells] = useState(new Set());
  const [selectedCategories, setSelectedCategories] = useState({
    player1: null,
    player2: null,
  });
  const [usedEmojis, setUsedEmojis] = useState({
    player1: [],
    player2: [],
  });

  const { playSound } = useSoundEffects(soundEnabled);

  const emojiCategories = {
    animals: ['🐶', '🐱', '🐵', '🐰'],
    food: ['🍕', '🍟', '🍔', '🍩'],
    sports: ['⚽', '🏀', '🏈', '🎾'],
    nature: ['🌸', '🌳', '🌺', '🍀'],
  };

  const getNextEmoji = useCallback(
  (player) => {
    const category = selectedCategories[`player${player}`];
    if (!category) return null;

    const categoryEmojis = emojiCategories[category];
    const playerHistory = gameHistory[`player${player}`];
    const lastEmojis = playerHistory.slice(-3).map(e => e.emoji);
    let nextEmoji = categoryEmojis.find(e => !lastEmojis.includes(e));

    if (!nextEmoji) {
      for (let e of categoryEmojis) {
        if (lastEmojis.indexOf(e) === -1) {
          nextEmoji = e;
          break;
        }
      }
      if (!nextEmoji) {
        nextEmoji = categoryEmojis[(categoryEmojis.indexOf(lastEmojis[lastEmojis.length - 1]) + 1) % categoryEmojis.length];
      }
    }

    return nextEmoji;
  },
  [selectedCategories, emojiCategories, gameHistory]
);

  const checkWinner = useCallback((newBoard) => {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8], // rows
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8], // columns
      [0, 4, 8],
      [2, 4, 6], // diagonals
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (newBoard[a] && newBoard[b] && newBoard[c]) {
        if (
          newBoard[a].player === newBoard[b].player &&
          newBoard[b].player === newBoard[c].player
        ) {
          return { winner: newBoard[a].player, pattern };
        }
      }
    }
    return null;
  }, []);

  const getValidMoves = useCallback((board, player, gameHistory) => {
    const availableCells = board
      .map((cell, index) => (cell === null ? index : null))
      .filter((index) => index !== null);

    const playerHistory = gameHistory[`player${player}`];

    if (playerHistory.length >= 3) {
      const oldestEmoji = playerHistory[0];
      const vanishIndex = board.findIndex(
        (cell) => cell && cell.id === oldestEmoji.id
      );

      if (vanishIndex !== -1) {
        return availableCells.filter((index) => index !== vanishIndex);
      }
    }

    return availableCells;
  }, []);
  const getBestMove = useCallback(
  (board, gameHistory) => {
    const validMoves = getValidMoves(board, 2, gameHistory);
    if (validMoves.length === 0) return null;

    const simulateMove = (testBoard, move, player, history) => {
      const newBoard = [...testBoard];
      const newHistory = [...history];
      const newEmoji = { player, emoji: player === 2 ? '🤖' : '🎯', id: Date.now() + Math.random() };
      if (newHistory.length >= 3) {
        const oldestEmoji = newHistory[0];
        const vanishIndex = newBoard.findIndex(
          (cell) => cell && cell.id === oldestEmoji.id
        );
        if (vanishIndex !== -1 && vanishIndex !== move) {
          newBoard[vanishIndex] = null;
        }
        newHistory.shift();
      }
      newBoard[move] = newEmoji;
      newHistory.push(newEmoji);
      return newBoard;
    };

    for (let move of validMoves) {
      const testBoard = simulateMove(board, move, 2, gameHistory.player2);
      if (checkWinner(testBoard)?.winner === 2) {
        return move;
      }
    }
    for (let move of validMoves) {
      const testBoard = simulateMove(board, move, 1, gameHistory.player1);
      if (checkWinner(testBoard)?.winner === 1) {
        return move;
      }
    }

    if (validMoves.includes(4)) return 4;

    const corners = [0, 2, 6, 8];
    const availableCorners = corners.filter((corner) => validMoves.includes(corner));
    if (availableCorners.length > 0) {
      return availableCorners[Math.floor(Math.random() * availableCorners.length)];
    }


    return validMoves[Math.floor(Math.random() * validMoves.length)];
  },
  [getValidMoves, checkWinner]
);

  const handleCellClick = useCallback(
    async (index) => {
      if (
        isPaused ||
        winner ||
        board[index] ||
        animatingCells.has(index)
      ) return;

      const player = currentPlayer;
      const emoji = getNextEmoji(player);

      if (!emoji) return;

      const validMoves = getValidMoves(board, player, gameHistory);
      if (!validMoves.includes(index)) {
        return;
      }

      setAnimatingCells((prev) => new Set([...prev, index]));
      playSound('place');

      const newHistory = { ...gameHistory };
      const playerHistory = newHistory[`player${player}`];

      const newEmoji = { emoji, player, id: Date.now() };

      let newBoard = [...board];
      let vanishIndex = -1;

      if (playerHistory.length >= 3) {
        const oldestEmoji = playerHistory[0];
        vanishIndex = newBoard.findIndex(
          (cell) => cell && cell.id === oldestEmoji.id
        );

        if (vanishIndex !== -1) {
          setVanishingCells((prev) => new Set([...prev, vanishIndex]));
          playSound('vanish');

          setTimeout(() => {
            setBoard((prevBoard) => {
              const updatedBoard = [...prevBoard];
              updatedBoard[vanishIndex] = null;
              return updatedBoard;
            });
            setVanishingCells((prev) => {
              const newSet = new Set(prev);
              newSet.delete(vanishIndex);
              return newSet;
            });
          }, 300);
        }
        playerHistory.shift();
      }

      setTimeout(() => {
        newBoard[index] = newEmoji;
        playerHistory.push(newEmoji);

        setBoard(newBoard);
        setGameHistory(newHistory);

        setAnimatingCells((prev) => {
          const newSet = new Set(prev);
          newSet.delete(index);
          return newSet;
        });

        const result = checkWinner(newBoard);
        if (result) {
          setWinner(result);
          playSound('win');
          return;
        }

        setCurrentPlayer(player === 1 ? 2 : 1);
      }, 150);
    },
    [
      isPaused,
      winner,
      board,
      animatingCells,
      currentPlayer,
      gameHistory,
      getNextEmoji,
      getValidMoves,
      checkWinner,
      playSound,
    ]
  );

  const makeComputerMove = useCallback(() => {
    if (
      currentPlayer !== 2 ||
      gameMode !== 'computer' ||
      winner ||
      isPaused
    ) return;

    setTimeout(() => {
      const bestMove = getBestMove(board, gameHistory);

      if (bestMove !== null) {
        handleCellClick(bestMove);
      }
    }, 800 + Math.random() * 400);
  }, [
    currentPlayer,
    gameMode,
    winner,
    isPaused,
    board,
    gameHistory,
    getBestMove,
    handleCellClick,
  ]);



useEffect(() => {
  if (
    currentPlayer === 2 &&
    gameMode === 'computer' &&
    !winner &&
    !isPaused &&
    animatingCells.size === 0 &&
    vanishingCells.size === 0
  ) {
    makeComputerMove();
  }
}, [currentPlayer, gameMode, winner, isPaused, animatingCells, vanishingCells]);

  const resetGame = useCallback(() => {
    setBoard(Array(9).fill(null));
    setCurrentPlayer(1);
    setGameHistory({ player1: [], player2: [] });
    setUsedEmojis({ player1: [], player2: [] });
    setWinner(null);
    setIsPaused(false);
    setAnimatingCells(new Set());
    setVanishingCells(new Set());
  }, []);

  return {
    gameMode,
    setGameMode,
    board,
    setBoard,
    currentPlayer,
    setCurrentPlayer,
    gameHistory,
    setGameHistory,
    winner,
    setWinner,
    isPaused,
    setIsPaused,
    soundEnabled,
    setSoundEnabled,
    musicEnabled,
    setMusicEnabled,
    animatingCells,
    setAnimatingCells,
    vanishingCells,
    setVanishingCells,
    selectedCategories,
    setSelectedCategories,
    usedEmojis,
    setUsedEmojis,
    handleCellClick,
    resetGame,
  };
};

export default useGameLogic;

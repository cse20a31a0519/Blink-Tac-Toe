// Game constants
export const PLAYER_EMOJIS = {
  1: ["🐶", "🐱", "🐵", "🐰", "🦊", "🐯", "🦁", "🐸"],
  2: ["🍕", "🍟", "🍔", "🍩", "🌮", "🍎", "🍓", "🥑"]
};

export const WIN_PATTERNS = [
  [0,1,2], [3,4,5], [6,7,8], // rows
  [0,3,6], [1,4,7], [2,5,8], // columns  
  [0,4,8], [2,4,6]           // diagonals
];

export const MAX_EMOJIS_PER_PLAYER = 3;

export const INITIAL_GAME_STATE = {
  board: Array(9).fill(null),
  currentPlayer: 1,
  playerHistory: { 1: [], 2: [] },
  winner: null,
  winningLine: [],
  blockedCell: null
};
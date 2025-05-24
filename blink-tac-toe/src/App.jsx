import React, { useState } from 'react';
import HomeScreen from './components/HomeScreen';
import GameModeModal from './components/GameModeModal';
import CategorySelection from './components/CategorySelection';
import GameScreen from './components/GameScreen';
import WinModal from './components/WinModal';
import HelpScreen from './components/HelpScreen';
import SettingsScreen from './components/SettingsScreen';
import useGameLogic from './hooks/useGameLogic';
import './index.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('home');
  const {
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
  } = useGameLogic();

  return (
    <div className="font-sans">
      {currentScreen === 'home' && <HomeScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'gameMode' && (
        <GameModeModal
          setCurrentScreen={setCurrentScreen}
          setGameMode={setGameMode}
          resetGame={resetGame}
        />
      )}
      {currentScreen === 'categorySelection' && (
        <CategorySelection
          gameMode={gameMode}
          selectedCategories={selectedCategories}
          setSelectedCategories={setSelectedCategories}
          setCurrentScreen={setCurrentScreen}
          setUsedEmojis={setUsedEmojis}
        />
      )}
      {currentScreen === 'game' && (
        <GameScreen
          board={board}
          currentPlayer={currentPlayer}
          gameHistory={gameHistory}
          gameMode={gameMode}
          selectedCategories={selectedCategories}
          isPaused={isPaused}
          setIsPaused={setIsPaused}
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          animatingCells={animatingCells}
          vanishingCells={vanishingCells}
          handleCellClick={handleCellClick}
          resetGame={resetGame}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {currentScreen === 'help' && <HelpScreen setCurrentScreen={setCurrentScreen} />}
      {currentScreen === 'settings' && (
        <SettingsScreen
          soundEnabled={soundEnabled}
          setSoundEnabled={setSoundEnabled}
          musicEnabled={musicEnabled}
          setMusicEnabled={setMusicEnabled}
          currentScreen={currentScreen}
          setCurrentScreen={setCurrentScreen}
        />
      )}
      {winner && (
        <WinModal
          winner={winner}
          gameMode={gameMode}
          resetGame={resetGame}
          setWinner={setWinner}
          setCurrentScreen={setCurrentScreen}
        />
      )}
    </div>
  );
};

export default App;




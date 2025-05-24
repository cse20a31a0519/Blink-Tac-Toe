# 🎮 BlinkTacToe

**BlinkTacToe** is a modern, emoji-based Tic-Tac-Toe game built with **React**, **Vite**, and **Tailwind CSS**. It introduces a fun **FIFO (First-In-First-Out)** twist—each player is limited to 3 emojis on the board. When placing a fourth, the oldest vanishes, adding a layer of strategy!

## 🚀 Features

* **Game Modes**:

  * **2 Players**: Play locally with a friend.
  * **vs Computer**: AI blocks, wins, and chooses optimal moves (center > corners > random).

* **FIFO Rule**: Only 3 emojis per player at once. The 4th removes the oldest.

* **Emoji Categories**: Choose from Animals, Food, Sports, or Nature.

* **Sound Effects**:

  * `place.mp3`, `vanish.mp3`, `win.mp3`
  * Toggle sound in **Settings**.

* **Responsive UI**: Styled with Tailwind CSS, featuring smooth transitions and modals.

* **Win Detection**: Detects and highlights wins (rows, cols, diagonals).
* **Pause and Reset**: Pause and Reset the board, history, and state via the  Pause and reset button in the UI.
## 📦 Installation

### Prerequisites

* **Node.js** ≥ 18.x
* **npm** ≥ 8.x

### Setup

```bash
git clone https://github.com/cse20a31a0519/Blink-Tac-Toe
cd blink-tac-toe
npm install
```

### Add Sound Files

Place `place.mp3`, `vanish.mp3`, `win.mp3` in:

```
public/assets/sounds/
```

### Run the App

```bash
npm run dev
```

Then visit `http://localhost:5173`.

### Build for Production

```bash
npm run build
npm run preview
```

## 🕹️ Gameplay

* Choose game mode and emoji categories.
* Click on a board cell to place an emoji.
* After 3 emojis, the FIFO rule removes the oldest.
* Align 3 to win. A modal appears with sound!

## 🗂️ Project Structure (simplified)

```
blink-tac-toe/
├── public/assets/sounds/       # Sound files
├── src/
│   ├── components/             # UI Components
│   ├── hooks/                  # useGameLogic, useSoundEffects
│   ├── App.jsx, main.jsx       # Entry points
├── index.html, vite.config.js
├── tailwind.config.js, package.json
```

## 🔧 Tech Stack

* **React** + **Vite**
* **Tailwind CSS**
* **Lucide Icons**
* **use-sound** (sound effects)

## 🛠️ Troubleshooting

* **Tailwind errors**: Reinstall Tailwind and check `vite.config.js`.
* **Sound not working**: Ensure MP3s exist and sound is enabled.
* **Computer move issues**: Check AI logic and emoji category assignment.



## 🙌 Acknowledgments

* Sounds from [Freesound.org](https://freesound.org)
* Powered by React, Vite, Tailwind CSS

---


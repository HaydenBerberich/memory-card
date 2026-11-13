# Pokémon Card Memory Game

A React memory game built with Vite. The goal is to click as many different Pokémon cards as possible without selecting the same Pokémon twice. The cards shuffle after every selection, so you must remember which ones you've already clicked.

## Features

- Displays a collection of 12 Pokémon fetched from the [PokéAPI](https://pokeapi.co/).
- Shuffles the cards after each selection.
- Tracks the current score and the highest score for the session.
- Resets the current score when a Pokémon is selected more than once.

## Tech Stack

- React 19
- JavaScript (ES modules)
- Vite
- CSS
- [PokéAPI](https://pokeapi.co/) for Pokémon data and official artwork

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (LTS recommended)
- npm

### Installation

Clone the repository and install its dependencies:

```bash
git clone https://github.com/HaydenBerberich/memory-card.git
cd memory-card
npm install
```

### Run the Development Server

```bash
npm run dev
```

Open the local URL printed by Vite in your terminal.

## Available Scripts

| Command | Description |
| --- | --- |
| `npm run dev` | Starts the Vite development server. |
| `npm run build` | Creates an optimized production build in `dist/`. |
| `npm run preview` | Serves the production build locally for preview. |
| `npm run lint` | Runs ESLint to check the project. |

## How to Play

1. Select any Pokémon card to earn a point.
2. After each selection, the cards are shuffled.
3. Select a Pokémon you have already clicked and your current score resets to zero.
4. Try to beat your high score. The high score is maintained for the current session.

## Project Structure

```text
memory-card/
├── public/                 # Static assets
├── src/
│   ├── components/
│   │   ├── Card.jsx        # Individual Pokémon card
│   │   └── Gameboard.jsx   # Renders and arranges the cards
│   ├── styles/
│   │   └── style.css       # Application styles
│   ├── utils/
│   │   └── shuffleCards.js # Card-shuffling utility
│   ├── App.jsx             # Game state and application logic
│   └── main.jsx            # React entry point
├── index.html
├── package.json
├── vite.config.js
└── eslint.config.js
```

## Implementation Notes

- Pokémon data is requested from the PokéAPI when the app loads.
- React state manages the cards, previously selected Pokémon, current score, and high score.
- The card-shuffling utility uses the Fisher–Yates shuffle algorithm.
- The UI is composed of reusable `Card` and `Gameboard` components.

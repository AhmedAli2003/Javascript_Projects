# Hangman Game

Hangman is a classic word-guessing game where players try to guess a hidden word by suggesting letters within a certain number of guesses. This project is an implementation of the Hangman game using HTML, CSS, and JavaScript.

## Table of Contents

- [Hangman Game](#hangman-game)
  - [Table of Contents](#table-of-contents)
  - [Game Description](#game-description)
  - [Features](#features)
  - [Setup](#setup)
  - [How to Play](#how-to-play)
  - [Note](#note)

## Game Description

The Hangman game involves guessing the letters of a hidden word. Players can click on the letters of the alphabet to guess which letters are in the word. If the guessed letter is in the word, it will be revealed in its correct position(s). If the guessed letter is not in the word, an attempt is counted, and a part of the hangman is drawn. The game continues until the player either correctly guesses the word or runs out of attempts.

## Features

- Dynamic word selection from a predefined list of words.
- User-friendly interface with visual feedback for correct and incorrect guesses.
- Animated hangman drawing as incorrect guesses accumulate.
- Success and failure dialogs with the option to play again.
- Responsive design for a good experience on various devices.

## Setup

To run this project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/hangman-game.git
    ```
2. Navigate to the project directory:
    ```bash
    cd hangman-game
    ```
3. Open `index.html` in your web browser to start the game.

## How to Play

1. Open the game in your web browser.
2. Click on the letters of the alphabet to guess the hidden word.
3. If the letter is correct, it will be revealed in the word display.
4. If the letter is incorrect, a part of the hangman will be drawn and the number of incorrect guesses will be updated.
5. The game ends when you either guess the entire word correctly or run out of attempts.
6. Click the "Play Again" button in the success or failure dialog to start a new game.

## Note
You can see the word in the console to test the app.
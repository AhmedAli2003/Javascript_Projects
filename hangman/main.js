const random = (start, end) => Math.floor(Math.random() * (end - start));
const getRandomWord = () => words[random(0, words.length)];

let word = getRandomWord().toLowerCase();
console.log(word);

const wordDisplay = document.querySelector('.word-display');
const guessesText = document.querySelector('.guesses-text b');

const displayRandomWord = () => {
    wordDisplay.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('');
};

document.addEventListener("DOMContentLoaded", function () {
    const keyboard = document.querySelector('.keyboard');
    const alphabet = "abcdefghijklmnopqrstuvwxyz";
    const guessedLetters = new Set([]);
    const failedLetters = new Set([]);
    const attempts = 6;
    let wrongAttempts = 0;

    const initGame = (button, letter) => {
        if (word.includes(letter)) {
            if (guessedLetters.has(letter)) {
                return;
            }
            [...word].forEach((l, index) => {
                if (l === letter) {
                    wordDisplay.querySelectorAll('li')[index].innerText = letter;
                    wordDisplay.querySelectorAll('li')[index].classList.add('guessed');
                    button.classList.add('success');
                    guessedLetters.add(letter);
                }
            });
            if ([...guessedLetters].sort().join('') === [...new Set(word)].sort().join('')) {
                const dialog = document.querySelector('.dialog-success');
                dialog.style.display = 'flex';
                dialog.offsetHeight;
                dialog.classList.add('show');
                document.querySelector('.dialog-success p b').innerText = word;

                const playAgainButton = dialog.querySelector('.play-again');
                playAgainButton.removeEventListener('click', resetGame); // Remove any existing listeners
                playAgainButton.addEventListener('click', resetGame); // Add the new listener
            }
        } else {
            if (!failedLetters.has(letter)) {
                wrongAttempts++;
            }
            guessesText.innerText = `${wrongAttempts} / ${attempts}`;
            if (wrongAttempts >= attempts) {
                const dialog = document.querySelector('.dialog-fail');
                dialog.style.display = 'flex';
                dialog.offsetHeight;
                dialog.classList.add('show');
                document.querySelector('.dialog-fail p b').innerText = word;

                const playAgainButton = dialog.querySelector('.play-again');
                playAgainButton.removeEventListener('click', resetGame); // Remove any existing listeners
                playAgainButton.addEventListener('click', resetGame); // Add the new listener
            } else {
                button.classList.add('failed');
                failedLetters.add(letter);
            }
            document.querySelector('.hangman-image').src = `assets/hangman-${wrongAttempts}.svg`;
        }
    };

    const resetGame = () => {
        const dialogs = document.querySelectorAll('.dialog-fail, .dialog-success');
        dialogs.forEach(dialog => {
            dialog.style.display = 'none';
            dialog.classList.remove('show');
            dialog.classList.add('hidden');
        });

        wrongAttempts = 0;
        guessedLetters.clear();
        failedLetters.clear();
        word = getRandomWord().toLowerCase();
        console.log(word);
        displayRandomWord();
        document.querySelector('.hangman-image').src = `assets/hangman-0.svg`;
        guessesText.innerText = `0 / ${attempts}`;
        const buttons = keyboard.querySelectorAll('button');
        buttons.forEach(button => {
            button.classList.remove('success', 'failed');
        });
    };

    displayRandomWord();

    alphabet.split('').forEach(letter => {
        const button = document.createElement('button');
        button.textContent = letter;
        keyboard.appendChild(button);
        button.addEventListener('click', e => initGame(e.target, letter));
    });
});

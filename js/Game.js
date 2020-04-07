/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
    constructor(phrases) {
        this.missed = 0;
        this.phrases = phrases;
        this.activePhrase = null;
        this.overlay = document.getElementById('overlay');
    }

    startGame() {
        // Hide initial overlay
        this.overlay.style.display = 'none';
        // Call a random phrase
        this.activePhrase = new Phrase(this.getRandomPhrase());
        // Add the phrase to the board
        this.activePhrase.addPhraseToDisplay();
    }

    getRandomPhrase() {
        let count = Math.floor(Math.random() * this.phrases.length);
        // Retrieve one of the phrases provided
        return this.phrases[count];
    }

    handleInteraction(letter) {
        // Check all keys of onscreen keyboard and see if the key pressed matches and apply styling
        function styleKey(styling) {
            const keys = document.querySelectorAll('.key');

            keys.forEach(key => {
                if (key.textContent == letter) {
                    key.classList.add(styling)
                    key.setAttribute('disabled', 'disabled');
                }
            })
        };

        // Check if the letter is in the active phrase
        if (this.activePhrase.checkLetter(letter)) {
            styleKey('chosen');
            // And show the letter on the onscreen board
            this.activePhrase.showMatchedLetter(letter);
            // And see if the game has ended by winning
            if (this.checkForWin()) this.gameOver('win', "You've won!");
        // With no match in the active phrase
        } else {
            styleKey('wrong');
            // Remove 1 life
            this.removeLife();
        }
    }

    removeLife() {
        const hearts = document.querySelectorAll('#scoreboard .tries img');
        let count = (hearts.length - 1) - this.missed;

        // Set the most right positioned life heart to a lost heart
        hearts[count].setAttribute('src', 'images/lostHeart.png');

        // Check if there are life hearts left otherwise call for a gameover
        if (this.missed <= hearts.length - 2) {
            this.missed += 1;
        } else {
            this.gameOver('lose', "Sorry, you've lost.");
        }
    }

    checkForWin() {
        // Check if no letter is hidden
        return document.querySelectorAll('.hide.letter').length === 0;
    }

    gameOver(styling, message) {
        // Set styling and message of the game over
        this.overlay.className = styling;
        this.overlay.style.display = 'inherit';
        this.overlay.firstElementChild.textContent = message;
    }
}
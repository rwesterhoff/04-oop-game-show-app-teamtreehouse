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

    /*
    Hides the start screen overlay, calls the getRandomPhrase() method, 
    and sets the activePhrase property with the chosen phrase. It also 
    adds that phrase to the board by calling the addPhraseToDisplay() 
    method on the active Phrase object.
    */
    startGame() {
        this.overlay.style.display = 'none';
        this.activePhrase = new Phrase(this.getRandomPhrase());
        this.activePhrase.addPhraseToDisplay();
    }

    /*
    This method randomly retrieves one of the phrases stored in the phrases array and 
    returns it.
    */
    getRandomPhrase() {
        let count = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[count];
    }

    /*
    This method controls most of the game logic. It checks to see if the 
    button clicked by the player matches a letter in the phrase, and then 
    directs the game based on a correct or incorrect guess. This method should:
    - Disable the selected letter’s onscreen keyboard button.
    - If the phrase does not include the guessed letter, add the wrong CSS class to the selected letter's keyboard button and call the removeLife() method.
    - If the phrase includes the guessed letter, add the chosen CSS class to the selected letter's keyboard button, call the showMatchedLetter() method on the phrase, and then call the checkForWin() method. If the player has won the game, also call the gameOver() method.
    */
    handleInteraction(key) {
        if (this.activePhrase.checkLetter(key.textContent)) {
            key.classList.add('chosen');
            this.activePhrase.showMatchedLetter(key.textContent);
            if (this.checkForWin()) this.gameOver('win', "You've won!");
        } else {
            key.classList.add('wrong');
            this.removeLife();
        }
    }

    /*
    This method removes a life from the scoreboard, by replacing one of the liveHeart.png 
    images with a lostHeart.png image (found in the images folder) and increments the 
    missed property. If the player has five missed guesses (i.e they're out of lives), 
    then end the game by calling the gameOver() method
    */
    removeLife() {
        const tries = document.querySelectorAll('#scoreboard .tries img'),
            increaseMissed = () => {
                this.missed += 1
            };
        let counter = tries.length - (this.missed + 1);

        tries[counter].setAttribute('src', 'images/lostHeart.png');

        if (this.missed <= tries.length - 2) {
            increaseMissed();
        } else {
            increaseMissed();
            this.gameOver('lose', "Sorry, you've lost.");
        }
    }

    /*
    This method checks to see if the player has revealed all of the letters 
    in the active phrase.
    */
    checkForWin() {
        return document.querySelectorAll('.hide.letter').length === 0;
    }

    /*
    This method displays the original start screen overlay, and depending on the 
    outcome of the game, updates the overlay h1 element with a friendly win or loss 
    message, and replaces the overlay’s start CSS class with either the win 
    or lose CSS class.
    */
    gameOver(styling, message) {
        this.overlay.className = styling;
        this.overlay.style.display = 'inherit';
        this.overlay.firstElementChild.textContent = message;
    }
}
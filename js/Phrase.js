/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    addPhraseToDisplay() {
        // Split up the phrase in all seperate characters
        this.phrase.split('').forEach(char => {
            const li = document.createElement('li'),
                regChar = /[a-z]/g,
                regSpace = /\s/g;

            // Occupy a list item with the character
            li.textContent = char;

            // And check if it's a normal character or a space and apply the right styling
            if (char.match(regChar)) {
                li.className = `hide letter ${char}`;
            } else if (char.match(regSpace)) {
                li.className = 'space';
            }

            // Occupy the board with all letters
            document.querySelector('#phrase ul').appendChild(li);
        })
    }

    checkLetter(letter) {
        // Check if the letter provided matches the phrase
        return this.phrase.match(letter);
    }

    showMatchedLetter(letter) {
        // Get the hidden letters on the board and replace with a class to reveal them
        document.querySelectorAll(`.hide.letter.${letter}`).forEach(hiddenLetter => {
            hiddenLetter.className = `show letter ${letter}`;
        })
    }
}
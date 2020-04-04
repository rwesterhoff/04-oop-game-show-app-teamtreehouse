/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

    /*
    This adds letter placeholders to the display when the game starts. 
    Each letter is presented by an empty box, one li element for each letter. 
    See the example_phrase_html.txt file for an example of what the rendered 
    HTML for a phrase should look like when the game starts, including any id 
    or class attributes needed. When the player correctly guesses a letter, 
    the empty box is replaced with the matched letter (see the showMatchedLetter() 
    method below). Make sure the phrase displayed on the screen uses the letter 
    CSS class for letters and the space CSS class for spaces.
    */
    addPhraseToDisplay() {
        this.phrase.split('').forEach(char => {
            const li = document.createElement('li'),
                regChar = /[a-z]/g,
                regSpace = /\s/g;

            li.textContent = char;

            if (char.match(regChar)) {
                li.className = `hide letter ${char}`;
            } else if (char.match(regSpace)) {
                li.className = 'space';
            }

            document.querySelector('#phrase ul').appendChild(li);
        })
    }

    /*
 	Checks to see if the letter selected by the player matches a letter in the phrase.
	*/
    checkLetter(letter) {
        return this.phrase.match(letter);
    }

    /*
    Reveals the letter(s) on the board that matches the player's selection. 
    To reveal the matching letter(s), select all of the letter DOM elements that
    have a CSS class name that matches the selected letter and replace each
    selected element's hide CSS class with the show CSS class.
    */
    showMatchedLetter(letter) {
        document.querySelectorAll(`.hide.letter.${letter}`).forEach(hiddenLetter => {
            hiddenLetter.className = `show letter ${letter}`;
        })
    }
}
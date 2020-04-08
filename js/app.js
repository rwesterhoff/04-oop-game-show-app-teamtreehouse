/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

// Initialize game
let game = undefined;
const phrases = [
    { phrase: 'Keep Your Eyes Peeled' },
    { phrase: 'Up In Arms' },
    { phrase: 'Cry Wolf' },
    { phrase: 'Quick and Dirty' },
    { phrase: 'Raining Cats and Dogs' }
];


// Set button to start new game
document.getElementById('btn__reset').addEventListener('click', e => {
    game = new Game(phrases);
    if (document.querySelectorAll('.letter')) resetBoard();
    game.startGame();
    e.target.disabled = true;
});

// Set the keys of onscreen keyboard
document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.className == 'key') game.handleInteraction(e.target.textContent);
});

// Set the keys of a real keyboard
document.addEventListener('keyup', e => {
    // And check if a valid letter is pressed
    if (e.key.match(/[a-z]/g)) game.handleInteraction(e.key);
})

// Reset the entire game board to start a new game
function resetBoard() {
    // Reset Phrase ul element
    document.querySelector('#phrase ul').innerHTML = '';
    // Reset onscreen keyboard
    document.querySelectorAll('#qwerty .key').forEach(key => {
        key.className = 'key';
        key.disabled = false;
    });
    // Reset heart images
    document.querySelectorAll('#scoreboard .tries img').forEach(heart => {
        heart.setAttribute('src', 'images/liveHeart.png');
    });
}
/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */
const phrases = [
    'Keep Your Eyes Peeled',
    'Up In Arms',
    'Cry Wolf',
    'Quick and Dirty',
    'Raining Cats and Dogs'
];
let game = undefined;

document.getElementById('btn__reset').addEventListener('click', () => {
    game = new Game(phrases);
    if (document.querySelectorAll('.letter')) resetBoard();
    game.startGame();
});

/*
Add click event listeners to each of the onscreen keyboard buttons, 
 so that clicking a button calls the handleInteraction() method on 
 the Game object. Event delegation can also be used in order to avoid 
 having to add an event listener to each individual keyboard button. 
 Clicking the space between and around the onscreen keyboard buttons 
 should not result in the handleInteraction() method being called.
*/
document.getElementById('qwerty').addEventListener('click', e => {
    if (e.target.className == 'key') game.handleInteraction(e.target);
});

/*
Resetting the gameboard between games.
After a game is completed, the gameboard needs to be reset so that clicking 
the "Start Game" button will successfully load a new game.
Remove all li elements from the Phrase ul element.
Enable all of the onscreen keyboard buttons and update each to use the key CSS
class, and not use the chosen or wrong CSS classes.
Reset all of the heart images (i.e. the player's lives) in the scoreboard at 
the bottom of the gameboard to display the liveHeart.png image.
*/
function resetBoard() {
    document.querySelector('#phrase ul').innerHTML = '';
    document.querySelectorAll('#qwerty .key').forEach(key => {
        key.className = 'key';
    });
    document.querySelectorAll('#scoreboard .tries img').forEach(heart => {
        heart.setAttribute('src', 'images/liveHeart.png');
    });
}
/* 
Add good code comments
Cross-Browser consistency:
Google Chrome has become the default development browser for most developers. 
With such a selection of browsers for users to choose from, it's a good idea 
to get in the habit of testing your projects in all modern browsers.
Review the "How you'll be graded" section
Quality Assurance and Project Submission Checklist
Perform QA testing on your project, checking for bugs, user experience and edge cases.
Check off all of the items on the Student Project Submission Checklist.
*/

/*
NOTE: Seeking assistance
If you're feeling stuck or having trouble with this project:
Review material in the unit.
Practice your Google skills by finding different ways to ask the questions you
 have, paying close attention to the sort of results you get back depending on how 
 your questions are worded.
Reach out to the team on Slack.
*/

/*
NOTE: What you submit is what will get reviewed.
When you submit your project, a snapshot is taken of your repository, and that is 
what the reviewer will see. Consequently, any changes you make to your repo after 
you submit will not be seen by the reviewer. So before you submit, it's a smart 
idea to do a final check to make sure everything in your repo is exactly what 
you want to submit.
*/

// Extra Credit
// To get an "exceeds" rating, complete all of the steps below:

/*
Add keyboard functionality
Let players use their physical computer keyboard to enter guesses. You'll need to use the keydown or keyup event.
*/

/*
Making the project your own
The general layout should remain the same, but feel free to make the project your own by experimenting with things like color, background color, font, borders, shadows, transitions, animations, filters, etc.
Detail your style changes in your README.md file and in your submission notes.
*/

/*
NOTE: Getting an "Exceed Expectations" grade.
See the rubric in the "How You'll Be Graded" tab above for details on what you need to receive an "Exceed Expectations" grade.
Passing grades are final. If you try for the "Exceeds Expectations" grade, but miss an item and receive a “Meets Expectations” grade, you won’t get a second chance. Exceptions can be made for items that have been misgraded in review.
Always mention in the comments of your submission or any resubmission, what grade you are going for. Some students want their project to be rejected if they do not meet all Exceeds Expectations Requirements, others will try for all the "exceeds" requirement but do not mind if they pass with a Meets Expectations grade. Leaving a comment in your submission will help the reviewer understand which grade you are specifically going for
*/
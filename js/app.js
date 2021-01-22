/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector("#btn__reset");

const keyboardDiv = document.querySelector("#qwerty");

let game;

// Create new instance of the game class


// Event Listeners for start button
startButton.addEventListener("click", (e) => {
    game = new Game;
    game.startGame(startButton);
});


// event listeners for onscreen keyboard buttons
keyboardDiv.addEventListener("click", (e) => {
    const element = e.target;
    if (element.tagName === "BUTTON") {
        game.handleInteraction(element);
    } 
});





// // Function Testers!



// console.log(phrase1.checkLetter("a"));
// console.log(phrase1.showMatchedLetter("t"));







// document.addEventListener("keyup", (e) => {
//     const letter = e.key;
//     const letterTest = phrase1.checkLetter(letter);
//     if (letterTest) {
//         phrase1.showMatchedLetter(letter);
//     };
// });

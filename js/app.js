/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const startButton = document.querySelector("#btn__reset");

const game = new Game;

startButton.addEventListener("click", (e) => {
    game.startGame(startButton);
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

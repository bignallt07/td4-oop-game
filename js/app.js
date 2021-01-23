/************************
 * app.js - Controls the start of the game and event listeners
 ***********************/

// Variables and DOM collection

const startButton = document.querySelector("#btn__reset");
const keyboardDiv = document.querySelector("#qwerty");
let game;

/*******
 * Event Listeners
 ******/

/**
 * Listens to the click of start button and begins the game
 */
startButton.addEventListener("click", () => {
    game = new Game;
    game.startGame(startButton);
});


/**
 * Listens to UL parent of the onscreen keys, then if target is a button calls game interaction
 */
keyboardDiv.addEventListener("click", (e) => {
    const element = e.target;
    if (element.tagName === "BUTTON") {
        game.handleInteraction(element);
    } 
});


document.addEventListener("keyup", (e) => {
    const keys = document.querySelectorAll("#qwerty button");
    for (let i = 0; i < keys.length; i++) {
        if (keys[i].textContent === e.key) {
            game.handleInteraction(keys[i]);
        }
    }
});


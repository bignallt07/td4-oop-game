/************************
 * app.js - Controls the start of the game and event listeners
 ***********************/

// Variables and DOM collection
const startButton = document.querySelector("#btn__reset");
const keyboardDiv = document.querySelector("#qwerty");
const overlay = document.querySelector("#overlay");
const footer = document.querySelector("footer");
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
    // Additional: To hide the curtains after page load
    left.style.display = "none";
    right.style.display = "none";
    footer.hidden = false;
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
    if (game.over) {
        e.preventDefault();
    } else {
        const keys = document.querySelectorAll("#qwerty button");
        for (let i = 0; i < keys.length; i++) {
            if (keys[i].textContent === e.key) {
                game.handleInteraction(keys[i]);
            }
        }
    }
    
});

// Curtains animation effect on page load - See README.md
window.addEventListener("load", () => {
    left.style.transform = "translateX(-100%)";
    right.style.transform = "translateX(100%)";
});



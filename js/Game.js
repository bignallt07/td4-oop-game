/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

//  Game Class
class Game {
    // Constructor with 3 properties
    constructor() {
        this.missed = 0;
        this.phrases = ["Nottingham Forest are Magic", "We arent in Kansas anymore", "Do you know the muffin man", "Lets go redsox", "Can you smell what the Rock is Cooking"]; 
        this.activePhrase = null;
        this.passPhrase = null;
        this.win = false;
    }

    // Methods
    // 1. startGame
        // a. Hide start screen overlay
        // b. Calls random phrase method
        // c. sets active phrase property to chosen phrase
        // d. calls addphrasetodisplay

    startGame(btn) {
        const overlay = btn.parentNode;
        overlay.style.display = "none";
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase);
        this.passPhrase = phrase;
        phrase.addPhraseToDisplay();

        // Console Tests - Ensure you delete
        this.handleInteraction();
    }

    // 2. getRandomPhrase
        // a. randomly recieves one phrase from array and returns it
    getRandomPhrase() {
        const randomNumber = Math.floor(Math.random() * this.phrases.length + 1) - 1;    // Because we want 0 index number
        return this.phrases[randomNumber]; 
    }

    // 3. handleInteraction - GAME LOGIC -                                                                           I AM HERE!!!!!!
        // a. checks to see if button clicked, matches letter in phrase - if correct, and incorrect
            // b. disable letters onscreen keyboard button
            // c. if wrong guess, add wrong class to the keyboard button and call remove life
            // d. if correct letter guess add chosen css class to keyboard button, call showmatchedletter and checkforwin
                // e. If player wins - call game over
    handleInteraction() {
        const keyboardArray = document.querySelectorAll("#qwerty button");
        for (let i = 0; i < keyboardArray.length; i++) {
            keyboardArray[i].addEventListener("click", e => {
                const chosenLetterElement = e.target;
                chosenLetterElement.disabled = true;
                const letter = e.target.textContent;
                if (this.passPhrase.checkLetter(letter)) {
                    this.passPhrase.showMatchedLetter(letter);
                    chosenLetterElement.classList.add("chosen");
                    const winner = this.checkForWin();
                    if (winner) {
                        this.win = true;
                        this.gameOver();
                    } 
                } else {
                    chosenLetterElement.classList.add("wrong");
                    this.removeLife();
                    if (this.missed > 4) {
                        this.gameOver();
                    }
                }
            });
        }
    }

    // 4. removeLife
        // a. remove life from scoreboard
        // b. switch images
        // c. Add to missed property
        // d. 5 misses = gameOver
    removeLife() {
        const scoreBoardLi = document.querySelectorAll("#scoreboard li");
        const img = scoreBoardLi[this.missed].firstElementChild;
        img.src = "images/lostHeart.png";
        this.missed++;
    }

    // 5. checkForWin
        // a. has player revealed all letters
    checkForWin() {
        const ul = document.querySelector("#phrase ul")
        const li = ul.children;
        const liArray = [];
        for (let i = 0; i < li.length; i++) {
            if(li[i].className.includes("show") || li[i].className.includes("space")) {
                liArray.push(li[i].textContent);
            }
        }

        const guessed = liArray.join("");
        if (guessed === this.passPhrase.phrase) {
            return true;
        } else {
            return false;
        }
    }

    // 6. GameOver
        // a. display start screen overlay but with new message depending on win or lose
        // b. replace overlay class with win/lose class
    gameOver() {
        const h1 = overlay.firstElementChild.nextElementSibling;
        if (this.win) {
            overlay.classList.add("win");
            h1.textContent = "Congratulations, you beat me!";
        } else {
            overlay.classList.add("lose");
            h1.textContent = `Unlucky, the phrase was "${this.activePhrase}"`;
        }
        overlay.style.display = "flex";
    }
    
}
    